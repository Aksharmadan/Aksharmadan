import './style.css';
import { initLoader } from './sections/loader.js';
import { initCursor } from './components/cursor.js';
import { initHero } from './sections/hero.js';
import { initAbout } from './sections/about.js';
import { initSkills } from './sections/skills.js';
import { initProjects } from './sections/projects.js';
import { initExperience } from './sections/experience.js';
import { initContact } from './sections/contact.js';
import { initSpidey } from './components/spidey.js';
import { initScrollAnimations } from './components/scroll.js';
import { initEasterEgg } from './components/easter.js';
import { initExtras } from './components/extras.js';
import { initGame } from './components/game.js';
import { initTerminal } from './components/terminal.js';
import { initVillain } from './components/villain.js';
import { initMatrix } from './components/matrix.js';
import { initAurora } from './components/aurora.js';
import { initSecret } from './components/secret.js';
import { initVSCode } from './components/vscode.js';
import { initHelicopter } from './components/helicopter.js';
import { initVisual } from './components/visual.js';

document.querySelector('#app').innerHTML = `
  <div id="progress-bar"></div>
  <div id="loader">
    <svg id="loader-web" viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="60" r="55" stroke="#E01B24" stroke-width="1.5" stroke-dasharray="4 4"/>
      <line x1="60" y1="5" x2="60" y2="115" stroke="#E01B24" stroke-width="1"/>
      <line x1="5" y1="60" x2="115" y2="60" stroke="#E01B24" stroke-width="1"/>
      <line x1="21" y1="21" x2="99" y2="99" stroke="#E01B24" stroke-width="1"/>
      <line x1="99" y1="21" x2="21" y2="99" stroke="#E01B24" stroke-width="1"/>
      <circle cx="60" cy="60" r="8" fill="#E01B24"/>
      <circle cx="60" cy="5" r="3" fill="#E01B24"/>
      <circle cx="60" cy="115" r="3" fill="#E01B24"/>
      <circle cx="5" cy="60" r="3" fill="#E01B24"/>
      <circle cx="115" cy="60" r="3" fill="#E01B24"/>
    </svg>
    <div id="loader-text">LOADING...</div>
  </div>
  <div id="cursor"><svg viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="6" fill="#E01B24"/><line x1="14" y1="2" x2="14" y2="26" stroke="#E01B24" stroke-width="1.5"/><line x1="2" y1="14" x2="26" y2="14" stroke="#E01B24" stroke-width="1.5"/><line x1="5" y1="5" x2="23" y2="23" stroke="#E01B24" stroke-width="1"/><line x1="23" y1="5" x2="5" y2="23" stroke="#E01B24" stroke-width="1"/></svg></div>
  <canvas id="cursor-trail"></canvas>
  <div id="bg-spidey"><svg viewBox="0 0 100 130" fill="none"><ellipse cx="50" cy="75" rx="22" ry="30" fill="white"/><ellipse cx="50" cy="38" rx="18" ry="20" fill="white"/><ellipse cx="43" cy="35" rx="8" ry="10" fill="white" transform="rotate(-10 43 35)"/><ellipse cx="57" cy="35" rx="8" ry="10" fill="white" transform="rotate(10 57 35)"/><path d="M28 70 Q10 55 5 40" stroke="white" stroke-width="10" stroke-linecap="round" fill="none"/><path d="M72 70 Q90 55 95 40" stroke="white" stroke-width="10" stroke-linecap="round" fill="none"/><path d="M40 100 Q30 118 20 125" stroke="white" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M60 100 Q70 118 80 125" stroke="white" stroke-width="8" stroke-linecap="round" fill="none"/></svg></div>
  <header id="navbar">
    <a class="logo" href="#hero">WEB<span>.</span>DEV</a>
    <nav>
      <a href="#about">Origin</a>
      <a href="#skills">Arsenal</a>
      <a href="#projects">Missions</a>
      <a href="#experience">Timeline</a>
      <a href="#contact">Signal</a>
    </nav>
  </header>
  <div id="spidey"><svg viewBox="0 0 100 130" fill="none"><ellipse cx="50" cy="75" rx="22" ry="30" fill="#E01B24"/><ellipse cx="50" cy="38" rx="18" ry="20" fill="#E01B24"/><ellipse cx="43" cy="35" rx="8" ry="10" fill="white" transform="rotate(-10 43 35)"/><ellipse cx="57" cy="35" rx="8" ry="10" fill="white" transform="rotate(10 57 35)"/><ellipse cx="43" cy="35" rx="5" ry="7" fill="#1A56DB" transform="rotate(-10 43 35)"/><ellipse cx="57" cy="35" rx="5" ry="7" fill="#1A56DB" transform="rotate(10 57 35)"/><path d="M32 30 Q50 20 68 30" stroke="#8B0000" stroke-width="0.8" fill="none"/><path d="M30 38 Q50 28 70 38" stroke="#8B0000" stroke-width="0.8" fill="none"/><path d="M50 18 L50 58" stroke="#8B0000" stroke-width="0.8"/><path d="M36 22 L50 58" stroke="#8B0000" stroke-width="0.6"/><path d="M64 22 L50 58" stroke="#8B0000" stroke-width="0.6"/><path d="M28 70 Q10 55 5 40" stroke="#E01B24" stroke-width="10" stroke-linecap="round" fill="none"/><path d="M72 70 Q90 55 95 40" stroke="#E01B24" stroke-width="10" stroke-linecap="round" fill="none"/><circle cx="5" cy="38" r="6" fill="#E01B24"/><circle cx="95" cy="38" r="6" fill="#E01B24"/><path d="M40 100 Q30 118 20 125" stroke="#1A56DB" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M60 100 Q70 118 80 125" stroke="#1A56DB" stroke-width="8" stroke-linecap="round" fill="none"/><rect x="30" y="90" width="40" height="8" rx="4" fill="#1A56DB"/><ellipse cx="50" cy="70" rx="6" ry="8" fill="#000" opacity="0.5"/><line x1="44" y1="68" x2="36" y2="62" stroke="#000" stroke-width="1.5" opacity="0.5"/><line x1="44" y1="72" x2="36" y2="78" stroke="#000" stroke-width="1.5" opacity="0.5"/><line x1="56" y1="68" x2="64" y2="62" stroke="#000" stroke-width="1.5" opacity="0.5"/><line x1="56" y1="72" x2="64" y2="78" stroke="#000" stroke-width="1.5" opacity="0.5"/></svg></div>
  <section id="hero">
    <div id="hero-bg"></div>
    <canvas class="rain-canvas" id="rain-canvas"></canvas>
    <svg class="web-corner tl" width="200" height="200" viewBox="0 0 200 200"><path d="M0,0 Q100,0 200,100" stroke="#C8C8C8" stroke-width="0.8" fill="none" opacity="0.4"/><path d="M0,0 Q80,20 120,200" stroke="#C8C8C8" stroke-width="0.8" fill="none" opacity="0.4"/><path d="M0,0 L200,200" stroke="#C8C8C8" stroke-width="0.5" fill="none" opacity="0.2"/><path d="M0,0 Q50,50 0,200" stroke="#C8C8C8" stroke-width="0.8" fill="none" opacity="0.3"/></svg>
    <svg class="web-corner tr" width="200" height="200" viewBox="0 0 200 200"><path d="M0,0 Q100,0 200,100" stroke="#C8C8C8" stroke-width="0.8" fill="none" opacity="0.4"/><path d="M0,0 Q80,20 120,200" stroke="#C8C8C8" stroke-width="0.8" fill="none" opacity="0.4"/><path d="M0,0 L200,200" stroke="#C8C8C8" stroke-width="0.5" fill="none" opacity="0.2"/><path d="M0,0 Q50,50 0,200" stroke="#C8C8C8" stroke-width="0.8" fill="none" opacity="0.3"/></svg>
    <svg class="skyline" viewBox="0 0 1440 300" preserveAspectRatio="xMidYMax meet"><defs><linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a0a1a"/><stop offset="100%" stop-color="#030305"/></linearGradient></defs><rect width="1440" height="300" fill="url(#skyGrad)"/><rect x="0" y="180" width="60" height="120" fill="#0a0a15"/><rect x="10" y="160" width="40" height="140" fill="#0c0c1a"/><rect x="55" y="140" width="80" height="160" fill="#080812"/><rect x="80" y="120" width="50" height="180" fill="#0a0a18"/><rect x="140" y="160" width="70" height="140" fill="#06060f"/><rect x="200" y="100" width="100" height="200" fill="#080812"/><rect x="220" y="80" width="60" height="220" fill="#0a0a1a"/><rect x="310" y="150" width="80" height="150" fill="#070710"/><rect x="380" y="120" width="55" height="180" fill="#090914"/><rect x="430" y="90" width="90" height="210" fill="#0a0a18"/><rect x="450" y="70" width="50" height="230" fill="#0c0c1e"/><rect x="530" y="140" width="75" height="160" fill="#080812"/><rect x="600" y="100" width="85" height="200" fill="#070710"/><rect x="620" y="60" width="45" height="240" fill="#0a0a1a"/><rect x="680" y="130" width="70" height="170" fill="#08080f"/><rect x="750" y="90" width="95" height="210" fill="#090914"/><rect x="780" y="50" width="35" height="250" fill="#0c0c1e"/><rect x="850" y="110" width="80" height="190" fill="#080812"/><rect x="920" y="80" width="100" height="220" fill="#070710"/><rect x="950" y="40" width="40" height="260" fill="#0a0a18"/><rect x="1030" y="130" width="75" height="170" fill="#09091a"/><rect x="1100" y="100" width="85" height="200" fill="#080812"/><rect x="1130" y="60" width="30" height="240" fill="#0c0c1e"/><rect x="1190" y="120" width="90" height="180" fill="#070710"/><rect x="1270" y="90" width="70" height="210" fill="#090914"/><rect x="1340" y="140" width="100" height="160" fill="#080812"/><rect x="215" y="90" width="4" height="4" fill="#FFD700" opacity="0.6"/><rect x="455" y="80" width="4" height="4" fill="#FFD700" opacity="0.7"/><rect x="625" y="70" width="4" height="4" fill="#FFD700" opacity="0.6"/><rect x="783" y="60" width="4" height="4" fill="#FFD700" opacity="0.8"/><rect x="953" y="50" width="4" height="4" fill="#FFD700" opacity="0.6"/><rect x="1133" y="70" width="4" height="4" fill="#FFD700" opacity="0.5"/></svg>
    <div id="hero-content">
      <h1 class="glitch" data-text="AKSHAR MADAN">AKSHAR<br/><span>MADAN</span></h1>
      <h2>I BUILD THE WEB.</h2>
      <p>[ COMPUTER SCIENCE ENGINEER · CLOUD COMPUTING · SRM IST ]</p>
    </div>
    <div id="scroll-indicator"><span>SCROLL</span><div class="scroll-web"></div></div>
  </section>
  <section id="about">
    <span class="section-label">01 / ORIGIN STORY</span>
    <div class="about-inner">
      <div class="about-text">
        <p class="comic-text">"Not bitten by a<br/><em>radioactive spider...</em>"</p>
        <p class="comic-text">"Just a developer<br/><em>obsessed with the web.</em>"</p>
      </div>
      <div class="bio-card">
        <h3>AKSHAR MADAN</h3>
        <p>B.Tech CSE (Cloud Computing) · SRM IST Chennai · CGPA 8.65 · Class of 2028.</p>
        <p>Building the web with code, one commit at a time. Passionate about Full Stack Dev, ML, and Cloud Computing.</p>
        <p>Researcher at UROP SRMIST — Smart Demand Forecasting in Transportation using ML.</p>
        <div style="margin-top:1rem"><span class="tag">React</span><span class="tag">Node.js</span><span class="tag">Python</span><span class="tag">Cloud</span><span class="tag">ML</span><span class="tag">TypeScript</span></div>
      </div>
    </div>
  </section>
  <section id="skills">
    <span class="section-label">02 / THE ARSENAL</span>
    <canvas id="web-canvas"></canvas>
    <h2>TECH <span>STACK</span></h2>
    <div class="skills-grid">
      <div class="skill-orb"><div class="orb">⚛️</div><div class="skill-name">React</div><div class="skill-bar-wrap"><div class="skill-bar" data-width="85"></div></div></div>
      <div class="skill-orb"><div class="orb">🟨</div><div class="skill-name">JavaScript</div><div class="skill-bar-wrap"><div class="skill-bar" data-width="88"></div></div></div>
      <div class="skill-orb"><div class="orb">🟦</div><div class="skill-name">TypeScript</div><div class="skill-bar-wrap"><div class="skill-bar" data-width="75"></div></div></div>
      <div class="skill-orb"><div class="orb">🐍</div><div class="skill-name">Python</div><div class="skill-bar-wrap"><div class="skill-bar" data-width="82"></div></div></div>
      <div class="skill-orb"><div class="orb">🟢</div><div class="skill-name">Node.js</div><div class="skill-bar-wrap"><div class="skill-bar" data-width="78"></div></div></div>
      <div class="skill-orb"><div class="orb">☕</div><div class="skill-name">Java</div><div class="skill-bar-wrap"><div class="skill-bar" data-width="70"></div></div></div>
      <div class="skill-orb"><div class="orb">🗄️</div><div class="skill-name">MySQL</div><div class="skill-bar-wrap"><div class="skill-bar" data-width="72"></div></div></div>
      <div class="skill-orb"><div class="orb">☁️</div><div class="skill-name">Cloud</div><div class="skill-bar-wrap"><div class="skill-bar" data-width="80"></div></div></div>
      <div class="skill-orb"><div class="orb">🐙</div><div class="skill-name">Git</div><div class="skill-bar-wrap"><div class="skill-bar" data-width="90"></div></div></div>
    </div>
  </section>
  <section id="projects">
    <span class="section-label">03 / MISSIONS</span>
    <h2>ACTIVE <span>MISSIONS</span></h2>
    <div class="projects-grid">
      <div class="project-card"><span class="project-num">01</span><div class="classified-stamp">CLASSIFIED — ACTIVE</div><h3>Smart Demand Forecasting</h3><p>ML-powered transportation and logistics demand forecasting using regression & time-series techniques.</p><div class="project-tags"><span>Python</span><span>ML</span><span>Data Analytics</span><span>UROP</span></div><div class="project-links"><a href="https://github.com/Aksharmadan" target="_blank">↗ GitHub</a></div></div>
      <div class="project-card"><span class="project-num">02</span><div class="classified-stamp">COMPLETE</div><h3>Web Dev Training Projects</h3><p>Full-stack projects from 2-month Novacode training. React, Node.js, REST APIs, database integration.</p><div class="project-tags"><span>React</span><span>Node.js</span><span>MySQL</span><span>REST API</span></div><div class="project-links"><a href="https://github.com/Aksharmadan" target="_blank">↗ GitHub</a></div></div>
      <div class="project-card"><span class="project-num">03</span><div class="classified-stamp">COMPLETE</div><h3>Heisen Hack Organizer</h3><p>Co-organized campus hackathon under SRM ACM SIGKDD. Logistics, problem statements, onboarding.</p><div class="project-tags"><span>Hackathon</span><span>Leadership</span><span>SRM ACM</span></div><div class="project-links"><a href="https://github.com/Aksharmadan" target="_blank">↗ GitHub</a></div></div>
      <div class="project-card"><span class="project-num">04</span><div class="classified-stamp">ONGOING</div><h3>Cloud & AI Certifications</h3><p>Google Cloud, Oracle AI, IBM, McKinsey Forward — all verified on Credly.</p><div class="project-tags"><span>Google Cloud</span><span>Oracle AI</span><span>IBM</span><span>McKinsey</span></div><div class="project-links"><a href="https://www.credly.com/users/akshar-madan" target="_blank">↗ Credly</a></div></div>
    </div>
  </section>
  <section id="experience">
    <span class="section-label">04 / TIMELINE</span>
    <h2>THE <span>JOURNEY</span></h2>
    <div class="timeline">
      <div class="timeline-line"></div>
      <div class="timeline-item"><div class="timeline-dot"><svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="#E01B24" opacity="0.2"/><circle cx="10" cy="10" r="4" fill="#E01B24"/></svg></div><div class="timeline-content"><h4>B.Tech — CSE (Cloud Computing)</h4><div class="company">SRM IST, Chennai</div><div class="date">2024 — Present</div><p>CGPA 8.65 · Researcher & hackathon organizer.</p></div></div>
      <div class="timeline-item"><div class="timeline-dot"><svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="#E01B24" opacity="0.2"/><circle cx="10" cy="10" r="4" fill="#E01B24"/></svg></div><div class="timeline-content"><h4>Web Development Training</h4><div class="company">Novacode</div><div class="date">Aug — Oct 2025</div><p>2-month intensive full-stack: React, Node.js, databases.</p></div></div>
      <div class="timeline-item"><div class="timeline-dot"><svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="#E01B24" opacity="0.2"/><circle cx="10" cy="10" r="4" fill="#E01B24"/></svg></div><div class="timeline-content"><h4>UROP Research</h4><div class="company">SRM IST</div><div class="date">Aug 2025 — Present</div><p>Smart Demand Forecasting using ML.</p></div></div>
      <div class="timeline-item"><div class="timeline-dot"><svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="#E01B24" opacity="0.2"/><circle cx="10" cy="10" r="4" fill="#E01B24"/></svg></div><div class="timeline-content"><h4>Microsoft AICTE Internship</h4><div class="company">Microsoft Elevate</div><div class="date">Ongoing</div><p>4-week Emerging Technologies program.</p></div></div>
      <div class="timeline-item"><div class="timeline-dot"><svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="#FFD700" opacity="0.3"/><circle cx="10" cy="10" r="4" fill="#FFD700"/></svg></div><div class="timeline-content"><h4>Heisen Hack Organizer</h4><div class="company">SRM ACM SIGKDD</div><div class="date">Dec 2025</div><p>Co-organized hackathon. Led problem design.</p></div></div>
    </div>
  </section>
  <section id="contact">
    <svg class="spider-signal" viewBox="0 0 400 400"><circle cx="200" cy="200" r="190" stroke="#E01B24" stroke-width="1" fill="none"/><circle cx="200" cy="200" r="140" stroke="#E01B24" stroke-width="0.8" fill="none"/><circle cx="200" cy="200" r="90" stroke="#E01B24" stroke-width="0.6" fill="none"/><line x1="200" y1="10" x2="200" y2="390" stroke="#E01B24" stroke-width="0.5"/><line x1="10" y1="200" x2="390" y2="200" stroke="#E01B24" stroke-width="0.5"/><line x1="55" y1="55" x2="345" y2="345" stroke="#E01B24" stroke-width="0.5"/><line x1="345" y1="55" x2="55" y2="345" stroke="#E01B24" stroke-width="0.5"/><ellipse cx="200" cy="200" rx="20" ry="28" fill="#E01B24"/><line x1="180" y1="192" x2="160" y2="178" stroke="#E01B24" stroke-width="2"/><line x1="180" y1="206" x2="160" y2="220" stroke="#E01B24" stroke-width="2"/><line x1="220" y1="192" x2="240" y2="178" stroke="#E01B24" stroke-width="2"/><line x1="220" y1="206" x2="240" y2="220" stroke="#E01B24" stroke-width="2"/></svg>
    <h2>SEND THE <span>SIGNAL</span></h2>
    <p class="subtitle">[ OPEN FOR OPPORTUNITIES · COLLABORATIONS · TALKS ]</p>
    <form class="contact-form" id="contact-form">
      <div class="form-group"><label>// YOUR NAME</label><input type="text" placeholder="Peter Parker" required/></div>
      <div class="form-group"><label>// YOUR EMAIL</label><input type="email" placeholder="peter@dailybugle.com" required/></div>
      <div class="form-group"><label>// YOUR MESSAGE</label><textarea placeholder="With great power comes great responsibility..." required></textarea></div>
      <button type="button" class="submit-btn" id="submit-btn">SHOOT THE WEB 🕸️</button>
    </form>
    <div class="contact-links">
      <a href="mailto:aksharmadan000@gmail.com">EMAIL</a>
      <a href="https://github.com/Aksharmadan" target="_blank">GITHUB</a>
      <a href="https://www.linkedin.com/in/akshar-madan-539896323/" target="_blank">LINKEDIN</a>
      <a href="https://www.hackerrank.com/profile/aksharmadan000" target="_blank">HACKERRANK</a>
      <a href="https://leetcode.com/u/zuzVBU5EdU/" target="_blank">LEETCODE</a>
      <a href="https://www.credly.com/users/akshar-madan" target="_blank">CREDLY</a>
    </div>
  </section>
  <footer><p>DESIGNED & BUILT BY <span>AKSHAR MADAN</span> · WITH ❤️ & 🕷️ · 2025</p></footer>
  <div id="easter-egg"><div class="flip-spidey">🕷️</div><div>MARVEL MODE ACTIVATED</div></div>
`;

initLoader();
initCursor();
initHero();
initAbout();
initSkills();
initProjects();
initExperience();
initContact();
initSpidey();
initScrollAnimations();
initEasterEgg();
initExtras();
initGame();
initTerminal();
initVillain();
initMatrix();
initAurora();
initSecret();
initVSCode();
initHelicopter();
initVisual();
