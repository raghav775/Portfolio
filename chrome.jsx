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
    // Pointer-less / coarse-pointer devices and reduced-motion users keep the native cursor.
    if (window.matchMedia("(hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.add("native-cursor");
      return;
    }
    document.documentElement.classList.add("custom-cursor");
    let mx = window.innerWidth/2, my = window.innerHeight/2;
    let rx = mx, ry = my;
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      document.documentElement.style.setProperty("--mx", (mx / window.innerWidth * 100) + "%");
      document.documentElement.style.setProperty("--my", (my / window.innerHeight * 100) + "%");
    };
    const onOver = (e) => {
      const t = e.target.closest("a, button, .nav-link, .project-card, .ach-card, .contact-card, .audio-toggle, .transmit-btn, input, textarea");
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
      document.documentElement.classList.remove("custom-cursor");
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
  // Skip the DOM entirely on phones and for reduced-motion users — CSS hides
  // them there anyway, and 16 permanently animating nodes are not free.
  const skip = typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 780px)").matches;
  const [parts] = useState(() =>
    Array.from({ length: skip ? 0 : 16 }, (_, i) => ({
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

const NAV_ITEMS = [
  ["about","About"],["skills","Skills"],["highlights","Highlights"],
  ["projects","Work"],["achievements","Wins"],["experience","Experience"],["contact","Contact"],
];

// Below this the nav is a bar + drawer; above it, the desktop pill. Kept in
// sync with the `max-width: 1023px` tier in styles.css.
const DRAWER_MQ = "(max-width: 1023px)";

function Nav() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  // Publish the nav's real height so scroll-padding and the hero's top padding
  // track it — the bar is a different height per breakpoint, and hard-coding
  // one value means anchored jumps land under the nav on the other tiers.
  useEffect(() => {
    const el = navRef.current; if (!el) return;
    const apply = () => {
      const h = Math.round(el.getBoundingClientRect().height);
      if (h > 0) document.documentElement.style.setProperty("--nav-h", h + "px");
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Scroll spy — the trigger line sits just below the nav rather than at a
  // fixed 140px, so it stays correct on a phone bar and a desktop pill alike.
  useEffect(() => {
    const ids = ["hero", ...NAV_ITEMS.map(([id]) => id)];
    let ticking = false;
    const measure = () => {
      ticking = false;
      const navH = navRef.current ? navRef.current.getBoundingClientRect().height : 62;
      // Sits below where `scroll-padding-top` (nav-h + 44) lands an anchored
      // jump, so clicking a link always lights up the link you clicked.
      const line = navH + 72;
      let cur = "hero";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) cur = id;
      }
      setActive(cur);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // While the drawer covers the page, the page behind it must not scroll and
  // Tab must not wander into content hidden behind the scrim.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";

    const focusables = () => {
      const panel = panelRef.current;
      if (!panel) return [];
      // The toggle is part of the loop so Shift+Tab from the first link
      // reaches the control that opened the drawer.
      return [...panel.querySelectorAll("a[href]"), toggleRef.current].filter(Boolean);
    };

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);

    // Two frames: the panel is still `visibility: hidden` when this effect
    // runs, and a hidden element silently refuses focus. One rAF fires before
    // the style recalc that reveals it; the second lands after.
    let raf2;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => focusables()[0]?.focus());
    });

    return () => {
      root.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [open]);

  // Rotating a phone to landscape can cross into the desktop tier — the drawer
  // must not stay "open" once it no longer exists.
  useEffect(() => {
    const mq = window.matchMedia(DRAWER_MQ);
    const onChange = (e) => { if (!e.matches) setOpen(false); };
    mq.addEventListener ? mq.addEventListener("change", onChange) : mq.addListener(onChange);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", onChange) : mq.removeListener(onChange);
    };
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    setOpen(false);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // keep keyboard focus in step with the visual jump
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  };

  const C = window.CONTACT;

  return (
    <>
      <div className={"nav-scrim" + (open ? " open" : "")} onClick={() => setOpen(false)} aria-hidden="true"/>
      <nav className="nav" ref={navRef} aria-label="Section navigation">
        <div className="nav-brand">
          <span className="dot" aria-hidden="true"/>
          <span className="nav-brand-full">RAGHAV GULATI</span>
          <span className="nav-brand-short">RG</span>
        </div>

        <div id="nav-menu" ref={panelRef} className={"nav-links" + (open ? " open" : "")}>
          {NAV_ITEMS.map(([id, label], i) => (
            <a key={id} href={"#" + id}
               className={"nav-link" + (active === id ? " active" : "")}
               aria-current={active === id ? "true" : undefined}
               onClick={go(id)}>
              <span className="nav-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              {label}
            </a>
          ))}
          <div className="nav-drawer-extras">
            <a href={C.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={C.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${C.email}`}>Email</a>
          </div>
        </div>

        <div className="nav-actions">
          <a className="nav-cta" href={C.resume} target="_blank" rel="noopener noreferrer"
             aria-label="Open résumé PDF in a new tab">
            <span className="nav-cta-label">Résumé</span>
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M5 3h8v8M13 3 3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </a>
          <button ref={toggleRef} type="button" className="nav-toggle"
                  aria-expanded={open} aria-controls="nav-menu"
                  aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                  onClick={() => setOpen(v => !v)}>
            <span className="nav-toggle-bars" aria-hidden="true"><span/><span/><span/></span>
          </button>
        </div>
      </nav>
    </>
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
      if (!Ctx) return;
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
        // Close this specific context: a quick toggle back on replaces ctxRef.current
        // before the timer below fires.
        const ctx = ctxRef.current;
        const now = ctx.currentTime;
        n.master.gain.cancelScheduledValues(now);
        n.master.gain.setValueAtTime(n.master.gain.value, now);
        n.master.gain.linearRampToValueAtTime(0, now + 1.5);
        setTimeout(() => { try { ctx.close().catch(() => {}); } catch(_){} }, 2000);
      }
      setOn(false);
    }
  };

  return (
    <button className={"audio-toggle" + (on ? " on" : "")} onClick={toggle}
            aria-pressed={on} title={on ? "Turn ambient music off" : "Turn ambient music on"}
            aria-label={on ? "Turn ambient music off" : "Turn ambient music on"}>
      <div className="audio-bars" aria-hidden="true"><span/><span/><span/><span/></div>
    </button>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-stagger");
    // threshold 0: a ratio like 0.12 is unreachable for a block taller than ~8x the
    // viewport (the projects grid on a phone), which would leave it hidden for good.
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -8% 0px" });
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

Object.assign(window, {
  Loader, CustomCursor, Nav, AudioToggle, GlobalBg, ScrollProgress, useReveal
});
