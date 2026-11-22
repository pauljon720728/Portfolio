/**
 * Portfolio Data Source of Truth
 * Edit any content, links, projects, or placeholders directly in this single file.
 */

export const personalInfo = {
  name: "Paul Jonathan Sambathini",
  role: "Data Science Student | Generative AI | NLP | MLOps",
  heroTagline: "Final-year Data Science student building end-to-end AI applications, LLM pipelines, and production systems.",
  aboutText: [
    "Final-year B.Tech Data Science student building AI-powered applications with Generative AI, NLP and LLMs, from model training to deployment.",
    "I enjoy turning data into practical, intelligent solutions, and I've led teams at hackathons and helped organise one."
  ],
  location: "Hyderabad, Telangana",
  email: "pauljon720728@gmail.com",
  phone: "+91 7601051733",
  linkedIn: "https://www.linkedin.com/in/sambathini-paul-jonathan9a3542361",
  gitHub: "https://github.com/pauljon720728",
  resumePath: "./resume.pdf",
  education: [
    {
      degree: "B.Tech in Data Science",
      institution: "Malla Reddy University",
      cgpa: "8.1 CGPA",
      status: "Graduating [Month, Year]", // Placeholder: e.g. June 2026 / 2027
      isPlaceholderDate: true,
      description: "Core focus on Machine Learning, Generative AI, NLP architectures, Deep Learning, and Distributed Data Processing."
    },
    {
      degree: "Intermediate Education",
      institution: "State Board",
      score: "91.8%",
      period: "Completed"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "State Board",
      score: "10 GPA",
      period: "Completed"
    }
  ]
};

export const skillsData = [
  {
    category: "Programming",
    icon: "Code2",
    description: "Languages for algorithmic problem solving, backend systems, and data pipelines.",
    skills: ["Python", "Java", "JavaScript", "SQL"]
  },
  {
    category: "AI / ML & GenAI",
    icon: "BrainCircuit",
    description: "Specialized architectures, natural language processing, and prompt engineering.",
    skills: [
      "Machine Learning",
      "Generative AI",
      "NLP",
      "LLMs",
      "Prompt Engineering",
      "Explainable AI",
      "LLMOps"
    ]
  },
  {
    category: "MLOps & Backend",
    icon: "Server",
    description: "Model deployment pipelines, REST APIs, microservices, and databases.",
    skills: [
      "FastAPI",
      "Ollama",
      "Supabase",
      "SQLAlchemy",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "[MLOps tools from churn project]" // Placeholder as requested
    ]
  },
  {
    category: "Web Development",
    icon: "Layout",
    description: "Modern frontend and full-stack web applications.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB"]
  },
  {
    category: "Developer Tools",
    icon: "Wrench",
    description: "Version control, workflow efficiency, and developer environments.",
    skills: ["Git", "GitHub", "Postman", "Jupyter Notebook", "VS Code", "Cursor", "Antigravity"]
  }
];

