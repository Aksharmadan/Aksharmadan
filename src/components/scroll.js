export function initScrollAnimations() {
  // Intersection observer for reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        const bars = entry.target.querySelectorAll('.skill-bar');
        bars.forEach(bar => {
          const w = bar.getAttribute('data-width');
          setTimeout(() => { bar.style.width = w + '%'; }, 300);
        });
      }
    });
  }, { threshold: 0.12 });

  const targets = document.querySelectorAll(
    '.comic-text, .bio-card, .skill-orb, .project-card, .timeline-item'
  );
  targets.forEach((el, i) => {
    el.style.transitionDelay = (i % 6 * 0.1) + 's';
    observer.observe(el);
  });

  // Parallax on hero content
  const heroContent = document.getElementById('hero-content');
  const skyline = document.querySelector('.skyline');

  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    if (heroContent) heroContent.style.transform = `translateY(${sy * 0.3}px)`;
    if (skyline) skyline.style.transform = `translateY(${sy * 0.15}px)`;

    // Section active highlighting in navbar
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#navbar nav a');
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--red)' : '';
    });
  }, { passive: true });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}
