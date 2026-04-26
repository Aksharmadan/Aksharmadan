export function initVisual() {

  // 1. MORPHING BLOBS
  const blobCanvas = document.createElement('canvas');
  blobCanvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:0;opacity:0.3;';
  document.body.appendChild(blobCanvas);
  const bctx = blobCanvas.getContext('2d');
  function resizeBlob() { blobCanvas.width = window.innerWidth; blobCanvas.height = window.innerHeight; }
  resizeBlob();
  window.addEventListener('resize', resizeBlob);
  const blobs = [
    { x:0.2, y:0.3, r:0.22, vx:0.0003, vy:0.0002, color:[224,27,36] },
    { x:0.8, y:0.6, r:0.18, vx:-0.0002, vy:0.0003, color:[26,86,219] },
    { x:0.5, y:0.8, r:0.16, vx:0.0002, vy:-0.0003, color:[100,0,180] },
  ];
  let blobT = 0;
  function drawBlobs() {
    bctx.clearRect(0,0,blobCanvas.width,blobCanvas.height);
    blobT += 0.004;
    blobs.forEach(b => {
      b.x += Math.sin(blobT*0.7)*b.vx; b.y += Math.cos(blobT*0.5)*b.vy;
      if(b.x<0.1||b.x>0.9) b.vx*=-1;
      if(b.y<0.1||b.y>0.9) b.vy*=-1;
      const gx=b.x*blobCanvas.width, gy=b.y*blobCanvas.height;
      const gr=b.r*Math.min(blobCanvas.width,blobCanvas.height);
      const grad=bctx.createRadialGradient(gx,gy,0,gx,gy,gr);
      grad.addColorStop(0,`rgba(${b.color.join(',')},0.12)`);
      grad.addColorStop(0.5,`rgba(${b.color.join(',')},0.05)`);
      grad.addColorStop(1,`rgba(${b.color.join(',')},0)`);
      bctx.beginPath(); bctx.arc(gx,gy,gr,0,Math.PI*2);
      bctx.fillStyle=grad; bctx.fill();
    });
    requestAnimationFrame(drawBlobs);
  }
  drawBlobs();

  // 2. LIQUID CURSOR
  const liqCanvas = document.createElement('canvas');
  liqCanvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9997;';
  document.body.appendChild(liqCanvas);
  const lctx = liqCanvas.getContext('2d');
  function resizeLiq() { liqCanvas.width=window.innerWidth; liqCanvas.height=window.innerHeight; }
  resizeLiq();
  window.addEventListener('resize', resizeLiq);
  const liqPts = [];
  let lmx=-100, lmy=-100;
  window.addEventListener('mousemove', e => { lmx=e.clientX; lmy=e.clientY; });
  function drawLiquid() {
    lctx.clearRect(0,0,liqCanvas.width,liqCanvas.height);
    liqPts.push({x:lmx,y:lmy,r:10,life:1});
    if(liqPts.length>20) liqPts.shift();
    liqPts.forEach((p,i) => {
      p.life-=0.05; p.r*=0.95;
      if(p.life<=0) return;
      const a=p.life*0.35;
      const gr=lctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*(i/liqPts.length*2.5+0.5));
      gr.addColorStop(0,`rgba(224,27,36,${a})`);
      gr.addColorStop(0.5,`rgba(26,86,219,${a*0.4})`);
      gr.addColorStop(1,`rgba(224,27,36,0)`);
      lctx.beginPath();
      lctx.arc(p.x,p.y,Math.max(0.1,p.r*(i/liqPts.length*2+0.5)),0,Math.PI*2);
      lctx.fillStyle=gr; lctx.fill();
    });
    for(let i=1;i<liqPts.length;i++) {
      const a=liqPts[i-1], b=liqPts[i];
      if(a.life<=0||b.life<=0) continue;
      lctx.beginPath(); lctx.moveTo(a.x,a.y); lctx.lineTo(b.x,b.y);
      lctx.strokeStyle=`rgba(224,27,36,${b.life*0.25})`;
      lctx.lineWidth=b.r*0.6; lctx.lineCap='round'; lctx.stroke();
    }
    requestAnimationFrame(drawLiquid);
  }
  drawLiquid();

  // 3. MARQUEE TICKER
  const marquee = document.createElement('div');
  marquee.style.cssText = `position:fixed;bottom:0;left:0;right:0;z-index:9988;
    background:rgba(224,27,36,0.06);border-top:1px solid rgba(224,27,36,0.15);
    overflow:hidden;height:28px;display:flex;align-items:center;`;
  const mi = document.createElement('div');
  mi.style.cssText = `display:flex;white-space:nowrap;animation:mq 30s linear infinite;
    font-family:'Space Mono',monospace;font-size:0.6rem;
    color:rgba(224,27,36,0.6);letter-spacing:0.2em;`;
  const t = '🕷 AKSHAR MADAN &nbsp;·&nbsp; WEB DEVELOPER &nbsp;·&nbsp; SRM IST &nbsp;·&nbsp; CGPA 8.65 &nbsp;·&nbsp; AVAILABLE FOR HIRE &nbsp;·&nbsp; REACT &nbsp;·&nbsp; NODE.JS &nbsp;·&nbsp; PYTHON &nbsp;·&nbsp; CLOUD COMPUTING &nbsp;·&nbsp; ';
  mi.innerHTML = t.repeat(5);
  marquee.appendChild(mi);
  document.body.appendChild(marquee);
  const ms = document.createElement('style');
  ms.textContent = `@keyframes mq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`;
  document.head.appendChild(ms);

  // 4. SLOW HERO ZOOM
  const heroBg = document.getElementById('hero-bg');
  if(heroBg) {
    const zs = document.createElement('style');
    zs.textContent = `@keyframes hzoom{0%{transform:scale(1)}100%{transform:scale(1.06)}}`;
    document.head.appendChild(zs);
    heroBg.style.animation = 'hzoom 25s ease-in-out infinite alternate';
  }

  // 5. SHOCKWAVE ON SECTION ENTER
  const shockC = document.createElement('canvas');
  shockC.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9986;';
  document.body.appendChild(shockC);
  const sctx = shockC.getContext('2d');
  function resizeShock() { shockC.width=window.innerWidth; shockC.height=window.innerHeight; }
  resizeShock(); window.addEventListener('resize',resizeShock);
  const waves = [];
  function triggerWave() {
    waves.push({x:window.innerWidth/2,y:window.innerHeight/2,r:0,a:0.5});
  }
  function drawWaves() {
    sctx.clearRect(0,0,shockC.width,shockC.height);
    waves.forEach((w,i) => {
      w.r+=14; w.a-=0.01;
      if(w.a<=0){waves.splice(i,1);return;}
      sctx.beginPath(); sctx.arc(w.x,w.y,w.r,0,Math.PI*2);
      sctx.strokeStyle=`rgba(224,27,36,${w.a})`; sctx.lineWidth=2; sctx.stroke();
      sctx.beginPath(); sctx.arc(w.x,w.y,w.r*0.8,0,Math.PI*2);
      sctx.strokeStyle=`rgba(26,86,219,${w.a*0.4})`; sctx.lineWidth=1; sctx.stroke();
    });
    requestAnimationFrame(drawWaves);
  }
  drawWaves();
  let lastSec=-1;
  window.addEventListener('scroll',()=>{
    const i=Math.floor(window.scrollY/window.innerHeight);
    if(i!==lastSec){lastSec=i;triggerWave();}
  },{passive:true});

  // 6. NEON BORDER ON CARD HOVER
  document.querySelectorAll('.project-card,.bio-card,.timeline-content').forEach(card => {
    let aid;
    card.style.position='relative'; card.style.overflow='hidden';
    const neon=document.createElement('div');
    neon.style.cssText='position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity 0.3s;';
    card.appendChild(neon);
    card.addEventListener('mouseenter',()=>{
      neon.style.opacity='1'; let pos=0;
      cancelAnimationFrame(aid);
      function ani(){
        pos=(pos+2)%360;
        neon.style.background=`linear-gradient(${pos}deg,transparent 0%,rgba(224,27,36,0.12) 40%,rgba(26,86,219,0.12) 60%,transparent 100%)`;
        aid=requestAnimationFrame(ani);
      }
      ani();
    });
    card.addEventListener('mouseleave',()=>{neon.style.opacity='0';cancelAnimationFrame(aid);});
  });

  // 7. PAGE BLEED RED
  const bleed=document.createElement('div');
  bleed.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:9985;box-shadow:inset 0 0 0px rgba(224,27,36,0);transition:box-shadow 2s ease;';
  document.body.appendChild(bleed);
  const secs=document.querySelectorAll('section');
  const bo=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        setTimeout(()=>{
          bleed.style.boxShadow='inset 0 0 100px rgba(224,27,36,0.1)';
          setTimeout(()=>{bleed.style.boxShadow='inset 0 0 0px rgba(224,27,36,0)';},2500);
        },800);
      }
    });
  },{threshold:0.5});
  secs.forEach(s=>bo.observe(s));

  // 8. FILM GRAIN
  const grain=document.createElement('canvas');
  grain.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:9984;opacity:0.025;';
  document.body.appendChild(grain);
  const gctx=grain.getContext('2d');
  function drawGrain(){
    grain.width=window.innerWidth; grain.height=window.innerHeight;
    const img=gctx.createImageData(grain.width,grain.height);
    for(let i=0;i<img.data.length;i+=4){
      const v=Math.random()*255;
      img.data[i]=v;img.data[i+1]=v;img.data[i+2]=v;img.data[i+3]=255;
    }
    gctx.putImageData(img,0,0);
  }
  drawGrain(); setInterval(drawGrain,100);

  // 9. RED SWEEP
  const sweep=document.createElement('div');
  sweep.style.cssText='position:fixed;left:0;right:0;height:2px;background:linear-gradient(to right,transparent,rgba(224,27,36,0.5),transparent);pointer-events:none;z-index:9983;top:-2px;';
  document.body.appendChild(sweep);
  const ss=document.createElement('style');
  ss.textContent=`@keyframes swpDown{0%{top:-2px;opacity:0}5%{opacity:1}95%{opacity:1}100%{top:100vh;opacity:0}}`;
  document.head.appendChild(ss);
  setInterval(()=>{sweep.style.animation='none';sweep.offsetHeight;sweep.style.animation='swpDown 5s linear forwards';},9000);

  // 10. GOLD DUST
  const goldC=document.createElement('canvas');
  goldC.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:2;';
  document.body.appendChild(goldC);
  const gldctx=goldC.getContext('2d');
  function resizeGold(){goldC.width=window.innerWidth;goldC.height=window.innerHeight;}
  resizeGold(); window.addEventListener('resize',resizeGold);
  const gold=Array.from({length:35},()=>({
    x:Math.random()*window.innerWidth,
    y:Math.random()*window.innerHeight+window.innerHeight,
    r:Math.random()*1.5+0.5,spd:Math.random()*0.4+0.15,
    drift:(Math.random()-0.5)*0.25,op:Math.random()*0.35+0.1,
    tw:Math.random()*Math.PI*2
  }));
  function drawGold(){
    gldctx.clearRect(0,0,goldC.width,goldC.height);
    gold.forEach(p=>{
      p.y-=p.spd; p.x+=p.drift; p.tw+=0.04;
      if(p.y<-10){p.y=goldC.height+10;p.x=Math.random()*goldC.width;}
      const a=p.op*(0.5+0.5*Math.sin(p.tw));
      gldctx.beginPath();gldctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      gldctx.fillStyle=`rgba(255,215,0,${a})`;gldctx.fill();
    });
    requestAnimationFrame(drawGold);
  }
  drawGold();

  // 11. STAGGERED LETTER REVEAL
  document.querySelectorAll('#skills h2,#projects h2,#experience h2,#contact h2').forEach(h=>{
    const txt=h.innerHTML;
    h.innerHTML=txt.split('').map((c,i)=>`<span style="display:inline-block;opacity:0;transform:translateY(25px) rotate(${(Math.random()-0.5)*15}deg);transition:opacity 0.4s ${i*0.025}s,transform 0.4s ${i*0.025}s cubic-bezier(0.16,1,0.3,1);">${c==' '?'&nbsp;':c}</span>`).join('');
    const o=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          h.querySelectorAll('span').forEach(s=>{s.style.opacity='1';s.style.transform='none';});
          o.unobserve(h);
        }
      });
    },{threshold:0.3});
    o.observe(h);
  });

  // 12. CARDS BREATHE
  const bs=document.createElement('style');
  bs.textContent=`
    .project-card{animation:cbrth 4s ease-in-out infinite;}
    .project-card:nth-child(2){animation-delay:0.6s;}
    .project-card:nth-child(3){animation-delay:1.2s;}
    .project-card:nth-child(4){animation-delay:1.8s;}
    @keyframes cbrth{0%,100%{box-shadow:0 0 10px rgba(224,27,36,0.04);}50%{box-shadow:0 0 30px rgba(224,27,36,0.12),0 0 50px rgba(26,86,219,0.06);}}
  `;
  document.head.appendChild(bs);

  // 13. GOLD CONSTELLATION CURSOR
  const starC=document.createElement('canvas');
  starC.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:9979;';
  document.body.appendChild(starC);
  const starCtx=starC.getContext('2d');
  function resizeStar(){starC.width=window.innerWidth;starC.height=window.innerHeight;}
  resizeStar(); window.addEventListener('resize',resizeStar);
  const stars=[];
  let smx=-999,smy=-999;
  window.addEventListener('mousemove',e=>{smx=e.clientX;smy=e.clientY;});
  function drawStars(){
    starCtx.clearRect(0,0,starC.width,starC.height);
    stars.push({x:smx,y:smy,age:0});
    if(stars.length>10) stars.shift();
    stars.forEach((p,i)=>{
      p.age++;
      const a=Math.max(0,1-p.age/50);
      starCtx.beginPath();starCtx.arc(p.x,p.y,1.5,0,Math.PI*2);
      starCtx.fillStyle=`rgba(255,215,0,${a*0.7})`;starCtx.fill();
    });
    for(let i=0;i<stars.length;i++){
      for(let j=i+1;j<stars.length;j++){
        const dx=stars[i].x-stars[j].x,dy=stars[i].y-stars[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<80){
          starCtx.beginPath();starCtx.moveTo(stars[i].x,stars[i].y);starCtx.lineTo(stars[j].x,stars[j].y);
          starCtx.strokeStyle=`rgba(255,215,0,${(1-d/80)*0.2})`;starCtx.lineWidth=0.5;starCtx.stroke();
        }
      }
    }
    requestAnimationFrame(drawStars);
  }
  drawStars();

  // 14. IDLE COCOON
  let idleT;
  const cocoon=document.createElement('div');
  cocoon.style.cssText='position:fixed;z-index:501;pointer-events:none;opacity:0;transition:opacity 0.5s;font-size:3.5rem;';
  document.body.appendChild(cocoon);
  cocoon.textContent='🕸️';
  function resetIdle(){
    clearTimeout(idleT);
    if(cocoon.style.opacity==='1'){
      cocoon.style.opacity='0';
      const sp=document.getElementById('spidey');
      if(sp) sp.style.opacity='1';
      document.getElementById('zzz')?.remove();
    }
    idleT=setTimeout(()=>{
      const sp=document.getElementById('spidey');
      if(!sp) return;
      const r=sp.getBoundingClientRect();
      cocoon.style.left=(r.left-15)+'px';
      cocoon.style.top=(r.top-15)+'px';
      cocoon.style.opacity='1';
      sp.style.opacity='0.3';
      const zzz=document.createElement('div');
      zzz.id='zzz';
      zzz.style.cssText=`position:fixed;left:${r.left+65}px;top:${r.top-15}px;font-family:'Space Mono',monospace;font-size:0.75rem;color:rgba(200,200,200,0.6);pointer-events:none;z-index:502;animation:zfloat 2s ease-in-out infinite;`;
      zzz.textContent='z z z...';
      document.body.appendChild(zzz);
      if(!document.getElementById('zfst')){
        const s=document.createElement('style');
        s.id='zfst';
        s.textContent='@keyframes zfloat{0%,100%{transform:translateY(0);opacity:0.6}50%{transform:translateY(-8px);opacity:0.3}}';
        document.head.appendChild(s);
      }
    },10000);
  }
  window.addEventListener('mousemove',resetIdle);
  window.addEventListener('scroll',resetIdle,{passive:true});
  resetIdle();

  // 15. SPOTLIGHT
  const spot=document.createElement('div');
  spot.style.cssText='position:fixed;pointer-events:none;z-index:1;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,rgba(224,27,36,0.04) 0%,transparent 70%);transform:translate(-50%,-50%);';
  document.body.appendChild(spot);
  window.addEventListener('mousemove',e=>{spot.style.left=e.clientX+'px';spot.style.top=e.clientY+'px';});

  // 16. WATER RIPPLE
  const ripC=document.createElement('canvas');
  ripC.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:9980;';
  document.body.appendChild(ripC);
  const rctx=ripC.getContext('2d');
  function resizeRip(){ripC.width=window.innerWidth;ripC.height=window.innerHeight;}
  resizeRip(); window.addEventListener('resize',resizeRip);
  const rips=[];
  window.addEventListener('click',e=>{
    if(document.getElementById('gov')?.style.display==='block') return;
    rips.push({x:e.clientX,y:e.clientY,r:0,a:0.5});
  });
  function drawRips(){
    rctx.clearRect(0,0,ripC.width,ripC.height);
    rips.forEach((r,i)=>{
      r.r+=5; r.a-=0.012;
      if(r.a<=0){rips.splice(i,1);return;}
      for(let j=0;j<3;j++){
        rctx.beginPath();rctx.arc(r.x,r.y,r.r-j*12,0,Math.PI*2);
        rctx.strokeStyle=`rgba(224,27,36,${r.a*(1-j*0.3)})`;
        rctx.lineWidth=1.2-j*0.3;rctx.stroke();
      }
    });
    requestAnimationFrame(drawRips);
  }
  drawRips();

  // 17. SPIDEY POINTS AT CURSOR
  const arm=document.createElement('div');
  arm.style.cssText='position:fixed;pointer-events:none;z-index:499;height:2px;background:linear-gradient(to right,rgba(224,27,36,0.7),transparent);transform-origin:left center;border-radius:1px;';
  document.body.appendChild(arm);
  window.addEventListener('mousemove',e=>{
    const sp=document.getElementById('spidey');
    if(!sp) return;
    const r=sp.getBoundingClientRect();
    const ox=r.left+r.width/2, oy=r.top+r.height*0.3;
    const dx=e.clientX-ox, dy=e.clientY-oy;
    const ang=Math.atan2(dy,dx)*180/Math.PI;
    const dist=Math.min(Math.sqrt(dx*dx+dy*dy),70);
    arm.style.left=ox+'px'; arm.style.top=oy+'px';
    arm.style.width=dist+'px';
    arm.style.transform=`rotate(${ang}deg)`;
  });

  // 18. MAGNETIC HEADINGS
  document.querySelectorAll('section h2').forEach(h=>{
    h.addEventListener('mousemove',e=>{
      const r=h.getBoundingClientRect();
      const x=(e.clientX-r.left-r.width/2)*0.05;
      const y=(e.clientY-r.top-r.height/2)*0.05;
      h.style.transform=`translate(${x}px,${y}px)`;
    });
    h.addEventListener('mouseleave',()=>{h.style.transform='';});
  });

  // 19. TEXT SHATTER ON CLICK
  const h1=document.querySelector('#hero-content h1');
  if(h1){
    h1.style.cursor='pointer';
    h1.addEventListener('click',()=>{
      const txt=h1.innerText;
      h1.innerHTML=txt.split('').map((c,i)=>`<span style="display:inline-block;transition:all 0.5s ${i*0.015}s cubic-bezier(0.5,-0.5,0.5,1.5);">${c===' '?'&nbsp;':c}</span>`).join('');
      const spans=h1.querySelectorAll('span');
      spans.forEach(s=>{
        const rx=(Math.random()-0.5)*250, ry=(Math.random()-0.5)*250, rot=(Math.random()-0.5)*360;
        s.style.transform=`translate(${rx}px,${ry}px) rotate(${rot}deg) scale(0)`;
        s.style.opacity='0';
      });
      setTimeout(()=>{spans.forEach(s=>{s.style.transform='';s.style.opacity='1';});},900);
    });
  }

  // 20. SPIDEY REACTS TO NAME
  let typed='';
  document.addEventListener('keydown',e=>{
    typed+=e.key.toLowerCase();
    if(typed.length>8) typed=typed.slice(-8);
    if(typed.includes('akshar')){
      typed='';
      const sp=document.getElementById('spidey');
      if(!sp) return;
      const s=document.createElement('style');
      s.textContent='@keyframes spflip{0%,100%{transform:rotate(180deg)}25%{transform:rotate(180deg) scaleX(-1) scale(1.3)}50%{transform:rotate(540deg)}75%{transform:rotate(180deg) scaleX(-1)}}';
      document.head.appendChild(s);
      sp.style.animation='spflip 1s ease';
      setTimeout(()=>sp.style.animation='',1000);
      const g=document.createElement('div');
      g.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);font-family:"Bebas Neue",sans-serif;font-size:3.5rem;color:#E01B24;z-index:99996;pointer-events:none;text-align:center;letter-spacing:0.2em;text-shadow:0 0 40px rgba(224,27,36,0.8);transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1),opacity 0.5s;';
      g.textContent='HEY AKSHAR! 🕷️';
      document.body.appendChild(g);
      setTimeout(()=>g.style.transform='translate(-50%,-50%) scale(1)',50);
      setTimeout(()=>{g.style.opacity='0';setTimeout(()=>g.remove(),500);},2500);
    }
  });

  // 21. ACHIEVEMENT SYSTEM
  const achievements={
    first_scroll:{label:'🕷 First Swing!',desc:'You started the journey',done:false},
    click_10:{label:'�� Web Slinger!',desc:'10 clicks — activated',done:false},
    all_sections:{label:'🌆 City Explorer!',desc:'Visited all sections',done:false},
  };
  function unlock(id){
    const a=achievements[id];
    if(!a||a.done) return;
    a.done=true;
    const t=document.createElement('div');
    t.style.cssText='position:fixed;bottom:3.5rem;right:1.5rem;z-index:99997;background:rgba(13,13,13,0.95);border:1px solid rgba(255,215,0,0.3);border-radius:10px;padding:0.9rem 1.2rem;font-family:"Space Mono",monospace;box-shadow:0 0 25px rgba(255,215,0,0.15);min-width:220px;transform:translateX(300px);transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1);';
    t.innerHTML=`<div style="font-size:0.55rem;color:rgba(255,215,0,0.5);letter-spacing:0.25em;margin-bottom:0.3rem;">ACHIEVEMENT UNLOCKED</div><div style="font-size:0.8rem;color:#FFD700;margin-bottom:0.2rem;">${a.label}</div><div style="font-size:0.65rem;color:#C8C8C8;">${a.desc}</div>`;
    document.body.appendChild(t);
    setTimeout(()=>t.style.transform='translateX(0)',50);
    setTimeout(()=>{t.style.transform='translateX(300px)';setTimeout(()=>t.remove(),400);},4000);
  }
  window.unlockAchievement=unlock;
  window.addEventListener('scroll',()=>unlock('first_scroll'),{once:true,passive:true});
  let cc=0;
  window.addEventListener('click',()=>{cc++;if(cc>=10)unlock('click_10');});
  const sids=['hero','about','skills','projects','experience','contact'];
  const vis=new Set();
  const sobs=new IntersectionObserver(e=>{
    e.forEach(en=>{if(en.isIntersecting){vis.add(en.target.id);if(vis.size>=sids.length)unlock('all_sections');}});
  },{threshold:0.5});
  sids.forEach(id=>{const el=document.getElementById(id);if(el)sobs.observe(el);});

  // 22. SCROLL ACTIVE NAV
  window.addEventListener('scroll',()=>{
    const links=document.querySelectorAll('#navbar nav a');
    let cur='';
    document.querySelectorAll('section[id]').forEach(s=>{
      if(window.scrollY>=s.offsetTop-200) cur=s.id;
    });
    links.forEach(a=>{
      const isActive=a.getAttribute('href')==='#'+cur;
      a.style.color=isActive?'#E01B24':'';
      a.style.webkitTextFillColor=isActive?'#E01B24':'';
    });
  },{passive:true});

  // 23. FOOTER SPIDER
  const footer=document.querySelector('footer');
  if(footer){
    const fs=document.createElement('div');
    fs.style.cssText='font-size:2.5rem;margin-bottom:0.8rem;cursor:pointer;display:inline-block;';
    fs.textContent='🕷️';
    const fss=document.createElement('style');
    fss.textContent='@keyframes fsglow{0%,100%{filter:drop-shadow(0 0 5px rgba(224,27,36,0.5))}50%{filter:drop-shadow(0 0 20px rgba(224,27,36,1))}}';
    document.head.appendChild(fss);
    fs.style.animation='fsglow 2s ease-in-out infinite';
    footer.prepend(fs);
    fs.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  }

  // 24. CURSOR STAMP
  let lastStamp=0;
  window.addEventListener('mousemove',e=>{
    const now=Date.now();
    if(now-lastStamp<400) return;
    lastStamp=now;
    if(Math.random()>0.88){
      const s=document.createElement('div');
      s.style.cssText=`position:fixed;left:${e.clientX}px;top:${e.clientY}px;font-size:9px;pointer-events:none;z-index:9989;opacity:0.4;transform:translate(-50%,-50%);animation:stfade 1.2s ease forwards;`;
      s.textContent='🕷';
      document.body.appendChild(s);
      if(!document.getElementById('stfst')){
        const st=document.createElement('style');
        st.id='stfst';
        st.textContent='@keyframes stfade{0%{opacity:0.4;transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(-50%,-50%) scale(0) rotate(180deg)}}';
        document.head.appendChild(st);
      }
      setTimeout(()=>s.remove(),1200);
    }
  });

  // 25. AUDIO VISUALIZER
  const av=document.createElement('div');
  av.style.cssText='position:fixed;bottom:2rem;right:1.5rem;display:flex;gap:2px;align-items:flex-end;z-index:9990;opacity:0;transition:opacity 0.3s;';
  for(let i=0;i<8;i++){
    const b=document.createElement('div');
    b.style.cssText=`width:3px;background:linear-gradient(to top,#1A56DB,#E01B24);border-radius:1px;animation:avb ${0.3+Math.random()*0.5}s ease-in-out infinite alternate;`;
    b.style.height=(8+Math.random()*18)+'px';
    av.appendChild(b);
  }
  const avs=document.createElement('style');
  avs.textContent='@keyframes avb{0%{transform:scaleY(0.2)}100%{transform:scaleY(1.6)}}';
  document.head.appendChild(avs);
  document.body.appendChild(av);
  window.addEventListener('scroll',()=>{
    av.style.opacity='1';
    clearTimeout(window._avt);
    window._avt=setTimeout(()=>av.style.opacity='0',1200);
  },{passive:true});
}
