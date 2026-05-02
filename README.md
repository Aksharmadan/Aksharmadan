<!-- ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
<!-- ████████╗██╗  ██╗███████╗    ██╗    ██╗███████╗██████╗  -->
<!-- ╚══██╔══╝██║  ██║██╔════╝    ██║    ██║██╔════╝██╔══██╗ -->
<!--    ██║   ███████║█████╗      ██║ █╗ ██║█████╗  ██████╔╝ -->
<!--    ██║   ██╔══██║██╔══╝      ██║███╗██║██╔══╝  ██╔══██╗ -->
<!--    ██║   ██║  ██║███████╗    ╚███╔███╔╝███████╗██████╔╝ -->
<!-- ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->

<div align="center">

<!-- HERO BANNER -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=venom&color=0:000000,40:0d0010,70:1a0005,100:E01B24&height=280&section=header&text=AKSHAR%20MADAN&fontSize=75&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=🕷️%20I%20BUILD%20THE%20WEB%20🕷️&descAlignY=60&descSize=24&descColor=cccccc&stroke=E01B24&strokeWidth=3"/>

<!-- CINEMATIC ANIMATED SPIDER-MAN CITY SCENE -->
<svg width="100%" viewBox="0 0 900 220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Sky gradient -->
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#01010c"/>
      <stop offset="60%" stop-color="#0a0018"/>
      <stop offset="100%" stop-color="#1a0005"/>
    </linearGradient>
    <!-- Red glow -->
    <radialGradient id="redglow" cx="50%" cy="100%" r="60%">
      <stop offset="0%" stop-color="#E01B24" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <!-- Blue glow left -->
    <radialGradient id="blueglow" cx="10%" cy="60%" r="40%">
      <stop offset="0%" stop-color="#1A56DB" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <!-- Web strand filter -->
    <filter id="glow">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <!-- Spidey glow filter -->
    <filter id="spideyglow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- SKY -->
  <rect width="900" height="220" fill="url(#sky)"/>
  <rect width="900" height="220" fill="url(#redglow)"/>
  <rect width="900" height="220" fill="url(#blueglow)"/>

  <!-- STARS -->
  <circle cx="50" cy="15" r="0.8" fill="white" opacity="0.6"><animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite"/></circle>
  <circle cx="120" cy="8" r="1" fill="white" opacity="0.5"><animate attributeName="opacity" values="0.5;0.15;0.5" dur="2.3s" repeatCount="indefinite"/></circle>
  <circle cx="200" cy="20" r="0.7" fill="white" opacity="0.7"><animate attributeName="opacity" values="0.7;0.2;0.7" dur="4s" repeatCount="indefinite"/></circle>
  <circle cx="320" cy="12" r="0.9" fill="white" opacity="0.4"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.8s" repeatCount="indefinite"/></circle>
  <circle cx="450" cy="6" r="0.8" fill="white" opacity="0.6"><animate attributeName="opacity" values="0.6;0.1;0.6" dur="3.5s" repeatCount="indefinite"/></circle>
  <circle cx="580" cy="18" r="1" fill="white" opacity="0.5"><animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite"/></circle>
  <circle cx="700" cy="10" r="0.7" fill="white" opacity="0.7"><animate attributeName="opacity" values="0.7;0.2;0.7" dur="3.2s" repeatCount="indefinite"/></circle>
  <circle cx="820" cy="14" r="0.9" fill="white" opacity="0.4"><animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.6s" repeatCount="indefinite"/></circle>
  <circle cx="870" cy="5" r="0.8" fill="white" opacity="0.6"><animate attributeName="opacity" values="0.6;0.15;0.6" dur="3.8s" repeatCount="indefinite"/></circle>

  <!-- MOON -->
  <circle cx="800" cy="30" r="18" fill="#ffeedd" opacity="0.15"/>
  <circle cx="800" cy="30" r="14" fill="#fff8f0" opacity="0.12">
    <animate attributeName="opacity" values="0.12;0.18;0.12" dur="5s" repeatCount="indefinite"/>
  </circle>

  <!-- BUILDINGS LAYER 1 (far, dark) -->
  <rect x="0" y="120" width="55" height="100" fill="#07070f" opacity="0.9"/>
  <rect x="10" y="95" width="35" height="125" fill="#09091a" opacity="0.9"/>
  <rect x="50" y="105" width="70" height="115" fill="#06060e" opacity="0.9"/>
  <rect x="80" y="80" width="40" height="140" fill="#0a0a1c" opacity="0.9"/>
  <rect x="125" y="110" width="65" height="110" fill="#070710" opacity="0.9"/>
  <rect x="155" y="75" width="30" height="145" fill="#0c0c1e" opacity="0.9"/>
  <rect x="195" y="100" width="80" height="120" fill="#080812" opacity="0.9"/>
  <rect x="220" y="60" width="50" height="160" fill="#0a0a1a" opacity="0.9"/>
  <rect x="280" y="90" width="70" height="130" fill="#070710" opacity="0.9"/>
  <rect x="310" y="115" width="55" height="105" fill="#090914" opacity="0.9"/>
  <rect x="370" y="70" width="85" height="150" fill="#080812" opacity="0.9"/>
  <rect x="395" y="50" width="45" height="170" fill="#0c0c1e" opacity="0.9"/>
  <rect x="460" y="95" width="75" height="125" fill="#07070f" opacity="0.9"/>
  <rect x="490" y="65" width="40" height="155" fill="#0a0a18" opacity="0.9"/>
  <rect x="540" y="100" width="80" height="120" fill="#080812" opacity="0.9"/>
  <rect x="570" y="55" width="35" height="165" fill="#0c0c1e" opacity="0.9"/>
  <rect x="620" y="85" width="90" height="135" fill="#070710" opacity="0.9"/>
  <rect x="650" y="45" width="40" height="175" fill="#0a0a1a" opacity="0.9"/>
  <rect x="700" y="95" width="75" height="125" fill="#080812" opacity="0.9"/>
  <rect x="730" y="70" width="55" height="150" fill="#09091a" opacity="0.9"/>
  <rect x="790" y="100" width="80" height="120" fill="#07070f" opacity="0.9"/>
  <rect x="820" y="60" width="35" height="160" fill="#0c0c1e" opacity="0.9"/>
  <rect x="860" y="90" width="40" height="130" fill="#080812" opacity="0.9"/>

  <!-- WINDOW LIGHTS - animated flicker -->
  <rect x="18" y="100" width="5" height="5" fill="#FFD700" opacity="0.5"><animate attributeName="opacity" values="0.5;0.1;0.5;0.3;0.5" dur="4s" repeatCount="indefinite"/></rect>
  <rect x="28" y="112" width="5" height="5" fill="#FFD700" opacity="0.4"><animate attributeName="opacity" values="0.4;0.7;0.1;0.4" dur="3.2s" repeatCount="indefinite"/></rect>
  <rect x="88" y="88" width="5" height="5" fill="#FFD700" opacity="0.6"><animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite"/></rect>
  <rect x="98" y="102" width="5" height="5" fill="#E01B24" opacity="0.4"><animate attributeName="opacity" values="0.4;0.8;0.2;0.4" dur="3.8s" repeatCount="indefinite"/></rect>
  <rect x="228" y="70" width="5" height="5" fill="#FFD700" opacity="0.7"><animate attributeName="opacity" values="0.7;0.1;0.7" dur="2s" repeatCount="indefinite"/></rect>
  <rect x="242" y="85" width="5" height="5" fill="#FFD700" opacity="0.3"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="5s" repeatCount="indefinite"/></rect>
  <rect x="400" y="60" width="5" height="5" fill="#FFD700" opacity="0.6"><animate attributeName="opacity" values="0.6;0.2;0.8;0.6" dur="3s" repeatCount="indefinite"/></rect>
  <rect x="415" y="78" width="5" height="5" fill="#1A56DB" opacity="0.5"><animate attributeName="opacity" values="0.5;0.9;0.3;0.5" dur="2.7s" repeatCount="indefinite"/></rect>
  <rect x="498" y="72" width="5" height="5" fill="#FFD700" opacity="0.5"><animate attributeName="opacity" values="0.5;0.1;0.5" dur="4.2s" repeatCount="indefinite"/></rect>
  <rect x="512" y="88" width="5" height="5" fill="#FFD700" opacity="0.4"><animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.6s" repeatCount="indefinite"/></rect>
  <rect x="578" y="62" width="5" height="5" fill="#E01B24" opacity="0.5"><animate attributeName="opacity" values="0.5;0.15;0.5" dur="2.3s" repeatCount="indefinite"/></rect>
  <rect x="658" y="52" width="5" height="5" fill="#FFD700" opacity="0.6"><animate attributeName="opacity" values="0.6;0.1;0.9;0.6" dur="3.1s" repeatCount="indefinite"/></rect>
  <rect x="672" y="68" width="5" height="5" fill="#FFD700" opacity="0.3"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.5s" repeatCount="indefinite"/></rect>
  <rect x="738" y="78" width="5" height="5" fill="#1A56DB" opacity="0.4"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.9s" repeatCount="indefinite"/></rect>
  <rect x="752" y="92" width="5" height="5" fill="#FFD700" opacity="0.5"><animate attributeName="opacity" values="0.5;0.1;0.5" dur="3.4s" repeatCount="indefinite"/></rect>
  <rect x="828" y="68" width="5" height="5" fill="#FFD700" opacity="0.6"><animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.1s" repeatCount="indefinite"/></rect>
  <rect x="842" y="82" width="5" height="5" fill="#FFD700" opacity="0.4"><animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.9s" repeatCount="indefinite"/></rect>

  <!-- RAIN DROPS - animated -->
  <g opacity="0.25">
    <line x1="80" y1="0" x2="78" y2="25" stroke="#8899cc" stroke-width="0.7">
      <animate attributeName="y1" values="0;220" dur="1.2s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="25;245" dur="1.2s" repeatCount="indefinite"/>
    </line>
    <line x1="180" y1="30" x2="178" y2="55" stroke="#8899cc" stroke-width="0.7">
      <animate attributeName="y1" values="30;220" dur="1.5s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="55;245" dur="1.5s" repeatCount="indefinite"/>
    </line>
    <line x1="280" y1="10" x2="278" y2="35" stroke="#8899cc" stroke-width="0.7">
      <animate attributeName="y1" values="10;220" dur="1.1s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="35;245" dur="1.1s" repeatCount="indefinite"/>
    </line>
    <line x1="380" y1="50" x2="378" y2="75" stroke="#8899cc" stroke-width="0.7">
      <animate attributeName="y1" values="50;220" dur="1.4s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="75;245" dur="1.4s" repeatCount="indefinite"/>
    </line>
    <line x1="480" y1="20" x2="478" y2="45" stroke="#8899cc" stroke-width="0.7">
      <animate attributeName="y1" values="20;220" dur="1.3s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="45;245" dur="1.3s" repeatCount="indefinite"/>
    </line>
    <line x1="580" y1="60" x2="578" y2="85" stroke="#8899cc" stroke-width="0.7">
      <animate attributeName="y1" values="60;220" dur="1.6s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="85;245" dur="1.6s" repeatCount="indefinite"/>
    </line>
    <line x1="680" y1="15" x2="678" y2="40" stroke="#8899cc" stroke-width="0.7">
      <animate attributeName="y1" values="15;220" dur="1.2s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="40;245" dur="1.2s" repeatCount="indefinite"/>
    </line>
    <line x1="780" y1="40" x2="778" y2="65" stroke="#8899cc" stroke-width="0.7">
      <animate attributeName="y1" values="40;220" dur="1.5s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="65;245" dur="1.5s" repeatCount="indefinite"/>
    </line>
    <line x1="880" y1="5" x2="878" y2="30" stroke="#8899cc" stroke-width="0.7">
      <animate attributeName="y1" values="5;220" dur="1.1s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="30;245" dur="1.1s" repeatCount="indefinite"/>
    </line>
    <line x1="130" y1="70" x2="128" y2="95" stroke="#8899cc" stroke-width="0.7">
      <animate attributeName="y1" values="70;220" dur="1.3s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="95;245" dur="1.3s" repeatCount="indefinite"/>
    </line>
    <line x1="330" y1="35" x2="328" y2="60" stroke="#8899cc" stroke-width="0.7">
      <animate attributeName="y1" values="35;220" dur="1.4s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="60;245" dur="1.4s" repeatCount="indefinite"/>
    </line>
    <line x1="530" y1="80" x2="528" y2="105" stroke="#8899cc" stroke-width="0.7">
      <animate attributeName="y1" values="80;220" dur="1.2s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="105;245" dur="1.2s" repeatCount="indefinite"/>
    </line>
    <line x1="730" y1="25" x2="728" y2="50" stroke="#8899cc" stroke-width="0.7">
      <animate attributeName="y1" values="25;220" dur="1.6s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="50;245" dur="1.6s" repeatCount="indefinite"/>
    </line>
  </g>

  <!-- SPIDEY WEB ANCHOR LINE from top -->
  <g filter="url(#glow)">
    <line x1="680" y1="0" x2="660" y2="80" stroke="rgba(200,210,230,0.5)" stroke-width="1.2"/>
  </g>

  <!-- ANIMATED SPIDEY — swings across -->
  <g filter="url(#spideyglow)">
    <animateTransform attributeName="transform" type="translate" values="-120,20; 950,60; -120,20" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>

    <!-- Body -->
    <ellipse cx="660" cy="100" rx="11" ry="15" fill="#C01018"/>
    <!-- Head -->
    <ellipse cx="660" cy="80" rx="10" ry="11" fill="#C01018"/>
    <!-- Eyes -->
    <ellipse cx="656" cy="78" rx="5" ry="6" fill="white" transform="rotate(-10 656 78)"/>
    <ellipse cx="664" cy="78" rx="5" ry="6" fill="white" transform="rotate(10 664 78)"/>
    <ellipse cx="656" cy="78" rx="3" ry="4" fill="#1A56DB" transform="rotate(-10 656 78)"/>
    <ellipse cx="664" cy="78" rx="3" ry="4" fill="#1A56DB" transform="rotate(10 664 78)"/>
    <!-- Web lines on suit -->
    <line x1="660" y1="69" x2="660" y2="115" stroke="rgba(80,0,0,0.4)" stroke-width="0.7"/>
    <!-- Arms - shooting pose -->
    <path d="M649 92 Q635 78 628 68" stroke="#C01018" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M671 92 Q685 105 690 115" stroke="#C01018" stroke-width="6" fill="none" stroke-linecap="round"/>
    <!-- Legs -->
    <path d="M655 113 Q648 125 644 135" stroke="#1A56DB" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M665 113 Q672 125 676 135" stroke="#1A56DB" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- Belt -->
    <rect x="650" y="108" width="20" height="5" rx="2" fill="#1A56DB"/>
    <!-- Glow dot on chest -->
    <circle cx="660" cy="98" r="3" fill="#E01B24" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite"/>
    </circle>
  </g>

  <!-- WEB STRAND trailing -->
  <g filter="url(#glow)" opacity="0.45">
    <path d="M 540 0 Q 600 50 660 80" stroke="#C8C8C8" stroke-width="1" fill="none">
      <animate attributeName="opacity" values="0.45;0.1;0.45" dur="8s" repeatCount="indefinite"/>
    </path>
  </g>

  <!-- GROUND GLOW -->
  <rect x="0" y="200" width="900" height="20" fill="url(#sky)" opacity="0.8"/>
  <line x1="0" y1="200" x2="900" y2="200" stroke="rgba(26,86,219,0.2)" stroke-width="1"/>

  <!-- CORNER WEBS -->
  <g opacity="0.18" stroke="#C8C8C8" stroke-width="0.7" fill="none">
    <path d="M0,0 Q60,0 120,60"/>
    <path d="M0,0 Q40,30 60,120"/>
    <path d="M0,0 Q80,80 0,120"/>
    <path d="M0,30 Q50,40 90,0"/>
    <path d="M30,0 Q40,50 0,80"/>
  </g>
  <g opacity="0.18" stroke="#C8C8C8" stroke-width="0.7" fill="none" transform="translate(900,0) scale(-1,1)">
    <path d="M0,0 Q60,0 120,60"/>
    <path d="M0,0 Q40,30 60,120"/>
    <path d="M0,0 Q80,80 0,120"/>
    <path d="M0,30 Q50,40 90,0"/>
    <path d="M30,0 Q40,50 0,80"/>
  </g>

  <!-- RED GLOW PULSE at bottom -->
  <ellipse cx="450" cy="220" rx="300" ry="40" fill="#E01B24" opacity="0.06">
    <animate attributeName="opacity" values="0.06;0.12;0.06" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="rx" values="300;340;300" dur="3s" repeatCount="indefinite"/>
  </ellipse>

