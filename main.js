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