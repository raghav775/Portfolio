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
    name: "AnnData",
    tagline: "Buyer offers ranked by what the farmer actually keeps.",
    year: "2026",
    span: "span-2",
    problem: "Farmers sell through layers of intermediaries with no view of how their final price was calculated, whether a rejection was fair, or when they will be paid.",
    challenge: "Ranking offers by net realizable price instead of gross, while keeping every quality call, deduction and payout auditable across six server-enforced roles.",
    summary:
      "SIH 2026 platform for an onion pilot in Nashik: FPOs pool produce into traceable lots, a local AI pre-screen precedes a physical assay, and each farmer gets an itemized settlement on an append-only audit log.",
    stack: ["FastAPI", "React", "TypeScript", "SQLAlchemy", "Playwright"],
    metrics: [
      { label: "User roles", value: "6" },
      { label: "Backend tests", value: "100+" },
      { label: "SIH 2026", value: "Round 3" },
    ],
    github: "https://github.com/raghav775/Anndata",
    live: "https://annadata-onion-pilot.vercel.app/",
    visual: "farm",
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
  { year: "2026", title: "Smart India Hackathon 2026", place: "Advanced to Round 3 with AnnData, a transparent farm-to-buyer platform", rank: "Round 3" },
  { year: "2026", title: "DU CIC Cluster Hackathon", place: "24-hour hackathon at Delhi University CIC", rank: "#2" },
  { year: "2026", title: "IIIT Delhi Hackathon", place: "24-hour hackathon at IIIT Delhi", rank: "#2" },
  { year: "2023", title: "iCode Hackathon · Python Advanced", place: "98th nationally among 80,000+ · 178th globally", rank: "Top 0.12%" },
  { year: "2022", title: "Ideathon, Satakunta University (Finland)", place: "1st place with a letter of recommendation · the concept behind Shruti AI", rank: "#1" },
];

const CERTIFICATIONS = [
  {
    issuer: "Google · IBM · Cisco", name: "Foundations of Cybersecurity", year: "2024", category: "Systems & Security",
    desc: "Core security principles: common threats, attack vectors, and defense strategies across modern systems.",
    skills: ["Threat analysis", "Attack vectors", "Defense strategy", "Security fundamentals"],
  },
  {
    issuer: "IBM", name: "Operating Systems: Administration & Security", year: "2024", category: "Systems & Security",
    desc: "OS architecture, user and process management, resource allocation, and system-level security hardening.",
    skills: ["OS architecture", "Process management", "Resource allocation", "Hardening"],
  },
];

/* Non-scholastic — résumé-backed. Kept out of the hackathon list on purpose. */
const BEYOND = [
  {
    group: "Music",
    items: ["Guitarist with 10+ years of consistent practice"],
  },
  {
    group: "Sports",
    items: [
      "Zonal medallist in Shot Put and Discus Throw",
      "Zonal medallist in Skating",
      "Represented my school in Badminton at state level",
    ],
  },
];

const COUNTERS = [
  { num: 100, suffix: "+", label: "LeetCode problems solved" },
  { num: 98, suffix: "th", label: "iCode national rank of 80,000+" },
  { num: 9.0, suffix: "", label: "CGPA · B.Tech CS", decimals: 2 },
  { num: 7, suffix: "", label: "Projects shipped" },
];

const EXPERIENCE = [
  {
    period: "Jun 2026 - Aug 2026",
    role: "Data Science Intern",
    org: "Spice Money",
    desc:
      "Built a Retrieval-Augmented Generation chatbot that answers rural banking agents' policy queries across 11 verticals (AEPS, BBPS, MATM, DMT), using hybrid dense and BM25 search in Qdrant over a 183-chunk policy corpus.",
    bullets: [
      "Added a three-tier confidence gate (answer, clarify, refuse) that reached 100% refusal accuracy on adversarial queries, plus an LLM-as-judge harness scoring faithfulness and relevancy.",
      "Built a sales-forecasting pipeline (Theil-Sen robust regression, peer-growth blending) over 6 months of agent transaction data, plus an AEPS-adoption scoring model.",
      "Developed a scraper across government subsidy portals that feeds a payout prediction pipeline for agent-level subsidy eligibility and timing.",
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
      "Delivered a production medical-tourism website from the client's requirements: responsive multi-section layouts for services, information and contact flows, refined through rounds of client feedback and deployed on Netlify.",
    impact: [
      { label: "Stack", value: "HTML · CSS · JS" },
      { label: "Deployed", value: "Netlify" },
      { label: "Status", value: "Live" },
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
  leetcode: "leetcode.com/u/Raghav160906",
  leetcodeUser: "Raghav160906",
  leetcodeUrl: "https://leetcode.com/u/Raghav160906/",
  location: "New Delhi, India",
  resume: "assets/raghav-gulati-resume.pdf",
};

Object.assign(window, {
  PROFILE, EDUCATION, ABOUT_TIMELINE, SKILL_GROUPS,
  PROJECTS, HIGHLIGHTS_PRIMARY, HIGHLIGHTS_SECONDARY,
  ACHIEVEMENTS, CERTIFICATIONS, BEYOND,
  COUNTERS, EXPERIENCE, CONTACT,
});
