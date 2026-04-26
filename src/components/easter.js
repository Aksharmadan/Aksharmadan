export function initEasterEgg() {
  let typed = '';
  const egg = document.getElementById('easter-egg');
  document.addEventListener('keydown', (e) => {
    typed += e.key.toUpperCase();
    if (typed.length > 6) typed = typed.slice(-6);
    if (typed === 'MARVEL') {
      egg.classList.add('show');
      setTimeout(() => egg.classList.remove('show'), 3000);
      typed = '';
    }
  });
  egg.addEventListener('click', () => egg.classList.remove('show'));
}
