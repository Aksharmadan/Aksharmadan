export function initVillain() {
  const goblin = document.createElement('div');
  goblin.id = 'goblin';
  goblin.style.cssText = `position:fixed;z-index:490;pointer-events:none;font-size:3rem;opacity:0;transition:opacity 0.5s;top:20%;left:-100px;animation:goblinFly 0s linear;`;
  goblin.textContent = '🦹';
  document.body.appendChild(goblin);

  const fightEl = document.createElement('div');
  fightEl.id = 'fight-text';
  fightEl.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Bebas Neue',sans-serif;font-size:5rem;color:#FFD700;z-index:9996;pointer-events:none;opacity:0;text-shadow:0 0 30px rgba(255,215,0,0.8);letter-spacing:0.2em;`;
  document.body.appendChild(fightEl);

  function triggerFight() {
    goblin.style.opacity = '1';
    goblin.style.left = '-100px';
    goblin.style.top = (20 + Math.random() * 40) + '%';
    goblin.style.transition = 'left 3s linear, opacity 0.5s';
    setTimeout(() => { goblin.style.left = window.innerWidth + 100 + 'px'; }, 100);

    // Fight text sequence
    const words = ['POW!', 'BAM!', 'THWIP!', 'ZAP!', 'WHAM!'];
    const w = words[Math.floor(Math.random() * words.length)];
    fightEl.textContent = w;
    fightEl.style.opacity = '1';
    setTimeout(() => { fightEl.style.opacity = '0'; }, 800);
    setTimeout(() => { goblin.style.opacity = '0'; }, 3200);
  }

  // Trigger randomly every 20-40 seconds
  function scheduleGoblin() {
    const delay = 20000 + Math.random() * 20000;
    setTimeout(() => { triggerGoblin(); scheduleGoblin(); }, delay);
  }

  function triggerGoblin() {
    goblin.style.opacity = '1';
    goblin.style.left = '-100px';
    goblin.style.top = (10 + Math.random() * 50) + '%';
    setTimeout(() => {
      goblin.style.transition = 'left 4s linear';
      goblin.style.left = (window.innerWidth + 200) + 'px';
    }, 100);

    // Spidey reacts
    const spidey = document.getElementById('spidey');
    if (spidey) {
      const orig = spidey.style.filter;
      spidey.style.filter = 'drop-shadow(0 0 30px rgba(255,215,0,0.9)) brightness(1.5)';
      setTimeout(() => { spidey.style.filter = orig; }, 2000);
    }

    // Fight flash
    setTimeout(triggerFight, 1500);
    setTimeout(() => { goblin.style.opacity = '0'; goblin.style.transition = 'opacity 0.5s'; }, 4200);
  }

  scheduleGoblin();
  // Also trigger on scroll to contact section
  window.addEventListener('scroll', () => {
    const contact = document.getElementById('contact');
    if (!contact) return;
    const rect = contact.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.5 && rect.top > 0) triggerGoblin();
  }, { once: true });
}
