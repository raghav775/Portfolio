// Data for portfolio — single source of truth.

const ABOUT_TIMELINE = [
  { year: "2020", title: "First commit", desc: "Active on GitHub since age 14 — building, breaking, learning publicly." },
  { year: "2022", title: "Shruti AI begins", desc: "Started a privacy-first offline AI companion that won an Ideathon at Satakunta University, Finland." },
  { year: "2023", title: "iCode Hackathon — top 1.3%", desc: "Ranked 98th nationally and 178th globally among 50,000+ in Python Advanced." },
  { year: "2024", title: "B.Tech CS + Applied Math", desc: "Began at VIPS New Delhi. SGPA 9.28. Diving into research, robotics, and cybersecurity." },
  { year: "2025", title: "Building in production", desc: "Shipped TruthLens AI, Hand Movement Tracker, and a freelance medical-tourism site live on Netlify." },
  { year: "2026", title: "NyayaSetu — legal AI", desc: "Architecting RAG-based legal research for Indian advocates. Ranked #2 at IIIT-Delhi & DU CIC hackathons." },
];

const SKILL_CATEGORIES = [
  {
    name: "Languages",
    pct: 92,
    tags: ["Python", "C", "JavaScript", "Dart", "HTML", "CSS"],
  },
  {
    name: "AI / Machine Learning",
    pct: 85,
    tags: ["FastAPI", "Groq API", "Ollama", "Qdrant", "fastembed", "RAG", "Prompting"],
  },
  {
    name: "Cybersecurity",
    pct: 78,
    tags: ["Compliance", "Frameworks", "OS Security", "AES-256", "JWT", "Privacy"],
  },
  {
    name: "Frameworks & Tools",
    pct: 88,
    tags: ["React", "Flutter", "MySQL", "Git", "Android Studio", "Bootstrap", "Colab"],
  },
];

// Skill network nodes (positions on a 1000x1000 viewBox, percent-driven)
const NETWORK_NODES = [
  { id: "core", label: "Raghav", x: 500, y: 500, r: 56, kind: "core" },
  { id: "py",   label: "Python",     x: 240, y: 280, r: 36, kind: "lang" },
  { id: "js",   label: "JavaScript", x: 760, y: 240, r: 30, kind: "lang" },
  { id: "c",    label: "C",          x: 280, y: 760, r: 24, kind: "lang" },
  { id: "dart", label: "Dart",       x: 760, y: 770, r: 22, kind: "lang" },
  { id: "ai",   label: "AI / RAG",   x: 150, y: 500, r: 42, kind: "ai" },
  { id: "sec",  label: "Cyber",      x: 850, y: 500, r: 38, kind: "sec" },
  { id: "rob",  label: "Robotics",   x: 500, y: 180, r: 30, kind: "rob" },
  { id: "rsh",  label: "Research",   x: 500, y: 820, r: 28, kind: "rsh" },
];
const NETWORK_LINKS = [
  ["core","py"],["core","js"],["core","c"],["core","dart"],
  ["core","ai"],["core","sec"],["core","rob"],["core","rsh"],
  ["py","ai"],["js","sec"],["py","rob"],["ai","rsh"],
  ["sec","rsh"],["py","c"],["js","dart"],
];

