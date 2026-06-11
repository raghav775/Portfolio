// Loader, custom cursor, nav, audio toggle, scroll progress, particles, reveal hook.

const { useEffect, useRef, useState } = React;

function Loader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    let p = 0;
    const tick = () => {
      p += Math.random() * 18 + 6;
      if (p >= 100) { setPct(100); setTimeout(() => setDone(true), 500); return; }
      setPct(Math.floor(p));
      setTimeout(tick, 80 + Math.random() * 70);
    };
    tick();
  }, []);
  return (
    <div className={"loader" + (done ? " done" : "")}>
      <div className="loader-inner">
        <div className="loader-mark">RG / SYSTEMS ONLINE</div>
        <div className="loader-track">
          <div className="loader-fill" style={{ transform: `scaleX(${pct/100})`, transition: "transform 200ms ease-out" }} />
        </div>
        <div className="loader-pct">Booting · {pct}%</div>
      </div>
    </div>
  );
}

function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    let mx = window.innerWidth/2, my = window.innerHeight/2;
    let rx = mx, ry = my;
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      document.documentElement.style.setProperty("--mx", (mx / window.innerWidth * 100) + "%");
      document.documentElement.style.setProperty("--my", (my / window.innerHeight * 100) + "%");
    };
    const onOver = (e) => {
      const t = e.target.closest("a, button, .nav-link, .project-card, .ach-card, .contact-card, .skill-tag, .audio-toggle, .transmit-btn, .orbit-chip, input, textarea");
      if (ring.current) ring.current.classList.toggle("hover", !!t);
      if (dot.current) dot.current.classList.toggle("hover", !!t);
    };
    let raf;
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}

