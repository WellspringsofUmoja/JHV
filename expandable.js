/* =========================================================
   expandable.js — reusable "expandable card rail" component
   Journey Home Vitals — shared by GATHER, and later BE & MOVE
   ---------------------------------------------------------
   HOW TO USE ON ANY PAGE

   1. In the <head>, after style.css:
        <link rel="stylesheet" href="expandable.css">

      At the bottom of <body>, after main.js:
        <script src="expandable.js"></script>

   2. Build each section like this (copy, rename, fill in):

      <section class="page expandable" id="tools">
        <div class="section-inner">
          <h2>Tools</h2>

          <div class="scroll-search">
            <input type="search" class="rail-search"
                   placeholder="Search tools…" aria-label="Search tools">
          </div>

          <div class="scroll-rail-wrap">
            <div class="scroll-rail">
              <a class="card scroll-card" href="#freeze-dryer"
                 data-search="extra keywords people might type">
                <div class="card-text">
                  <h3>Freeze Dryer</h3>
                  <p>Short teaser…</p>
                </div>
              </a>
              <!-- …more cards… -->
            </div>
            <p class="rail-hint">Scroll for more →</p>
            <p class="rail-empty" hidden>No tools match that search.</p>
          </div>

          <!-- One panel per card. Its id = the card's href without the # -->
          <div class="detail-panel" id="freeze-dryer" hidden>
            <h3>Freeze Dryer</h3>
            <p>The full description…</p>
          </div>
        </div>
      </section>

   That's it. Each section gets its own search automatically.
   The floating X and the "← Back to [section title]" link are
   added to every panel for you. Every id must be unique on the page.
   ========================================================= */

(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const behavior = reduceMotion ? 'auto' : 'smooth';
  const sections = [];

  function initSection(section) {
    const allCards = [...section.querySelectorAll('.scroll-card')];
    const cards    = allCards.filter(c => (c.getAttribute('href') || '').startsWith('#'));
    const panels   = [...section.querySelectorAll('.detail-panel')];
    const search   = section.querySelector('.rail-search');
    const empty    = section.querySelector('.rail-empty');
    const hint     = section.querySelector('.rail-hint');
    const rail     = section.querySelector('.scroll-rail');
    const title    = (section.querySelector('h2')?.textContent || 'list').trim();
    let openPanel  = null;

    const cardFor  = panel => cards.find(c => c.getAttribute('href') === '#' + panel.id);
    const panelFor = card  => panels.find(p => '#' + p.id === card.getAttribute('href'));

    /* ---- Prepare each panel: X button, back link, accessibility ---- */
    panels.forEach(panel => {
      panel.setAttribute('tabindex', '-1');
      panel.setAttribute('role', 'region');
      const heading = panel.querySelector('h3');
      if (heading) panel.setAttribute('aria-label', heading.textContent.trim());

      const closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.className = 'detail-close';
      closeBtn.setAttribute('aria-label', 'Close');
      closeBtn.innerHTML = '&times;';
      closeBtn.addEventListener('click', () => close());
      panel.prepend(closeBtn);

      if (!panel.querySelector('.back-link')) {
        const back = document.createElement('a');
        back.className = 'back-link';
        back.href = '#' + (section.id || '');
        back.innerHTML = '&larr; Back to ' + title;
        panel.append(back);
      }
      panel.querySelectorAll('.back-link').forEach(link => {
        link.addEventListener('click', e => { e.preventDefault(); close(); });
      });
    });

    /* ---- Cards open (or toggle closed) their panel ---- */
    cards.forEach(card => {
      const panel = panelFor(card);
      if (!panel) return;
      card.setAttribute('aria-controls', panel.id);
      card.setAttribute('aria-expanded', 'false');
      card.addEventListener('click', e => {
        e.preventDefault();
        openPanel === panel ? close() : open(panel);
      });
    });

    function open(panel, opts = {}) {
      if (openPanel && openPanel !== panel) close({ returnToCard: false });
      const card = cardFor(panel);
      panel.hidden = false;
      if (card) {
        card.classList.add('is-open');
        card.setAttribute('aria-expanded', 'true');
      }
      openPanel = panel;
      if (opts.updateHash !== false) history.replaceState(null, '', '#' + panel.id);
      panel.scrollIntoView({ behavior, block: 'start' });
      panel.focus({ preventScroll: true });
    }

    function close({ returnToCard = true } = {}) {
      if (!openPanel) return;
      const panel = openPanel;
      const card = cardFor(panel);
      panel.hidden = true;
      if (card) {
        card.classList.remove('is-open');
        card.setAttribute('aria-expanded', 'false');
      }
      openPanel = null;
      if (returnToCard) {
        if (section.id) history.replaceState(null, '', '#' + section.id);
        if (card) {
          card.scrollIntoView({ behavior, block: 'center', inline: 'nearest' });
          card.focus({ preventScroll: true });
        }
      }
    }

    /* ---- Escape closes the open panel in this section ---- */
    section.addEventListener('keydown', e => {
      if (e.key === 'Escape' && openPanel) close();
    });

    /* ---- This section's own search ---- */
    if (search) {
      search.addEventListener('input', () => {
        const q = search.value.trim().toLowerCase();
        let visible = 0;
        allCards.forEach(card => {
          const text = ((card.dataset.search || '') + ' ' + card.textContent).toLowerCase();
          const match = !q || text.includes(q);
          card.hidden = !match;
          if (match) visible++;
        });
        if (empty) empty.hidden = visible > 0;
        updateHint();
      });

      search.addEventListener('keydown', e => {
        if (e.key !== 'Enter') return;
        e.preventDefault();
        const first = allCards.find(c => !c.hidden);
        if (first) first.scrollIntoView({ behavior, block: 'nearest', inline: 'start' });
      });
    }

    /* ---- "Scroll for more" only shows when the rail actually overflows ---- */
    function updateHint() {
      if (!hint || !rail) return;
      const overflows = rail.scrollWidth > rail.clientWidth + 1;
      hint.hidden = !overflows;
    }

    if (rail) {
      // Re-check whenever the rail or any card changes size
      // (screen resize, phone rotation, fonts finishing loading)
      if ('ResizeObserver' in window) {
        const ro = new ResizeObserver(updateHint);
        ro.observe(rail);
        allCards.forEach(card => ro.observe(card));
      } else {
        window.addEventListener('resize', updateHint);
      }
      window.addEventListener('load', updateHint);
      updateHint();
    }

    return { owns: id => panels.find(p => p.id === id), open };
  }

  /* ---- Links like gather.html#freeze-dryer open the right panel ---- */
  function openFromHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    for (const s of sections) {
      const panel = s.owns(id);
      if (panel) { s.open(panel, { updateHash: false }); break; }
    }
  }

  document.querySelectorAll('.expandable').forEach(sec => sections.push(initSection(sec)));
  openFromHash();
  window.addEventListener('hashchange', openFromHash);
    /* ---- Any link on the page that points at a panel opens it directly ----
     (event cards, links inside text, etc. Cards use their own handler.) */
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.classList.contains('scroll-card')) return;
    const id = decodeURIComponent(a.getAttribute('href').slice(1));
    for (const s of sections) {
      const panel = s.owns(id);
      if (panel) {
        e.preventDefault();
        history.replaceState(null, '', '#' + id);
        s.open(panel, { updateHash: false });
        return;
      }
    }
  });
})();
