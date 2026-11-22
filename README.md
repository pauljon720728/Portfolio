# Paul Jonathan Sambathini - Modern Portfolio Website

A sleek, responsive, single-page personal portfolio website for **Paul Jonathan Sambathini**, final-year Data Science student specializing in Generative AI, NLP, and MLOps.

Built using **React + Vite + Tailwind CSS** with a light/dark mode switch, accessible semantic markup, fast load times, and an electric Teal accent palette.

---

## 🚀 Features

- **Single Source of Truth (`src/data/portfolioData.js`)**: All personal info, projects, skills, education, experience, and contact links are centralized in a single file for instant updates.
- **Dark & Light Mode**: Default deep-slate dark theme with an accessible toggle, synchronized with `localStorage`.
- **Responsive Layout**: Designed and tested across mobile phones, tablets, and wide desktop screens.
- **Featured Capstones**:
  - **LexiPulse AI**: Multilingual legal complaint NLP classification system with Ollama + Transformers, ChromaDB, and benchmark evaluation.
  - **Cyber Threat Intelligence Platform**: Real-time RSS/API feed ingestion, Flan-T5 & DistilBERT sentiment and zero-shot categorization, NER, MITRE ATT&CK mitigation, and Docker Compose.
- **Interactive Micro-actions**: Direct "View on GitHub" buttons, "Copy Email" with feedback, and one-click "Download Resume".
- **Zero Backend Required**: Fully static and deployable anywhere for free.

---

## 📁 Project Structure

```text
c:\Portfolio\
├── index.html                   # HTML entry point, SEO meta tags, Google Fonts
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite config with relative base path
├── tailwind.config.js           # Tailwind theme configuration & dark mode
├── postcss.config.js            # PostCSS configuration
├── vercel.json                  # Vercel SPA rewrite configuration
├── public/
│   ├── favicon.svg              # AI neural hexagon vector favicon
│   ├── resume.pdf               # Resume document (replace with your PDF)
│   └── robots.txt               # Search engine crawler directives
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main application structure & sections
    ├── index.css                # Tailwind directives & custom scrollbars
    ├── context/
    │   └── ThemeContext.jsx     # Dark/light theme state provider
    ├── data/
    │   └── portfolioData.js     # Single source of truth for all content
    └── components/
        ├── Navbar.jsx           # Sticky navigation & theme toggle
        ├── Hero.jsx             # Hero section & CTA buttons
        ├── About.jsx            # About narrative & education cards
        ├── Skills.jsx           # Categorized skill cards
        ├── Projects.jsx         # Project showcase with featured badges & metrics
        ├── Experience.jsx       # Vertical timeline for hackathons & leadership
        ├── Certifications.jsx   # Industry credentials
        ├── Contact.jsx          # Direct email & social links
        └── Footer.jsx           # Social links & copyright
```

---

## 💻 Local Development Setup

### 1. Prerequisites
Ensure you have Node.js (v18+) and npm installed.

### 2. Installation
Open your terminal in the project directory:

```bash
cd c:\Portfolio
npm install
```

### 3. Run Development Server
Start Vite's fast local development server:

```bash
npm run dev
```

Visit `http://localhost:3000` (or the port displayed in your terminal).

### 4. Build for Production
To generate an optimized, minified production bundle in the `dist/` directory:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🛠️ How to Customize

1. **Update Content**: Open `src/data/portfolioData.js` and edit your skills, experience, project links, or fill in the marked `[...]` placeholders.
2. **Replace Resume**: Replace `public/resume.pdf` with your actual exported resume file. The "Download Resume" buttons will automatically download it.
3. **Change Accent Color**: Open `tailwind.config.js` and modify the `accent` color palette (e.g., change to indigo, emerald, or violet).

---

## 🌐 Free Deployment Guide

### Option 1: Deploy to Vercel (Recommended - Fastest)

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/pauljon720728/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and import your `portfolio` repository.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your portfolio is live with a free SSL certificate on `*.vercel.app`!

---

### Option 2: Deploy to GitHub Pages (Free via GitHub Actions)

1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Create a workflow file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. Push this workflow to your repository. Every time you push to `main`, GitHub Pages will automatically build and publish your site!

---

## 📄 License
MIT © 2026 Paul Jonathan Sambathini
