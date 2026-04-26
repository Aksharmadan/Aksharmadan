export function initSpidey() {
  const spidey = document.getElementById('spidey');
  if (!spidey) return;

  // Add breathing + idle animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes swaySpidey {
      0%, 100% { transform: rotate(180deg) translateX(0px); }
      50% { transform: rotate(180deg) translateX(14px); }
    }
    @keyframes breathe {
      0%, 100% { transform: scaleY(1); }
      50% { transform: scaleY(1.04); }
    }
    @keyframes webShoot {
      0% { opacity: 0; transform: scaleX(0) scaleY(-1); transform-origin: left; }
      50% { opacity: 1; transform: scaleX(1) scaleY(-1); transform-origin: left; }
      100% { opacity: 0; transform: scaleX(1.2) scaleY(-1); transform-origin: left; }
    }
    #spidey { transition: left 0.6s cubic-bezier(0.34,1.56,0.64,1), top 0.6s cubic-bezier(0.34,1.56,0.64,1); }
    #web-shoot-line {
      position: fixed; pointer-events: none; z-index: 498;
      height: 2px; background: linear-gradient(to right, rgba(200,200,220,0.8), transparent);
      transform-origin: left center;
      display: none;
    }
  `;
  document.head.appendChild(style);

  // Add web shoot line element
  const webLine = document.createElement('div');
  webLine.id = 'web-shoot-line';
  document.body.appendChild(webLine);

  let ticking = false;
  let lastSection = '';

  function getScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return Math.min(scrollTop / Math.max(docHeight, 1), 1);
  }

  function shootWeb(fromX, fromY, toX, toY) {
    const dx = toX - fromX, dy = toY - fromY;
    const len = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    webLine.style.display = 'block';
    webLine.style.left = fromX + 'px';
    webLine.style.top = fromY + 'px';
    webLine.style.width = len + 'px';
    webLine.style.transform = `rotate(${angle}deg)`;
    webLine.style.animation = 'webShoot 0.6s ease forwards';
    setTimeout(() => { webLine.style.display = 'none'; webLine.style.animation = ''; }, 600);
  }

  function updateSpidey() {
    const progress = getScrollProgress();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let section = '';

    if (progress < 0.15) {
      section = 'hero';
      spidey.style.left = (vw * 0.78) + 'px';
      spidey.style.top = '60px';
      spidey.style.animation = 'swaySpidey 2.5s ease-in-out infinite';
      spidey.style.filter = 'drop-shadow(0 0 20px rgba(224,27,36,0.8))';
    } else if (progress < 0.35) {
      section = 'about';
      spidey.style.left = (vw * 0.85) + 'px';
      spidey.style.top = (vh * 0.45) + 'px';
      spidey.style.animation = 'breathe 3s ease-in-out infinite';
      spidey.style.transform = 'rotate(0deg)';
      spidey.style.filter = 'drop-shadow(0 0 15px rgba(224,27,36,0.6))';
    } else if (progress < 0.55) {
      section = 'skills';
      spidey.style.left = (vw * 0.06) + 'px';
      spidey.style.top = (vh * 0.38) + 'px';
      spidey.style.animation = '';
      spidey.style.transform = 'scaleX(-1)';
      spidey.style.filter = 'drop-shadow(0 0 25px rgba(26,86,219,0.7))';
    } else if (progress < 0.75) {
      section = 'projects';
      const p = (progress - 0.55) / 0.2;
      spidey.style.left = (vw * 0.05 + p * vw * 0.88) + 'px';
      spidey.style.top = (vh * 0.12) + 'px';
      spidey.style.animation = '';
      spidey.style.transform = `rotate(${Math.sin(p * Math.PI * 4) * 8}deg)`;
      spidey.style.filter = 'drop-shadow(0 0 15px rgba(224,27,36,0.5))';
    } else if (progress < 0.9) {
      section = 'experience';
      const p = (progress - 0.75) / 0.15;
      spidey.style.left = (vw * 0.5 - 50) + 'px';
      spidey.style.top = (vh * 0.85 - p * vh * 0.6) + 'px';
      spidey.style.animation = '';
      spidey.style.transform = 'rotate(0deg)';
      spidey.style.filter = 'drop-shadow(0 0 20px rgba(255,215,0,0.5))';
    } else {
      section = 'contact';
      const p = Math.min((progress - 0.9) / 0.1, 1);
      spidey.style.left = (vw * 0.5 + p * vw * 0.55) + 'px';
      spidey.style.top = (vh * 0.4 - p * vh * 0.5) + 'px';
      spidey.style.animation = '';
      spidey.style.transform = `rotate(${-35 * p}deg)`;
      spidey.style.opacity = String(1 - p * 0.7);
    }

    // Shoot web when entering new section
    if (section !== lastSection && section !== 'hero') {
      const rect = spidey.getBoundingClientRect();
      const sx = rect.left + rect.width / 2;
      const sy = rect.top + rect.height / 2;
      if (section === 'skills') shootWeb(sx, sy, vw * 0.4, vh * 0.5);
      else if (section === 'projects') shootWeb(sx, sy, vw * 0.3, vh * 0.3);
      else if (section === 'experience') shootWeb(sx, sy, vw * 0.5, vh * 0.6);
    }
    lastSection = section;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(updateSpidey); ticking = true; }
  });
  updateSpidey();
}
