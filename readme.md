# Raghav Gulati — Portfolio v2.7

Personal portfolio site for Raghav Gulati, CS undergrad at VIPS-TC (GGSIPU), New Delhi.  
Built with vanilla React (CDN), no build step required.

**Live:** https://raghavgulatidev.netlify.app/ — to run it locally, serve the folder over HTTP (see Running Locally).

---

## Stack

| Layer | Tech |
|---|---|
| UI | React 18 (CDN UMD) + Babel standalone |
| Styling | Plain CSS with CSS variables, `backdrop-filter`, CSS animations |
| Fonts | Space Grotesk · Fraunces · Inter · JetBrains Mono (Google Fonts) |
| Icons | Inline SVG |
| Deployment | Static — no server, no build tool |

---

## File Structure

```
├── index.html                       # Entry point — meta tags, CDN scripts
├── app.jsx                          # Root component, section order
├── chrome.jsx                       # Nav, loader, cursor, particles, audio toggle
├── data.jsx                         # All content: projects, skills, achievements, contact
├── sections.jsx                     # All page sections as React components
├── styles.css                       # All styles
├── assets/
│   ├── raghav.jpeg                  # Portrait photo
│   └── raghav-gulati-resume.pdf     # Resume (linked in nav CTA)
└── uploads/                         # Backup/alternate files
```

---

## Editing Content

All content lives in **`data.jsx`** — no component code needed for most updates.

### Update a project
Find the project object in `PROJECTS` and edit:
- `name`, `tagline`, `year` — basic info
- `problem` — one sentence: what real problem it solves
- `challenge` — one sentence: what made it technically hard
- `summary` — 2–3 sentence technical description
- `learned` — flagship project only: what you took away
- `stack` — array of tech tags
- `metrics` — three `{ label, value, unit }` objects
- `github` — full URL to the repo

### Add a project
Copy any existing entry in `PROJECTS`, give it the next `id`, and pick a `span`:
- `span-4` — wide card (flagship)
- `span-3` — medium card
- `span-2` — compact card

For the `visual` field, pick one of: `rag`, `geo`, `neural`, `lens`, `hand`, `mobile`, `scrape`.  
To add a new visual, add a branch in the `ProjectVisual` function in `sections.jsx`.

### Update certifications
Edit `CERTIFICATIONS` in `data.jsx`:
```js
{ issuer: "IBM", name: "Operating Systems: Administration & Security", year: "2024", category: "Systems & Security" },
```

### Update contact info
Edit the `CONTACT` object at the bottom of `data.jsx`.

### Update GitHub repo links
Each project has a `github` field — replace with actual repo URLs:
```js
github: "https://github.com/raghav775/your-repo-name",
```

---

## Sections

| # | Section | ID | Notes |
|---|---|---|---|
| — | Hero | `#hero` | Stats, portrait, title |
| 01 | About | `#about` | Timeline + bio |
| 02 | Skills | `#skills` | Depth and breadth skill groups, no proficiency bars |
| 03 | Technical Highlights | `#highlights` | 4 engineering cards + a fast-scan list |
| 04 | Selected Work | `#projects` | Project cards with problem/challenge/GitHub |
| 05 | Wins | `#achievements` | Counters, hackathon results, certifications, activities |
| 06 | Track | `#experience` | Spice Money internship + freelance client work |
| 07 | Contact | `#contact` | Interactive terminal + contact cards (email, phone, GitHub, LinkedIn, LeetCode, résumé) |

---

## Running Locally

No install needed beyond a static file server (browsers block the `.jsx` requests when `index.html` is opened straight from disk). From the project folder:

```
python -m http.server 8080
# or
npx serve -l 8080
```

Then open http://localhost:8080/ in Chrome, Firefox, or Edge.

> **Note:** Babel compiles JSX in the browser on first load — expect a ~1–2s delay locally. In production, pre-compile the JSX or serve via a static host like Netlify for instant loads.

---

## Deployment

Drop the entire folder onto any static host:

- **Netlify:** drag-and-drop the folder at app.netlify.com
- **GitHub Pages:** push to a repo, enable Pages from the root
- **Vercel:** `vercel --prod` from the folder

No build command or output directory needed — everything is already static.

---

## Contact

**Raghav Gulati** — rg.raghavgulati@gmail.com  
GitHub: [github.com/raghav775](https://github.com/raghav775)  
LinkedIn: [linkedin.com/in/raghav-gulati16](https://linkedin.com/in/raghav-gulati16)
