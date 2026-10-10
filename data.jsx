// Data for portfolio — single source of truth.
// Every number here is backed by the résumé or a live artefact. No invented metrics.

const PROFILE = {
  name: "Raghav Gulati",
  now: "Open to SWE internships",
  degree: "B.Tech CS with Applied Mathematics",
  school: "VIPS-TC (GGSIPU), New Delhi",
  years: "2024-28",
  cgpa: "9.00",
};

const EDUCATION = [
  {
    year: "2024-28",
    qualification: "B.Tech, Computer Science with Applied Mathematics",
    institute: "VIPS-TC (GGSIPU), New Delhi",
    score: "9.00",
    scoreLabel: "CGPA",
    current: true,
  },
  {
    year: "2024",
    qualification: "Class XII, Non-Medical with CS (CBSE)",
    institute: "Salwan Public School, New Delhi",
    score: "85%",
    scoreLabel: "Aggregate",
  },
  {
    year: "2022",
    qualification: "Class X (CBSE)",
    institute: "Salwan Public School, New Delhi",
    score: "87.5%",
    scoreLabel: "Aggregate",
  },
];

const ABOUT_TIMELINE = [
  { year: "2020", title: "First commit", desc: "On GitHub since age 14: building, breaking and learning in public." },
  { year: "2022", title: "Ideathon win, Finland", desc: "1st place at the Satakunta University Ideathon, with a letter of recommendation. The winning concept became Shruti AI." },
  { year: "2023", title: "iCode Hackathon: top 0.12%", desc: "98th nationally among 80,000+ participants and 178th globally in Python Advanced." },
  { year: "2024", title: "B.Tech CS + Applied Math", desc: "Started at VIPS-TC (GGSIPU), pairing core CS with applied mathematics. 9.00 CGPA." },
  { year: "2025", title: "Shipping real software", desc: "Built TruthLens AI and the Hand Movement Tracker, and delivered a client's medical-tourism site to production on Netlify." },
  { year: "2026", title: "Internship, podiums, SIH", desc: "Data Science Intern at Spice Money (Jun to Aug). Built NyayaSetu and Medsy, placed 2nd at IIIT Delhi and DU CIC, and reached Round 3 of Smart India Hackathon with AnnData." },
];

/* ================= SKILLS =================
   No proficiency percentages — they mean nothing to a reader.
   Hierarchy instead: `depth` groups carry shipped evidence, `breadth` groups
   show range. `core` chips are the ones the work actually rests on.        */
