export function initHelicopter() {
  const heli = document.createElement('div');
  heli.id = 'helicopter';
  heli.style.cssText = `position:fixed;z-index:498;pointer-events:none;top:15%;left:-200px;font-size:2rem;opacity:0;transition:opacity 0.5s;`;
  heli.innerHTML = `<span>🚁</span><canvas id="spotlight-beam" style="position:absolute;left:-10px;top:30px;pointer-events:none;"></canvas>`;
  document.body.appendChild(heli);

  function flyHelicopter() {
    heli.style.opacity = '0.8';
    heli.style.left = '-200px';
    heli.style.top = (10 + Math.random() * 20) + '%';
    heli.style.transition = 'left 12s linear, opacity 0.5s';
    setTimeout(() => { heli.style.left = (window.innerWidth + 300) + 'px'; }, 100);
    setTimeout(() => { heli.style.opacity = '0'; }, 11500);
  }

  flyHelicopter();
  setInterval(flyHelicopter, 30000);
}
