<!-- HERO BANNER - Dark NYC Spider-Man style -->
<div align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=venom&color=0:000000,50:1a0000,100:E01B24&height=300&section=header&text=AKSHAR%20MADAN&fontSize=70&fontColor=ffffff&animation=fadeIn&fontAlignY=40&desc=🕷️%20%20I%20BUILD%20THE%20WEB%20%20🕷️&descAlignY=62&descSize=22&descColor=ffffff&stroke=E01B24&strokeWidth=2"/>
</div>

<!-- SPIDER-MAN SWINGING OVER NYC - Animated SVG -->
<div align="center">
<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="200">
  <defs>
    <style>
      .spidey { animation: swing 3s ease-in-out infinite; transform-origin: 400px 0px; }
      .web-line { stroke-dasharray: 300; animation: webDraw 3s ease-in-out infinite; }
      .city { animation: cityScroll 8s linear infinite; }
      .city2 { animation: cityScroll2 8s linear infinite; }
      .star { animation: twinkle 2s ease-in-out infinite alternate; }
      .glow { animation: glowPulse 2s ease-in-out infinite alternate; }
      @keyframes swing {
        0%   { transform: rotate(-25deg) translateX(-80px); }
        50%  { transform: rotate(25deg)  translateX(80px);  }
        100% { transform: rotate(-25deg) translateX(-80px); }
      }
      @keyframes webDraw {
        0%,100% { stroke-dashoffset: 300; opacity: 0.3; }
        25%,75% { stroke-dashoffset: 0;   opacity: 1;   }
      }
      @keyframes cityScroll  { from { transform: translateX(0);     } to { transform: translateX(-800px); } }
      @keyframes cityScroll2 { from { transform: translateX(800px); } to { transform: translateX(0);      } }
      @keyframes twinkle { from { opacity:.2; } to { opacity:1; } }
      @keyframes glowPulse {
        from { filter: drop-shadow(0 0 4px #E01B24); }
        to   { filter: drop-shadow(0 0 16px #E01B24) drop-shadow(0 0 32px #ff4444); }
      }
    </style>
    <linearGradient id="skyG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"   style="stop-color:#000000"/>
      <stop offset="60%"  style="stop-color:#0a0010"/>
      <stop offset="100%" style="stop-color:#1a0005"/>
    </linearGradient>
    <linearGradient id="bldG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"   style="stop-color:#1a1a2e"/>
      <stop offset="100%" style="stop-color:#0a0a0a"/>
    </linearGradient>
    <radialGradient id="bodyG" cx="50%" cy="40%" r="50%">
      <stop offset="0%"   style="stop-color:#ff2020"/>
      <stop offset="100%" style="stop-color:#8b0000"/>
    </radialGradient>
    <linearGradient id="webG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   style="stop-color:#ffffff;stop-opacity:0.9"/>
      <stop offset="100%" style="stop-color:#cccccc;stop-opacity:0.3"/>
    </linearGradient>
  </defs>

  <!-- Sky -->
  <rect width="800" height="200" fill="url(#skyG)"/>

  <!-- Stars -->
  <circle class="star" cx="50"  cy="20" r="1.5" fill="white" style="animation-delay:0s"/>
  <circle class="star" cx="150" cy="10" r="1"   fill="white" style="animation-delay:.5s"/>
  <circle class="star" cx="280" cy="25" r="1.5" fill="white" style="animation-delay:1s"/>
  <circle class="star" cx="420" cy="8"  r="1"   fill="white" style="animation-delay:.3s"/>
  <circle class="star" cx="560" cy="18" r="1.5" fill="white" style="animation-delay:.8s"/>
  <circle class="star" cx="680" cy="12" r="1"   fill="white" style="animation-delay:1.2s"/>
  <circle class="star" cx="730" cy="30" r="1.5" fill="white" style="animation-delay:.6s"/>

  <!-- Moon -->
  <circle cx="720" cy="30" r="18" fill="#fffbe6" opacity="0.12"/>
  <circle cx="720" cy="30" r="12" fill="#fffbe6" opacity="0.35"/>
  <circle cx="720" cy="30" r="8"  fill="white"   opacity="0.9"/>

  <!-- City Buildings scrolling layer 1 -->
  <g class="city" opacity="0.75">
    <rect x="0"   y="95"  width="40" height="105" fill="url(#bldG)"/>
    <rect x="5"   y="100" width="5"  height="4"   fill="#FFD700" opacity=".6"/>
    <rect x="15"  y="100" width="5"  height="4"   fill="#FFD700" opacity=".3"/>
    <rect x="45"  y="72"  width="55" height="128" fill="url(#bldG)"/>
    <rect x="50"  y="77"  width="6"  height="5"   fill="#4FC3F7" opacity=".6"/>
    <rect x="62"  y="77"  width="6"  height="5"   fill="#4FC3F7" opacity=".4"/>
    <rect x="74"  y="77"  width="6"  height="5"   fill="#FFD700" opacity=".7"/>
    <rect x="50"  y="90"  width="6"  height="5"   fill="#FFD700" opacity=".5"/>
    <rect x="74"  y="90"  width="6"  height="5"   fill="#E01B24" opacity=".4"/>
    <rect x="71"  y="55"  width="3"  height="18"  fill="#333"/>
    <circle cx="72" cy="54" r="3" fill="#E01B24" opacity=".9"/>
    <rect x="105" y="112" width="35" height="88"  fill="url(#bldG)"/>
    <rect x="110" y="117" width="5"  height="4"   fill="#FFD700" opacity=".5"/>
    <rect x="120" y="117" width="5"  height="4"   fill="#4FC3F7" opacity=".6"/>
    <rect x="145" y="80"  width="60" height="120" fill="#111122"/>
    <rect x="150" y="85"  width="7"  height="6"   fill="#FFD700" opacity=".8"/>
    <rect x="163" y="85"  width="7"  height="6"   fill="#FFD700" opacity=".4"/>
    <rect x="176" y="85"  width="7"  height="6"   fill="#FFD700" opacity=".7"/>
    <rect x="150" y="99"  width="7"  height="6"   fill="#4FC3F7" opacity=".5"/>
    <rect x="176" y="99"  width="7"  height="6"   fill="#E01B24" opacity=".6"/>
    <rect x="210" y="62"  width="45" height="138" fill="url(#bldG)"/>
    <rect x="215" y="67"  width="6"  height="5"   fill="#4FC3F7" opacity=".6"/>
    <rect x="225" y="67"  width="6"  height="5"   fill="#4FC3F7" opacity=".3"/>
    <rect x="235" y="67"  width="6"  height="5"   fill="#FFD700" opacity=".7"/>
    <rect x="231" y="44"  width="3"  height="20"  fill="#555"/>
    <rect x="260" y="100" width="30" height="100" fill="#0d0d1a"/>
    <rect x="265" y="105" width="5"  height="4"   fill="#E01B24" opacity=".7"/>
    <rect x="275" y="105" width="5"  height="4"   fill="#FFD700" opacity=".5"/>
    <rect x="295" y="76"  width="50" height="124" fill="url(#bldG)"/>
    <rect x="300" y="81"  width="7"  height="6"   fill="#FFD700" opacity=".6"/>
    <rect x="313" y="81"  width="7"  height="6"   fill="#FFD700" opacity=".8"/>
    <rect x="326" y="81"  width="7"  height="6"   fill="#FFD700" opacity=".3"/>
    <rect x="300" y="95"  width="7"  height="6"   fill="#4FC3F7" opacity=".5"/>
    <rect x="326" y="95"  width="7"  height="6"   fill="#E01B24" opacity=".4"/>
    <rect x="350" y="52"  width="65" height="148" fill="#111"/>
    <rect x="355" y="57"  width="8"  height="7"   fill="#FFD700" opacity=".9"/>
    <rect x="368" y="57"  width="8"  height="7"   fill="#FFD700" opacity=".5"/>
    <rect x="381" y="57"  width="8"  height="7"   fill="#4FC3F7" opacity=".7"/>
    <rect x="394" y="57"  width="8"  height="7"   fill="#E01B24" opacity=".4"/>
    <rect x="355" y="71"  width="8"  height="7"   fill="#FFD700" opacity=".6"/>
    <rect x="381" y="71"  width="8"  height="7"   fill="#E01B24" opacity=".8"/>
    <rect x="381" y="32"  width="3"  height="22"  fill="#333"/>
    <circle cx="382" cy="31" r="4" fill="#E01B24" opacity=".9"/>
    <rect x="420" y="86"  width="40" height="114" fill="url(#bldG)"/>
    <rect x="425" y="91"  width="6"  height="5"   fill="#4FC3F7" opacity=".6"/>
    <rect x="437" y="91"  width="6"  height="5"   fill="#FFD700" opacity=".7"/>
    <rect x="449" y="91"  width="6"  height="5"   fill="#4FC3F7" opacity=".4"/>
    <rect x="465" y="66"  width="55" height="134" fill="#0a0a18"/>
    <rect x="470" y="71"  width="7"  height="6"   fill="#FFD700" opacity=".5"/>
    <rect x="483" y="71"  width="7"  height="6"   fill="#FFD700" opacity=".8"/>
    <rect x="496" y="71"  width="7"  height="6"   fill="#E01B24" opacity=".6"/>
    <rect x="509" y="71"  width="7"  height="6"   fill="#4FC3F7" opacity=".4"/>
    <rect x="525" y="96"  width="35" height="104" fill="url(#bldG)"/>
    <rect x="530" y="101" width="5"  height="4"   fill="#FFD700" opacity=".6"/>
    <rect x="540" y="101" width="5"  height="4"   fill="#4FC3F7" opacity=".5"/>
    <rect x="550" y="101" width="5"  height="4"   fill="#E01B24" opacity=".7"/>
    <rect x="565" y="73"  width="48" height="127" fill="#111122"/>
    <rect x="570" y="78"  width="7"  height="6"   fill="#FFD700" opacity=".7"/>
    <rect x="583" y="78"  width="7"  height="6"   fill="#FFD700" opacity=".4"/>
    <rect x="596" y="78"  width="7"  height="6"   fill="#FFD700" opacity=".8"/>
    <rect x="570" y="92"  width="7"  height="6"   fill="#4FC3F7" opacity=".5"/>
    <rect x="596" y="92"  width="7"  height="6"   fill="#E01B24" opacity=".6"/>
    <rect x="588" y="53"  width="3"  height="22"  fill="#444"/>
    <rect x="618" y="89"  width="40" height="111" fill="url(#bldG)"/>
    <rect x="623" y="94"  width="6"  height="5"   fill="#4FC3F7" opacity=".6"/>
    <rect x="635" y="94"  width="6"  height="5"   fill="#FFD700" opacity=".5"/>
    <rect x="663" y="61"  width="60" height="139" fill="#0d0d1a"/>
    <rect x="668" y="66"  width="8"  height="7"   fill="#FFD700" opacity=".8"/>
    <rect x="681" y="66"  width="8"  height="7"   fill="#FFD700" opacity=".5"/>
    <rect x="694" y="66"  width="8"  height="7"   fill="#4FC3F7" opacity=".7"/>
    <rect x="707" y="66"  width="8"  height="7"   fill="#4FC3F7" opacity=".3"/>
    <rect x="668" y="81"  width="8"  height="7"   fill="#E01B24" opacity=".6"/>
    <rect x="707" y="81"  width="8"  height="7"   fill="#FFD700" opacity=".4"/>
    <rect x="692" y="41"  width="3"  height="22"  fill="#333"/>
    <circle cx="693" cy="40" r="3" fill="#E01B24" opacity=".9"/>
    <rect x="728" y="91"  width="35" height="109" fill="url(#bldG)"/>
    <rect x="733" y="96"  width="5"  height="4"   fill="#FFD700" opacity=".6"/>
    <rect x="748" y="96"  width="5"  height="4"   fill="#4FC3F7" opacity=".5"/>
    <rect x="768" y="76"  width="45" height="124" fill="#111"/>
    <rect x="773" y="81"  width="7"  height="6"   fill="#FFD700" opacity=".7"/>
    <rect x="786" y="81"  width="7"  height="6"   fill="#E01B24" opacity=".5"/>
  </g>

  <!-- City Buildings scrolling layer 2 (seamless duplicate) -->
  <g class="city2" opacity="0.75">
    <rect x="0"   y="95"  width="40" height="105" fill="url(#bldG)"/>
    <rect x="5"   y="100" width="5"  height="4"   fill="#FFD700" opacity=".6"/>
    <rect x="45"  y="72"  width="55" height="128" fill="url(#bldG)"/>
    <rect x="50"  y="77"  width="6"  height="5"   fill="#4FC3F7" opacity=".5"/>
    <rect x="71"  y="55"  width="3"  height="18"  fill="#333"/>
    <circle cx="72" cy="54" r="3" fill="#E01B24" opacity=".9"/>
    <rect x="145" y="80"  width="60" height="120" fill="#111122"/>
    <rect x="150" y="85"  width="7"  height="6"   fill="#FFD700" opacity=".8"/>
    <rect x="210" y="62"  width="45" height="138" fill="url(#bldG)"/>
    <rect x="231" y="44"  width="3"  height="20"  fill="#555"/>
    <rect x="350" y="52"  width="65" height="148" fill="#111"/>
    <rect x="355" y="57"  width="8"  height="7"   fill="#FFD700" opacity=".9"/>
    <rect x="381" y="32"  width="3"  height="22"  fill="#333"/>
    <circle cx="382" cy="31" r="4" fill="#E01B24" opacity=".9"/>
    <rect x="465" y="66"  width="55" height="134" fill="#0a0a18"/>
    <rect x="470" y="71"  width="7"  height="6"   fill="#FFD700" opacity=".5"/>
    <rect x="565" y="73"  width="48" height="127" fill="#111122"/>
    <rect x="570" y="78"  width="7"  height="6"   fill="#FFD700" opacity=".7"/>
    <rect x="663" y="61"  width="60" height="139" fill="#0d0d1a"/>
    <rect x="668" y="66"  width="8"  height="7"   fill="#FFD700" opacity=".8"/>
    <rect x="692" y="41"  width="3"  height="22"  fill="#333"/>
    <circle cx="693" cy="40" r="3" fill="#E01B24" opacity=".9"/>
    <rect x="768" y="76"  width="45" height="124" fill="#111"/>
    <rect x="773" y="81"  width="7"  height="6"   fill="#FFD700" opacity=".7"/>
  </g>

  <!-- SPIDER-MAN swinging group -->
  <g class="spidey">
    <!-- Web thread -->
    <line x1="400" y1="0" x2="400" y2="85" stroke="url(#webG)" stroke-width="1.5" class="web-line"/>

    <!-- Body / torso -->
    <ellipse cx="400" cy="108" rx="16" ry="20" fill="url(#bodyG)" class="glow"/>
    <!-- Blue hips -->
    <ellipse cx="400" cy="122" rx="14" ry="10" fill="#1a1aff" opacity=".8"/>

    <!-- Head -->
    <ellipse cx="400" cy="85" rx="14" ry="15" fill="#E01B24"/>
    <!-- Mask web lines -->
    <path d="M388 78 Q400 72 412 78" stroke="#8b0000" stroke-width=".8" fill="none" opacity=".8"/>
    <path d="M386 85 Q400 80 414 85" stroke="#8b0000" stroke-width=".8" fill="none" opacity=".8"/>
    <path d="M388 92 Q400 88 412 92" stroke="#8b0000" stroke-width=".8" fill="none" opacity=".8"/>
    <path d="M400 72 L400 98" stroke="#8b0000" stroke-width=".6" fill="none" opacity=".7"/>
    <path d="M393 73 L393 97" stroke="#8b0000" stroke-width=".4" fill="none" opacity=".5"/>
    <path d="M407 73 L407 97" stroke="#8b0000" stroke-width=".4" fill="none" opacity=".5"/>

    <!-- Eyes -->
    <ellipse cx="394" cy="82" rx="7" ry="5" fill="white" opacity=".95"/>
    <ellipse cx="406" cy="82" rx="7" ry="5" fill="white" opacity=".95"/>
    <ellipse cx="394" cy="82" rx="5" ry="3.5" fill="#ddd"/>
    <ellipse cx="406" cy="82" rx="5" ry="3.5" fill="#ddd"/>
    <ellipse cx="392" cy="81" rx="2" ry="1.5" fill="white" opacity=".7"/>
    <ellipse cx="404" cy="81" rx="2" ry="1.5" fill="white" opacity=".7"/>

    <!-- Left arm up to web anchor -->
    <path d="M385 102 Q370 90 365 78" stroke="#E01B24" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M385 102 Q370 90 365 78" stroke="#8b0000" stroke-width="3" fill="none" stroke-linecap="round" opacity=".4"/>
    <!-- Right arm outstretched -->
    <path d="M415 102 Q432 92 440 80" stroke="#E01B24" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M415 102 Q432 92 440 80" stroke="#8b0000" stroke-width="3" fill="none" stroke-linecap="round" opacity=".4"/>

    <!-- Hands -->
    <circle cx="365" cy="77" r="5" fill="#E01B24"/>
    <circle cx="440" cy="79" r="5" fill="#E01B24"/>
    <circle cx="362" cy="74" r="2" fill="white" opacity=".8"/>
    <circle cx="443" cy="76" r="2" fill="white" opacity=".8"/>

    <!-- Trailing web strands -->
    <path d="M440 80 Q460 75 480 82" stroke="white" stroke-width=".8" fill="none" opacity=".35" stroke-dasharray="5,3"/>
    <path d="M365 78 Q345 73 325 80" stroke="white" stroke-width=".8" fill="none" opacity=".35" stroke-dasharray="5,3"/>

    <!-- Legs -->
    <path d="M392 128 Q375 145 368 160" stroke="#E01B24" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M368 160 Q362 170 360 175" stroke="#1a1aff" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M408 128 Q425 145 432 160" stroke="#E01B24" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M432 160 Q438 170 440 175" stroke="#1a1aff" stroke-width="5" fill="none" stroke-linecap="round"/>

    <!-- Boots -->
    <ellipse cx="360" cy="177" rx="7" ry="5" fill="#1a1aff"/>
    <ellipse cx="440" cy="177" rx="7" ry="5" fill="#1a1aff"/>

    <!-- Spider chest logo -->
    <g transform="translate(400,110)">
      <path d="M0,-5 L4,0 L0,5 L-4,0 Z M-6,-2 L0,-1 L6,-2 M-6,2 L0,1 L6,2" stroke="#111" stroke-width="1.2" fill="none" opacity=".8"/>
    </g>
  </g>

  <!-- Ground glow -->
  <rect x="0" y="192" width="800" height="8"  fill="#E01B24" opacity=".08"/>
  <line  x1="0" y1="200" x2="800" y2="200" stroke="#E01B24" stroke-width="1" opacity=".3"/>
</svg>
</div>

<!-- TYPING -->
<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Space+Mono&weight=700&size=20&pause=800&color=E01B24&center=true&vCenter=true&width=800&lines=🕷️+Not+bitten+by+a+radioactive+spider...;⚡+Just+a+developer+OBSESSED+with+the+web.;☁️+B.Tech+CSE+%7C+Cloud+Computing+%7C+SRM+IST;🔥+Full+Stack+Dev+%7C+ML+Researcher+%7C+CGPA+8.65;✅+Google+Cloud+%7C+Oracle+AI+%7C+IBM+Certified;🎯+Available+for+Hire+—+Send+the+Signal!" alt="Typing SVG"/>
</div>

<br/>

<!-- QUICK LINKS -->
<div align="center">
  <a href="https://aksharmadan.vercel.app"><img src="https://img.shields.io/badge/🕷️_PORTFOLIO-LIVE-E01B24?style=for-the-badge&labelColor=0a0a0a"/></a>
  <a href="https://www.linkedin.com/in/akshar-madan-539896323/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
  <a href="mailto:aksharmadan000@gmail.com"><img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/></a>
  <a href="https://github.com/Aksharmadan"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/></a>
</div>

<br/>

---

<!-- ABOUT -->
<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="400" align="right"/>

## 🕷️ The Origin Story

```javascript
const akshar = {
  name       : "Akshar Madan",
  university : "SRM IST, Chennai",
  degree     : "B.Tech CSE — Cloud Computing",
  cgpa       :  8.65,
  role       : "Full Stack Dev & ML Researcher",
  superpower : "Builds the web 🕷️",
  status     : "🟢 AVAILABLE FOR HIRE",
  location   : "Chennai, India 🇮🇳"
};
```

- 🔭 **UROP Research** — Smart Demand Forecasting using ML
- 🌱 Learning **Advanced Cloud & AI/ML Systems**
- 🚀 Built a **[Spider-Man Portfolio](https://aksharmadan.vercel.app)** — cinematic & interactive
- 💼 Open to **internships** & **collaborations**
- ⚡ **21 GitHub repos** · **12 Certifications** · **3 Hackathons**

<br clear="right"/>

---

<!-- SPIDEY DIVIDER (mini swing) -->
<div align="center">
<svg viewBox="0 0 800 60" xmlns="http://www.w3.org/2000/svg" width="100%" height="60">
  <defs>
    <style>
      .sp2 { animation: sw2 2.5s ease-in-out infinite; transform-origin: 400px 0px; }
      @keyframes sw2 {
        0%   { transform: rotate(-20deg) translateX(-60px); }
        50%  { transform: rotate(20deg)  translateX(60px);  }
        100% { transform: rotate(-20deg) translateX(-60px); }
      }
    </style>
    <linearGradient id="div1" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#E01B24" stop-opacity="0"/>
      <stop offset="50%"  stop-color="#E01B24" stop-opacity="1"/>
      <stop offset="100%" stop-color="#E01B24" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <line x1="0" y1="30" x2="800" y2="30" stroke="url(#div1)" stroke-width="1"/>
  <g class="sp2">
    <line x1="400" y1="0" x2="400" y2="22" stroke="white" stroke-width="1" opacity=".7"/>
    <ellipse cx="400" cy="30" rx="10" ry="12" fill="#E01B24"/>
    <ellipse cx="397" cy="25" rx="4" ry="3" fill="white" opacity=".9"/>
    <ellipse cx="403" cy="25" rx="4" ry="3" fill="white" opacity=".9"/>
    <circle  cx="400" cy="30" r="3" fill="#8b0000"/>
  </g>
</svg>
</div>

## 🛠️ The Arsenal

<div align="center">
  <img src="https://skillicons.dev/icons?i=js,ts,python,java,cpp,html&theme=dark&perline=6"/><br/><br/>
  <img src="https://skillicons.dev/icons?i=react,vite,nodejs,mysql,gcp,git&theme=dark&perline=6"/><br/><br/>
  <img src="https://skillicons.dev/icons?i=github,vscode,linux,tailwind&theme=dark&perline=6"/>
</div>

---

<!-- MINI DIVIDER -->
<div align="center">
<svg viewBox="0 0 800 60" xmlns="http://www.w3.org/2000/svg" width="100%" height="60">
  <defs>
    <style>
      .sp3 { animation: sw3 2.8s ease-in-out infinite; transform-origin: 400px 0px; }
      @keyframes sw3 {
        0%   { transform: rotate(-22deg) translateX(-65px); }
        50%  { transform: rotate(22deg)  translateX(65px);  }
        100% { transform: rotate(-22deg) translateX(-65px); }
      }
    </style>
    <linearGradient id="div2" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#E01B24" stop-opacity="0"/>
      <stop offset="50%"  stop-color="#E01B24" stop-opacity="1"/>
      <stop offset="100%" stop-color="#E01B24" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <line x1="0" y1="30" x2="800" y2="30" stroke="url(#div2)" stroke-width="1"/>
  <g class="sp3">
    <line x1="400" y1="0" x2="400" y2="22" stroke="white" stroke-width="1" opacity=".7"/>
    <ellipse cx="400" cy="30" rx="10" ry="12" fill="#E01B24"/>
    <ellipse cx="397" cy="25" rx="4" ry="3" fill="white" opacity=".9"/>
    <ellipse cx="403" cy="25" rx="4" ry="3" fill="white" opacity=".9"/>
    <circle  cx="400" cy="30" r="3" fill="#8b0000"/>
  </g>
</svg>
</div>

## 📊 Mission Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Aksharmadan&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=E01B24&icon_color=E01B24&text_color=ffffff&count_private=true&border_radius=10" height="170"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Aksharmadan&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=E01B24&text_color=ffffff&border_radius=10" height="170"/>
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com?user=Aksharmadan&theme=tokyonight&hide_border=true&background=0D1117&ring=E01B24&fire=FFD700&currStreakLabel=E01B24&sideLabels=ffffff&dates=888888&currStreakNum=ffffff&sideNums=ffffff&border_radius=10"/>
</div>

---

## 🚀 Featured Mission — Spider-Man Portfolio

<div align="center">

> *🎬 A dark, cinematic, scroll-driven portfolio. Feels like an interactive Marvel movie intro.*

<a href="https://aksharmadan.vercel.app">
  <img src="https://img.shields.io/badge/🕷️_OPEN_LIVE_SITE-aksharmadan.vercel.app-E01B24?style=for-the-badge&labelColor=000000&logoColor=white"/>
</a>

</div>

<br/>

<table>
<tr>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/NYC_SKYLINE-Rain_%2B_Lightning-1a1a2e?style=for-the-badge&logo=cloudfoundry&logoColor=E01B24"/>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/SPIDEY-Scroll_Driven-E01B24?style=for-the-badge&logo=spinnaker&logoColor=white"/>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/GAME-WEB.RUNNER-FFD700?style=for-the-badge&logo=gamepad&logoColor=black"/>
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/25%2B-ANIMATIONS-1A56DB?style=for-the-badge&logo=framer&logoColor=white"/>
</td>
</tr>
</table>

```
🌆  NYC skyline · Rain · Lightning · Aurora borealis · Parallax city
🕷️  Spidey moves with scroll · Speech bubbles · Arm tracks cursor
🎮  WEB.RUNNER endless runner game built from scratch in Canvas
💻  Boot terminal · VS Code bio · Matrix rain · Helicopter · Goblin
✨  Liquid cursor · Shockwaves · Gold dust · Film grain · Scanlines
🏆  Achievement system · Secret room · Konami code · Easter eggs
```

**Built with:** `Vanilla JS` `Vite` `HTML5 Canvas` `CSS3 Animations`

---

## 🏅 Certifications

<div align="center">

| 🏆 | Certification | 🏢 Issuer |
|:--:|:-------------|:---------|
| ☁️ | Google Cloud Data Analytics | Google Cloud |
| 🔒 | Google Cloud Cybersecurity | Google Cloud |
| 🤖 | Oracle AI Foundations Associate | Oracle |
| 🐍 | 100 Days of Code — Python | Udemy |
| 💻 | Software Engineer Certification | HackerRank |
| 🌐 | Web Development Fundamentals | IBM SkillsBuild |
| 📊 | McKinsey Forward Program | McKinsey & Co. |
| 🏦 | Quantitative Research Simulation | J.P. Morgan |
| 📈 | GenAI Powered Data Analytics | Tata |
| 🔧 | Technology Job Simulation | Deloitte |
| 🖥️ | AICTE Elevate Internship | Microsoft |
| 📐 | OOP Fundamentals | NPTEL IIT Kharagpur |

</div>

<div align="center">
  <a href="https://www.credly.com/users/akshar-madan">
    <img src="https://img.shields.io/badge/🏅_View_All_12_Verified_Badges-Credly-FF6B35?style=for-the-badge"/>
  </a>
</div>

---

## 🔬 Research Mission

<div align="center">
<table>
<tr><td>

**📊 Smart Demand Forecasting in Transportation & Logistics Using ML**

`UROP — SRMIST` · `Aug 2025 – Present`

```python
research = {
  "topic"    : "Transportation Demand Forecasting",
  "methods"  : ["Regression", "Time Series", "Feature Engineering"],
  "tools"    : ["Python", "ML Models", "Data Analytics"],
  "status"   : "🟢 ACTIVE"
}
```

</td></tr>
</table>
</div>

---

## 🎯 Hackathons

<div align="center">

```
╔══════════════════════════════════════════════════════════════════╗
║  🏗️  ORGANIZING  ──▶  Heisen Hack      │  SRM ACM  │  Dec 2025  ║
║  💡  COMPETED    ──▶  Pitch & Patch    │  Alexa    │  Jan 2026  ║
║  🚀  COMPETED    ──▶  IDEANOVA 2.0     │  Newton   │  Nov 2025  ║
╚══════════════════════════════════════════════════════════════════╝
```

</div>

---

## 📈 Activity

<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=Aksharmadan&bg_color=0D1117&color=E01B24&line=E01B24&point=FFD700&area=true&hide_border=true&area_color=1a0000"/>
</div>

---

## 🌐 Send The Signal

<div align="center">

<a href="https://aksharmadan.vercel.app">
  <img src="https://img.shields.io/badge/🕷️_Portfolio-aksharmadan.vercel.app-E01B24?style=for-the-badge&labelColor=0a0a0a"/>
</a>

<br/><br/>

<a href="https://www.linkedin.com/in/akshar-madan-539896323/"><img src="https://img.shields.io/badge/LinkedIn-Akshar_Madan-0A66C2?style=for-the-badge&logo=linkedin"/></a>
<a href="https://github.com/Aksharmadan"><img src="https://img.shields.io/badge/GitHub-Aksharmadan-181717?style=for-the-badge&logo=github"/></a>
<a href="https://www.hackerrank.com/profile/aksharmadan000"><img src="https://img.shields.io/badge/HackerRank-aksharmadan000-2EC866?style=for-the-badge&logo=hackerrank"/></a>

<br/>

<a href="https://leetcode.com/u/zuzVBU5EdU/"><img src="https://img.shields.io/badge/LeetCode-Profile-FFA116?style=for-the-badge&logo=leetcode"/></a>
<a href="https://www.credly.com/users/akshar-madan"><img src="https://img.shields.io/badge/Credly-12_Badges-FF6B35?style=for-the-badge"/></a>
<a href="mailto:aksharmadan000@gmail.com"><img src="https://img.shields.io/badge/Gmail-aksharmadan000-EA4335?style=for-the-badge&logo=gmail"/></a>

<br/><br/>

<img src="https://komarev.com/ghpvc/?username=Aksharmadan&color=E01B24&style=for-the-badge&label=PROFILE+VIEWS"/>
<img src="https://img.shields.io/github/followers/Aksharmadan?style=for-the-badge&color=E01B24&labelColor=0a0a0a&label=FOLLOWERS"/>

</div>

<!-- FOOTER -->
<div align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:E01B24,100:000000&height=150&section=footer&text=With+great+code+comes+great+responsibility+🕷️&fontSize=16&fontColor=ffffff&animation=fadeIn"/>
</div>