const PROJECTS = [
  {
    id: "01",
    name: "NyayaSetu",
    tagline: "AI-powered legal research, built for Indian advocates.",
    year: "2026",
    span: "span-4",
    flagship: true,
    problem: "Indian legal professionals spend hours searching thousands of case files — no affordable AI existed for the Indian legal corpus.",
    challenge: "Synchronizing dual LLM backends (cloud Groq + local Ollama) with automatic failover while keeping vector similarity search fast across live-scraped Indian Kanoon data.",
    summary:
      "Full-stack legal AI with RAG over local document corpora, live case scraping from Indian Kanoon, and a dual-LLM pipeline (Groq LLaMA 3.1 + Ollama fallback). AES-256 query logging and JWT auth meet legal confidentiality requirements.",
    learned: "Architecting for resilience — dual-LLM failover, incremental vector index refresh, and AES-256 audit logging turned this from a demo into a compliance-ready tool deployable in real legal practices.",
    stack: ["Python", "FastAPI", "React", "Groq API", "Ollama", "Qdrant", "fastembed"],
    metrics: [
      { label: "Embeddings", value: "384", unit: "dim" },
      { label: "Auto-refresh", value: "12", unit: "hr" },
      { label: "LLM fallback", value: "Dual" },
    ],
    github: "https://github.com/raghav775/nyayasetu",
    visual: "rag",
  },
  {
    id: "02",
    name: "Shruti AI",
    tagline: "A private companion that thinks locally.",
    year: "2022→",
    span: "span-2",
    problem: "Cloud AI assistants log every query — users lose privacy and connectivity dependency makes them unreliable offline.",
    challenge: "Running Ebbinghaus memory decay curves and a 6-module NLP pipeline within the parameter budget of Phi-3 Mini on CPU.",
    summary:
      "Offline AI companion on Phi-3 Mini with Ebbinghaus-style memory decay, multilingual (English / Hindi / Hinglish), and 6+ NLP modules for planning, sarcasm, and emotional context.",
    stack: ["Python", "Ollama", "Phi-3 Mini"],
    metrics: [
      { label: "NLP modules", value: "6+" },
      { label: "Cloud calls", value: "0" },
      { label: "Languages", value: "3" },
    ],
    github: "https://github.com/raghav775/shruti-ai",
    visual: "neural",
  },
  {
    id: "03",
    name: "TruthLens AI",
    tagline: "Spotting AI-generated content, transparently.",
    year: "2025",
    span: "span-3",
    problem: "Existing AI detectors are either overconfident or bypass-prone — single-signal approaches fail on modern generative models.",
    challenge: "Fusing three independent signals (CLIP vision-language, FFT frequency analysis, NLP heuristics) into a single confidence-weighted engine without false positives dominating.",
    summary:
      "Chrome extension (Manifest V3) that fuses CLIP vision-language models, FFT frequency analysis, and NLP heuristics through a confidence-aware engine — uncertainty-first, never overconfident.",
    stack: ["JavaScript", "Manifest V3", "FastAPI", "CLIP", "FFT"],
    metrics: [
      { label: "Signals", value: "3", unit: "fused" },
      { label: "Modes", value: "Snip · Page · Select" },
      { label: "UI", value: "Shadow DOM" },
    ],
    github: "https://github.com/raghav775/truthlens",
    visual: "lens",
  },
  {
    id: "04",
    name: "Hand Movement Tracker",
    tagline: "Touchless gesture control on a stock laptop.",
    year: "2025",
    span: "span-3",
    problem: "Gesture interfaces require expensive hardware — building a responsive controller from a standard laptop webcam and CPU alone.",
    challenge: "Eliminating jitter from 21-landmark coordinate streams at 30fps on CPU — solved with a 5-pixel debounce filter reducing false triggers by 80%.",
    summary:
      "OpenCV + MediaPipe 21-landmark model, mapping wrist angle to rotation and thumb-index spread to scale. A 5-pixel debounce filter cuts false-trigger rate by ~80%.",
    stack: ["Python", "OpenCV 4", "MediaPipe"],
    metrics: [
      { label: "Frame rate", value: "30", unit: "fps" },
      { label: "Landmarks", value: "21" },
      { label: "False triggers", value: "−80", unit: "%" },
    ],
    github: "https://github.com/raghav775/hand-movement-tracker",
    visual: "hand",
  },
  {
    id: "05",
    name: "Student Dashboard",
    tagline: "One Flutter codebase, two stores.",
    year: "2025",
    span: "span-2",
    problem: "Student portals are typically separate native apps per platform — high maintenance cost and inconsistent UX.",
    challenge: "Named dynamic routing across four module types (syllabus, fees, results, timetable) with zero platform-specific native code.",
    summary:
      "Flutter/Dart cross-platform student portal with named dynamic routing across syllabus, fees, results, and timetable.",
    stack: ["Flutter", "Dart", "Material"],
    metrics: [
      { label: "Modules", value: "4" },
      { label: "Platforms", value: "iOS · Android" },
      { label: "Native code", value: "0", unit: "%" },
    ],
    github: "https://github.com/raghav775/student-dashboard",
    visual: "mobile",
  },
  {
    id: "06",
    name: "Python Web Scraper",
    tagline: "A CLI tool engineers can hand to non-engineers.",
    year: "2024",
    span: "span-4",
    problem: "Data teams waste hours on manual extraction — no CLI tool existed that non-programmers could operate without code changes.",
    challenge: "Building a pipeline resilient to malformed HTML — HTTP session reuse, redirect chains, and lxml recovery across multi-page pagination.",
    summary:
      "Configurable scraping pipeline with flag-based input, multi-page pagination, and dual CSV/TXT export. HTTP session reuse, redirect handling, and lxml-backed recovery for messy HTML.",
    stack: ["Python", "Requests", "BeautifulSoup4", "lxml"],
    metrics: [
      { label: "Inputs", value: "Flag-based" },
      { label: "Exports", value: "CSV · TXT" },
      { label: "Modular", value: "Yes" },
    ],
    github: "https://github.com/raghav775/web-scraper",
    visual: "scrape",
  },
];

