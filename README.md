# 🚀 Suhani Sinha — Personal Portfolio

A clean, modern, and fully responsive developer portfolio website built with vanilla **HTML, CSS, and JavaScript**. It showcases my background as a B.Tech Computer Science (Data Science) student, my technical skills, projects, achievements, and a way to get in touch.

Live Demo: 

---

## ✨ Features

- **Animated hero section** with a canvas-based particle background and a typewriter effect for role titles
- **Custom cursor with trail effect** for a distinct desktop experience
- **Smooth scroll-reveal animations** as sections enter the viewport
- **Responsive navigation bar** with a hamburger-driven mobile menu
- **About section** with academic info, quick facts, and a downloadable resume
- **Skills section** with animated progress bars and tag clouds, grouped into:
  - Languages
  - Libraries & Frameworks
  - Data Science / ML
  - Tools & Platforms
- **Projects section** showcasing featured work with tags and links (GitHub / live demo)
- **Experience & achievements timeline** highlighting competitions, certifications, and academics
- **Contact section** with a styled form (floating labels) and social links
- Fully **responsive design** across desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, animations, responsive layout) |
| Scripting | Vanilla JavaScript (DOM, Canvas API, IntersectionObserver-style reveal, form handling) |
| Fonts | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) & [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |

No frameworks, build tools, or dependencies — just plain HTML/CSS/JS, so it runs anywhere a browser can open it.

---

## 📁 Project Structure

```
portfolio/
├── index.html      # Main HTML structure (Hero, About, Skills, Projects, Experience, Contact)
├── style.css        # All styling, animations, and responsive layout
├── script.js         # Interactivity: cursor trail, particles, typewriter, scroll reveal, form logic
├── Suhani Sinha Resume (1).pdf.pdf   # Downloadable resume
└── README.md         # Project documentation
```

---

## 🧩 Sections Overview

1. **Hero** — Introduction, animated role typewriter, and call-to-action buttons
2. **About** — Academic background, current focus areas, and quick-info card
3. **Skills** — Technical skill breakdown across languages, ML/DS tools, and platforms
4. **Projects** — Highlighted projects, including:
   - Resume Dataset Analysis (EDA with Pandas, Matplotlib, Seaborn)
   - Dataset Analyzer — Streamlit Dashboard
   - Hinglish Hate Speech Detector (fine-tuned MuRIL transformer)
   - iKora — Mental Wellness Chatbot AI
5. **Experience** — Timeline of hackathon wins, certifications, and academic milestones
6. **Contact** — Contact form and social/professional links

---

## 🚀 Getting Started

### Run locally

1. Clone the repository
   ```bash
   git clone https://github.com/Suhannii/portfolio.git
   cd portfolio
   ```
2. Open `index.html` directly in your browser, **or** serve it locally for the best experience:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node (npx serve)
   npx serve .
   ```
3. Visit `http://localhost:8000` in your browser.

### Deploy

This is a static site, so it can be deployed easily via:
- **GitHub Pages** — Enable Pages in the repo settings, pointing to the `main` branch
- **Netlify / Vercel** — Drag-and-drop or connect the repo for automatic deployment

---

## ✏️ Customization

To make this your own:
- Update personal details (name, bio, education, email) in `index.html`
- Replace the resume PDF with your own and update the `href`/`download` attributes
- Edit the `projects-grid` section to add/remove/update projects and links
- Update social links in the Contact section (GitHub, LinkedIn, Instagram, etc.)
- Adjust colors, fonts, and animation timing via CSS custom properties in `style.css`

---

## 📬 Contact

**Suhani Sinha**
B.Tech CS (Data Science) · Noida International University

- 📧 Email: suhanisinha006@gmail.com
- 💻 GitHub: [@Suhannii](https://github.com/Suhannii)

---

## 📄 License

This project is open for reference and learning purposes. If you fork or reuse this template, a credit/link back is appreciated. Feel free to add a formal license (e.g. MIT) if you'd like others to reuse the code freely.
