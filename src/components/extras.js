export function initExtras() {

  // ============================================
  // 1. BG SPIDEY FOLLOWS CURSOR (lazy smooth)
  // ============================================
  const bgSpidey = document.getElementById('bg-spidey');
  let bx = window.innerWidth/2, by = window.innerHeight/2;
  let tx = bx, ty = by;
  window.addEventListener('mousemove', (e) => { tx = e.clientX-110; ty = e.clientY-140; });
  function animateBgSpidey() {
    bx += (tx-bx)*0.05; by += (ty-by)*0.05;
    if(bgSpidey){ bgSpidey.style.left=bx+'px'; bgSpidey.style.top=by+'px'; }
    requestAnimationFrame(animateBgSpidey);
  }
  animateBgSpidey();

  // ============================================
  // 2. WEB SHOOTER ON CLICK
  // ============================================
  const clickCanvas = document.createElement('canvas');
  clickCanvas.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:9990;';
  document.body.appendChild(clickCanvas);
  const cctx = clickCanvas.getContext('2d');
  clickCanvas.width=window.innerWidth; clickCanvas.height=window.innerHeight;
  window.addEventListener('resize',()=>{ clickCanvas.width=window.innerWidth; clickCanvas.height=window.innerHeight; });
  const webs = [];
  window.addEventListener('click',(e)=>{
    const targets = Array.from({length:5},()=>({
      x: Math.random()*window.innerWidth,
      y: Math.random()*window.innerHeight
    }));
    targets.forEach(t=>{
      webs.push({ x1:e.clientX, y1:e.clientY, x2:t.x, y2:t.y, age:0, maxAge:60 });
    });
    spawnClickRipple(e.clientX, e.clientY);
  });
  function drawWebs(){
    cctx.clearRect(0,0,clickCanvas.width,clickCanvas.height);
    webs.forEach((w,i)=>{
      const p = w.age/w.maxAge;
      const alpha = 1-p;
      cctx.beginPath();
      const mx = w.x1+(w.x2-w.x1)*0.4;
      const my = w.y1+(w.y2-w.y1)*0.1;
      cctx.moveTo(w.x1,w.y1);
      cctx.quadraticCurveTo(mx,my,w.x1+(w.x2-w.x1)*p,w.y1+(w.y2-w.y1)*p);
      cctx.strokeStyle=`rgba(200,210,220,${alpha*0.8})`;
      cctx.lineWidth=0.8;
      cctx.stroke();
      w.age++;
    });
    for(let i=webs.length-1;i>=0;i--){ if(webs[i].age>=webs[i].maxAge) webs.splice(i,1); }
    requestAnimationFrame(drawWebs);
  }
  drawWebs();

  // ============================================
  // 3. CLICK RIPPLE
  // ============================================
  function spawnClickRipple(x,y){
    const r=document.createElement('div');
    r.style.cssText=`position:fixed;left:${x}px;top:${y}px;width:10px;height:10px;border-radius:50%;border:2px solid #E01B24;pointer-events:none;z-index:9991;transform:translate(-50%,-50%);animation:rippleOut 0.6s ease forwards;`;
    document.body.appendChild(r);
    setTimeout(()=>r.remove(),600);
  }
  const rippleStyle=document.createElement('style');
  rippleStyle.textContent=`@keyframes rippleOut{0%{transform:translate(-50%,-50%) scale(0);opacity:1;}100%{transform:translate(-50%,-50%) scale(8);opacity:0;}}`;
  document.head.appendChild(rippleStyle);

  // ============================================
  // 4. FLOATING PARTICLES
  // ============================================
  const symbols=['🕷','✦','·','×','⬡'];
  for(let i=0;i<20;i++){
    const p=document.createElement('div');
    p.className='spider-particle';
    p.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    p.style.left=Math.random()*100+'vw';
    p.style.animationDuration=(8+Math.random()*12)+'s';
    p.style.animationDelay=(Math.random()*10)+'s';
    p.style.fontSize=(8+Math.random()*8)+'px';
    document.body.appendChild(p);
  }

  // ============================================
  // 5. SCROLL PROGRESS BAR
  // ============================================
  const bar=document.getElementById('progress-bar');
  window.addEventListener('scroll',()=>{
    const scrolled=window.scrollY;
    const total=document.documentElement.scrollHeight-window.innerHeight;
    if(bar) bar.style.width=(scrolled/total*100)+'%';
  },{passive:true});

  // ============================================
  // 6. NAVBAR SCROLL
  // ============================================
  const navbar=document.getElementById('navbar');
  window.addEventListener('scroll',()=>{
    if(navbar) navbar.classList.toggle('scrolled',window.scrollY>60);
  },{passive:true});

  // ============================================
  // 7. CURSOR SCALE ON HOVER
  // ============================================
  const cursor=document.getElementById('cursor');
  document.querySelectorAll('a,button,.project-card,.orb').forEach(el=>{
    el.addEventListener('mouseenter',()=>{ if(cursor) cursor.style.transform='translate(-50%,-50%) scale(1.8)'; });
    el.addEventListener('mouseleave',()=>{ if(cursor) cursor.style.transform='translate(-50%,-50%) scale(1)'; });
  });

  // ============================================
  // 8. 3D TILT ON PROJECT CARDS
  // ============================================
  document.querySelectorAll('.project-card').forEach(card=>{
    card.addEventListener('mousemove',(e)=>{
      const rect=card.getBoundingClientRect();
      const x=(e.clientX-rect.left)/rect.width-0.5;
      const y=(e.clientY-rect.top)/rect.height-0.5;
      card.style.transform=`translateY(-8px) rotateX(${-y*12}deg) rotateY(${x*12}deg)`;
      card.style.transition='transform 0.1s ease';
    });
    card.addEventListener('mouseleave',()=>{
      card.style.transform='';
      card.style.transition='transform 0.5s ease';
    });
  });

  // ============================================
  // 9. WEB CANVAS IN SKILLS
  // ============================================
  const canvas=document.getElementById('web-canvas');
  if(canvas){
    const ctx=canvas.getContext('2d');
    function resizeCanvas(){ canvas.width=canvas.offsetWidth; canvas.height=canvas.offsetHeight; }
    resizeCanvas();
    window.addEventListener('resize',resizeCanvas);
    const pts=Array.from({length:15},()=>({
      x:Math.random()*canvas.width, y:Math.random()*canvas.height,
      vx:(Math.random()-0.5)*0.4, vy:(Math.random()-0.5)*0.4
    }));
    function drawWebCanvas(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      pts.forEach(p=>{
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>canvas.width) p.vx*=-1;
        if(p.y<0||p.y>canvas.height) p.vy*=-1;
      });
      for(let i=0;i<pts.length;i++){
        for(let j=i+1;j<pts.length;j++){
          const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y;
          const dist=Math.sqrt(dx*dx+dy*dy);
          if(dist<180){
            ctx.beginPath();
            ctx.moveTo(pts[i].x,pts[i].y);
            ctx.lineTo(pts[j].x,pts[j].y);
            ctx.strokeStyle=`rgba(224,27,36,${(1-dist/180)*0.12})`;
            ctx.lineWidth=0.8; ctx.stroke();
          }
        }
      }
      requestAnimationFrame(drawWebCanvas);
    }
    drawWebCanvas();
  }

  // ============================================
  // 10. LIGHTNING STRIKE ON SKYLINE
  // ============================================
  function spawnLightning(){
    const l=document.createElement('canvas');
    l.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:4;';
    l.width=window.innerWidth; l.height=window.innerHeight;
    document.body.appendChild(l);
    const lctx=l.getContext('2d');
    const x=Math.random()*window.innerWidth;
    function drawBolt(x1,y1,x2,y2,branches){
      if(branches<=0) return;
      lctx.beginPath();
      lctx.moveTo(x1,y1);
      const mx=(x1+x2)/2+(Math.random()-0.5)*60;
      const my=(y1+y2)/2;
      lctx.quadraticCurveTo(mx,my,x2,y2);
      lctx.strokeStyle=`rgba(224,27,36,${0.6+Math.random()*0.4})`;
      lctx.lineWidth=branches*0.8;
      lctx.shadowColor='#E01B24';
      lctx.shadowBlur=10;
      lctx.stroke();
      if(Math.random()>0.4) drawBolt(mx,my,mx+(Math.random()-0.5)*100,my+50,branches-1);
    }
    drawBolt(x,0,x+(Math.random()-0.5)*80,window.innerHeight*0.6,4);
    setTimeout(()=>{ lctx.clearRect(0,0,l.width,l.height); },80);
    setTimeout(()=>{ drawBolt(x,0,x+(Math.random()-0.5)*80,window.innerHeight*0.6,4); },120);
    setTimeout(()=>{ l.remove(); },250);
  }
  setInterval(()=>{ if(Math.random()>0.6) spawnLightning(); }, 4000);

  // ============================================
  // 11. CITY WINDOW FLICKER
  // ============================================
  const skylineSvg=document.querySelector('.skyline');
  if(skylineSvg){
    const rects=skylineSvg.querySelectorAll('rect[fill="#FFD700"], rect[fill="#E01B24"], rect[fill="#1A56DB"]');
    setInterval(()=>{
      rects.forEach(r=>{
        if(Math.random()>0.85){
          const orig=r.getAttribute('opacity')||'0.6';
          r.setAttribute('opacity', Math.random()>0.5 ? '0' : orig);
          setTimeout(()=>r.setAttribute('opacity',orig),200+Math.random()*300);
        }
      });
    },800);
  }

  // ============================================
  // 12. SPIDEY SPEECH BUBBLE
  // ============================================
  const quotes=[
    "With great code comes\ngreat responsibility.",
    "I build the web.\nLiterally.",
    "CGPA 8.65 and\nstill swinging!",
    "No bugs in this\ncity. I checked.",
    "git commit -m\n'Saving the world'",
    "Cloud computing?\nI live in the clouds.",
    "My spider-sense\ntingles on Stack Overflow.",
  ];
  let lastQuoteSection='';
  const bubble=document.createElement('div');
  bubble.id='spidey-bubble';
  bubble.style.cssText=`position:fixed;z-index:600;background:#0D0D0D;border:1px solid rgba(224,27,36,0.5);border-radius:12px;padding:0.8rem 1rem;font-family:'Space Mono',monospace;font-size:0.65rem;color:#fff;max-width:160px;line-height:1.5;pointer-events:none;opacity:0;transition:opacity 0.3s;white-space:pre-line;box-shadow:0 0 20px rgba(224,27,36,0.2);`;
  bubble.innerHTML='<div id="bubble-text"></div><div style="position:absolute;bottom:-8px;left:20px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid rgba(224,27,36,0.5);"></div>';
  document.body.appendChild(bubble);

  function showBubble(text){
    const spidey=document.getElementById('spidey');
    if(!spidey) return;
    const rect=spidey.getBoundingClientRect();
    bubble.style.left=(rect.left-170)+'px';
    bubble.style.top=(rect.top)+'px';
    bubble.querySelector('#bubble-text').textContent=text;
    bubble.style.opacity='1';
    setTimeout(()=>bubble.style.opacity='0',3500);
  }

  window.addEventListener('scroll',()=>{
    const sy=window.scrollY;
    const dh=document.documentElement.scrollHeight-window.innerHeight;
    const p=sy/dh;
    let section='';
    if(p<0.15) section='hero';
    else if(p<0.35) section='about';
    else if(p<0.55) section='skills';
    else if(p<0.75) section='projects';
    else if(p<0.9) section='experience';
    else section='contact';
    if(section!==lastQuoteSection){
      lastQuoteSection=section;
      const q=quotes[Math.floor(Math.random()*quotes.length)];
      setTimeout(()=>showBubble(q),600);
    }
  },{passive:true});

  // ============================================
  // 13. MAGNETIC BUTTONS
  // ============================================
  document.querySelectorAll('.submit-btn,.project-links a,.contact-links a').forEach(btn=>{
    btn.addEventListener('mousemove',(e)=>{
      const rect=btn.getBoundingClientRect();
      const x=(e.clientX-rect.left-rect.width/2)*0.25;
      const y=(e.clientY-rect.top-rect.height/2)*0.25;
      btn.style.transform=`translate(${x}px,${y}px)`;
    });
    btn.addEventListener('mouseleave',()=>{ btn.style.transform=''; });
  });

  // ============================================
  // 14. SPIDER SENSE WARNING (random)
  // ============================================
  const senseEl=document.createElement('div');
  senseEl.style.cssText=`position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Bebas Neue',sans-serif;font-size:3rem;color:#E01B24;z-index:9995;pointer-events:none;opacity:0;letter-spacing:0.3em;text-align:center;text-shadow:0 0 30px rgba(224,27,36,0.8);transition:opacity 0.2s;`;
  senseEl.innerHTML='⚠️ SPIDER-SENSE<br>TINGLING!';
  document.body.appendChild(senseEl);
  function triggerSpiderSense(){
    senseEl.style.opacity='1';
    document.body.style.boxShadow='inset 0 0 100px rgba(224,27,36,0.3)';
    setTimeout(()=>{ senseEl.style.opacity='0'; document.body.style.boxShadow=''; },1500);
  }
  setInterval(()=>{ if(Math.random()>0.7) triggerSpiderSense(); },15000);

  // ============================================
  // 15. TYPING ANIMATION ON HERO SUBTITLE
  // ============================================
  const heroSub=document.querySelector('#hero-content p');
  if(heroSub){
    const originalText=heroSub.textContent;
    heroSub.textContent='';
    let i=0;
    setTimeout(()=>{
      const typer=setInterval(()=>{
        heroSub.textContent+=originalText[i];
        i++;
        if(i>=originalText.length) clearInterval(typer);
      },40);
    },2600);
  }

  // ============================================
  // 16. ANIMATED STATS COUNTER
  // ============================================
  const statsContainer=document.createElement('div');
  statsContainer.id='stats-bar';
  statsContainer.style.cssText=`display:flex;justify-content:center;gap:3rem;flex-wrap:wrap;padding:3rem 2rem;background:rgba(13,13,13,0.8);border-top:1px solid rgba(224,27,36,0.1);border-bottom:1px solid rgba(224,27,36,0.1);position:relative;z-index:10;`;
  statsContainer.innerHTML=`
    <div class="stat-item" style="text-align:center;">
      <div class="stat-num" data-target="21" style="font-family:'Bebas Neue',sans-serif;font-size:3rem;color:#E01B24;line-height:1;">0</div>
      <div style="font-family:'Space Mono',monospace;font-size:0.65rem;color:#C8C8C8;letter-spacing:0.2em;margin-top:0.3rem;">GITHUB REPOS</div>
    </div>
    <div class="stat-item" style="text-align:center;">
      <div class="stat-num" data-target="865" style="font-family:'Bebas Neue',sans-serif;font-size:3rem;color:#E01B24;line-height:1;">0</div>
      <div style="font-family:'Space Mono',monospace;font-size:0.65rem;color:#C8C8C8;letter-spacing:0.2em;margin-top:0.3rem;">CGPA ×100</div>
    </div>
    <div class="stat-item" style="text-align:center;">
      <div class="stat-num" data-target="12" style="font-family:'Bebas Neue',sans-serif;font-size:3rem;color:#E01B24;line-height:1;">0</div>
      <div style="font-family:'Space Mono',monospace;font-size:0.65rem;color:#C8C8C8;letter-spacing:0.2em;margin-top:0.3rem;">CERTIFICATIONS</div>
    </div>
    <div class="stat-item" style="text-align:center;">
      <div class="stat-num" data-target="3" style="font-family:'Bebas Neue',sans-serif;font-size:3rem;color:#E01B24;line-height:1;">0</div>
      <div style="font-family:'Space Mono',monospace;font-size:0.65rem;color:#C8C8C8;letter-spacing:0.2em;margin-top:0.3rem;">HACKATHONS</div>
    </div>
  `;
  const aboutSection=document.getElementById('about');
  if(aboutSection) aboutSection.after(statsContainer);

  const statsObserver=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.querySelectorAll('.stat-num').forEach(el=>{
          const target=parseInt(el.getAttribute('data-target'));
          let current=0;
          const step=Math.ceil(target/60);
          const counter=setInterval(()=>{
            current=Math.min(current+step,target);
            el.textContent=current;
            if(current>=target) clearInterval(counter);
          },25);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  },{threshold:0.3});
  statsObserver.observe(statsContainer);

  // ============================================
  // 17. SPOTLIGHT FOLLOWS CURSOR
  // ============================================
  const spotlight=document.createElement('div');
  spotlight.style.cssText=`position:fixed;pointer-events:none;z-index:1;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(224,27,36,0.04) 0%,transparent 70%);transform:translate(-50%,-50%);transition:left 0.15s ease,top 0.15s ease;`;
  document.body.appendChild(spotlight);
  window.addEventListener('mousemove',(e)=>{
    spotlight.style.left=e.clientX+'px';
    spotlight.style.top=e.clientY+'px';
  });

  // ============================================
  // 18. COMIC PANEL FLASH BETWEEN SECTIONS (surprise!)
  // ============================================
  const panels=document.createElement('div');
  panels.id='comic-panels';
  panels.style.cssText=`position:fixed;inset:0;z-index:9994;pointer-events:none;display:grid;grid-template-columns:1fr 1fr 1fr;opacity:0;transition:opacity 0.1s;`;
  panels.innerHTML=`<div style="background:#E01B24;"></div><div style="background:#030305;"></div><div style="background:#1A56DB;"></div>`;
  document.body.appendChild(panels);
  let lastScrollSection=0;
  window.addEventListener('scroll',()=>{
    const sy=window.scrollY;
    const vh=window.innerHeight;
    const sectionIndex=Math.floor(sy/vh);
    if(sectionIndex!==lastScrollSection){
      lastScrollSection=sectionIndex;
      panels.style.opacity='1';
      setTimeout(()=>panels.style.opacity='0',120);
    }
  },{passive:true});

  // ============================================
  // 19. KONAMI CODE → MARVEL INTRO
  // ============================================
  const konamiSeq=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiIdx=0;
  document.addEventListener('keydown',(e)=>{
    if(e.key===konamiSeq[konamiIdx]) konamiIdx++;
    else konamiIdx=0;
    if(konamiIdx===konamiSeq.length){
      konamiIdx=0;
      triggerMarvelIntro();
    }
  });
  function triggerMarvelIntro(){
    const overlay=document.createElement('div');
    overlay.style.cssText=`position:fixed;inset:0;z-index:99997;background:#030305;display:flex;align-items:center;justify-content:center;flex-direction:column;`;
    const letters='MARVEL'.split('');
    overlay.innerHTML=`<div id="marvel-letters" style="display:flex;gap:0.5rem;">${letters.map(l=>`<span style="font-family:'Bebas Neue',sans-serif;font-size:8rem;color:#E01B24;opacity:0;transform:scaleY(0);display:inline-block;transition:all 0.2s;">${l}</span>`).join('')}</div><div style="font-family:'Space Mono',monospace;font-size:0.8rem;color:#C8C8C8;letter-spacing:0.5em;margin-top:1rem;opacity:0;" id="marvel-sub">PRESENTS</div>`;
    document.body.appendChild(overlay);
    const spans=overlay.querySelectorAll('#marvel-letters span');
    spans.forEach((s,i)=>setTimeout(()=>{s.style.opacity='1';s.style.transform='scaleY(1)';},i*80));
    setTimeout(()=>{ overlay.querySelector('#marvel-sub').style.opacity='1'; },600);
    setTimeout(()=>{ overlay.style.transition='opacity 0.5s'; overlay.style.opacity='0'; },2000);
    setTimeout(()=>overlay.remove(),2500);
  }

  // ============================================
  // 20. EASTER EGG — type MARVEL
  // ============================================
  let typed='';
  document.addEventListener('keydown',(e)=>{
    typed+=e.key.toUpperCase();
    if(typed.length>6) typed=typed.slice(-6);
    if(typed==='MARVEL'){
      const egg=document.getElementById('easter-egg');
      if(egg){ egg.classList.add('show'); setTimeout(()=>egg.classList.remove('show'),3000); }
      typed='';
    }
  });
  document.getElementById('easter-egg')?.addEventListener('click',()=>{
    document.getElementById('easter-egg')?.classList.remove('show');
  });

  // ============================================
  // 21. 🔥 SURPRISE: SPIDER-WEB HERO BACKGROUND
  // ============================================
  const heroCanvas=document.createElement('canvas');
  heroCanvas.style.cssText='position:absolute;inset:0;z-index:3;pointer-events:none;opacity:0.08;';
  const heroSection=document.getElementById('hero');
  if(heroSection){ heroSection.appendChild(heroCanvas); }
  const hctx=heroCanvas.getContext('2d');
  function resizeHeroCanvas(){
    heroCanvas.width=window.innerWidth;
    heroCanvas.height=window.innerHeight;
    drawStaticWeb();
  }
  function drawStaticWeb(){
    hctx.clearRect(0,0,heroCanvas.width,heroCanvas.height);
    const cx=heroCanvas.width/2, cy=heroCanvas.height/2;
    const rings=8, spokes=12;
    hctx.strokeStyle='rgba(200,200,220,1)';
    hctx.lineWidth=0.6;
    for(let r=1;r<=rings;r++){
      const radius=r*(Math.min(heroCanvas.width,heroCanvas.height)/2/rings)*1.5;
      hctx.beginPath();
      for(let s=0;s<=spokes;s++){
        const angle=(s/spokes)*Math.PI*2;
        const prevAngle=((s-1)/spokes)*Math.PI*2;
        if(s===0) hctx.moveTo(cx+Math.cos(angle)*radius,cy+Math.sin(angle)*radius);
        else{
          const mx=cx+Math.cos((prevAngle+angle)/2)*radius*1.02;
          const my=cy+Math.sin((prevAngle+angle)/2)*radius*1.02;
          hctx.quadraticCurveTo(mx,my,cx+Math.cos(angle)*radius,cy+Math.sin(angle)*radius);
        }
      }
      hctx.stroke();
    }
    for(let s=0;s<spokes;s++){
      const angle=(s/spokes)*Math.PI*2;
      hctx.beginPath();
      hctx.moveTo(cx,cy);
      hctx.lineTo(cx+Math.cos(angle)*heroCanvas.width,cy+Math.sin(angle)*heroCanvas.height);
      hctx.stroke();
    }
  }
  resizeHeroCanvas();
  window.addEventListener('resize',resizeHeroCanvas);

  // ============================================
  // 22. 🔥 SURPRISE: NEON GLITCH SCANLINES
  // ============================================
  const scanlines=document.createElement('div');
  scanlines.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:9993;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.03) 2px,rgba(0,0,0,0.03) 4px);animation:scanMove 8s linear infinite;`;
  const scanStyle=document.createElement('style');
  scanStyle.textContent=`@keyframes scanMove{0%{background-position:0 0;}100%{background-position:0 100px;}}`;
  document.head.appendChild(scanStyle);
  document.body.appendChild(scanlines);

  // ============================================
  // 23. 🔥 SURPRISE: REAL-TIME CLOCK in navbar
  // ============================================
  const clock=document.createElement('div');
  clock.style.cssText=`font-family:'Space Mono',monospace;font-size:0.65rem;color:rgba(200,200,200,0.4);letter-spacing:0.1em;`;
  document.getElementById('navbar')?.appendChild(clock);
  function updateClock(){
    const now=new Date();
    const h=String(now.getHours()).padStart(2,'0');
    const m=String(now.getMinutes()).padStart(2,'0');
    const s=String(now.getSeconds()).padStart(2,'0');
    clock.textContent=`${h}:${m}:${s}`;
  }
  updateClock();
  setInterval(updateClock,1000);

  // ============================================
  // 24. 🔥 SURPRISE: CURSOR LEAVES SPIDER SYMBOL
  // ============================================
  let lastStampTime=0;
  window.addEventListener('mousemove',(e)=>{
    const now=Date.now();
    if(now-lastStampTime<300) return;
    lastStampTime=now;
    if(Math.random()>0.85){
      const stamp=document.createElement('div');
      stamp.textContent='🕷';
      stamp.style.cssText=`position:fixed;left:${e.clientX}px;top:${e.clientY}px;font-size:10px;pointer-events:none;z-index:9989;opacity:0.5;transform:translate(-50%,-50%);animation:stampFade 1.5s ease forwards;`;
      document.body.appendChild(stamp);
      setTimeout(()=>stamp.remove(),1500);
    }
  });
  const stampStyle=document.createElement('style');
  stampStyle.textContent=`@keyframes stampFade{0%{opacity:0.5;transform:translate(-50%,-50%) scale(1);}100%{opacity:0;transform:translate(-50%,-50%) scale(0) rotate(180deg);}}`;
  document.head.appendChild(stampStyle);

  // ============================================
  // 25. 🔥 SURPRISE: SECTION ENTER SOUND (visual)
  // ============================================
  const audioVisBars=document.createElement('div');
  audioVisBars.style.cssText=`position:fixed;bottom:2rem;right:2rem;display:flex;gap:3px;align-items:flex-end;z-index:9990;opacity:0;transition:opacity 0.3s;`;
  for(let i=0;i<8;i++){
    const b=document.createElement('div');
    b.style.cssText=`width:3px;background:#E01B24;border-radius:2px;animation:audioBar ${0.3+Math.random()*0.5}s ease-in-out infinite alternate;`;
    b.style.height=(10+Math.random()*20)+'px';
    audioVisBars.appendChild(b);
  }
  const audioStyle=document.createElement('style');
  audioStyle.textContent=`@keyframes audioBar{0%{transform:scaleY(0.3);}100%{transform:scaleY(1.5);}}`;
  document.head.appendChild(audioStyle);
  document.body.appendChild(audioVisBars);
  window.addEventListener('scroll',()=>{
    audioVisBars.style.opacity='1';
    clearTimeout(window._audioTimer);
    window._audioTimer=setTimeout(()=>audioVisBars.style.opacity='0',1000);
  },{passive:true});
}