const TECHNICAL_HIGHLIGHTS = [
  "Built production RAG pipeline with dual-LLM failover (Groq cloud + Ollama local) and AES-256 encrypted audit logging for legal compliance",
  "Fused 3 independent AI signals — CLIP vision-language, FFT frequency analysis, and NLP heuristics — into a confidence-weighted content detector",
  "Engineered 30fps gesture tracking via 21-landmark MediaPipe model with 5-pixel debounce filter, cutting false triggers by 80% on CPU",
  "Implemented JWT authentication and AES-256 encryption for legally sensitive AI query pipelines — production-grade security by design",
  "Shipped cross-platform Flutter app with 0% native code across iOS and Android from a single Dart codebase using named dynamic routing",
  "Ranked #2 at both IIIT Delhi and DU CIC 24-hour hackathons in 2026 — shipped NyayaSetu end-to-end under competition constraints",
  "Presented 5+ cybersecurity workshops on phishing detection, OS hardening, and digital privacy at Salwan Public School",
  "Designed Ebbinghaus memory decay model for offline AI — 3-language NLP pipeline with sarcasm and emotional context, zero cloud calls",
];

const ACHIEVEMENTS = [
  { year: "2026", title: "DU CIC Cluster Hackathon", place: "24-hour hackathon at Delhi University CIC", rank: "#2" },
  { year: "2026", title: "IIIT Delhi Hackathon", place: "24-hour hackathon at IIIT Delhi", rank: "#2" },
  { year: "2024", title: "Animation Storytelling", place: "Shri Ram Global School", rank: "#1" },
  { year: "2023", title: "iCode Hackathon — Python Advanced", place: "98th national / 178th global · 50,000+ entrants", rank: "Top 1.3%" },
  { year: "2022", title: "Ideathon Winner", place: "Satakunta University, Finland · Concept that became Shruti AI", rank: "#1" },
  { year: "2022–24", title: "Cybersecurity Speaker", place: "5+ workshops at Salwan Public School — phishing, online safety, privacy", rank: "5+ talks" },
];