function ScrollProgress() {
  const fill = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      if (fill.current) fill.current.style.transform = `scaleX(${p})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress"><div ref={fill} className="scroll-progress-fill"/></div>;
}

function Particles() {
  const [parts] = useState(() =>
    Array.from({ length: 28 }, (_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 12,
      dur: 14 + Math.random() * 14,
      size: 1 + Math.random() * 2,
      hue: Math.random() > 0.5 ? "var(--blue-bright)" : "var(--purple)",
    }))
  );
  return (
    <div className="particles">
      {parts.map((p, i) => (
        <span key={i} className="particle" style={{
          left: p.left + "%",
          animationDelay: p.delay + "s",
          animationDuration: p.dur + "s",
          width: p.size + "px",
          height: p.size + "px",
          background: p.hue,
          boxShadow: `0 0 8px ${p.hue}`,
        }}/>
      ))}
    </div>
  );
}

function Nav() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const ids = ["hero","about","skills","highlights","projects","achievements","experience","contact"];
    const onScroll = () => {
      let cur = "hero";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 200) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [
    ["about","About"],["skills","Skills"],["highlights","Highlights"],
    ["projects","Work"],["achievements","Wins"],["contact","Contact"],
  ];
  const go = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <nav className="nav">
      <div className="nav-brand"><span className="dot"/><span>RAGHAV GULATI</span></div>
      <div className="nav-links">
        {items.map(([id, label]) => (
          <a key={id} href={"#" + id}
             className={"nav-link" + (active === id ? " active" : "")}
             onClick={go(id)}>{label}</a>
        ))}
      </div>
      <a className="nav-cta" href="assets/Raghav-Gulati-Resume.pdf" target="_blank" rel="noreferrer">
        Resume
        <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
          <path d="M5 3h8v8M13 3 3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      </a>
    </nav>
  );
}

function AudioToggle() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef(null);
  const nodesRef = useRef(null);
  useEffect(() => () => { try { ctxRef.current?.close(); } catch(_){} }, []);

  const toggle = () => {
    if (!on) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      const ctx = new Ctx();
      ctxRef.current = ctx;
      ctx.resume();

      // master
      const master = ctx.createGain();
      master.gain.setValueAtTime(0, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0.7, ctx.currentTime + 1.2);
      master.connect(ctx.destination);

      // reverb
      const rl = ctx.sampleRate * 2.8;
      const rb = ctx.createBuffer(2, rl, ctx.sampleRate);
      for (let c = 0; c < 2; c++) { const d = rb.getChannelData(c); for (let i = 0; i < rl; i++) d[i] = (Math.random()*2-1) * Math.pow(1-i/rl,1.9); }
      const conv = ctx.createConvolver(); conv.buffer = rb;
      const rg = ctx.createGain(); rg.gain.value = 0.32; conv.connect(rg); rg.connect(master);
      const dry = ctx.createGain(); dry.gain.value = 0.68; dry.connect(master);
      const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 3200; lp.Q.value = 0.4;
      lp.connect(dry); lp.connect(conv);

      // Godfather Love Theme — D minor, 58 BPM
      // [freq_hz | null, duration_in_beats]
      const BPM = 58, B = 60 / BPM;
      const N = {
        A4:440.00, Bb4:466.16,
        C5:523.25, Cs5:554.37, D5:587.33, Eb5:622.25, E5:659.25,
        F5:698.46, Fs5:739.99, G5:783.99, A5:880.00, Bb5:932.33,
      };
      const SCORE = [
        // phrase 1
        [N.A4,0.5],[N.D5,2.5],
        [N.F5,0.5],[N.A5,2.5],
        [N.G5,0.5],[N.F5,0.5],[N.E5,2],
        [N.G5,0.5],[N.Fs5,2.5],
        [N.D5,2],[null,1],
        // phrase 2
        [N.A4,0.5],[N.D5,2.5],
        [N.F5,0.5],[N.A5,2.5],
        [N.G5,0.5],[N.Bb5,0.5],[N.A5,2],
        [N.G5,0.5],[N.F5,2.5],
        [N.D5,2],[null,1],
        // phrase 3 — development
        [N.A4,0.5],[N.C5,2.5],
        [N.E5,0.5],[N.G5,2.5],
        [N.F5,0.5],[N.E5,0.5],[N.Eb5,2],
        [N.E5,0.5],[N.F5,2.5],
        [N.E5,3],[null,1],
        // phrase 4 — return
        [N.A4,0.5],[N.D5,2.5],
        [N.F5,0.5],[N.A5,2.5],
        [N.G5,0.5],[N.F5,0.5],[N.E5,1],[N.Eb5,0.5],[N.E5,0.5],
        [N.F5,0.5],[N.Cs5,2.5],
        [N.D5,3],[null,2],
      ];

      const totalSec = SCORE.reduce((s,[,d]) => s + d, 0) * B;

      const playNote = (freq, t, beats) => {
        const dur = beats * B;
        const osc = ctx.createOscillator();
        const env = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        env.gain.setValueAtTime(0, t);
        env.gain.linearRampToValueAtTime(0.32, t + Math.min(0.08, dur * 0.12));
        env.gain.linearRampToValueAtTime(0.001, t + dur * 0.88);
        osc.connect(env); env.connect(lp);
        osc.start(t); osc.stop(t + dur);
      };

      const scheduleMelody = (startT) => {
        let t = startT;
        SCORE.forEach(([freq, dur]) => {
          if (freq !== null) playNote(freq, t, dur);
          t += dur * B;
        });
      };

      const loopRef = { alive: true, timer: null };
      const scheduleLoop = (nextStart) => {
        const delay = Math.max(200, (nextStart - ctx.currentTime - 1.5) * 1000);
        loopRef.timer = setTimeout(() => {
          if (!loopRef.alive) return;
          scheduleMelody(nextStart);
          scheduleLoop(nextStart + totalSec);
        }, delay);
      };

      scheduleMelody(ctx.currentTime + 0.5);
      scheduleLoop(ctx.currentTime + 0.5 + totalSec);
      nodesRef.current = { master, loopRef };
      setOn(true);
    } else {
      const n = nodesRef.current;
      if (n) {
        n.loopRef.alive = false;
        clearTimeout(n.loopRef.timer);
        const now = ctxRef.current.currentTime;
        n.master.gain.cancelScheduledValues(now);
        n.master.gain.setValueAtTime(n.master.gain.value, now);
        n.master.gain.linearRampToValueAtTime(0, now + 1.5);
        setTimeout(() => { try { ctxRef.current.close(); } catch(_){} }, 2000);
      }
      setOn(false);
    }
  };

  return (
    <button className={"audio-toggle" + (on ? " on" : "")} onClick={toggle} aria-label="Toggle ambient sound">
      <div className="audio-bars"><span/><span/><span/><span/></div>
    </button>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-stagger");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function GlobalBg() {
  return (
    <>
      <div className="aurora"><span className="a3"/></div>
      <div className="grid-overlay" />
      <Particles />
      <div className="spotlight" />
      <div className="scanlines" />
      <div className="noise-overlay" />
    </>
  );
}

// magnetic button hook — call `bind()` to get props, ref-style
function useMagnetic(strength = 18) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;
      el.style.transform = `translate(${x/strength}px, ${y/strength}px)`;
    };
    const onLeave = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [strength]);
  return ref;
}

Object.assign(window, {
  Loader, CustomCursor, Nav, AudioToggle, GlobalBg, ScrollProgress, useReveal, useMagnetic
});
