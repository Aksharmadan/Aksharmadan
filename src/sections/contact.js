export function initContact() {
  const btn = document.getElementById('submit-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    btn.textContent = '🕸️ WEB SHOT! MESSAGE SENT!';
    btn.style.background = 'var(--red)';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.textContent = 'SHOOT THE WEB 🕸️';
      btn.style.background = '';
      btn.style.color = '';
    }, 3000);
  });
}