const CERTIFICATIONS = [
  {
    issuer: "Google · IBM · CISCO", name: "Foundations of Cybersecurity", year: "2024", category: "Cybersecurity",
    desc: "Built a strong foundation in cybersecurity principles — common threats, attack vectors, and defense strategies across modern systems.",
    skills: ["Threat Analysis", "Attack Vectors", "Defense Strategy", "Security Fundamentals"],
  },
  {
    issuer: "IBM", name: "Cybersecurity Compliance, Frameworks & Regulation", year: "2024", category: "Cybersecurity",
    desc: "Explored key compliance frameworks including GDPR, HIPAA, and NIST, and understood their practical impact on organizational security posture.",
    skills: ["GDPR", "HIPAA", "NIST", "Risk Management"],
  },
  {
    issuer: "IBM", name: "Operating Systems: Administration & Security", year: "2024", category: "Cybersecurity",
    desc: "Acquired hands-on knowledge of OS architecture, user and process management, resource allocation, and system-level security hardening.",
    skills: ["OS Architecture", "Process Management", "Resource Allocation", "Hardening"],
  },
  {
    issuer: "Meta", name: "Introduction to Frontend Development", year: "2024", category: "Web Development",
    desc: "Gained proficiency in core front-end technologies — HTML, CSS, and JavaScript — to build responsive, accessible user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "Accessibility"],
  },
  {
    issuer: "Meta", name: "Programming with JavaScript", year: "2024", category: "Web Development",
    desc: "Completed an in-depth course covering JavaScript fundamentals, OOP, DOM manipulation, and practical problem-solving techniques.",
    skills: ["ES6+", "DOM Manipulation", "Functions & Closures", "OOP"],
  },
  {
    issuer: "Meta", name: "HTML and CSS in Depth", year: "2024", category: "Web Development",
    desc: "Gained hands-on experience building responsive, accessible web pages with modern HTML5 semantics and advanced CSS3 techniques.",
    skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox / Grid"],
  },
  {
    issuer: "Meta", name: "Version Control", year: "2024", category: "Web Development",
    desc: "Learned industry-standard version control workflows using Git and GitHub — branching, merging, pull requests, and team collaboration.",
    skills: ["Git", "GitHub", "Branching", "Collaborative Workflows"],
  },
  {
    issuer: "Meta", name: "Programming in Python", year: "2024", category: "Python & Mobile",
    desc: "Built a solid Python foundation covering data structures, control flow, functions, and real-world problem-solving techniques.",
    skills: ["Data Structures", "Control Flow", "Functions", "Problem Solving"],
  },
  {
    issuer: "VIPS", name: "Pyedge: Practical Python for Modern Problems", year: "2024", category: "Python & Mobile",
    desc: "Completed practical training in Library Management Systems, Data Visualization, NLP using NLTK, and Database Management.",
    skills: ["NLTK / NLP", "Data Visualization", "Database Management", "Applied Python"],
  },
  {
    issuer: "VIPS", name: "Mobile Application Development", year: "2024", category: "Python & Mobile",
    desc: "Completed a certified course in Flutter and Dart on Android Studio, covering UI/UX design, state management, and API integration.",
    skills: ["Flutter", "Dart", "State Management", "API Integration"],
  },
];

const COUNTERS = [
  { num: 6, suffix: "+", label: "Shipped projects" },
  { num: 5, suffix: "+", label: "Hackathon wins / ranks" },
  { num: 9.28, suffix: "", label: "Current SGPA", decimals: 2 },
  { num: 6, suffix: "yrs", label: "On GitHub" },
];

const EXPERIENCE = [
  {
    period: "2025",
    role: "Freelance Web Developer",
    org: "Medical Tourism Client",
    live: "magnificent-dodol-a58fef.netlify.app",
    desc:
      "Translated business requirements into a production-ready medical-tourism site. Designed responsive multi-section layouts, debugged through iterative client feedback, and managed end-to-end deployment on Netlify.",
    impact: [
      { label: "Stack", value: "HTML · CSS · JS" },
      { label: "Deployed", value: "Netlify" },
      { label: "Status", value: "Live" },
    ],
  },
  {
    period: "2024 — present",
    role: "Operations · Entrepreneur Summit",
    org: "Vivekananda Institute of Professional Studies",
    desc:
      "Co-led ticketing, sales, and finance for a 500+ attendee Entrepreneur Summit. Oversaw transactions exceeding ₹1.5L with full accuracy. Coordinated corporate sponsorship outreach securing ₹80,000+, and supported resource mobilization north of ₹2L.",
    impact: [
      { label: "Attendees", value: "500+" },
      { label: "Sponsorship", value: "₹80K+" },
      { label: "Mobilized", value: "₹2L+" },
    ],
  },
];

const CONTACT = {
  email: "rg.raghavgulati@gmail.com",
  phone: "+91 9667738636",
  github: "github.com/raghav775",
  linkedin: "linkedin.com/in/raghav-gulati16",
  location: "New Delhi, India",
};

Object.assign(window, {
  ABOUT_TIMELINE, SKILL_CATEGORIES, NETWORK_NODES, NETWORK_LINKS,
  PROJECTS, TECHNICAL_HIGHLIGHTS, ACHIEVEMENTS, CERTIFICATIONS,
  COUNTERS, EXPERIENCE, CONTACT,
});
