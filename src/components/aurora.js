export function initAurora() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:1;opacity:0.15;';
  hero.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  let t = 0;
  function drawAurora() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t += 0.005;
    const bands = [
      { color1: 'rgba(224,27,36,', color2: 'rgba(26,86,219,', offset: 0 },
      { color1: 'rgba(26,86,219,', color2: 'rgba(0,200,150,', offset: 1 },
      { color1: 'rgba(100,0,200,', color2: 'rgba(224,27,36,', offset: 2 },
    ];
    bands.forEach((band, bi) => {
      const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
      for (let i = 0; i <= 10; i++) {
        const alpha = Math.max(0, Math.sin(t + band.offset + i * 0.5) * 0.3);
        grad.addColorStop(i / 10, band.color1 + alpha + ')');
      }
      ctx.beginPath();
      ctx.moveTo(0, canvas.height * 0.3);
      for (let x = 0; x <= canvas.width; x += 20) {
        const y = canvas.height * 0.25 + Math.sin(x * 0.005 + t + bi) * 60 + Math.sin(x * 0.01 + t * 1.3) * 30;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width, 0);
      ctx.lineTo(0, 0);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
    });
    requestAnimationFrame(drawAurora);
  }
  drawAurora();
}