export const projectsData = [
  {
    id: "lexipulse-ai",
    title: "LexiPulse AI",
    subtitle: "NLP-Based Legal Complaint Emotion and Urgency Classification System",
    category: "Final-Year Capstone",
    featured: true,
    description:
      "Explainable AI platform that takes in legal complaints in Hindi, Telugu, Tamil, Bengali, Urdu and English, detects the language and translates it, classifies 7 emotions and 4 urgency levels with SLA timers, and routes each complaint to the right department.",
    details: [
      "Dynamic engine switch between a Hugging Face Transformer pipeline and a local Ollama LLM.",
      "ChromaDB vector search for retrieving similar historical case precedents.",
      "Automated PDF case report generation and role-based access control (citizen, officer, admin) with a benchmark evaluation suite."
    ],
    metrics: [
      { label: "Urgency Accuracy", value: "82%" },
      { label: "Category Routing", value: "82%" },
      { label: "Emotion Accuracy", value: "70%" },
      { label: "Synthetic Cases", value: "380 records" }
    ],
    tech: ["Python", "FastAPI", "React", "SQLAlchemy", "Supabase", "Ollama", "Transformers", "ChromaDB"],
    githubUrl: "https://github.com/pauljon720728/LEXIPULSE-AI"
  },
  {
    id: "cyber-threat-intelligence",
    title: "Cyber Threat Intelligence Platform",
    subtitle: "AI-Integrated Multi-Source Threat Aggregation & NER System",
    category: "AI & Cybersecurity",
    featured: true,
    description:
      "AI-integrated platform that collects cyber threat feeds (RSS and APIs) with scheduled background jobs, removes duplicates, and stores them in PostgreSQL. Uses Hugging Face Transformer models (Flan-T5, DistilBERT) for sentiment analysis, zero-shot categorisation and severity scoring.",
    details: [
      "Extracts CVEs, IPs, and malware signatures with Named Entity Recognition (NER).",
      "Generates actionable MITRE ATT&CK-based mitigation recommendations.",
      "Explainable AI justifications for each decision, paired with a React admin portal for managing sources, users, and threat reports.",
      "Containerized with Docker Compose and reverse-proxied with Nginx."
    ],
    metrics: [
      { label: "Models", value: "Flan-T5 & DistilBERT" },
      { label: "Framework", value: "MITRE ATT&CK" }
    ],
    tech: ["Python", "Transformers", "PostgreSQL", "React", "Docker", "Nginx", "DistilBERT", "Flan-T5"],
    githubUrl: "https://github.com/pauljon720728/Threat_Intelligence"
  },
  {
    id: "churn-mlops-platform",
    title: "Churn MLOps Platform",
    subtitle: "[One-line description from README: End-to-end customer churn prediction & MLOps system]",
    category: "MLOps & Engineering",
    featured: false,
    isPlaceholder: true,
    description:
      "[One-line description from the README: Production-ready ML lifecycle platform for customer churn forecasting].",
    details: [
      "[Model: Supervised classification models evaluated with feature importance and cross-validation]",
      "[Pipeline & Serving: Automated training, feature transformation, and containerized API serving]",
      "[Deployment & Monitoring: Automated CI/CD pipeline, performance tracking, and data drift monitoring]"
    ],
    metrics: [
      { label: "Pipeline", value: "[Automated CI/CD]" },
      { label: "Status", value: "[Production Ready]" }
    ],
    tech: ["Python", "FastAPI", "Docker", "[MLflow / DVC]", "[CI/CD Tool]", "[Monitoring Tool]"],
    githubUrl: "https://github.com/pauljon720728/churn-mlops-platform"
  },
  {
    id: "aspire-navigator",
    title: "Aspire Navigator",
    subtitle: "AI-Assisted Student Learning & Recommendation Platform",
    category: "Full Stack AI",
    featured: false,
    description:
      "AI-assisted student learning platform featuring personalized learning paths, intelligent course recommendations, and real-time progress tracking.",
    details: [
      "Integrated AI tools to assist learners with interactive, domain-specific guidance.",
      "Role-based secure authentication and modular curriculum tracking dashboards.",
      "Full-stack web application built with modern JavaScript frameworks."
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Authentication", "AI Integration"],
    githubUrl: "https://github.com/pauljon720728/Aspire_Navigator"
  },
  {
    id: "jarvis-ai-assistant",
    title: "Jarvis AI Voice Assistant",
    subtitle: "Voice-First Desktop Assistant with Local LLMs",
    category: "Local LLMs & Audio",
    featured: false,
    description:
      "Voice-first assistant operating purely on local LLMs via Ollama, featuring real-time speech-to-text, text-to-speech, contextual file uploads, and persistent conversation memory.",
    details: [
      "Ultra-low latency streaming with WebSockets and local inference.",
      "Speech-to-text (STT) and expressive text-to-speech (TTS) audio pipeline.",
      "Document ingestion and local SQLite persistence for conversation context."
    ],
    tech: ["React", "Node.js", "SQLite", "WebSockets", "Ollama", "Local LLMs"],
    githubUrl: "https://github.com/pauljon720728/Jarvis_AI"
  }
];

export const experienceData = [
  {
    id: "hackwithai-2026",
    role: "Team Lead",
    organization: "HackWithAI 2026: 24-Hour Offline AI Hackathon",
    location: "KLH University, Hyderabad",
    period: "Feb 2026",
    highlight: "24-Hour Offline AI Hackathon",
    points: [
      "Led a multidisciplinary team of 4 to design, build, and present PrepSenseAI—an AI-powered exam-coaching solution—under an intensive 24-hour sprint deadline.",
      "Coordinated architecture, model integration, frontend workflows, and pitched the working product live to the judging panel."
    ]
  },
  {
    id: "talent-hunt-hackathon",
    role: "Event Organiser and Technical Coordinator",
    organization: "36-Hour Talent Hunt Hackathon for [Startup Name]",
    location: "Hyderabad, India",
    period: "[Month, Year]",
    isPlaceholder: true,
    highlight: "36-Hour Hackathon Organization",
    points: [
      "Managed student participants, guided developer teams in evaluating and selecting viable problem statements.",
      "Supported technical code reviews of pitched ideas, evaluated architecture feasibility, and judged submissions to shortlist final winning teams."
    ]
  }
];

export const certificationsData = [
  {
    title: "Accenture Software Engineering",
    issuer: "Accenture",
    type: "Virtual Experience Program",
    skills: ["Software Engineering", "Architecture", "Debugging", "Code Quality"]
  },
  {
    title: "Deloitte Data Analytics",
    issuer: "Deloitte",
    type: "Data Analysis Program",
    skills: ["Data Analytics", "Business Intelligence", "Insights Extraction"]
  },
  {
    title: "EduSkills Java Full Stack Internship",
    issuer: "EduSkills",
    type: "Full Stack Internship",
    skills: ["Java", "Full Stack Development", "Databases", "Web Architecture"]
  },
  {
    title: "HackWithAI 2026 Hackathon Certificate",
    issuer: "KLH University",
    type: "Hackathon Leadership & Project",
    skills: ["Generative AI", "Hackathon Pitching", "Team Leadership", "Rapid Prototyping"]
  }
];
