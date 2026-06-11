// Sections — engineered for recruiter clarity + visual depth.

const { useEffect, useRef, useState } = React;

/* ================= HERO ================= */
function SplitTitle() {
  const lines = [
    ["I", "build", "systems,"],
    ["experiences,"],
    ["&", "ideas"],
  ];
  let idx = 0;
  return (
    <h1 className="hero-title">
      {lines.map((words, li) => (
        <span key={li} style={{ display: "block" }}>
          {words.map((w, wi) => {
            const delay = 200 + (idx++) * 90;
            return (
              <span key={wi} className="word" style={{ animationDelay: delay + "ms", marginRight: "0.18em" }}>{w}</span>
            );
          })}
        </span>
      ))}
      <span className="l3">that move forward.</span>
    </h1>
  );
}

function Hero() {
  const portrait = useRef(null);
  useEffect(() => {
    const el = portrait.current; if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2) / r.width;
      const y = (e.clientY - r.top - r.height/2) / r.height;
      el.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    };
    const onLeave = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const wrap = document.querySelector(".hero-portrait-wrap");
      if (wrap) wrap.style.transform = `translateY(${y * -0.05}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section id="hero" className="hero section">
      <div className="wrap" style={{ width: "100%" }}>
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="dot"/>
              <span>CS · APPLIED MATH · NEW DELHI</span>
            </div>
            <SplitTitle />
            <p className="hero-statement">
              <strong>Raghav Gulati.</strong> CS student building privacy-first AI pipelines, cybersecurity tools, and gesture interfaces — at the intersection of <strong>systems design</strong>, <strong>security</strong>, and <strong>machine learning</strong>.
            </p>
            <div className="hero-stats">
              <div className="hero-stat"><div className="hero-stat-label">Hackathon</div><div className="hero-stat-value">Top <span className="accent">1.3%</span></div></div>
              <div className="hero-stat"><div className="hero-stat-label">SGPA</div><div className="hero-stat-value">9.28</div></div>
              <div className="hero-stat"><div className="hero-stat-label">Shipped</div><div className="hero-stat-value">6 projects</div></div>
              <div className="hero-stat"><div className="hero-stat-label">On GitHub</div><div className="hero-stat-value">Since 2020</div></div>
            </div>
          </div>

          <div className="hero-portrait-wrap">
            <div className="hero-portrait" ref={portrait}>
              <img src="assets/raghav.jpeg" alt="Raghav Gulati"/>
              <span className="hud-mark tl"/><span className="hud-mark tr"/>
              <span className="hud-mark bl"/><span className="hud-mark br"/>
              <div className="hero-portrait-tag">
                <span>RG · 2026</span>
                <span className="id">ID/0001 — DEL</span>
              </div>
            </div>
            <div className="float-card fc-1">
              <div className="float-card-label">Top Rank</div>
              <div className="float-card-value">1.3<span className="small">%</span></div>
            </div>
            <div className="float-card fc-2">
              <div className="float-card-label">Active Build</div>
              <div className="float-card-value">NyayaSetu</div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-cue"><span>Scroll</span><div className="bar"/></div>
    </section>
  );
}

/* ================= MARQUEE ================= */
function Marquee() {
  const items = ["AI / RAG", "Cybersecurity", "Robotics", "Full-stack", "Privacy-first", "Hackathons", "Research", "Builder"];
  const set = (
    <div className="marquee-item">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <span>{it}</span>
          <span className="star">✦</span>
        </React.Fragment>
      ))}
    </div>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">
        {set}{set}
      </div>
    </div>
  );
}

/* ================= ABOUT ================= */
function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="section-tag"><span className="num">01</span><span>About</span></div>
            <h2 className="section-title">Curiosity as a <em>forcing function.</em></h2>
          </div>
          <div className="section-sub">Six years public on GitHub. Three years of hackathons. Counting.</div>
        </div>

        <div className="about-grid">
          <div className="about-bio reveal">
            <p>CS undergrad building <em>real-time systems</em>, privacy-first AI, and security tools.</p>
            <p>I'm drawn to problems that sit at the boundary of <em>system design</em>, <em>security</em>, and human-computer interaction.</p>
            <p>The approach: understand the architecture, solve the hard part, <em>then ship</em>.</p>
          </div>
          <div className="timeline reveal-stagger">
            {window.ABOUT_TIMELINE.map((t, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-title">{t.title}</div>
                <div className="timeline-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= SKILLS — constellation ================= */
function SkillConstellation() {
  const nodes = window.NETWORK_NODES;
  const links = window.NETWORK_LINKS;
  const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]));

  const kindStyles = {
    core: { stroke: "#6a98ff", fill: "rgba(106,152,255,0.20)" },
    lang: { stroke: "#4d7cff", fill: "rgba(77,124,255,0.14)" },
    ai:   { stroke: "#a855f7", fill: "rgba(168,85,247,0.14)" },
    sec:  { stroke: "#d946ef", fill: "rgba(217,70,239,0.14)" },
    rob:  { stroke: "#34d399", fill: "rgba(52,211,153,0.14)" },
    rsh:  { stroke: "#fbbf24", fill: "rgba(251,191,36,0.14)" },
  };

  return (
    <div className="constellation-wrap reveal">
      <svg viewBox="100 150 800 700" className="constellation-svg" aria-hidden="true">
        <defs>
          <filter id="ng" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="cg" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="24" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="lk" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6a98ff" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.25"/>
          </linearGradient>
        </defs>

        {/* Links */}
        {links.map(([a, b], i) => {
          const na = nodeMap[a], nb = nodeMap[b];
          if (!na || !nb) return null;
          return (
            <line key={i}
              x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              stroke="url(#lk)" strokeWidth="1.4" strokeDasharray="5 8" opacity="0.7"
            />
          );
        })}

        {/* Nodes */}
        {nodes.map(n => {
          const s = kindStyles[n.kind] || kindStyles.lang;
          const isCore = n.kind === "core";
          return (
            <g key={n.id} className="const-node-g">
              {/* Glow halo */}
              <circle cx={n.x} cy={n.y} r={n.r + (isCore ? 30 : 16)}
                fill={s.fill} opacity="0.45"
                filter={isCore ? "url(#cg)" : "url(#ng)"}
              />
              {/* Outer dashed rings on core */}
              {isCore && <>
                <circle cx={n.x} cy={n.y} r={n.r + 38} fill="none"
                  stroke={s.stroke} strokeWidth="0.9" opacity="0.22" strokeDasharray="4 7"/>
                <circle cx={n.x} cy={n.y} r={n.r + 60} fill="none"
                  stroke={s.stroke} strokeWidth="0.5" opacity="0.11" strokeDasharray="2 10"/>
              </>}
              {/* Node circle */}
              <circle cx={n.x} cy={n.y} r={n.r}
                fill={s.fill} stroke={s.stroke}
                strokeWidth={isCore ? 2 : 1.5}
                className="const-circle"
              />
              {/* Label */}
              <text x={n.x} y={n.y - (isCore ? 6 : 0)}
                textAnchor="middle" dominantBaseline="middle"
                fontFamily="JetBrains Mono"
                fontSize={isCore ? 17 : 13}
                fontWeight={isCore ? "600" : "500"}
                fill={isCore ? "#fff" : s.stroke}
                letterSpacing={isCore ? "-0.4" : "0"}
              >{n.label}</text>
              {isCore && (
                <text x={n.x} y={n.y + 16}
                  textAnchor="middle" fontFamily="JetBrains Mono"
                  fontSize="7.5" fill={s.stroke} letterSpacing="2.5" opacity="0.65"
                >CORE</text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="section-tag"><span className="num">02</span><span>Skills</span></div>
            <h2 className="section-title">A stack built for <em>intelligent systems</em>.</h2>
          </div>
          <div className="section-sub">Languages, AI frameworks, security tools, and cross-platform runtimes.</div>
        </div>

        <SkillConstellation />

        <div className="skill-categories-grid reveal-stagger">
          {window.SKILL_CATEGORIES.map((c, i) => (
            <div key={i} className="skill-cat">
              <div className="skill-cat-head">
                <div className="skill-cat-name">{c.name}</div>
                <div className="skill-cat-meter">{c.pct}%</div>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ transform: `scaleX(${c.pct/100})`, transition: "transform 1.6s cubic-bezier(.2,.8,.2,1)" }}/>
              </div>
              <div className="skill-tags">
                {c.tags.map((t, j) => <span key={j} className="skill-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= TECHNICAL HIGHLIGHTS ================= */
function TechnicalHighlights() {
  return (
    <section id="highlights" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="section-tag"><span className="num">03</span><span>Technical Highlights</span></div>
            <h2 className="section-title">Engineering <em>depth.</em></h2>
          </div>
          <div className="section-sub">Fast-scan signals — algorithms, architecture, and real shipping.</div>
        </div>
        <div className="highlights-grid reveal-stagger">
          {window.TECHNICAL_HIGHLIGHTS.map((h, i) => (
            <div key={i} className="highlight-item">
              <span className="hi-arrow">→</span>
              <span className="hi-text">{h}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= PROJECT VISUALS ================= */
function ProjectVisual({ kind }) {
  if (kind === "rag") return (
    <svg viewBox="0 0 400 200">
      <defs>
        <linearGradient id="rg1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6a98ff"/>
          <stop offset="100%" stopColor="#a855f7"/>
        </linearGradient>
        <linearGradient id="rg2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a855f7"/>
          <stop offset="100%" stopColor="#34d399"/>
        </linearGradient>
      </defs>

      {/* Document corpus */}
      {[...Array(5)].map((_,i) => (
        <rect key={i} x={8 + i*10} y={55 + i*3} width="28" height="38" rx="2"
              fill="rgba(106,152,255,0.12)" stroke="rgba(106,152,255,0.45)" strokeWidth="0.8"/>
      ))}
      <text x="28" y="116" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7.5" fill="#6a98ff" opacity="0.8">CORPUS</text>

      {/* Arrow 1 */}
      <path d="M66 74 L88 74" stroke="rgba(106,152,255,0.4)" strokeWidth="1" strokeDasharray="2 2"/>

      {/* Embedder */}
      <rect x="88" y="60" width="66" height="36" rx="5" fill="rgba(77,124,255,0.1)" stroke="rgba(106,152,255,0.55)" strokeWidth="0.9"/>
      <text x="121" y="77" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="#6a98ff">fastembed</text>
      <text x="121" y="90" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7.5" fill="#62646f">384-DIM</text>

      {/* Arrow 2 */}
      <path d="M154 74 L170 74" stroke="rgba(106,152,255,0.4)" strokeWidth="1" strokeDasharray="2 2"/>

      {/* Qdrant */}
      <ellipse cx="194" cy="66" rx="22" ry="8" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.55)" strokeWidth="0.9"/>
      <rect x="172" y="66" width="44" height="22" fill="rgba(168,85,247,0.08)" stroke="rgba(168,85,247,0.55)" strokeWidth="0.9"/>
      <ellipse cx="194" cy="88" rx="22" ry="8" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.55)" strokeWidth="0.9"/>
      <text x="194" y="80" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#a855f7">Qdrant</text>

      {/* Arrow 3 */}
      <path d="M216 74 L236 74" stroke="rgba(168,85,247,0.45)" strokeWidth="1" strokeDasharray="2 2"/>

      {/* Router */}
      <rect x="236" y="56" width="56" height="44" rx="5" fill="rgba(217,70,239,0.08)" stroke="rgba(217,70,239,0.45)" strokeWidth="0.9"/>
      <text x="264" y="73" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7.5" fill="#d946ef">Router</text>
      <text x="264" y="85" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="#62646f">Groq LLaMA</text>
      <text x="264" y="95" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="#62646f">Ollama ↙</text>

      {/* Arrow 4 */}
      <path d="M292 74 L310 74" stroke="rgba(217,70,239,0.45)" strokeWidth="1" strokeDasharray="2 2"/>

      {/* LLM output */}
      <rect x="310" y="52" width="78" height="52" rx="6" fill="rgba(52,211,153,0.07)" stroke="rgba(52,211,153,0.45)" strokeWidth="0.9"/>
      <text x="349" y="72" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#34d399">LLaMA 3.1</text>
      <text x="349" y="85" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="#62646f">AES-256</text>
      <text x="349" y="96" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="#62646f">JWT auth</text>

      {/* Animated pipeline flow */}
      <path d="M66 74 L88 74 L154 74 L170 74 L216 74 L236 74 L292 74 L310 74 L388 74"
            fill="none" stroke="url(#rg1)" strokeWidth="1.4" opacity="0.55"
            strokeDasharray="6 8"
            style={{ animation: "ragFlow 2.8s linear infinite" }}/>

      {/* Rank badge */}
      <rect x="296" y="18" width="92" height="22" rx="4" fill="rgba(251,191,36,0.12)" stroke="rgba(251,191,36,0.4)" strokeWidth="0.8"/>
      <text x="342" y="33" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="#fbbf24">IIIT-D · DU CIC  #2</text>

      {/* Bottom labels */}
      <text x="8" y="152" fontFamily="JetBrains Mono" fontSize="7.5" fill="#6a98ff" opacity="0.7">Indian Kanoon · live scraper</text>
      <text x="8" y="166" fontFamily="JetBrains Mono" fontSize="7.5" fill="#62646f">dual-LLM fallback · AES-256 logs · JWT</text>
    </svg>
  );
  if (kind === "neural") return (
    <svg viewBox="0 0 400 200">
      {[...Array(3)].map((_,col) => [...Array(4)].map((_,row) => (
        <circle key={col+"-"+row} cx={80 + col*120} cy={40 + row*40} r="6" fill={col===1 ? "#a855f7" : "#6a98ff"} opacity="0.75"/>
      )))}
      {[...Array(4)].map((_,r1) => [...Array(4)].map((_,r2) => (
        <line key={r1+"-"+r2} x1="80" y1={40+r1*40} x2="200" y2={40+r2*40} stroke="rgba(255,255,255,0.07)"/>
      )))}
      {[...Array(4)].map((_,r1) => [...Array(4)].map((_,r2) => (
        <line key={"b"+r1+"-"+r2} x1="200" y1={40+r1*40} x2="320" y2={40+r2*40} stroke="rgba(168,85,247,0.10)"/>
      )))}
      <text x="200" y="182" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#62646f">Phi-3 Mini · 0 cloud calls · Ebbinghaus decay</text>
    </svg>
  );
  if (kind === "lens") return (
    <svg viewBox="0 0 400 200">
      <circle cx="200" cy="100" r="68" fill="none" stroke="#6a98ff" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="200" cy="100" r="46" fill="rgba(77,124,255,0.08)" stroke="#6a98ff" strokeWidth="1"/>
      <circle cx="200" cy="100" r="22" fill="rgba(168,85,247,0.2)" stroke="#a855f7" strokeWidth="1"/>
      <line x1="246" y1="146" x2="290" y2="190" stroke="#6a98ff" strokeWidth="2" strokeLinecap="round"/>
      <text x="200" y="36" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#62646f">CLIP · FFT · NLP  —  3 signals fused</text>
      <text x="200" y="172" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#a855f7">CONFIDENCE 0.82</text>
    </svg>
  );
  if (kind === "hand") {
    const pts = [[120,150],[140,130],[155,105],[170,85],[185,75],[165,100],[180,80],[195,65],[200,55],[180,110],[200,95],[215,80],[225,70],[195,125],[215,110],[230,100],[240,90],[210,140],[230,130],[245,125],[255,120]];
    const chains = [[0,1,2,3,4],[0,5,6,7,8],[0,9,10,11,12],[0,13,14,15,16],[0,17,18,19,20]];
    return (
      <svg viewBox="0 0 400 200">
        {chains.map((ch,ci) => (
          <polyline key={ci} fill="none" stroke="rgba(106,152,255,0.4)" strokeWidth="1" points={ch.map(i => (pts[i][0]+50)+","+pts[i][1]).join(" ")}/>
        ))}
        {pts.map((p,i) => (<circle key={i} cx={p[0]+50} cy={p[1]} r={i===0?5:3.5} fill={i===0 ? "#a855f7" : "#6a98ff"}/>))}
        <text x="330" y="44" fontFamily="JetBrains Mono" fontSize="9.5" fill="#62646f">21 LM</text>
        <text x="330" y="60" fontFamily="JetBrains Mono" fontSize="9.5" fill="#34d399">30 FPS</text>
        <text x="330" y="76" fontFamily="JetBrains Mono" fontSize="9" fill="#a855f7">−80% err</text>
      </svg>
    );
  }
  if (kind === "mobile") return (
    <svg viewBox="0 0 400 200">
      <rect x="160" y="20" width="80" height="160" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)"/>
      <rect x="170" y="40" width="60" height="22" rx="3" fill="rgba(106,152,255,0.2)"/>
      <rect x="170" y="68" width="60" height="22" rx="3" fill="rgba(168,85,247,0.2)"/>
      <rect x="170" y="96" width="60" height="22" rx="3" fill="rgba(106,152,255,0.2)"/>
      <rect x="170" y="124" width="60" height="22" rx="3" fill="rgba(168,85,247,0.2)"/>
      <text x="200" y="14" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#62646f">FLUTTER · DART · 0% NATIVE</text>
    </svg>
  );
  if (kind === "scrape") return (
    <svg viewBox="0 0 400 200">
      {[...Array(8)].map((_,i) => (<rect key={i} x="40" y={30 + i*18} width={60 + (i%3)*40} height="6" rx="1" fill="rgba(106,152,255,0.22)"/>))}
      <path d="M220 30 L 220 180" stroke="rgba(255,255,255,0.1)" strokeDasharray="2 4"/>
      <text x="240" y="55" fontFamily="JetBrains Mono" fontSize="11" fill="#6a98ff">.csv</text>
      <text x="240" y="78" fontFamily="JetBrains Mono" fontSize="11" fill="#a855f7">.txt</text>
      <text x="240" y="118" fontFamily="JetBrains Mono" fontSize="9" fill="#62646f">$ scrape -k AI -p 5</text>
      <text x="240" y="138" fontFamily="JetBrains Mono" fontSize="9" fill="#34d399">lxml recovery ✓</text>
    </svg>
  );
  return null;
}

/* ================= PROJECTS ================= */
function ProjectCard({ p }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      el.style.setProperty("--cx", (x*100) + "%");
      el.style.setProperty("--cy", (y*100) + "%");
      el.style.transform = `perspective(1200px) rotateY(${(x-0.5)*6}deg) rotateX(${(0.5-y)*6}deg) translateY(-4px)`;
    };
    const onLeave = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);
  return (
    <article ref={ref} className={"project-card " + p.span + (p.flagship ? " flagship" : "")}>
      <div className="project-meta">
        <div className="project-num">// PROJECT {p.id}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {p.github && (
            <a className="project-github" href={p.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.69-.22.69-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
              GitHub
            </a>
          )}
          <div className="project-year">{p.year}</div>
        </div>
      </div>
      <div className="project-visual"><ProjectVisual kind={p.visual}/></div>
      <h3 className="project-name">{p.name}</h3>
      <div className="project-tagline">{p.tagline}</div>
      {p.problem && (
        <div className="project-problem">
          <span className="prob-label">Problem</span>
          {p.problem}
        </div>
      )}
      {p.challenge && (
        <div className="project-challenge">
          <span className="prob-label">Challenge</span>
          {p.challenge}
        </div>
      )}
      <div className="project-metrics">
        {p.metrics.map((m, j) => (
          <div key={j}>
            <div className="metric-label">{m.label}</div>
            <div className="metric-value">{m.value}{m.unit && <span className="unit">{m.unit}</span>}</div>
          </div>
        ))}
      </div>
      {p.learned && (
        <div className="project-learned">
          <div className="learned-label">What I learned</div>
          <div className="learned-text">{p.learned}</div>
        </div>
      )}
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="section-tag"><span className="num">04</span><span>Selected Work</span></div>
            <h2 className="section-title">Bets on a <em>smarter</em>, safer future.</h2>
          </div>
          <div className="section-sub">Six projects shipped — from research to production.</div>
        </div>
        <div className="projects-grid reveal-stagger">
          {window.PROJECTS.map((p) => <ProjectCard key={p.id} p={p}/>)}
        </div>
      </div>
    </section>
  );
}

/* ================= ACHIEVEMENTS ================= */
function Counter({ num, suffix, label, decimals = 0 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    let started = false;
    const io = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (e.isIntersecting && !started) {
          started = true;
          const start = performance.now(); const dur = 1600;
          const step = (t) => {
            const p = Math.min(1, (t - start)/dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(num * eased);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [num]);
  return (
    <div ref={ref} className="counter">
      <div className="counter-num">{val.toFixed(decimals)}<span className="suffix">{suffix}</span></div>
      <div className="counter-label">{label}</div>
    </div>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="section-tag"><span className="num">05</span><span>Wins</span></div>
            <h2 className="section-title">Where the <em>numbers</em> earn the words.</h2>
          </div>
          <div className="section-sub">Hackathons, ideathons, podiums.</div>
        </div>
        <div className="counters reveal-stagger">
          {window.COUNTERS.map((c, i) => <Counter key={i} {...c}/>)}
        </div>
        <div className="achievements-list reveal-stagger">
          {window.ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="ach-card">
              <div className="ach-year">{a.year}</div>
              <div>
                <div className="ach-title">{a.title}</div>
                <div className="ach-place">{a.place}</div>
              </div>
              <div className="ach-rank">{a.rank}</div>
            </div>
          ))}
        </div>
        {window.CERTIFICATIONS && window.CERTIFICATIONS.length > 0 && (() => {
          const groups = {};
          window.CERTIFICATIONS.forEach(c => { (groups[c.category] = groups[c.category] || []).push(c); });
          return (
            <div className="certs-section reveal">
              <div className="certs-label">CERTIFICATIONS</div>
              {Object.entries(groups).map(([cat, certs]) => (
                <div key={cat} className="certs-group">
                  <div className="certs-group-label">{cat}</div>
                  <div className="certs-row">
                    {certs.map((c, i) => (
                      <div key={i} className="cert-card" data-issuer={c.issuer.split(/[\s·]/)[0].toLowerCase()}>
                        <div className="cert-card-top">
                          <div className="cert-issuer">{c.issuer}</div>
                          <div className="cert-year">{c.year}</div>
                        </div>
                        <div className="cert-name">{c.name}</div>
                        {c.desc && <div className="cert-desc">{c.desc}</div>}
                        {c.skills && c.skills.length > 0 && (
                          <div className="cert-skills">
                            {c.skills.map((s, j) => <span key={j} className="cert-skill">{s}</span>)}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </section>
  );
}

/* ================= EXPERIENCE ================= */
function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="section-tag"><span className="num">06</span><span>Track</span></div>
            <h2 className="section-title">Real <em>budgets</em>. Real ship dates.</h2>
          </div>
          <div className="section-sub">Engineering and ops where things shipped on time.</div>
        </div>
        <div className="exp-list reveal-stagger">
          {window.EXPERIENCE.map((e, i) => (
            <div key={i} className="exp-card">
              <div className="exp-period">{e.period}</div>
              <div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-org">{e.org}{e.live && <a className="live" href={"https://" + e.live} target="_blank" rel="noreferrer">↗ {e.live}</a>}</div>
                {e.desc && <div className="exp-desc">{e.desc}</div>}
                <div className="exp-impact">
                  {e.impact.map((m, j) => (
                    <div key={j} className="exp-impact-item">
                      <div className="label">{m.label}</div>
                      <div className="value">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CONTACT ================= */
function Terminal() {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  const [sent, setSent] = useState(false);
  const startedRef = useRef(false);
  const C = window.CONTACT;
  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    const seq = [
      { t: "system", text: "Establishing secure channel… [RG-NET v2.6]" },
      { t: "system", text: "Encryption: AES-256 · Latency: 42ms · ✓ Connected" },
      { t: "blank" },
      { t: "prompt", path: "~/portfolio", cmd: "whoami" },
      { t: "out", k: "name", v: "Raghav Gulati" },
      { t: "out", k: "role", v: "CS undergrad · AI / Cybersec / Robotics" },
      { t: "out", k: "loc",  v: C.location },
      { t: "blank" },
      { t: "prompt", path: "~/portfolio", cmd: "cat contact.json" },
      { t: "out", k: "email",    v: C.email },
      { t: "out", k: "phone",    v: C.phone },
      { t: "out", k: "github",   v: C.github },
      { t: "out", k: "linkedin", v: C.linkedin },
      { t: "blank" },
      { t: "comment", text: "// type a message below ↓" },
    ];
    let i = 0; let cancelled = false;
    const next = () => {
      if (cancelled || i >= seq.length) return;
      const item = seq[i]; i++;
      if (!item) { setTimeout(next, 80); return; }
      setLines(prev => [...prev, item]);
      setTimeout(next, 90 + Math.random() * 70);
    };
    next();
    return () => { cancelled = true; };
  }, []);
  const send = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLines(prev => [
      ...prev,
      { t: "prompt", path: "~/portfolio", cmd: `send "${input.trim()}"` },
      { t: "system", text: "✓ Transmission queued · opening mail…" },
    ]);
    const subject = encodeURIComponent("Hello from your portfolio");
    const body = encodeURIComponent(input.trim());
    window.location.href = `mailto:${C.email}?subject=${subject}&body=${body}`;
    setInput(""); setSent(true);
    setTimeout(() => setSent(false), 2400);
  };
  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="tb-dots"><span/><span/><span/></div>
        <div className="tb-title">raghav@portfolio — zsh — 80×24</div>
        <div className="tb-meta">SECURE</div>
      </div>
      <div className="terminal-body">
        {lines.filter(Boolean).map((l, i) => {
          if (!l || !l.t) return null;
          if (l.t === "blank") return <span key={i} className="t-line">&nbsp;</span>;
          if (l.t === "system") return <span key={i} className="t-line t-dim">{l.text}</span>;
          if (l.t === "comment") return <span key={i} className="t-line t-comment">{l.text}</span>;
          if (l.t === "prompt") return (
            <span key={i} className="t-line"><span className="t-prompt"/><span className="t-path">{l.path}</span><span className="t-cmd">{l.cmd}</span></span>
          );
          if (l.t === "out") return (
            <span key={i} className="t-line"><span className="t-out-key">{l.k.padEnd(10," ")}</span>:&nbsp;<span className="t-out-val">{l.v}</span></span>
          );
          return null;
        })}
        <form onSubmit={send} style={{ display: "flex", alignItems: "center", marginTop: 6 }}>
          <span className="t-prompt"/><span className="t-path">~/portfolio</span>
          <span style={{ color: "var(--ink-3)", marginRight: 6 }}>$</span>
          <input className="t-input" value={input} onChange={(e) => setInput(e.target.value)}
                 placeholder={sent ? "queued ✓ — type another…" : "say hello…"} spellCheck={false}/>
          <span className="cursor-blink"></span>
        </form>
      </div>
    </div>
  );
}

function Contact() {
  const C = window.CONTACT;
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="section-tag"><span className="num">07</span><span>Contact</span></div>
            <h2 className="section-title">Let's <em>build</em> something memorable.</h2>
          </div>
          <div className="section-sub">For research, internships, or hackathon teams that ship at 3 AM.</div>
        </div>
        <div className="contact-grid">
          <div className="reveal"><Terminal/></div>
          <div className="contact-side reveal-stagger">
            <a className="contact-card" href={`mailto:${C.email}`}>
              <div className="cc-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5"/></svg></div>
              <div><div className="cc-label">Email</div><div className="cc-value">{C.email}</div></div>
            </a>
            <a className="contact-card" href={`tel:${C.phone.replace(/\s/g,'')}`}>
              <div className="cc-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5"/></svg></div>
              <div><div className="cc-label">Phone</div><div className="cc-value">{C.phone}</div></div>
            </a>
            <a className="contact-card" href={`https://${C.github}`} target="_blank" rel="noreferrer">
              <div className="cc-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.69-.22.69-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg></div>
              <div><div className="cc-label">GitHub</div><div className="cc-value">{C.github}</div></div>
            </a>
            <a className="contact-card" href={`https://${C.linkedin}`} target="_blank" rel="noreferrer">
              <div className="cc-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-.95 1.84-1.95 3.78-1.95 4.04 0 4.79 2.66 4.79 6.12V21H18.4v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21H10V9z"/></svg></div>
              <div><div className="cc-label">LinkedIn</div><div className="cc-value">{C.linkedin}</div></div>
            </a>
            <a className="transmit-btn" href={`mailto:${C.email}?subject=Let%27s%20build%20something`}>
              <span>Transmit message</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-row">
          <div className="footer-mark">RAGHAV GULATI · 2026</div>
          <div className="footer-meta">DESIGNED & BUILT IN NEW DELHI · v 2.6</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Hero, Marquee, About, Skills, TechnicalHighlights, Projects, Achievements, Experience, Contact, Footer });
