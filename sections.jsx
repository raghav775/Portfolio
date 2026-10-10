// Sections — engineered for recruiter clarity + visual depth.

const { useEffect, useRef, useState } = React;

/* ================= HERO ================= */
function HeroLines() {
  const lines = [
    ["I", "build", "retrieval", "systems,"],
    ["data", "pipelines", "&", "private", "AI"],
  ];
  let idx = 0;
  return (
    <span className="hero-lines">
      {lines.map((words, li) => (
        <span key={li} className="hero-line">
          {words.map((w, wi) => {
            const delay = 180 + (idx++) * 70;
            // Real whitespace between the spans — margin-right alone renders fine
            // but makes the h1 read as "Ibuildretrievalsystems," to screen
            // readers and to anyone copying the text.
            return (
              <React.Fragment key={wi}>
                <span className="word" style={{ animationDelay: delay + "ms" }}>{w}</span>{" "}
              </React.Fragment>
            );
          })}
        </span>
      ))}
      <span className="l3">that hold up in production.</span>
    </span>
  );
}

function Hero() {
  const portrait = useRef(null);
  const C = window.CONTACT;
  useEffect(() => {
    const el = portrait.current; if (!el) return;
    if (window.matchMedia("(hover: none), (prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2) / r.width;
      const y = (e.clientY - r.top - r.height/2) / r.height;
      el.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    };
    const onLeave = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);

  const goProjects = (e) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="hero section">
      <div className="wrap" style={{ width: "100%" }}>
        <div className="hero-grid">
          <div className="hero-main">
            <div className="hero-eyebrow">
              <span className="dot"/>
              <span>Data Science Intern · Spice Money · New Delhi</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-name">Raghav Gulati</span>
              <HeroLines />
            </h1>

            <p className="hero-statement">
              B.Tech <strong>CS with Applied Mathematics</strong> at VIPS Delhi. I ship production
              <strong> RAG and retrieval systems</strong>, <strong>forecasting models</strong>, and privacy-first
              AI — most recently a rural-banking policy chatbot serving agent queries across 11 verticals at Spice Money.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects" onClick={goProjects}>
                See the work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a className="btn btn-ghost" href={C.githubUrl} target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.69-.22.69-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
                GitHub
              </a>
              <a className="btn btn-ghost" href={C.resume} target="_blank" rel="noopener noreferrer">
                Résumé
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 3h8v8M13 3 3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </a>
            </div>

            <dl className="hero-stats">
              <div className="hero-stat">
                <dt className="hero-stat-label">iCode Hackathon</dt>
                <dd className="hero-stat-value">Top <span className="accent">0.12%</span></dd>
                <dd className="hero-stat-note">98th of 80,000+ · Python Advanced</dd>
              </div>
              <div className="hero-stat">
                <dt className="hero-stat-label">Hackathon podiums</dt>
                <dd className="hero-stat-value">#2 <span className="thin">×2</span></dd>
                <dd className="hero-stat-note">IIIT Delhi · DU CIC</dd>
              </div>
              <div className="hero-stat">
                <dt className="hero-stat-label">CGPA</dt>
                <dd className="hero-stat-value">9.00</dd>
                <dd className="hero-stat-note">B.Tech CS · VIPS Delhi</dd>
              </div>
              <div className="hero-stat">
                <dt className="hero-stat-label">Shipped</dt>
                <dd className="hero-stat-value">7 projects</dd>
                <dd className="hero-stat-note">All source on GitHub</dd>
              </div>
            </dl>
          </div>

          <div className="hero-portrait-wrap">
            <div className="hero-portrait" ref={portrait}>
              <img src="assets/raghav.jpeg" alt="Portrait of Raghav Gulati" width="380" height="460" decoding="async"/>
              <span className="hud-mark tl"/><span className="hud-mark tr"/>
              <span className="hud-mark bl"/><span className="hud-mark br"/>
            </div>
            <div className="float-card fc-1">
              <div className="float-card-label">Currently</div>
              <div className="float-card-value">Spice Money</div>
              <div className="float-card-note">Data Science Intern</div>
            </div>
            <div className="float-card fc-2">
              <div className="float-card-label">Latest build</div>
              <div className="float-card-value">NyayaSetu</div>
              <div className="float-card-note">Legal RAG · live</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= MARQUEE ================= */
function Marquee() {
  const items = ["RAG & retrieval", "Data science", "Cybersecurity", "Full-stack", "Privacy-first AI", "Hackathons", "Research", "Builder"];
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
    <div className="marquee" aria-hidden="true">
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
          <div className="section-sub">Six years public on GitHub. Three years of hackathons. Now shipping data science in production.</div>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <div className="about-bio reveal">
              <p>CS undergrad building <em>retrieval systems</em>, data pipelines, and privacy-first AI.</p>
              <p>I'm drawn to problems at the boundary of <em>system design</em>, <em>security</em>, and machine learning.</p>
              <p>The approach: understand the architecture, solve the hard part, <em>then ship</em>.</p>
            </div>

            <div className="education reveal">
              <div className="education-label">Education</div>
              {window.EDUCATION.map((e, i) => (
                <div key={i} className={"edu-row" + (e.current ? " current" : "")}>
                  <div className="edu-year">{e.year}</div>
                  <div className="edu-body">
                    <div className="edu-qual">{e.qualification}</div>
                    <div className="edu-inst">{e.institute}</div>
                  </div>
                  <div className="edu-score">
                    <span className="edu-score-value">{e.score}</span>
                    <span className="edu-score-label">{e.scoreLabel}</span>
                  </div>
                </div>
              ))}
            </div>
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

/* ================= SKILLS — hierarchy, not percentages ================= */
function SkillGroup({ g }) {
  return (
    <article className={"skill-group " + g.tier}>
      <div className="sg-head">
        <h3 className="sg-name">{g.name}</h3>
        {g.tier === "depth" && <span className="sg-badge">Core strength</span>}
      </div>
      {g.evidence && <p className="sg-evidence">{g.evidence}</p>}
      <ul className="sg-chips">
        {g.core.map((t, i) => <li key={i} className="chip chip-core">{t}</li>)}
        {g.also.map((t, i) => <li key={"a" + i} className="chip">{t}</li>)}
      </ul>
    </article>
  );
}

function Skills() {
  const groups = window.SKILL_GROUPS;
  const depth = groups.filter(g => g.tier === "depth");
  const breadth = groups.filter(g => g.tier === "breadth");
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="section-tag"><span className="num">02</span><span>Skills</span></div>
            <h2 className="section-title">A stack built for <em>intelligent systems</em>.</h2>
          </div>
          <div className="section-sub">
            Ordered by depth, not alphabetically. <strong>Filled</strong> chips are what the shipped work
            actually rests on; outlined chips are working familiarity.
          </div>
        </div>

        <div className="skills-depth reveal-stagger">
          {depth.map((g, i) => <SkillGroup key={i} g={g}/>)}
        </div>
        <div className="skills-breadth reveal-stagger">
          {breadth.map((g, i) => <SkillGroup key={i} g={g}/>)}
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
          <div className="section-sub">The four hardest things I've built, then everything else worth scanning.</div>
        </div>

        <div className="hl-primary reveal-stagger">
          {window.HIGHLIGHTS_PRIMARY.map((h, i) => (
            <article key={i} className="hl-card">
              <div className="hl-area">{h.area}</div>
              <h3 className="hl-title">{h.title}</h3>
              <p className="hl-detail">{h.detail}</p>
              <div className="hl-tags">
                {h.tags.map((t, j) => <span key={j} className="chip">{t}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="hl-secondary reveal">
          <div className="hl-sec-label">Also shipped</div>
          <ul className="hl-sec-list">
            {window.HIGHLIGHTS_SECONDARY.map((h, i) => (
              <li key={i}><span className="hi-arrow" aria-hidden="true">→</span><span>{h}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ================= PROJECT VISUALS ================= */
function ProjectVisual({ kind }) {
  // Canvas is 520x120 (~4.3:1) to match the real card-visual box, so the art
  // fills the width instead of letterboxing into a small centred island.
  if (kind === "rag") return (
    <svg viewBox="0 0 520 120" role="img" aria-label="RAG pipeline: document corpus to fastembed embeddings to a Qdrant vector store to a dual-LLM router with AES-256 logging">
      <defs>
        <linearGradient id="rg1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6a98ff"/>
          <stop offset="100%" stopColor="#a855f7"/>
        </linearGradient>
      </defs>

      {[...Array(5)].map((_,i) => (
        <rect key={i} x={10 + i*9} y={40 + i*3} width="28" height="34" rx="2"
              fill="rgba(106,152,255,0.12)" stroke="rgba(106,152,255,0.45)" strokeWidth="0.8"/>
      ))}
      <text x="32" y="92" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#6a98ff" opacity="0.8">CORPUS</text>

      <path d="M74 58 L100 58" stroke="rgba(106,152,255,0.4)" strokeWidth="1" strokeDasharray="2 3"/>

      <rect x="100" y="42" width="82" height="34" rx="5" fill="rgba(77,124,255,0.1)" stroke="rgba(106,152,255,0.55)" strokeWidth="1"/>
      <text x="141" y="58" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10.5" fill="#6a98ff">fastembed</text>
      <text x="141" y="70" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="#8a8d99">384-DIM</text>

      <path d="M182 58 L204 58" stroke="rgba(106,152,255,0.4)" strokeWidth="1" strokeDasharray="2 3"/>

      <ellipse cx="234" cy="46" rx="28" ry="8" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.55)" strokeWidth="1"/>
      <rect x="206" y="46" width="56" height="24" fill="rgba(168,85,247,0.08)" stroke="rgba(168,85,247,0.55)" strokeWidth="1"/>
      <ellipse cx="234" cy="70" rx="28" ry="8" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.55)" strokeWidth="1"/>
      <text x="234" y="62" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#a855f7">Qdrant</text>

      <path d="M262 58 L288 58" stroke="rgba(168,85,247,0.45)" strokeWidth="1" strokeDasharray="2 3"/>

      <rect x="288" y="38" width="76" height="42" rx="5" fill="rgba(217,70,239,0.08)" stroke="rgba(217,70,239,0.45)" strokeWidth="1"/>
      <text x="326" y="53" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9.5" fill="#d946ef">Router</text>
      <text x="326" y="65" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="#8a8d99">Groq LLaMA</text>
      <text x="326" y="75" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="#8a8d99">Ollama ↙</text>

      <path d="M364 58 L388 58" stroke="rgba(217,70,239,0.45)" strokeWidth="1" strokeDasharray="2 3"/>

      <rect x="388" y="36" width="118" height="46" rx="6" fill="rgba(52,211,153,0.07)" stroke="rgba(52,211,153,0.45)" strokeWidth="1"/>
      <text x="447" y="52" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#34d399">LLaMA 3.1</text>
      <text x="447" y="65" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="#8a8d99">AES-256 logs</text>
      <text x="447" y="76" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="#8a8d99">JWT auth</text>

      <path d="M74 58 L506 58" fill="none" stroke="url(#rg1)" strokeWidth="1.4" opacity="0.45"
            strokeDasharray="6 8" className="rag-flow"/>

      <rect x="388" y="8" width="118" height="20" rx="4" fill="rgba(251,191,36,0.12)" stroke="rgba(251,191,36,0.4)" strokeWidth="0.8"/>
      <text x="447" y="22" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#fbbf24">IIIT-D · DU CIC  #2</text>

      <text x="10" y="110" fontFamily="JetBrains Mono" fontSize="9" fill="#8a8d99">Indian Kanoon live scraper · dual-LLM fallback · AES-256 logs · JWT</text>
    </svg>
  );

  if (kind === "geo") return (
    <svg viewBox="0 0 520 120" role="img" aria-label="Map of nearby pharmacies ranked by availability probability, with a prescription OCR step">
      {[...Array(4)].map((_, i) => (
        <line key={"h" + i} x1="8" y1={16 + i * 28} x2="330" y2={16 + i * 28} stroke="rgba(255,255,255,0.06)"/>
      ))}
      {[...Array(9)].map((_, i) => (
        <line key={"v" + i} x1={8 + i * 40} y1="16" x2={8 + i * 40} y2="100" stroke="rgba(255,255,255,0.06)"/>
      ))}
      <path d="M60 88 L60 60 L150 60 L150 34 L246 34" fill="none" stroke="#6a98ff" strokeWidth="1.8" strokeLinecap="round" opacity="0.85"/>
      <circle cx="60" cy="88" r="5" fill="#6a98ff"/>
      <circle cx="60" cy="88" r="11" fill="none" stroke="#6a98ff" strokeWidth="1" opacity="0.4"/>
      <text x="48" y="106" fontFamily="JetBrains Mono" fontSize="8.5" fill="#8a8d99">you</text>

      <circle cx="246" cy="34" r="7" fill="rgba(52,211,153,0.3)" stroke="#34d399" strokeWidth="1.4"/>
      <text x="258" y="31" fontFamily="JetBrains Mono" fontSize="9" fill="#34d399">0.91 in stock</text>
      <circle cx="140" cy="26" r="5" fill="rgba(251,191,36,0.25)" stroke="#fbbf24" strokeWidth="1"/>
      <text x="150" y="23" fontFamily="JetBrains Mono" fontSize="8.5" fill="#fbbf24" opacity="0.9">0.54</text>
      <circle cx="196" cy="90" r="5" fill="rgba(217,70,239,0.2)" stroke="#d946ef" strokeWidth="1"/>
      <text x="206" y="93" fontFamily="JetBrains Mono" fontSize="8.5" fill="#d946ef" opacity="0.9">0.22</text>

      <rect x="378" y="14" width="76" height="88" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)"/>
      {[...Array(5)].map((_, i) => (
        <rect key={"l" + i} x="390" y={28 + i * 13} width={i % 2 ? 38 : 54} height="4" rx="1" fill="rgba(106,152,255,0.3)"/>
      ))}
      <path d="M458 58 L484 58" stroke="rgba(106,152,255,0.45)" strokeWidth="1" strokeDasharray="2 3"/>
      <text x="416" y="96" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="#8a8d99">Rx scan</text>
      <text x="496" y="55" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#a855f7">OCR</text>
      <text x="496" y="67" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#8a8d99">dosage</text>

      <text x="8" y="116" fontFamily="JetBrains Mono" fontSize="8.5" fill="#8a8d99">six-factor Bayesian ranking · OSM routing · 0 paid APIs</text>
    </svg>
  );

  if (kind === "neural") return (
    <svg viewBox="0 0 520 120" role="img" aria-label="Local neural network running fully offline on Phi-3 Mini">
      {[...Array(3)].map((_,col) => [...Array(4)].map((_,row) => (
        <circle key={col+"-"+row} cx={130 + col*130} cy={22 + row*24} r="5" fill={col===1 ? "#a855f7" : "#6a98ff"} opacity="0.75"/>
      )))}
      {[...Array(4)].map((_,r1) => [...Array(4)].map((_,r2) => (
        <line key={r1+"-"+r2} x1="130" y1={22+r1*24} x2="260" y2={22+r2*24} stroke="rgba(255,255,255,0.07)"/>
      )))}
      {[...Array(4)].map((_,r1) => [...Array(4)].map((_,r2) => (
        <line key={"b"+r1+"-"+r2} x1="260" y1={22+r1*24} x2="390" y2={22+r2*24} stroke="rgba(168,85,247,0.10)"/>
      )))}
      <text x="130" y="128" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#8a8d99">in</text>
      <text x="260" y="110" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#8a8d99">Phi-3 Mini · 0 cloud calls · Ebbinghaus memory decay</text>
    </svg>
  );

  if (kind === "lens") return (
    <svg viewBox="0 0 520 120" role="img" aria-label="Detector fusing CLIP, FFT and NLP signals into one uncertainty-aware verdict">
      <text x="60" y="30" fontFamily="JetBrains Mono" fontSize="10" fill="#6a98ff">CLIP</text>
      <text x="60" y="60" fontFamily="JetBrains Mono" fontSize="10" fill="#a855f7">FFT</text>
      <text x="60" y="90" fontFamily="JetBrains Mono" fontSize="10" fill="#34d399">NLP</text>
      <path d="M100 26 L180 56" stroke="rgba(106,152,255,0.35)" strokeWidth="1"/>
      <path d="M100 56 L180 56" stroke="rgba(168,85,247,0.35)" strokeWidth="1"/>
      <path d="M100 86 L180 56" stroke="rgba(52,211,153,0.35)" strokeWidth="1"/>
      <circle cx="240" cy="56" r="44" fill="none" stroke="#6a98ff" strokeWidth="1.4" opacity="0.5"/>
      <circle cx="240" cy="56" r="29" fill="rgba(77,124,255,0.08)" stroke="#6a98ff" strokeWidth="1"/>
      <circle cx="240" cy="56" r="13" fill="rgba(168,85,247,0.22)" stroke="#a855f7" strokeWidth="1"/>
      <line x1="271" y1="87" x2="298" y2="112" stroke="#6a98ff" strokeWidth="2" strokeLinecap="round"/>
      <text x="240" y="112" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#8a8d99">fusion engine</text>
      <path d="M290 56 L330 56" stroke="rgba(106,152,255,0.4)" strokeWidth="1" strokeDasharray="2 3"/>
      <rect x="330" y="34" width="178" height="44" rx="6" fill="rgba(168,85,247,0.07)" stroke="rgba(168,85,247,0.35)" strokeWidth="1"/>
      <text x="419" y="52" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#a855f7">UNCERTAINTY-AWARE</text>
      <text x="419" y="66" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#8a8d99">risk verdict, never overconfident</text>
    </svg>
  );

  if (kind === "hand") {
    const pts = [[120,150],[140,130],[155,105],[170,85],[185,75],[165,100],[180,80],[195,65],[200,55],[180,110],[200,95],[215,80],[225,70],[195,125],[215,110],[230,100],[240,90],[210,140],[230,130],[245,125],[255,120]];
    const chains = [[0,1,2,3,4],[0,5,6,7,8],[0,9,10,11,12],[0,13,14,15,16],[0,17,18,19,20]];
    const map = (i) => [(pts[i][0] - 110) * 0.72 + 130, (pts[i][1] - 50) * 0.72 + 14];
    return (
      <svg viewBox="0 0 520 120" role="img" aria-label="21-landmark hand skeleton tracked at 30 frames per second">
        {chains.map((ch,ci) => (
          <polyline key={ci} fill="none" stroke="rgba(106,152,255,0.4)" strokeWidth="1.1"
                    points={ch.map(i => map(i).join(",")).join(" ")}/>
        ))}
        {pts.map((p,i) => { const [x,y] = map(i); return <circle key={i} cx={x} cy={y} r={i===0?5:3.4} fill={i===0 ? "#a855f7" : "#6a98ff"}/>; })}
        <text x="320" y="34" fontFamily="JetBrains Mono" fontSize="11" fill="#8a8d99">21 landmarks</text>
        <text x="320" y="56" fontFamily="JetBrains Mono" fontSize="11" fill="#34d399">~30 FPS on CPU</text>
        <text x="320" y="78" fontFamily="JetBrains Mono" fontSize="11" fill="#a855f7">−80% false triggers</text>
        <text x="320" y="100" fontFamily="JetBrains Mono" fontSize="9" fill="#8a8d99">5-px jitter debounce</text>
      </svg>
    );
  }

  if (kind === "mobile") return (
    <svg viewBox="0 0 520 120" role="img" aria-label="One Flutter codebase rendering four modules to Android and iOS">
      <rect x="60" y="10" width="62" height="100" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)"/>
      <rect x="68" y="24" width="46" height="16" rx="3" fill="rgba(106,152,255,0.2)"/>
      <rect x="68" y="46" width="46" height="16" rx="3" fill="rgba(168,85,247,0.2)"/>
      <rect x="68" y="68" width="46" height="16" rx="3" fill="rgba(106,152,255,0.2)"/>
      <rect x="68" y="90" width="46" height="16" rx="3" fill="rgba(168,85,247,0.2)"/>
      <path d="M130 60 L166 60" stroke="rgba(106,152,255,0.4)" strokeWidth="1" strokeDasharray="2 3"/>
      <text x="176" y="32" fontFamily="JetBrains Mono" fontSize="10" fill="#6a98ff">syllabus</text>
      <text x="176" y="52" fontFamily="JetBrains Mono" fontSize="10" fill="#a855f7">fees</text>
      <text x="176" y="72" fontFamily="JetBrains Mono" fontSize="10" fill="#6a98ff">results</text>
      <text x="176" y="92" fontFamily="JetBrains Mono" fontSize="10" fill="#a855f7">timetable</text>
      <path d="M270 60 L306 60" stroke="rgba(106,152,255,0.4)" strokeWidth="1" strokeDasharray="2 3"/>
      <rect x="316" y="30" width="88" height="26" rx="5" fill="rgba(52,211,153,0.07)" stroke="rgba(52,211,153,0.4)"/>
      <text x="360" y="47" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#34d399">Android</text>
      <rect x="316" y="64" width="88" height="26" rx="5" fill="rgba(52,211,153,0.07)" stroke="rgba(52,211,153,0.4)"/>
      <text x="360" y="81" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#34d399">iOS</text>
      <text x="424" y="55" fontFamily="JetBrains Mono" fontSize="9" fill="#8a8d99">0% native</text>
      <text x="424" y="68" fontFamily="JetBrains Mono" fontSize="9" fill="#8a8d99">code</text>
    </svg>
  );

  if (kind === "scrape") return (
    <svg viewBox="0 0 520 120" role="img" aria-label="Configurable scraper turning paginated web rows into CSV and TXT exports">
      {[...Array(6)].map((_,i) => (<rect key={i} x="30" y={18 + i*15} width={70 + (i%3)*46} height="6" rx="1" fill="rgba(106,152,255,0.22)"/>))}
      <text x="30" y="112" fontFamily="JetBrains Mono" fontSize="9" fill="#8a8d99">paginated pages</text>
      <path d="M250 56 L292 56" stroke="rgba(106,152,255,0.4)" strokeWidth="1" strokeDasharray="2 3"/>
      <text x="302" y="34" fontFamily="JetBrains Mono" fontSize="12" fill="#6a98ff">.csv</text>
      <text x="302" y="58" fontFamily="JetBrains Mono" fontSize="12" fill="#a855f7">.txt</text>
      <text x="302" y="88" fontFamily="JetBrains Mono" fontSize="9.5" fill="#8a8d99">$ scrape -k AI -p 5</text>
      <text x="302" y="104" fontFamily="JetBrains Mono" fontSize="9.5" fill="#34d399">lxml recovery ✓</text>
    </svg>
  );
  return null;
}

/* ================= PROJECTS ================= */
function ProjectCard({ p }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia("(hover: none), (prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      el.style.setProperty("--cx", (x*100) + "%");
      el.style.setProperty("--cy", (y*100) + "%");
    };
    el.addEventListener("mousemove", onMove);
    return () => { el.removeEventListener("mousemove", onMove); };
  }, []);
  const hostOf = (u) => { try { return new URL(u).host.replace(/^www\./, ""); } catch (_) { return u; } };
  return (
    <article ref={ref} className={"project-card " + p.span + (p.flagship ? " flagship" : "")}>
      <div className="project-meta">
        <div className="project-num">// PROJECT {p.id}</div>
        <div className="project-year">{p.year}</div>
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
      {p.summary && <p className="project-summary">{p.summary}</p>}
      {p.stack && (
        <div className="project-stack">
          {p.stack.map((s, j) => <span key={j} className="stack-chip">{s}</span>)}
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
      <div className="project-links">
        {p.github && (
          <a className="project-link project-github" href={p.github} target="_blank" rel="noopener noreferrer"
             aria-label={`${p.name} source code on GitHub (opens in a new tab)`}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.69-.22.69-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
            Source
          </a>
        )}
        {p.live && (
          <a className="project-link project-live" href={p.live} target="_blank" rel="noopener noreferrer"
             aria-label={`${p.name} live demo at ${hostOf(p.live)} (opens in a new tab)`}>
            <span className="live-dot" aria-hidden="true"/>
            Live demo
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 3h8v8M13 3 3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </a>
        )}
      </div>
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
          <div className="section-sub">Seven projects shipped — every one with source on GitHub, five running live.</div>
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
  const [val, setVal] = useState(num);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVal(num); return; }
    setVal(0);
    let started = false;
    const io = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (e.isIntersecting && !started) {
          started = true;
          const start = performance.now(); const dur = 1200;
          const step = (t) => {
            const p = Math.min(1, (t - start)/dur);
            setVal(num * (1 - Math.pow(1 - p, 3)));
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
  const groups = {};
  (window.CERTIFICATIONS || []).forEach(c => { (groups[c.category] = groups[c.category] || []).push(c); });
  return (
    <section id="achievements" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="section-tag"><span className="num">05</span><span>Wins</span></div>
            <h2 className="section-title">Where the <em>numbers</em> earn the words.</h2>
          </div>
          <div className="section-sub">Hackathons, ideathons, podiums — and the certifications behind them.</div>
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

        {Object.keys(groups).length > 0 && (
          <div className="certs-section reveal">
            <div className="certs-label">Certifications</div>
            <div className="certs-groups">
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
          </div>
        )}

        {window.BEYOND && window.BEYOND.length > 0 && (
          <div className="beyond reveal">
            <div className="certs-label">Beyond the terminal</div>
            <div className="beyond-grid">
              {window.BEYOND.map((b, i) => (
                <div key={i} className="beyond-group">
                  <div className="beyond-label">{b.group}</div>
                  <ul className="beyond-list">
                    {b.items.map((it, j) => <li key={j}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
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
          <div className="section-sub">Data science in production, client work delivered, and ops that balanced.</div>
        </div>
        <div className="exp-list reveal-stagger">
          {window.EXPERIENCE.map((e, i) => (
            <div key={i} className={"exp-card" + (e.current ? " current" : "")}>
              <div className="exp-period">
                {e.period}
                {e.current && <span className="exp-now">Current</span>}
              </div>
              <div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-org">
                  {e.org}
                  {e.live && (
                    <a className="live" href={"https://" + e.live} target="_blank" rel="noopener noreferrer"
                       aria-label={`Live site for ${e.org} at ${e.live} (opens in a new tab)`}>↗ {e.live}</a>
                  )}
                </div>
                {e.desc && <div className="exp-desc">{e.desc}</div>}
                {e.bullets && (
                  <ul className="exp-bullets">
                    {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                )}
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
      { t: "system", text: "Establishing secure channel… [RG-NET v2.7]" },
      { t: "system", text: "✓ Connected" },
      { t: "blank" },
      { t: "prompt", path: "~/portfolio", cmd: "whoami" },
      { t: "out", k: "name", v: "Raghav Gulati" },
      { t: "out", k: "role", v: "Data Science Intern · Spice Money" },
      { t: "out", k: "study", v: "B.Tech CS + Applied Math · VIPS Delhi" },
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
      setLines(prev => [...prev, item]);
      setTimeout(next, 70 + Math.random() * 50);
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
        <div className="tb-dots" aria-hidden="true"><span/><span/><span/></div>
        <div className="tb-title">raghav@portfolio — zsh</div>
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
            <span key={i} className="t-line"><span className="t-out-key">{l.k.padEnd(9," ")}</span>:&nbsp;<span className="t-out-val">{l.v}</span></span>
          );
          return null;
        })}
        <form onSubmit={send} className="t-form">
          <span className="t-prompt" aria-hidden="true"/><span className="t-path">~/portfolio</span>
          <span style={{ color: "var(--ink-3)", marginRight: 6 }} aria-hidden="true">$</span>
          <label className="sr-only" htmlFor="t-msg">Message to Raghav</label>
          <input id="t-msg" className="t-input" value={input} onChange={(e) => setInput(e.target.value)}
                 placeholder={sent ? "queued ✓ — type another…" : "say hello…"} spellCheck={false}/>
          <span className="cursor-blink" aria-hidden="true"></span>
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
          <div className="contact-terminal reveal"><Terminal/></div>
          <div className="contact-side reveal-stagger">
            <a className="contact-card" href={`mailto:${C.email}`}>
              <div className="cc-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5"/></svg></div>
              <div><div className="cc-label">Email</div><div className="cc-value">{C.email}</div></div>
            </a>
            <a className="contact-card" href={`tel:${C.phone.replace(/\s/g,'')}`}>
              <div className="cc-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5"/></svg></div>
              <div><div className="cc-label">Phone</div><div className="cc-value">{C.phone}</div></div>
            </a>
            <a className="contact-card" href={C.githubUrl} target="_blank" rel="noopener noreferrer"
               aria-label="GitHub profile github.com/raghav775 (opens in a new tab)">
              <div className="cc-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.69-.22.69-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg></div>
              <div><div className="cc-label">GitHub</div><div className="cc-value">{C.github}</div></div>
            </a>
            <a className="contact-card" href={C.linkedinUrl} target="_blank" rel="noopener noreferrer"
               aria-label="LinkedIn profile linkedin.com/in/raghav-gulati16 (opens in a new tab)">
              <div className="cc-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-.95 1.84-1.95 3.78-1.95 4.04 0 4.79 2.66 4.79 6.12V21H18.4v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21H10V9z"/></svg></div>
              <div><div className="cc-label">LinkedIn</div><div className="cc-value">{C.linkedin}</div></div>
            </a>
            <a className="contact-card" href={C.resume} target="_blank" rel="noopener noreferrer"
               aria-label="Download résumé as PDF (opens in a new tab)">
              <div className="cc-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg></div>
              <div><div className="cc-label">Résumé</div><div className="cc-value">One page · PDF</div></div>
            </a>
            <a className="transmit-btn" href={`mailto:${C.email}?subject=Let%27s%20build%20something`}>
              <span>Transmit message</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const C = window.CONTACT;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-row">
          <div className="footer-mark">RAGHAV GULATI · 2026</div>
          <div className="footer-links">
            <a href={C.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={C.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${C.email}`}>Email</a>
            <a href={C.resume} target="_blank" rel="noopener noreferrer">Résumé</a>
          </div>
          <div className="footer-meta">DESIGNED &amp; BUILT IN NEW DELHI · v 2.7</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Hero, Marquee, About, Skills, TechnicalHighlights, Projects, Achievements, Experience, Contact, Footer });