const SKILL_GROUPS = [
  {
    name: "Backend & APIs",
    tier: "depth",
    evidence: "FastAPI backends behind the Spice Money policy chatbot and NyayaSetu, with JWT auth and AES-256 encrypted logging on NyayaSetu.",
    core: ["Python", "FastAPI", "REST APIs", "MySQL", "JWT auth"],
    also: ["Flask", "PostgreSQL", "AES-256 encryption"],
  },
  {
    name: "AI & Data",
    tier: "depth",
    evidence: "Hybrid retrieval, LLM-as-judge evaluation and robust forecasting on real agent data at Spice Money.",
    core: ["RAG", "LLMs", "Machine learning", "Data analysis", "Web scraping"],
    also: ["Qdrant", "Hybrid dense + BM25", "LLM-as-judge eval", "Theil-Sen regression", "Ollama"],
  },
  {
    name: "Languages",
    tier: "breadth",
    core: ["Python (5+ yrs)", "Java", "JavaScript"],
    also: ["C", "HTML", "CSS"],
  },
  {
    name: "Core CS",
    tier: "breadth",
    core: ["Data structures & algorithms", "OOP"],
    also: ["Operating systems", "Databases", "System design"],
  },
  {
    name: "Tools & Platforms",
    tier: "breadth",
    core: ["Git & GitHub (since 2020)", "React", "Flutter"],
    also: ["Netlify", "Vercel", "Render"],
  },
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
    github: "https://github.com/raghav775/Nyayasetu-clean",
    live: "https://nyayasetu-clean-jade.vercel.app/",
    visual: "rag",
  },
  {
    id: "02",
    name: "Medsy",
    tagline: "Find the medicine before you make the trip.",
    year: "2026",
    span: "span-2",
    problem: "Patients call or visit pharmacy after pharmacy to find a drug in stock — with no way to know which nearby option is actually worth the trip.",
    challenge: "Ranking pharmacies without any paid inventory API — modelling availability from six weighted signals and reading dosages off photographed prescriptions of wildly varying quality.",
    summary:
      "Medicine availability navigator that ranks nearby pharmacies through a six-factor Bayesian probability engine, with a multi-format OCR pipeline that extracts medicines and dosages from prescription scans. OpenStreetMap/Leaflet routing and a browser-local medical vault keep it free and private.",
    stack: ["Python", "OCR", "Bayesian inference", "Leaflet", "OpenStreetMap"],
    metrics: [
      { label: "Ranking signals", value: "6", unit: "factor" },
      { label: "Prescriptions", value: "OCR" },
      { label: "Paid APIs", value: "0" },
    ],
    github: "https://github.com/raghav775/Medsy",
    live: "https://medsy-cdkm.onrender.com",
    visual: "geo",
  },
  {
    id: "03",
    name: "Shruti AI",
    tagline: "A private companion that thinks locally.",
    year: "2022→",
    span: "span-3",
    problem: "Cloud AI assistants log every query — users lose privacy and connectivity dependency makes them unreliable offline.",
    challenge: "Running Ebbinghaus memory decay curves and a 6-module NLP pipeline within the parameter budget of Phi-3 Mini on CPU.",
    summary:
      "Offline AI companion on Phi-3 Mini with consent-based memory storage and Ebbinghaus-style decay, multilingual (English / Hindi / Hinglish), and 6+ NLP modules for planning, sarcasm handling, and emotional context.",
    stack: ["Python", "Ollama", "Phi-3 Mini"],
    metrics: [
      { label: "NLP modules", value: "6+" },
      { label: "Cloud calls", value: "0" },
      { label: "Languages", value: "3" },
    ],
    github: "https://github.com/raghav775/Shruti-Clean",
    live: "https://shruti-clean.onrender.com/",
    visual: "neural",
  },
  {
    id: "04",
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
    github: "https://github.com/raghav775/TruthLens",
    visual: "lens",
  },
  {
    id: "05",
    name: "Hand Movement Tracker",
    tagline: "Touchless gesture control on a stock laptop.",
    year: "2025",
    span: "span-2",
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
    github: "https://github.com/raghav775/Hand-Tracking-System",
    live: "https://handtrackingio.netlify.app/",
    visual: "hand",
  },
  {
    id: "06",
    name: "Student Dashboard",
    tagline: "One Flutter codebase, two stores.",
    year: "2025",
    span: "span-2",
    problem: "Student portals are typically separate native apps per platform — high maintenance cost and inconsistent UX.",
    challenge: "Named dynamic routing across four module types (syllabus, fees, results, timetable) with zero platform-specific native code.",
    summary:
      "Flutter/Dart cross-platform student portal with named dynamic routing across syllabus, fees, results, and timetable, and a UI/routing/data separation that scales as modules grow.",
    stack: ["Flutter", "Dart", "Material"],
    metrics: [
      { label: "Modules", value: "4" },
      { label: "Platforms", value: "iOS · Android" },
      { label: "Native code", value: "0", unit: "%" },
    ],
    github: "https://github.com/raghav775/Student-Dashboard-App",
    visual: "mobile",
  },
  {
    id: "07",
    name: "Python Web Scraper",
    tagline: "A CLI tool engineers can hand to non-engineers.",
    year: "2024",
    span: "span-2",
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
    github: "https://github.com/raghav775/Python-Web-Scraper",
    visual: "scrape",
  },
];

/* ================= TECHNICAL HIGHLIGHTS =================
   Two tiers so the hardest engineering reads first, and the rest stays visible.  */
