export function initSecret() {
  // Hidden clickable spider in hero
  const spider = document.createElement('div');
  spider.style.cssText = `position:absolute;bottom:15%;left:8%;font-size:0.8rem;opacity:0.08;cursor:pointer;z-index:20;transition:opacity 0.3s;font-family:'Space Mono',monospace;color:#E01B24;letter-spacing:0.1em;`;
  spider.textContent = '🕷';
  spider.title = '';
  document.getElementById('hero')?.appendChild(spider);

  spider.addEventListener('mouseenter', () => spider.style.opacity = '0.4');
  spider.addEventListener('mouseleave', () => spider.style.opacity = '0.08');

  spider.addEventListener('click', () => {
    const room = document.createElement('div');
    room.style.cssText = `position:fixed;inset:0;z-index:99995;background:#030305;overflow-y:auto;`;
    room.innerHTML = `
      <div style="max-width:700px;margin:0 auto;padding:4rem 2rem;">
        <div style="font-family:'Space Mono',monospace;font-size:0.7rem;color:#E01B24;letter-spacing:0.3em;margin-bottom:2rem;">🔴 CLASSIFIED — LEVEL 5 ACCESS GRANTED</div>
        <h1 style="font-family:'Bebas Neue',sans-serif;font-size:5rem;color:#fff;line-height:0.9;margin-bottom:2rem;">SECRET<br/><span style="color:#E01B24;">DOSSIER</span></h1>
        <div style="border:1px solid rgba(224,27,36,0.2);border-radius:12px;padding:2rem;background:#0D0D0D;margin-bottom:2rem;">
          <div style="font-family:'Space Mono',monospace;font-size:0.7rem;color:#E01B24;letter-spacing:0.2em;margin-bottom:1rem;">// AGENT PROFILE</div>
          <p style="font-family:'Inter',sans-serif;color:#C8C8C8;line-height:1.8;font-size:0.9rem;">Name: <span style="color:#fff;">Akshar Madan</span><br/>
          DOB: <span style="color:#fff;">05-08-2005</span><br/>
          Status: <span style="color:#28a745;">ACTIVE</span><br/>
          Threat Level: <span style="color:#E01B24;">LEGENDARY</span><br/>
          Location: <span style="color:#fff;">Chennai, India</span><br/>
          Codename: <span style="color:#FFD700;">WEB.DEV</span></p>
        </div>
        <div style="border:1px solid rgba(224,27,36,0.2);border-radius:12px;padding:2rem;background:#0D0D0D;margin-bottom:2rem;">
          <div style="font-family:'Space Mono',monospace;font-size:0.7rem;color:#E01B24;letter-spacing:0.2em;margin-bottom:1rem;">// KNOWN ABILITIES</div>
          <p style="font-family:'Space Mono',monospace;color:#C8C8C8;line-height:2;font-size:0.8rem;">
            [✓] Can build entire web apps from scratch<br/>
            [✓] Survived 2-month Novacode training<br/>
            [✓] CGPA 8.65 while swinging through Chennai<br/>
            [✓] Speaks to machines in 7+ languages<br/>
            [✓] Once fixed a bug at 3am. Twice.<br/>
            [✓] Google Cloud certified — literally in the clouds<br/>
            [✓] 21 GitHub repos and counting
          </p>
        </div>
        <div style="border:1px solid rgba(255,215,0,0.2);border-radius:12px;padding:2rem;background:#0D0D0D;margin-bottom:3rem;">
          <div style="font-family:'Space Mono',monospace;font-size:0.7rem;color:#FFD700;letter-spacing:0.2em;margin-bottom:1rem;">// WEAKNESS</div>
          <p style="font-family:'Space Mono',monospace;color:#C8C8C8;line-height:2;font-size:0.8rem;">[!] Stack Overflow being down<br/>[!] Missing semicolons<br/>[!] Merge conflicts on Friday evening</p>
        </div>
        <button onclick="this.closest('div[style*=\"fixed\"]').remove()" style="font-family:'Bebas Neue',sans-serif;font-size:1.2rem;letter-spacing:0.3em;color:#E01B24;background:transparent;border:1px solid rgba(224,27,36,0.4);padding:1rem 3rem;cursor:pointer;border-radius:8px;">✕ CLOSE DOSSIER</button>
      </div>
    `;
    document.body.appendChild(room);
  });
}
