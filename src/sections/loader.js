export function initLoader() {
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      loader.style.opacity = '0';
      loader.style.transform = 'scale(1.05)';
      setTimeout(() => { loader.style.display = 'none'; }, 800);
    }, 2000);
  });
}
