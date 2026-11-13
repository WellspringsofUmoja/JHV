// ===== Load shared header & footer FIRST, then wire everything up =====
async function init() {
  // Load includes — only if the page actually has the mount point
  const headerMount = document.getElementById('header-mount');
  if (headerMount) {
    const headerResp = await fetch('header.html');
    if (headerResp.ok) {
      headerMount.outerHTML = await headerResp.text();
    }
  }

  const footerMount = document.getElementById('footer-mount');
  if (footerMount) {
    const footerResp = await fetch('footer.html');
    if (footerResp.ok) {
      footerMount.outerHTML = await footerResp.text();
    }
  }

  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.querySelector('.main-nav');

  menuToggle?.addEventListener('click', () => {
    mainNav?.classList.toggle('open');

    if (mainNav?.classList.contains('open')) {
      menuToggle.textContent = '✕';
      menuToggle.setAttribute('aria-label', 'Close menu');
    } else {
      menuToggle.textContent = '☰';
      menuToggle.setAttribute('aria-label', 'Menu');
    }
  });

  mainNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.textContent = '☰';
      menuToggle.setAttribute('aria-label', 'Menu');
    });
  });

  // Reveal-on-scroll animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.2 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Smooth scrolling for anchor links
  // EDIT: links inside .expandable sections are SKIPPED — their hash
  // changes drive the accordion, and preventDefault would kill them.
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    if (a.closest('.expandable')) return;   // <-- accordion territory, leave alone

    a.addEventListener('click', ev => {
      const el = document.querySelector(a.getAttribute('href'));
      if (el) { ev.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // Header state: frosted look, plus hide-on-scroll-down / show-on-scroll-up
  const header = document.querySelector('.site-header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    // Frosted background after 50px (desktop + mobile)
    header?.classList.toggle('scrolled', y > 50);

    // Hide when scrolling down, reappear when scrolling up (mobile)
    const menuOpen = mainNav?.classList.contains('open');
    const goingDown = y > lastScrollY + 5;
    const goingUp   = y < lastScrollY - 5;

    if (goingDown && y > 80 && !menuOpen) {
      header.classList.add('nav-hidden');
    } else if (goingUp || menuOpen) {
      header.classList.remove('nav-hidden');
    }

    lastScrollY = y;
  });
}

// ===== Expandable rails (accordion engine) =====
// EDIT: no longer scoped to #techniques — works for ANY section
// with class="expandable" (Techniques, Tales, Tools, etc.)
(function () {
  // Bail if this page has no expandable rails at all
  if (!document.querySelector('.expandable')) return;

  const panels = document.querySelectorAll('.tech-detail');
  const cards  = document.querySelectorAll('.tech-card');

  // The one rule that runs everything:
  // a panel is visible iff its data-for matches the URL hash.
  function syncFromHash() {
    const key = location.hash.slice(1);          // "" or "teeth-wellness"
    panels.forEach(p => { p.hidden = (p.dataset.for !== key); });
    cards.forEach(c => { c.classList.toggle('is-open', c.id === key); });
  }

  window.addEventListener('hashchange', syncFromHash);

  // Click-twice-to-close: if this card is already open,
  // cancel the navigation and clear the hash instead.
  cards.forEach(card => {
    card.addEventListener('click', ev => {
      if (card.id === location.hash.slice(1)) {
        ev.preventDefault();
        history.replaceState(null, '', location.pathname + location.search);
        syncFromHash();                          // nothing matches → all close
      }
    });
  });

  // Run once on load so shared links like
  // GATH3R.html#teeth-wellness arrive open.
  syncFromHash();
})();
document.querySelectorAll('.detail-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.closest('.tech-detail');
    const card = document.getElementById(panel.dataset.for);
    panel.hidden = true;
    if (card) {
      card.classList.remove('is-open');
      card.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
    history.replaceState(null, '', '#techniques');
  });
});

init();
