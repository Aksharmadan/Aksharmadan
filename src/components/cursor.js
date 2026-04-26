export function initCursor() {
  const cursor = document.getElementById('cursor');
  const canvas = document.getElementById('cursor-trail');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let cx = mx, cy = my;
  const webNodes = [];
  const MAX_NODES = 60;
  let lastNodeTime = 0;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
    const now = Date.now();
    if (now - lastNodeTime > 40) {
      webNodes.push({ x: mx, y: my, age: 0, maxAge: 60 });
      if (webNodes.length > MAX_NODES) webNodes.shift();
      lastNodeTime = now;
    }
  });

  function drawWebTrail() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw web strands between nodes
    for (let i = 1; i < webNodes.length; i++) {
      const a = webNodes[i - 1];
      const b = webNodes[i];
      const alpha = (i / webNodes.length) * 0.5;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = `rgba(200,200,220,${alpha})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
      a.age++;
    }
    // Draw mini spider at each node (every 5th)
    webNodes.forEach((n, i) => {
      if (i % 8 === 0) {
        const alpha = (i / webNodes.length) * 0.6;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224,27,36,${alpha})`;
        ctx.fill();
        // tiny web lines from node
        for (let a = 0; a < 4; a++) {
          const angle = (a / 4) * Math.PI * 2;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(n.x + Math.cos(angle) * 6, n.y + Math.sin(angle) * 6);
          ctx.strokeStyle = `rgba(200,200,220,${alpha * 0.5})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });
    // Remove old nodes
    webNodes.forEach(n => n.age++);
    for (let i = webNodes.length - 1; i >= 0; i--) {
      if (webNodes[i].age > webNodes[i].maxAge) webNodes.splice(i, 1);
    }
    requestAnimationFrame(drawWebTrail);
  }
  drawWebTrail();
}
