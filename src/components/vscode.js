export function initVSCode() {
  const about = document.getElementById('about');
  if (!about) return;

  const vscode = document.createElement('div');
  vscode.style.cssText = `max-width:900px;margin:0 auto 0;padding:0 2rem 4rem;`;
  vscode.innerHTML = `
    <div style="background:#1e1e1e;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);box-shadow:0 0 40px rgba(0,0,0,0.5);">
      <div style="background:#2d2d2d;padding:0.8rem 1rem;display:flex;align-items:center;gap:1rem;border-bottom:1px solid rgba(255,255,255,0.05);">
        <div style="display:flex;gap:6px;"><div style="width:12px;height:12px;border-radius:50%;background:#E01B24;"></div><div style="width:12px;height:12px;border-radius:50%;background:#FFD700;"></div><div style="width:12px;height:12px;border-radius:50%;background:#28a745;"></div></div>
        <span style="font-family:'Space Mono',monospace;font-size:0.7rem;color:rgba(200,200,200,0.5);">akshar-madan.js</span>
      </div>
      <div style="padding:1.5rem 2rem;font-family:'Space Mono',monospace;font-size:0.82rem;line-height:2;">
        <div><span style="color:#569cd6;">const</span> <span style="color:#9cdcfe;">developer</span> <span style="color:#d4d4d4;">= {</span></div>
        <div style="padding-left:2rem;"><span style="color:#9cdcfe;">name</span><span style="color:#d4d4d4;">: </span><span style="color:#ce9178;">"Akshar Madan"</span><span style="color:#d4d4d4;">,</span></div>
        <div style="padding-left:2rem;"><span style="color:#9cdcfe;">role</span><span style="color:#d4d4d4;">: </span><span style="color:#ce9178;">"Full Stack Developer"</span><span style="color:#d4d4d4;">,</span></div>
        <div style="padding-left:2rem;"><span style="color:#9cdcfe;">university</span><span style="color:#d4d4d4;">: </span><span style="color:#ce9178;">"SRM IST Chennai"</span><span style="color:#d4d4d4;">,</span></div>
        <div style="padding-left:2rem;"><span style="color:#9cdcfe;">cgpa</span><span style="color:#d4d4d4;">: </span><span style="color:#b5cea8;">8.65</span><span style="color:#d4d4d4;">,</span></div>
        <div style="padding-left:2rem;"><span style="color:#9cdcfe;">skills</span><span style="color:#d4d4d4;">: [</span><span style="color:#ce9178;">"React"</span><span style="color:#d4d4d4;">, </span><span style="color:#ce9178;">"Node.js"</span><span style="color:#d4d4d4;">, </span><span style="color:#ce9178;">"Python"</span><span style="color:#d4d4d4;">, </span><span style="color:#ce9178;">"Cloud"</span><span style="color:#d4d4d4;">],</span></div>
        <div style="padding-left:2rem;"><span style="color:#9cdcfe;">superpower</span><span style="color:#d4d4d4;">: </span><span style="color:#ce9178;">"builds the web"</span><span style="color:#d4d4d4;">,</span></div>
        <div style="padding-left:2rem;"><span style="color:#9cdcfe;">available</span><span style="color:#d4d4d4;">: </span><span style="color:#569cd6;">true</span></div>
        <div><span style="color:#d4d4d4;">};</span></div>
        <div style="margin-top:0.5rem;"><span style="color:#6a9955;">// 🕷 swinging through the web since 2024</span></div>
      </div>
    </div>
  `;
  about.after(vscode);
}