</svg>

<!-- TYPING ANIMATION — FIXED -->
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Space+Mono&weight=700&size=18&duration=2500&pause=800&color=E01B24&center=true&vCenter=true&multiline=false&width=750&height=50&lines=%22Not+bitten+by+a+radioactive+spider...%22;%22Just+a+developer+OBSESSED+with+the+web.%22;B.Tech+CSE+%E2%80%94+Cloud+Computing+%7C+SRM+IST;Full+Stack+Dev+%7C+ML+Researcher+%7C+CGPA+8.65;Google+Cloud+%E2%9C%85+Oracle+AI+%E2%9C%85+IBM+%E2%9C%85+HackerRank+%E2%9C%85;%F0%9F%9F%A2+AVAILABLE+FOR+HIRE+%E2%80%94+Send+the+Signal!" alt="Typing SVG" /></a>

<br/><br/>

<!-- BADGES -->
<a href="https://aksharmadan.vercel.app">
<img src="https://img.shields.io/badge/🕷️%20PORTFOLIO-LIVE-E01B24?style=for-the-badge&labelColor=000000&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/akshar-madan-539896323/">
<img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
<a href="mailto:aksharmadan000@gmail.com">
<img src="https://img.shields.io/badge/Gmail-Hire%20Me-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/></a>
<a href="https://www.credly.com/users/akshar-madan">
<img src="https://img.shields.io/badge/Credly-12%20Badges-FF6B35?style=for-the-badge"/></a>