const HIGHLIGHTS_PRIMARY = [
  {
    area: "Retrieval",
    title: "Hybrid dense + BM25 search that beat semantic-only retrieval",
    detail:
      "Fused BAAI/bge-small-en-v1.5 embeddings with BM25 through per-query score normalization in Qdrant, over a 183-chunk policy corpus covering 11 banking verticals at Spice Money.",
    tags: ["Qdrant", "BM25", "fastembed", "Python"],
  },
  {
    area: "Reliability & evaluation",
    title: "A confidence gate that refuses instead of guessing",
    detail:
      "Answer, clarify or refuse gating reached 100% refusal accuracy on adversarial queries, backed by query rewriting for vague and Hinglish inputs and an LLM-as-judge harness scoring faithfulness and relevancy.",
    tags: ["Confidence gating", "LLM-as-judge", "Query rewriting"],
  },
  {
    area: "System design",
    title: "A net-realization engine with an append-only audit log",
    detail:
      "AnnData, for Smart India Hackathon 2026 (Round 3): a four-layer farm-to-buyer platform that ranks buyer offers by the farmer's net price after transport, commission, rejection risk and payment delay. In progress.",
    tags: ["FastAPI", "PostgreSQL", "Flutter", "React"],
  },
  {
    area: "Availability & security",
    title: "Dual-LLM failover with encrypted audit logging",
    detail:
      "Routed NyayaSetu queries through Groq (LLaMA 3.1) with automatic Ollama fallback during API exhaustion, and paired AES-256 encrypted query logs with JWT auth to meet legal confidentiality needs.",
    tags: ["Groq API", "Ollama", "AES-256", "JWT"],
  },
];

const HIGHLIGHTS_SECONDARY = [
  "Built a Theil-Sen sales-forecasting pipeline with peer-growth blending over 6 months of agent transactions, plus an AEPS-adoption scoring model",
  "Built a scraper across government subsidy portals that feeds a payout prediction pipeline for agent-level eligibility and timing",
  "Built a six-factor Bayesian availability engine and a multi-format prescription OCR pipeline with zero paid APIs",
  "Fused 3 independent signals (CLIP vision-language, FFT frequency analysis, NLP heuristics) into a confidence-weighted content detector",
  "Engineered 30fps gesture tracking on a 21-landmark MediaPipe model with a 5-pixel debounce filter, cutting false triggers by ~80% on CPU",
  "Built a fully offline AI companion on Phi-3 Mini with 6+ NLP modules for contextual memory and English, Hindi and Hinglish chat",
  "Shipped a cross-platform Flutter app to iOS and Android from a single Dart codebase",
];

const ACHIEVEMENTS = [
  { year: "2026", title: "DU CIC Cluster Hackathon", place: "24-hour hackathon at Delhi University CIC", rank: "#2" },
  { year: "2026", title: "IIIT Delhi Hackathon", place: "24-hour hackathon at IIIT Delhi", rank: "#2" },
  { year: "2023", title: "iCode Hackathon — Python Advanced", place: "98th national of 80,000+ · 178th global among 50,000+", rank: "Top 0.12%" },
  { year: "2023", title: "Animation Storytelling", place: "Shri Ram Global School", rank: "#1" },
  { year: "2022", title: "Ideathon Winner", place: "Satakunta University, Finland · 1st place + LOR · concept behind Shruti AI", rank: "#1" },
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
    issuer: "Meta", name: "Programming in Python", year: "2024", category: "AI · Python & NLP",
    desc: "Built a solid Python foundation covering data structures, control flow, functions, and real-world problem-solving techniques.",
    skills: ["Data Structures", "Control Flow", "Functions", "Problem Solving"],
  },
  {
    issuer: "VIPS", name: "PyEdge: Practical Python & NLP", year: "2024", category: "AI · Python & NLP",
    desc: "Completed practical training in Library Management Systems, Data Visualization, NLP using NLTK, and Database Management.",
    skills: ["NLTK / NLP", "Data Visualization", "Database Management", "Applied Python"],
  },
  {
    issuer: "Meta", name: "Introduction to Frontend Development", year: "2024", category: "Frontend & Web",
    desc: "Gained proficiency in core front-end technologies — HTML, CSS, and JavaScript — to build responsive, accessible user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "Accessibility"],
  },
  {
    issuer: "Meta", name: "HTML and CSS in Depth", year: "2024", category: "Frontend & Web",
    desc: "Gained hands-on experience building responsive, accessible web pages with modern HTML5 semantics and advanced CSS3 techniques.",
    skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox / Grid"],
  },
  {
    issuer: "Meta", name: "Programming with JavaScript", year: "2024", category: "Frontend & Web",
    desc: "Completed an in-depth course covering JavaScript fundamentals, OOP, DOM manipulation, and practical problem-solving techniques.",
    skills: ["ES6+", "DOM Manipulation", "Functions & Closures", "OOP"],
  },
  {
    issuer: "VIPS", name: "Mobile Application Development (Flutter & Dart)", year: "2024", category: "Mobile & Tools",
    desc: "Completed a certified course in Flutter and Dart on Android Studio, covering UI/UX design, state management, and API integration.",
    skills: ["Flutter", "Dart", "State Management", "API Integration"],
  },
  {
    issuer: "Meta", name: "Version Control with Git & GitHub", year: "2024", category: "Mobile & Tools",
    desc: "Learned industry-standard version control workflows using Git and GitHub — branching, merging, pull requests, and team collaboration.",
    skills: ["Git", "GitHub", "Branching", "Collaborative Workflows"],
  },
];

