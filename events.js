/* =========================================================
   events.js — Upcoming events + moon calendar
   Journey Home Vitals
   ---------------------------------------------------------
   TO ADD AN EVENT: copy one { … } block below and fill it in.
   - Upcoming events show as cards automatically, soonest first.
   - Past events drop off the cards on their own, but stay on
     the calendar.
   - The small "Next:" link at the top of the page updates itself.
   ========================================================= */

window.JHV_EVENTS = [
  {
    id: 'Ujamaa-2026',      // lowercase-with-dashes, unique
    title: 'Timbuktu Market - Ujamaa Gainesville 2026',
    date: '2026-12-29',                       //
    // endDate: '2027-02-17',                 // optional, for multi-day events
    location: 'Gainesville, Florida',
    description: "We'll be offering our Sustainable Access through Dynamic Reciprocity as a short presentation: A story from the Mijikenda people of Kenya opens a conversation about how communities can pool what they have, and what they promise, so everyone can access what they need.",
    link: '#',                                // 
    offeringLink: '#dynamic-reciprocity',     // optional: opens a panel on this page
    offeringLabel: 'About the presentation',
    time:    '6pm – 9pm',
    address: 'African Cultural Center, Inc. Cotton Club Museum, & Cultural Center, 837 SE 7th Ave, Gainesville, FL',
    price:   'Free',
    expect:  'Stories, games, and conversation for all ages',
    bring:  '',
    contact: '352-485-2079'
  },
   {
    id: 'Nia-2026',      // lowercase-with-dashes, unique
    title: 'Nia Gainesville - 2026',
    date: '2026-12-30',                       // YYYY-MM-DD  (confirm the date!)
    // endDate: '2027-02-17',                 // optional, for multi-day events
    location: 'Gainesville, Florida',
    description: "We'll be bringing together many of our offerings, from meditation to movement as we facilitate folks to discover their own purpose.",
    link: '#',                                // replace with the event's page
    linkLabel: 'Event details',
    offeringLink: '',     // optional: opens a panel on this pageofferingLink: '#dynamic-reciprocity',     // optional: opens a panel on this page
    offeringLabel: 'About the event',
    time:    '6pm – 8pm',
    address: 'GTEC 2153 SE Hawthorne Rd, Gainesville, FL',
    price:   'Free',
    expect:  'Guided Meditation, Kemetic oga, Movement Cipher, & African Drumming & Dance',
    bring:  'Journal, Yoga Mat',
    contact: 'JourneyHomeVitals@gmail.com',
    offeringLabel: 'About the presentation'
  }
];


/* ===== Everything below runs the cards and calendar =====
   It waits until the page has loaded, so the <script> line
   works anywhere on the page. */