</div>

---

<div align="center">

## ◈ WHO AM I ◈

</div>

<img align="right" width="320" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGJ6bGZxMnhkcWd1NmQyNXRuaGNid2FsaXBxMGEyZjBtdWE0d3ZkZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif"/>

```javascript
const akshar = {

  name        : "Akshar Madan",
  age         : 20,
  university  : "SRM IST Chennai",
  degree      : "B.Tech CSE — Cloud Computing",
  cgpa        :  8.65,

  roles       : [
    "Full Stack Developer 🌐",
    "ML Researcher 🧠",
    "Cloud Engineer ☁️",
    "Hackathon Organizer 🏗️"
  ],

  superpower  : "Builds the web 🕷️",
  repos       : 21,
  certs       : 12,
  status      : "🟢 AVAILABLE FOR HIRE",
  location    : "Chennai, India 🇮🇳"

};
```

<br/>

**🔭 Currently** — Smart Demand Forecasting using ML *(UROP Research @ SRMIST)*

**🚀 Built** — [Spider-Man themed Portfolio](https://aksharmadan.vercel.app) — cinematic & interactive

**🌱 Learning** — Advanced Cloud Architecture & AI/ML Systems

**💼 Open to** — Internships · Collaborations · Freelance Projects

<br clear="right"/>

---

<div align="center">

## ◈ THE ARSENAL ◈

<br/>

**Languages**

<img src="https://skillicons.dev/icons?i=js,ts,python,java,cpp,html,css&theme=dark"/>

<br/><br/>

**Frameworks & Tools**

<img src="https://skillicons.dev/icons?i=react,vite,nodejs,mysql,gcp,git,github,vscode,linux&theme=dark"/>

<br/><br/>

**Proficiency**

| Skill | Level | Bar |
|:------|:-----:|:----|
| JavaScript | 88% | `████████████████████░░░` |
| React | 85% | `████████████████████░░░` |
| Python | 82% | `███████████████████░░░░` |
| Node.js | 78% | `██████████████████░░░░░` |
| Cloud | 80% | `███████████████████░░░░` |
| Git | 90% | `█████████████████████░░` |

</div>

---

<div align="center">

## ◈ MISSION STATS ◈

<br/>

<img src="https://github-readme-stats.vercel.app/api?username=Aksharmadan&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=E01B24&icon_color=E01B24&text_color=ffffff&count_private=true&border_radius=12" height="175"/>
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Aksharmadan&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=E01B24&text_color=ffffff&border_radius=12" height="175"/>

<br/>

<img src="https://github-readme-streak-stats.herokuapp.com?user=Aksharmadan&theme=tokyonight&hide_border=true&background=0D1117&ring=E01B24&fire=FFD700&currStreakLabel=E01B24&sideLabels=aaaaaa&dates=666666&currStreakNum=ffffff&sideNums=ffffff&border_radius=12" width="700"/>

</div>

---

<div align="center">

## ◈ FEATURED MISSION ◈

### 🕷️ Spider-Man Portfolio — WEB.DEV

<a href="https://aksharmadan.vercel.app">
<img src="https://img.shields.io/badge/🔴%20OPEN%20LIVE%20SITE-aksharmadan.vercel.app-E01B24?style=for-the-badge&labelColor=000000"/>
</a>

<br/><br/>

> *🎬 A dark, cinematic, scroll-driven portfolio website themed around Spider-Man.*
> *Built entirely with Vanilla JS + Vite. Feels like an interactive Marvel movie.*

</div>

<br/>

<table>
<tr>
<td valign="top" width="50%">

**🌆 Environment**
- NYC skyline with animated rain + lightning
- Aurora borealis waves behind the city
- Morphing red/blue lava lamp background
- Parallax cloud system + police helicopter
- Matrix code rain falling in projects section
- Film grain + CRT scanline overlay

</td>
<td valign="top" width="50%">

**🕷️ Spider-Man System**
- Spidey position tied to scroll progress
- Arm literally tracks your cursor in real time
- Speech bubbles with dev quotes per section
- Ghost Spidey follows cursor in background
- Idle cocoon + zzz after 10s of inactivity
- Type `AKSHAR` → Spidey does a backflip

</td>
</tr>
<tr>
<td valign="top" width="50%">

**🎮 Interactive**
- `WEB.RUNNER` — full endless runner game
- 3D tilt effect on all project cards
- Text shatters into pieces on hero click
- Magnetic buttons jump toward cursor
- Water ripple ring on every click
- Shockwave rings on section enter

</td>
<td valign="top" width="50%">

**🏆 Easter Eggs**
- Type `MARVEL` → full Marvel cinematic intro
- `↑↑↓↓←→←→BA` Konami code → Marvel fanfare
- Hidden 🕷 → opens secret classified dossier
- Achievement unlock system with toasts
- Green Goblin randomly flies across screen
- Boot terminal types your skills on scroll

</td>
</tr>
</table>

<div align="center">

**Built with:** `Vanilla JS` &nbsp;·&nbsp; `Vite` &nbsp;·&nbsp; `HTML5 Canvas` &nbsp;·&nbsp; `CSS3 Animations` &nbsp;·&nbsp; `Google Fonts`

</div>

---

<div align="center">

## ◈ CERTIFICATIONS ◈

</div>

<table>
<tr>
<td width="50%" valign="top">

**☁️ Cloud & AI**
- Google Cloud Data Analytics Certificate
- Google Cloud Cybersecurity Certificate
- Oracle AI Foundations Associate
- Tata GenAI Powered Data Analytics

**💻 Development**
- 100 Days of Code — Python (Udemy)
- Web Development Fundamentals (IBM)
- AICTE Microsoft Elevate Internship
- OOP Fundamentals (NPTEL IIT KGP)

</td>
<td width="50%" valign="top">

**🏢 Industry Simulations**
- HackerRank Software Engineer Cert
- McKinsey Forward Program
- Deloitte Technology Job Simulation
- J.P. Morgan Quantitative Research

</td>
</tr>
</table>

<div align="center">

<a href="https://www.credly.com/users/akshar-madan">
<img src="https://img.shields.io/badge/🏅%20View%20All%2012%20Verified%20Badges%20on%20Credly-FF6B35?style=for-the-badge"/>
</a>

</div>

---

<div align="center">

## ◈ RESEARCH ◈

</div>

> **📊 Smart Demand Forecasting in Transportation & Logistics Using ML**
> *Undergraduate Research Opportunities Programme (UROP) — SRMIST · Aug 2025 – Present*

```python
research = {
    "topic"     : "Transportation & Logistics Demand Forecasting",
    "methods"   : ["Regression", "Time-Series", "Feature Engineering", "EDA"],
    "tools"     : ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    "outcome"   : "Optimized forecasting models for real-world supply chains",
    "status"    : "🟢 ACTIVE — UROP SRMIST"
}
```

---

<div align="center">

## ◈ HACKATHONS ◈

</div>

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   🏗️  ORGANIZING  ──▶  Heisen Hack      │ SRM ACM SIGKDD │ Dec 2025 │
│   💡  COMPETED    ──▶  Pitch & Patch    │ Alexa Dev SRM  │ Jan 2026 │
│   🚀  COMPETED    ──▶  IDEANOVA 2.0     │ Newton School  │ Nov 2025 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

## ◈ ACTIVITY ◈

<img src="https://github-readme-activity-graph.vercel.app/graph?username=Aksharmadan&bg_color=0D1117&color=E01B24&line=E01B24&point=FFD700&area=true&hide_border=true&area_color=330000&radius=6"/>

</div>

---

<div align="center">

## ◈ SEND THE SIGNAL ◈

*"With great power comes great responsibility."*

<br/>

<a href="https://aksharmadan.vercel.app">
<img src="https://img.shields.io/badge/🕷️%20Portfolio-aksharmadan.vercel.app-E01B24?style=for-the-badge&labelColor=000000"/>
</a>

<br/><br/>

<a href="https://www.linkedin.com/in/akshar-madan-539896323/">
<img src="https://img.shields.io/badge/LinkedIn-Akshar%20Madan-0A66C2?style=for-the-badge&logo=linkedin"/></a>
<a href="https://github.com/Aksharmadan">
<img src="https://img.shields.io/badge/GitHub-Aksharmadan-181717?style=for-the-badge&logo=github"/></a>
<a href="https://www.hackerrank.com/profile/aksharmadan000">
<img src="https://img.shields.io/badge/HackerRank-aksharmadan000-2EC866?style=for-the-badge&logo=hackerrank"/></a>

<br/>

<a href="https://leetcode.com/u/zuzVBU5EdU/">
<img src="https://img.shields.io/badge/LeetCode-Profile-FFA116?style=for-the-badge&logo=leetcode"/></a>
<a href="https://www.credly.com/users/akshar-madan">
<img src="https://img.shields.io/badge/Credly-12%20Badges-FF6B35?style=for-the-badge"/></a>
<a href="mailto:aksharmadan000@gmail.com">
<img src="https://img.shields.io/badge/Gmail-aksharmadan000%40gmail.com-EA4335?style=for-the-badge&logo=gmail"/></a>

<br/><br/>

<img src="https://komarev.com/ghpvc/?username=Aksharmadan&color=E01B24&style=for-the-badge&label=PROFILE+VIEWS"/>
<img src="https://img.shields.io/github/followers/Aksharmadan?style=for-the-badge&color=E01B24&labelColor=000000&label=FOLLOWERS"/>

<br/><br/>

<!-- FOOTER WAVE -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:E01B24,50:0d0010,100:000000&height=140&section=footer&text=🕷️%20WEB.DEV%20—%20AKSHAR%20MADAN&fontSize=18&fontColor=ffffff&animation=fadeIn"/>

</div>
