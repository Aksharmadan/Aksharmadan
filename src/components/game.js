export function initGame() {

  // Prevent duplicate overlays
  document.getElementById('webrun-overlay')?.remove();
  document.getElementById('webrun-btn')?.remove();

  const btn = document.createElement('div');
  btn.id = 'webrun-btn';
  btn.innerHTML = '🕹 PLAY';
  btn.style.cssText = `position:fixed;bottom:3rem;left:2rem;z-index:9990;
    font-family:'Bebas Neue',sans-serif;font-size:1.1rem;color:#E01B24;
    letter-spacing:0.25em;border:1px solid rgba(224,27,36,0.5);
    padding:0.7rem 1.6rem;border-radius:8px;cursor:pointer;
    background:rgba(3,3,5,0.95);box-shadow:0 0 20px rgba(224,27,36,0.15);
    transition:all 0.25s;`;
  btn.onmouseenter = () => { btn.style.background='rgba(224,27,36,0.15)'; btn.style.transform='translateY(-2px)'; };
  btn.onmouseleave = () => { btn.style.background='rgba(3,3,5,0.95)'; btn.style.transform=''; };
  document.body.appendChild(btn);

  const OV = document.createElement('div');
  OV.id = 'webrun-overlay';
  OV.style.cssText = `position:fixed;inset:0;z-index:99990;background:#010108;display:none;
    font-family:'Bebas Neue',sans-serif;`;
  OV.innerHTML = `
    <canvas id="gc" style="position:absolute;inset:0;display:block;z-index:1;"></canvas>

    <!-- HUD -->
    <div style="position:absolute;top:0;left:0;right:0;padding:1rem 2rem;
      background:linear-gradient(to bottom,rgba(1,1,8,0.98),transparent);
      display:flex;justify-content:space-between;align-items:center;z-index:999;pointer-events:none;">
      <div style="font-size:1.6rem;letter-spacing:0.2em;color:#fff;">
        WEB<span style="color:#E01B24;">.</span>RUN
      </div>
      <div style="display:flex;gap:2.5rem;font-size:1.3rem;letter-spacing:0.15em;">
        <span>SCORE <span id="gsc" style="color:#E01B24;">0</span></span>
        <span>BEST <span id="gbs" style="color:#FFD700;">0</span></span>
        <span id="ghp">❤️❤️❤️</span>
      </div>
      <button id="gex" style="pointer-events:all;background:rgba(224,27,36,0.15);
        border:1px solid rgba(224,27,36,0.6);color:#E01B24;
        font-family:'Bebas Neue',sans-serif;font-size:1rem;letter-spacing:0.2em;
        padding:0.4rem 1.2rem;cursor:pointer;border-radius:6px;">
        ✕ EXIT
      </button>
    </div>

    <!-- START SCREEN -->
    <div id="gss" style="position:absolute;inset:0;z-index:5;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:#010108;">
      <div style="font-size:6rem;margin-bottom:0.5rem;
        filter:drop-shadow(0 0 30px rgba(224,27,36,0.9));">🕷️</div>
      <div style="font-size:clamp(2.5rem,7vw,5rem);color:#fff;line-height:0.9;
        text-align:center;letter-spacing:0.05em;
        text-shadow:0 0 60px rgba(224,27,36,0.5);">
        WEB<br/><span style="color:#E01B24;">RUNNER</span>
      </div>
      <div style="font-family:'Space Mono',monospace;font-size:0.75rem;
        color:rgba(200,200,200,0.5);letter-spacing:0.2em;margin-top:1.5rem;
        text-align:center;line-height:2.2;">
        PRESS SPACE or TAP to JUMP<br/>
        AVOID 🦹 GOBLINS · COLLECT 🔴 ORBS
      </div>
      <button id="gst" style="margin-top:2rem;font-family:'Bebas Neue',sans-serif;
        font-size:1.4rem;letter-spacing:0.3em;color:#fff;
        background:linear-gradient(135deg,#E01B24,#c0131c);
        border:none;padding:1rem 3rem;cursor:pointer;border-radius:8px;
        box-shadow:0 0 30px rgba(224,27,36,0.4);transition:transform 0.2s;">
        START RUNNING
      </button>
      <button id="gex2" style="margin-top:1rem;font-family:'Bebas Neue',sans-serif;
        font-size:1rem;letter-spacing:0.2em;color:#E01B24;
        background:transparent;border:1px solid rgba(224,27,36,0.4);
        padding:0.5rem 1.5rem;cursor:pointer;border-radius:6px;">
        ✕ CLOSE
      </button>
    </div>

    <!-- GAME OVER -->
    <div id="ggo" style="position:absolute;inset:0;z-index:10;display:none;
      flex-direction:column;align-items:center;justify-content:center;
      background:rgba(1,1,8,0.92);">
      <div id="got" style="font-size:clamp(3rem,8vw,5.5rem);letter-spacing:0.1em;
        text-shadow:0 0 40px currentColor;"></div>
      <div style="font-family:'Space Mono',monospace;font-size:0.8rem;
        color:#C8C8C8;margin-top:1rem;letter-spacing:0.2em;">
        SCORE: <span id="gfs" style="color:#FFD700;font-size:1.1rem;"></span>
      </div>
      <button id="grst" style="margin-top:1.8rem;font-family:'Bebas Neue',sans-serif;
        font-size:1.2rem;letter-spacing:0.3em;color:#fff;
        background:linear-gradient(135deg,#E01B24,#c0131c);
        border:none;padding:0.9rem 2.5rem;cursor:pointer;border-radius:8px;
        box-shadow:0 0 30px rgba(224,27,36,0.4);">
        RUN AGAIN
      </button>
      <button id="gex3" style="margin-top:1rem;font-family:'Bebas Neue',sans-serif;
        font-size:1rem;letter-spacing:0.2em;color:#E01B24;
        background:transparent;border:1px solid rgba(224,27,36,0.4);
        padding:0.5rem 1.5rem;cursor:pointer;border-radius:6px;">
        ✕ EXIT
      </button>
    </div>
  `;
  document.body.appendChild(OV);

  const C = document.getElementById('gc');
  const X = C.getContext('2d');
  let W, H;
  function resize() {
    W = C.width = window.innerWidth;
    H = C.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // ── GAME STATE ──
  let RAF, running = false, frame = 0;
  let score = 0, best = 0, lives = 3, speed = 4;
  let spY, spVY, jumping, doubleJump;
  let obstacles = [], orbs = [], particles = [], clouds = [];
  let bgX = 0, groundY;
  let combo = 0, comboT = 0;
  let shakeX = 0, shakeY = 0;

  const GROUND_OFFSET = 0.82;
  const SP_X = 0.18;
  const SP_SIZE = 40;

  function initRun() {
    frame = 0; score = 0; speed = 4; combo = 0; comboT = 0;
    lives = 3; shakeX = 0; shakeY = 0;
    groundY = H * GROUND_OFFSET;
    spY = groundY - SP_SIZE;
    spVY = 0; jumping = false; doubleJump = false;
    obstacles = []; orbs = []; particles = []; clouds = [];
    for (let i = 0; i < 5; i++) {
      clouds.push({ x: Math.random() * W, y: H * 0.1 + Math.random() * H * 0.35, w: 80 + Math.random() * 120, spd: 0.3 + Math.random() * 0.4 });
    }
    updateHUD();
  }

  function jump() {
    if (!running) return;
    if (!jumping) {
      spVY = -16; jumping = true; doubleJump = false;
      spawnBurst(W * SP_X, spY + SP_SIZE, '#E01B24', 6);
    } else if (!doubleJump) {
      spVY = -13; doubleJump = true;
      spawnBurst(W * SP_X, spY + SP_SIZE, '#1A56DB', 8);
    }
  }

  function spawnBurst(x, y, col, n) {
    for (let i = 0; i < n; i++) {
      const a = Math.PI + (Math.random() - 0.5) * Math.PI;
      particles.push({ x, y, vx: Math.cos(a) * (2 + Math.random() * 3), vy: Math.sin(a) * (2 + Math.random() * 2) - 1, life: 1, size: 2 + Math.random() * 3, col });
    }
  }

  function spawnScore(x, y, pts, col) {
    particles.push({ x, y, vx: 0, vy: -2, life: 1, size: 20, text: '+' + pts, col, isText: true });
  }

  function redFlash() {
    shakeX = 8; shakeY = 4;
    const f = document.createElement('div');
    f.style.cssText = 'position:fixed;inset:0;background:rgba(224,27,36,0.3);pointer-events:none;z-index:99995;';
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 250);
  }

  function updateHUD() {
    const sc = document.getElementById('gsc');
    const bs = document.getElementById('gbs');
    const hp = document.getElementById('ghp');
    if (sc) sc.textContent = Math.floor(score);
    if (bs) bs.textContent = Math.floor(best);
    if (hp) hp.textContent = '❤️'.repeat(Math.max(0, lives));
  }

  function exitGame() {
    running = false;
    cancelAnimationFrame(RAF);
    OV.style.display = 'none';
    document.getElementById('gss').style.display = 'flex';
    document.getElementById('ggo').style.display = 'none';
  }

  // ── DRAW FUNCTIONS ──
  function drawSky() {
    const sky = X.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#01010c');
    sky.addColorStop(0.6, '#020215');
    sky.addColorStop(1, '#04041a');
    X.fillStyle = sky;
    X.fillRect(0, 0, W, H);
  }

  function drawStars() {
    for (let i = 0; i < 60; i++) {
      const sx = ((i * 163 + frame * 0.08) % W);
      const sy = (i * 71) % (H * 0.55);
      const a = 0.2 + Math.sin(frame * 0.05 + i) * 0.15;
      X.beginPath();
      X.arc(sx, sy, 0.8, 0, Math.PI * 2);
      X.fillStyle = `rgba(255,255,255,${a})`;
      X.fill();
    }
  }

  function drawClouds() {
    clouds.forEach(c => {
      c.x -= c.spd;
      if (c.x + c.w < 0) { c.x = W + 50; c.y = H * 0.08 + Math.random() * H * 0.3; }
      X.save();
      X.globalAlpha = 0.06;
      X.fillStyle = '#8888ff';
      X.beginPath();
      X.ellipse(c.x, c.y, c.w, c.w * 0.4, 0, 0, Math.PI * 2);
      X.fill();
      X.restore();
    });
  }

  function drawCity() {
    X.save();
    X.globalAlpha = 0.15;
    for (let i = 0; i < 20; i++) {
      const bx = ((i * 180 - bgX * 0.2) % (W + 200)) - 100;
      const bh = 100 + (i * 37) % 200;
      const bw = 60 + (i * 23) % 80;
      X.fillStyle = '#0a0a25';
      X.fillRect(bx, groundY - bh, bw, bh);
      for (let wy = groundY - bh + 10; wy < groundY - 10; wy += 18) {
        for (let wx = bx + 8; wx < bx + bw - 8; wx += 16) {
          if (Math.sin(i * 3.7 + wy + frame * 0.008) > 0.1) {
            X.fillStyle = 'rgba(255,215,80,0.5)';
            X.fillRect(wx, wy, 8, 8);
          }
        }
      }
    }
    X.restore();
  }

  function drawGround() {
    const grd = X.createLinearGradient(0, groundY, 0, H);
    grd.addColorStop(0, '#080818');
    grd.addColorStop(1, '#020208');
    X.fillStyle = grd;
    X.fillRect(0, groundY, W, H - groundY);
    X.save();
    X.shadowBlur = 10;
    X.shadowColor = '#1A56DB';
    X.strokeStyle = 'rgba(26,86,219,0.5)';
    X.lineWidth = 2;
    X.beginPath();
    X.moveTo(0, groundY);
    X.lineTo(W, groundY);
    X.stroke();
    X.shadowBlur = 0;
    X.strokeStyle = 'rgba(26,86,219,0.08)';
    X.lineWidth = 1;
    const gOff = bgX % 60;
    for (let gx = -gOff; gx < W; gx += 60) {
      X.beginPath(); X.moveTo(gx, groundY); X.lineTo(gx - 30, H); X.stroke();
    }
    X.restore();
  }

  function drawSpidey() {
    const x = W * SP_X;
    const y = spY;
    const runFrame = Math.floor(frame / 6) % 4;
    X.save();
    X.translate(x, y + SP_SIZE / 2);
    if (speed > 5) {
      for (let i = 1; i <= 4; i++) {
        X.save();
        X.globalAlpha = 0.08 * (5 - i);
        X.translate(-i * 8, 0);
        drawSpideyShape(runFrame, jumping);
        X.restore();
      }
    }
    X.shadowBlur = 20;
    X.shadowColor = '#E01B24';
    drawSpideyShape(runFrame, jumping);
    X.restore();
  }

  function drawSpideyShape(runFrame, isJumping) {
    const S = SP_SIZE * 0.5;
    X.fillStyle = '#C01018';
    X.beginPath();
    X.ellipse(0, 2, S * 0.65, S * 0.85, 0, 0, Math.PI * 2);
    X.fill();
    X.fillStyle = '#C01018';
    X.beginPath();
    X.ellipse(0, -S * 0.85, S * 0.55, S * 0.62, 0, 0, Math.PI * 2);
    X.fill();
    [-1, 1].forEach(side => {
      X.save();
      X.translate(side * S * 0.22, -S * 0.9);
      X.rotate(side * 0.2);
      X.fillStyle = 'white';
      X.beginPath();
      X.ellipse(0, 0, S * 0.22, S * 0.28, 0, 0, Math.PI * 2);
      X.fill();
      X.fillStyle = '#1A56DB';
      X.beginPath();
      X.ellipse(0, 0, S * 0.14, S * 0.18, 0, 0, Math.PI * 2);
      X.fill();
      X.restore();
    });
    X.strokeStyle = 'rgba(80,0,0,0.35)';
    X.lineWidth = 0.8;
    X.beginPath(); X.moveTo(0, -S * 1.45); X.lineTo(0, S); X.stroke();
    X.beginPath(); X.arc(0, -S * 0.85, S * 0.55, 0, Math.PI * 2); X.stroke();
    X.fillStyle = '#1A56DB';
    X.fillRect(-S * 0.6, S * 0.08, S * 1.2, S * 0.22);
    X.strokeStyle = '#1A56DB';
    X.lineWidth = S * 0.28;
    X.lineCap = 'round';
    if (isJumping) {
      X.beginPath(); X.moveTo(-S * 0.3, S * 0.6); X.quadraticCurveTo(-S * 0.6, S * 1.1, -S * 0.4, S * 1.4); X.stroke();
      X.beginPath(); X.moveTo(S * 0.3, S * 0.6); X.quadraticCurveTo(S * 0.6, S * 1.1, S * 0.4, S * 1.4); X.stroke();
    } else {
      const legPhase = runFrame * Math.PI / 2;
      X.beginPath(); X.moveTo(-S * 0.3, S * 0.6); X.quadraticCurveTo(-S * 0.5 + Math.sin(legPhase) * S * 0.3, S * 1.0, -S * 0.3 + Math.sin(legPhase) * S * 0.4, S * 1.4); X.stroke();
      X.beginPath(); X.moveTo(S * 0.3, S * 0.6); X.quadraticCurveTo(S * 0.5 + Math.sin(legPhase + Math.PI) * S * 0.3, S * 1.0, S * 0.3 + Math.sin(legPhase + Math.PI) * S * 0.4, S * 1.4); X.stroke();
    }
    X.strokeStyle = '#C01018';
    X.lineWidth = S * 0.25;
    if (isJumping) {
      X.beginPath(); X.moveTo(-S * 0.5, -S * 0.1); X.quadraticCurveTo(-S, -S * 0.6, -S * 0.8, -S); X.stroke();
      X.beginPath(); X.moveTo(S * 0.5, -S * 0.1); X.quadraticCurveTo(S * 1.1, -S * 0.3, S * 1.2, S * 0.2); X.stroke();
    } else {
      const armPhase = runFrame * Math.PI / 2;
      X.beginPath(); X.moveTo(-S * 0.5, 0); X.quadraticCurveTo(-S * 0.9, -S * 0.3 + Math.sin(armPhase + Math.PI) * S * 0.3, -S * 0.7, S * 0.5); X.stroke();
      X.beginPath(); X.moveTo(S * 0.5, 0); X.quadraticCurveTo(S * 0.9, -S * 0.3 + Math.sin(armPhase) * S * 0.3, S * 0.7, S * 0.5); X.stroke();
    }
  }

  function drawObstacle(o) {
    X.save();
    X.translate(o.x, o.y);
    X.shadowBlur = 15;
    X.shadowColor = '#00ff44';
    X.font = `${o.size}px serif`;
    X.textAlign = 'center';
    X.textBaseline = 'middle';
    X.fillText(o.emoji, 0, 0);
    X.restore();
  }

  function drawOrb(o) {
    if (o.done) return;
    o.phase += 0.05;
    const oy = o.y + Math.sin(o.phase) * 6;
    X.save();
    X.shadowBlur = 18 + Math.sin(o.phase) * 6;
    X.shadowColor = o.gold ? '#FFD700' : '#E01B24';
    const gr = X.createRadialGradient(o.x - 3, oy - 3, 0, o.x, oy, o.r);
    gr.addColorStop(0, o.gold ? 'rgba(255,255,180,0.95)' : 'rgba(255,120,120,0.95)');
    gr.addColorStop(0.6, o.gold ? '#FFD700' : '#E01B24');
    gr.addColorStop(1, 'rgba(0,0,0,0.3)');
    X.beginPath();
    X.arc(o.x, oy, o.r, 0, Math.PI * 2);
    X.fillStyle = gr;
    X.fill();
    X.font = `${o.r * 1.1}px serif`;
    X.textAlign = 'center';
    X.textBaseline = 'middle';
    X.fillText(o.gold ? '⭐' : '🕷', o.x, oy + 1);
    X.restore();
  }

  function drawParticles() {
    particles.forEach(p => {
      X.save();
      X.globalAlpha = p.life;
      if (p.isText) {
        X.font = `bold ${p.size}px 'Bebas Neue',sans-serif`;
        X.fillStyle = p.col;
        X.textAlign = 'center';
        X.fillText(p.text, p.x, p.y);
      } else {
        X.beginPath();
        X.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        X.fillStyle = p.col;
        X.shadowBlur = 6;
        X.shadowColor = p.col;
        X.fill();
      }
      X.restore();
      p.x += p.vx; p.y += p.vy; p.vy += 0.08; p.life -= 0.025;
    });
    for (let i = particles.length - 1; i >= 0; i--) {
      if (particles[i].life <= 0) particles.splice(i, 1);
    }
  }

  // ── MAIN LOOP ──
  function loop() {
    if (!running) return;
    frame++;
    score += speed * 0.05;
    if (score > best) best = score;
    speed = 4 + Math.floor(score / 200) * 0.5;
    bgX += speed;
    updateHUD();

    shakeX *= 0.7; shakeY *= 0.7;
    if (Math.abs(shakeX) < 0.1) shakeX = 0;
    if (Math.abs(shakeY) < 0.1) shakeY = 0;

    X.save();
    if (shakeX || shakeY) X.translate(shakeX * (Math.random() - 0.5) * 2, shakeY * (Math.random() - 0.5) * 2);

    drawSky();
    drawStars();
    drawClouds();
    drawCity();
    drawGround();

    if (frame % Math.max(60, 120 - Math.floor(score / 100) * 5) === 0) {
      const types = [
        { emoji: '🦹', size: 38, w: 32, h: 38 },
        { emoji: '💀', size: 32, w: 28, h: 32 },
        { emoji: '🕸️', size: 36, w: 34, h: 30 },
      ];
      const t = types[Math.floor(Math.random() * types.length)];
      const heightVar = Math.random() > 0.3 ? 0 : -(H * 0.1 + Math.random() * H * 0.08);
      obstacles.push({ x: W + 50, y: groundY - t.h * 0.5 + heightVar, ...t });
    }

    if (frame % 80 === 0) {
      const gold = Math.random() > 0.75;
      orbs.push({
        x: W + 30,
        y: groundY - 30 - Math.random() * H * 0.28,
        r: 18, phase: Math.random() * Math.PI * 2,
        done: false, gold
      });
    }

    obstacles.forEach((o, i) => {
      o.x -= speed;
      drawObstacle(o);
      if (o.y < groundY - o.h) o.y += Math.sin(frame * 0.05 + i) * 0.5;
      const spX = W * SP_X;
      const dx = spX - o.x, dy = (spY + SP_SIZE / 2) - o.y;
      if (Math.abs(dx) < 25 && Math.abs(dy) < 28) {
        lives--;
        obstacles.splice(i, 1);
        redFlash();
        spawnBurst(spX, spY + SP_SIZE / 2, '#E01B24', 12);
        updateHUD();
        if (lives <= 0) { setTimeout(() => endGame(), 200); return; }
      }
    });
    for (let i = obstacles.length - 1; i >= 0; i--) {
      if (obstacles[i].x < -60) obstacles.splice(i, 1);
    }

    orbs.forEach((o, i) => {
      o.x -= speed * 0.9;
      drawOrb(o);
      if (o.done) return;
      const spX = W * SP_X;
      const dy = (spY + SP_SIZE / 2) - (o.y + Math.sin(o.phase) * 6);
      if (Math.abs(spX - o.x) < 28 && Math.abs(dy) < 28) {
        o.done = true;
        const pts = o.gold ? 50 : 10;
        score += pts;
        combo++;
        comboT = 80;
        spawnBurst(o.x, o.y, o.gold ? '#FFD700' : '#E01B24', 10);
        spawnScore(o.x, o.y - 20, pts, o.gold ? '#FFD700' : '#ff6060');
        window.unlockAchievement?.('first_scroll');
      }
    });
    for (let i = orbs.length - 1; i >= 0; i--) {
      if (orbs[i].x < -50) orbs.splice(i, 1);
    }

    if (comboT > 0) comboT--;
    else combo = 0;
    if (combo >= 3 && comboT > 0) {
      X.save();
      X.font = `bold ${28 + combo * 3}px 'Bebas Neue',sans-serif`;
      X.fillStyle = '#FFD700';
      X.textAlign = 'center';
      X.shadowBlur = 15;
      X.shadowColor = '#FFD700';
      X.fillText(`${combo}x COMBO!`, W / 2, H * 0.15);
      X.restore();
    }

    spVY += 0.7;
    spY += spVY;
    if (spY >= groundY - SP_SIZE) {
      spY = groundY - SP_SIZE;
      spVY = 0;
      jumping = false;
      doubleJump = false;
    }

    if (jumping) {
      X.save();
      X.strokeStyle = 'rgba(200,210,230,0.25)';
      X.lineWidth = 1;
      X.setLineDash([4, 4]);
      X.beginPath();
      X.moveTo(W * SP_X + 15, spY);
      X.lineTo(W * SP_X + 15 + speed * 8, groundY - 20);
      X.stroke();
      X.setLineDash([]);
      X.restore();
    }

    drawSpidey();
    drawParticles();

    X.save();
    X.font = "11px 'Space Mono',monospace";
    X.fillStyle = 'rgba(200,200,200,0.25)';
    X.textAlign = 'right';
    X.fillText(`SPEED ${speed.toFixed(1)}x`, W - 20, H - 45);
    X.restore();

    if (frame < 120) {
      X.save();
      const alpha = Math.max(0, 1 - frame / 100);
      X.font = "13px 'Space Mono',monospace";
      X.fillStyle = `rgba(200,200,200,${alpha * 0.6})`;
      X.textAlign = 'center';
      X.fillText('SPACE / TAP TO JUMP  ·  DOUBLE TAP = DOUBLE JUMP', W / 2, H - 55);
      X.restore();
    }

    X.restore();
    RAF = requestAnimationFrame(loop);
  }

  function endGame() {
    running = false;
    cancelAnimationFrame(RAF);
    best = Math.max(best, score);
    const go = document.getElementById('ggo');
    const gt = document.getElementById('got');
    const gf = document.getElementById('gfs');
    if (go) go.style.display = 'flex';
    if (gt) { gt.textContent = 'GAME OVER'; gt.style.color = '#E01B24'; }
    if (gf) gf.textContent = Math.floor(score);
    updateHUD();
  }

  function startGame() {
    document.getElementById('gss').style.display = 'none';
    document.getElementById('ggo').style.display = 'none';
    resize();
    initRun();
    running = true;
    loop();
  }

  // ── CONTROLS ──
  document.addEventListener('keydown', e => {
    if (e.code === 'Space' || e.code === 'ArrowUp') {
      e.preventDefault();
      jump();
    }
  });
  C.addEventListener('click', () => jump());
  C.addEventListener('touchstart', e => { e.preventDefault(); jump(); }, { passive: false });

  document.getElementById('gst')?.addEventListener('click', startGame);
  document.getElementById('grst')?.addEventListener('click', startGame);

  // All 3 exit buttons call the same exitGame function
  document.getElementById('gex')?.addEventListener('click', exitGame);
  document.getElementById('gex2')?.addEventListener('click', exitGame);
  document.getElementById('gex3')?.addEventListener('click', exitGame);

  btn.addEventListener('click', () => {
    OV.style.display = 'block';
    resize();
  });
}
