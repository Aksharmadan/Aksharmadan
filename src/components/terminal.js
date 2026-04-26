export function initTerminal() {
  const section = document.getElementById('skills');
  if (!section) return;

  const terminal = document.createElement('div');
  terminal.id = 'terminal-window';
  terminal.style.cssText = `max-width:600px;margin:0 auto 4rem;background:#000;border:1px solid rgba(224,27,36,0.3);border-radius:12px;overflow:hidden;font-family:'Space Mono',monospace;font-size:0.8rem;box-shadow:0 0 40px rgba(224,27,36,0.1);`;
  terminal.innerHTML = `
    <div style="background:#1a1a1a;padding:0.8rem 1rem;display:flex;align-items:center;gap:0.5rem;border-bottom:1px solid rgba(255,255,255,0.05);">
      <div style="width:12px;height:12px;border-radius:50%;background:#E01B24;"></div>
      <div style="width:12px;height:12px;border-radius:50%;background:#FFD700;"></div>
      <div style="width:12px;height:12px;border-radius:50%;background:#28a745;"></div>
      <span style="margin-left:0.5rem;color:rgba(200,200,200,0.4);font-size:0.7rem;letter-spacing:0.1em;">akshar@spiderman ~ boot-sequence</span>
    </div>
    <div id="terminal-body" style="padding:1.5rem;min-height:200px;line-height:2;"></div>
  `;

  const h2 = section.querySelector('h2');
  if (h2) h2.before(terminal);

  const lines = [
    { text: '$ whoami', color: '#E01B24', delay: 0 },
    { text: '→ Akshar Madan | CSE (Cloud) | SRM IST', color: '#28a745', delay: 400 },
    { text: '$ cat skills.txt', color: '#E01B24', delay: 900 },
    { text: '→ JavaScript ████████░░ 88%', color: '#1A56DB', delay: 1300 },
    { text: '→ React      ████████░░ 85%', color: '#1A56DB', delay: 1600 },
    { text: '→ Python     ████████░░ 82%', color: '#1A56DB', delay: 1900 },
    { text: '→ Node.js    ███████░░░ 78%', color: '#1A56DB', delay: 2200 },
    { text: '→ Cloud      ████████░░ 80%', color: '#1A56DB', delay: 2500 },
    { text: '$ git log --oneline', color: '#E01B24', delay: 3000 },
    { text: '→ a1b2c3 feat: built the web 🕷', color: '#FFD700', delay: 3400 },
    { text: '→ d4e5f6 fix: defeated green goblin', color: '#FFD700', delay: 3700 },
    { text: '→ 7g8h9i chore: swung across NYC', color: '#FFD700', delay: 4000 },
    { text: '$ status', color: '#E01B24', delay: 4500 },
    { text: '→ AVAILABLE FOR HIRE ✅', color: '#28a745', delay: 4900 },
    { text: '█', color: '#E01B24', delay: 5300 },
  ];

  const body = document.getElementById('terminal-body');
  let started = false;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        lines.forEach(line => {
          setTimeout(() => {
            const el = document.createElement('div');
            el.style.color = line.color;
            el.textContent = line.text;
            body.appendChild(el);
            body.scrollTop = body.scrollHeight;
          }, line.delay);
        });
      }
    });
  }, { threshold: 0.3 });
  obs.observe(terminal);
}
