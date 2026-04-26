export function initMatrix() {
  const container = document.getElementById('projects');
  if (!container) return;

  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:0;opacity:0.04;';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = container.offsetWidth; canvas.height = container.offsetHeight; }
  resize();
  window.addEventListener('resize', resize);

  const chars = 'REACTNODEJSPYTHONJAVASCRIPTGITCLOUDHTML01アイウエオカキクケコ</>{}[];'.split('');
  const cols = Math.floor(canvas.width / 16);
  const drops = Array(cols).fill(0);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(3,3,5,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#E01B24';
    ctx.font = '12px Space Mono, monospace';
    drops.forEach((y, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * 16, y * 16);
      if (y * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      else drops[i]++;
    });
  }
  setInterval(drawMatrix, 80);
}