function startEvents() {
  const DAY = 86400000;
  const MONTHS = ['January','February','March','April','May','June','July',
                  'August','September','October','November','December'];
  const WEEKDAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  const esc = s => String(s ?? '').replace(/[&<>"]/g,
    c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]));

  function parseDate(s) {
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
  }
  function dayKey(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') +
           '-' + String(d.getDate()).padStart(2, '0');
  }
  function startOfDay(d) { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; }
  function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }

  const events = (window.JHV_EVENTS || [])
    .map(e => ({ ...e, start: parseDate(e.date), end: parseDate(e.endDate || e.date) }))
    .sort((a, b) => a.start - b.start);

  const today = startOfDay(new Date());
  const upcoming = events.filter(e => e.end >= today);
  const eventsOn = d => events.filter(e => d >= e.start && d <= e.end);

  function formatWhen(e, short) {
    const opts = short
      ? { month: 'short', day: 'numeric' }
      : { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    if (+e.start === +e.end) return e.start.toLocaleDateString('en-US', opts);
    const a = e.start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    const b = e.end.getMonth() === e.start.getMonth()
      ? e.end.getDate()
      : e.end.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    return short ? a + '–' + b : a + '–' + b + ', ' + e.end.getFullYear();
  }

  /* ---------- Moon quarters ----------
     Based on the average lunar cycle, counted from a known new moon.
     Accurate to within about a day, which is plenty for a calendar. */
  const SYNODIC = 29.530588853;
  const QUARTER = SYNODIC / 4;
  const REF = Date.UTC(2000, 0, 6, 18, 14) / DAY;   // new moon, Jan 6 2000
  const MOON = [
    { name: 'New Moon',           icon: '🌑' },
    { name: 'Waxing Crescent', icon: '🌓' },
    { name: 'Full Moon',          icon: '🌕' },
    { name: 'Waning Crescent',  icon: '🌗' }
  ];
  const quarterIndex = date => Math.floor((date.getTime() / DAY - REF) / QUARTER);
  const quarterStart = i => new Date((REF + i * QUARTER) * DAY);
  const quarterInfo  = i => MOON[((i % 4) + 4) % 4];

  // Map of day -> moon phase that begins that day, for a date range
  function moonMarks(from, to) {
    const marks = {};
    for (let i = quarterIndex(from) - 1; i <= quarterIndex(to) + 1; i++) {
      marks[dayKey(quarterStart(i))] = quarterInfo(i);
    }
    return marks;
  }


  /* ===== The small "Next:" link at the top of the page ===== */
  document.querySelectorAll('[data-next-event]').forEach(el => {
    const next = upcoming[0];
    el.textContent = next
      ? 'Next gathering: ' + next.title + ' · ' + formatWhen(next, true) + ' ↓'
      : 'Upcoming events ↓';
  });


  /* ===== Event cards ===== */
  document.querySelectorAll('[data-events-list]').forEach(list => {
    if (!upcoming.length) {
      list.innerHTML = '<p class="events-empty">New gatherings are coming soon.</p>';
      return;
    }
    list.innerHTML = upcoming.map(e => {
      // Optional "More info" accordion: shows any of these that are filled in
      const rows = [
        ['Time', e.time],
        ['Where', e.address],
        ['Price', e.price],
        ['What to expect', e.expect],
        ['What to bring', e.bring],
        ['Contact', e.contact]
      ].filter(r => r[1]);
      const hasMore = rows.length || e.more;
      const hasLink = e.link && e.link !== '#';

      return `
      <article class="card event-card" id="event-${esc(e.id)}">
        <span class="placeholder-chip">${esc(formatWhen(e, true))}</span>
        <h3>${esc(e.title)}</h3>
        <p class="event-when">${esc(formatWhen(e))}${e.location ? ' · ' + esc(e.location) : ''}</p>
        ${e.description ? `<p>${esc(e.description)}</p>` : ''}
        ${hasMore ? `
        <details class="event-info">
          <summary>${esc(e.moreLabel || 'More info')}</summary>
          ${rows.length ? `<dl>${rows.map(([label, value]) =>
            `<dt>${label}</dt><dd>${esc(value)}</dd>`).join('')}</dl>` : ''}
          ${e.more || ''}
        </details>` : ''}
        <div class="event-actions">
          ${hasLink ? `<a class="btn-primary" href="${esc(e.link)}">${esc(e.linkLabel || 'Event details')}</a>` : ''}
          ${e.offeringLink ? `<a class="event-more" href="${esc(e.offeringLink)}">${esc(e.offeringLabel || 'Learn more')}</a>` : ''}
        </div>
      </article>`;
    }).join('');

    // Offering links: open the panel even if the address bar already shows it
    list.addEventListener('click', ev => {
      const a = ev.target.closest('.event-more');
      if (!a) return;
      const hash = a.getAttribute('href');
      if (hash && hash.startsWith('#') && location.hash === hash) {
        ev.preventDefault();
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      }
    });
  });


  /* ===== Calendar: Year / Month / Moon ===== */
  document.querySelectorAll('[data-events-calendar]').forEach(cal => {
    const startDate = upcoming[0] ? upcoming[0].start : today;
    const state = {
      view: 'year',
      year: startDate.getFullYear(),
      month: startDate.getMonth(),
      quarter: quarterIndex(startDate)
    };

    function eventLinks(d, compact) {
      return eventsOn(d).map(e =>
        `<a class="cal-event" href="#event-${esc(e.id)}" title="${esc(e.title)}">${compact ? '' : esc(e.title)}</a>`
      ).join('');
    }

    function yearView() {
      const marks = moonMarks(new Date(state.year, 0, 1), new Date(state.year, 11, 31));
      let html = '<div class="cal-year">';
      for (let m = 0; m < 12; m++) {
        const first = new Date(state.year, m, 1);
        const days = new Date(state.year, m + 1, 0).getDate();
        html += `<button type="button" class="cal-mini" data-month="${m}" aria-label="Open ${MONTHS[m]} ${state.year}">
          <span class="cal-mini-title">${MONTHS[m]}</span>
          <span class="cal-mini-grid">`;
        for (let i = 0; i < first.getDay(); i++) html += '<span></span>';
        for (let d = 1; d <= days; d++) {
          const date = new Date(state.year, m, d);
          const has = eventsOn(date).length;
          const isToday = +date === +today;
          const moon = marks[dayKey(date)];
          html += `<span class="${has ? 'has-event' : ''} ${isToday ? 'is-today' : ''} ${moon && moon.name === 'Full Moon' ? 'is-full' : ''}">${d}</span>`;
        }
        html += '</span></button>';
      }
      return html + '</div>';
    }

    function monthView() {
      const first = new Date(state.year, state.month, 1);
      const days = new Date(state.year, state.month + 1, 0).getDate();
      const marks = moonMarks(first, new Date(state.year, state.month, days));
      let html = '<div class="cal-month">';
      WEEKDAYS.forEach(w => { html += `<div class="cal-weekday">${w}</div>`; });
      for (let i = 0; i < first.getDay(); i++) html += '<div class="cal-day is-blank"></div>';
      for (let d = 1; d <= days; d++) {
        const date = new Date(state.year, state.month, d);
        const moon = marks[dayKey(date)];
        const has = eventsOn(date).length;
        html += `<div class="cal-day ${has ? 'has-event' : ''} ${+date === +today ? 'is-today' : ''}">
          <button type="button" class="cal-daynum" data-day="${dayKey(date)}" aria-label="See the moon quarter of ${MONTHS[state.month]} ${d}">${d}</button>
          ${moon ? `<span class="cal-moon" title="${moon.name}">${moon.icon}</span>` : ''}
          <div class="cal-events">${eventLinks(date, false)}</div>
        </div>`;
      }
      return html + '</div>';
    }

    function moonView() {
      const info = quarterInfo(state.quarter);
      const from = startOfDay(quarterStart(state.quarter));
      const to   = startOfDay(quarterStart(state.quarter + 1));
      const marks = moonMarks(from, to);
      let html = `<p class="cal-moon-intro">${info.icon} The ${info.name} begins the flow of the cycle.</p><ul class="cal-moon-days">`;
      for (let d = from; d < to; d = addDays(d, 1)) {
        const moon = marks[dayKey(d)];
        const evs = eventsOn(d);
        html += `<li class="${evs.length ? 'has-event' : ''} ${+d === +today ? 'is-today' : ''}">
          <span class="cal-moon-date">${d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
          <span class="cal-moon-icon">${moon ? moon.icon : ''}</span>
          <span class="cal-moon-events">${evs.length ? eventLinks(d, false) : ''}</span>
        </li>`;
      }
      return html + '</ul>';
    }

    function title() {
      if (state.view === 'year') return String(state.year);
      if (state.view === 'month') return MONTHS[state.month] + ' ' + state.year;
      const info = quarterInfo(state.quarter);
      const from = startOfDay(quarterStart(state.quarter));
      const last = addDays(startOfDay(quarterStart(state.quarter + 1)), -1);
      const f = from.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const l = last.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      return `${info.name} · ${f} – ${l}`;
    }

    function render() {
      const body = state.view === 'year' ? yearView()
                 : state.view === 'month' ? monthView()
                 : moonView();
      cal.innerHTML = `
        <div class="cal-toolbar">
          <div class="cal-views" role="group" aria-label="Calendar view">
            ${['year', 'month', 'moon'].map(v =>
              `<button type="button" data-view="${v}" class="${state.view === v ? 'is-active' : ''}">${v === 'moon' ? 'Moon quarter' : v[0].toUpperCase() + v.slice(1)}</button>`
            ).join('')}
          </div>
          <div class="cal-nav">
            <button type="button" data-step="-1" aria-label="Previous">‹</button>
            <span class="cal-title">${title()}</span>
            <button type="button" data-step="1" aria-label="Next">›</button>
          </div>
        </div>
        ${body}
        <p class="cal-legend"><span class="cal-dot"></span> Gathering &nbsp; 🌑 New &nbsp; 🌓 First quarter &nbsp; 🌕 Full &nbsp; 🌗 Last quarter</p>`;
    }

    cal.addEventListener('click', e => {
      const t = e.target.closest('button');
      if (!t) return;

      if (t.dataset.view) {
        if (t.dataset.view === 'moon' && state.view !== 'moon') {
          state.quarter = quarterIndex(new Date(state.year, state.month, 15));
        }
        state.view = t.dataset.view;
      } else if (t.dataset.step) {
        const s = Number(t.dataset.step);
        if (state.view === 'year') state.year += s;
        else if (state.view === 'month') {
          const d = new Date(state.year, state.month + s, 1);
          state.year = d.getFullYear(); state.month = d.getMonth();
        } else {
          state.quarter += s;
          const mid = quarterStart(state.quarter);
          state.year = mid.getFullYear(); state.month = mid.getMonth();
        }
      } else if (t.dataset.month) {
        state.month = Number(t.dataset.month);
        state.view = 'month';
      } else if (t.dataset.day) {
        const d = parseDate(t.dataset.day);
        state.quarter = quarterIndex(addDays(d, 1));   // the stretch containing this day
        if (startOfDay(quarterStart(state.quarter)) > d) state.quarter--;
        state.view = 'moon';
      } else {
        return;
      }
      render();
    });

    render();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startEvents);
} else {
  startEvents();
}