/* Non-scholastic — résumé-backed. Kept out of the hackathon list on purpose. */
const BEYOND = [
  {
    group: "Performing arts",
    items: [
      "Certified in Drama and Nukkad Natak — multiple Department of Education (DoE) certificates",
      "Trained guitarist — 10+ years of consistent practice",
    ],
  },
  {
    group: "Sports",
    items: [
      "Zonal medallist — Shot Put & Discus Throw",
      "Zonal medallist — Skating",
      "Represented school at State level in Badminton",
    ],
  },
];

const COUNTERS = [
  { num: 7, suffix: "", label: "Projects shipped" },
  { num: 5, suffix: "", label: "Podiums & national ranks" },
  { num: 9.0, suffix: "", label: "CGPA · B.Tech CS", decimals: 2 },
  { num: 6, suffix: "yrs", label: "On GitHub" },
];

const EXPERIENCE = [
  {
    period: "Jun 2026 — Aug 2026",
    role: "Data Science Intern",
    org: "Spice Money",
    current: true,
    desc:
      "Built a RAG chatbot answering rural banking agents' policy queries across 11 verticals (AEPS, BBPS, MATM, DMT) from a 183-chunk corpus spanning 12 policy documents, fusing dense semantic search (BAAI/bge-small-en-v1.5) with BM25 via a 60/40 per-query score normalization in Qdrant to beat semantic-only retrieval.",
    bullets: [
      "Designed a three-tier confidence gate (answer / clarify / refuse) reaching 100% refusal accuracy on adversarial queries, with Hinglish query rewriting and an LLM-as-judge harness (Gemini 2.5 Flash) scoring faithfulness and relevancy.",
      "Built a tiered sales-forecasting pipeline over 6 months of agent transaction data using Theil-Sen robust regression and peer-growth blending to project Month-7 targets without absentee months skewing the trend, plus an AEPS-adoption scoring model to flag agents ready to grow usage.",
      "Built a scraper across DBT and other government subsidy portals to pull disbursal data, feeding a subsidy history tracker and payout prediction pipeline that forecasts agent-level subsidy eligibility and timing.",
    ],
    impact: [
      { label: "Verticals", value: "11" },
      { label: "Policy corpus", value: "183 chunks" },
      { label: "Retrieval", value: "Dense + BM25" },
      { label: "Adversarial refusal", value: "100%" },
    ],
  },
  {
    period: "2025",
    role: "Freelance Web Developer",
    org: "Medical Tourism Client",
    live: "medicaltour.netlify.app",
    desc:
      "Translated business requirements into a production-ready medical-tourism site. Designed responsive multi-section layouts — service listings, informational pages, and contact flows — refined navigation and cross-device UX through iterative client feedback, and managed end-to-end deployment on Netlify.",
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
  githubUrl: "https://github.com/raghav775",
  linkedin: "linkedin.com/in/raghav-gulati16",
  linkedinUrl: "https://www.linkedin.com/in/raghav-gulati16",
  location: "New Delhi, India",
  resume: "assets/raghav-gulati-resume.pdf",
};

Object.assign(window, {
  PROFILE, EDUCATION, ABOUT_TIMELINE, SKILL_GROUPS,
  PROJECTS, HIGHLIGHTS_PRIMARY, HIGHLIGHTS_SECONDARY,
  ACHIEVEMENTS, CERTIFICATIONS, BEYOND,
  COUNTERS, EXPERIENCE, CONTACT,
});
