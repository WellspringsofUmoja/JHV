// ===== Load shared header & footer FIRST, then wire everything up =====
async function init() {
  // Load includes
  const headerResp = await fetch('header.html');
  document.getElementById('header-mount').outerHTML = await headerResp.text();

  const footerResp = await fetch('footer.html');
  document.getElementById('footer-mount').outerHTML = await footerResp.text();

  // ---- Everything below is your existing code, unchanged ----

  // Mobile menu toggle
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

  // Demo form
  document.getElementById('subForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
    e.target.reset();
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', ev => {
      const el = document.querySelector(a.getAttribute('href'));
      if (el) { ev.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // Header logo swap on scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

init();