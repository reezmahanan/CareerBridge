# CareerBridge

> A production-grade, fully static **job portal SPA** that connects job seekers with employers — built with zero frameworks, zero build tools, and zero dependencies.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Framework](https://img.shields.io/badge/Framework-None-lightgrey?style=flat)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

---

## About

**CareerBridge** is a fully client-side job portal inspired by platforms like LinkedIn Jobs and Indeed. It delivers a rich, multi-role experience — job seekers can search, filter, apply, and track applications; employers can post jobs, search candidates, and manage their brand — all without touching a server.

Every page, route, animation, and interaction is powered by a single HTML file, one JavaScript module, and one CSS file. The SPA uses hash-based routing and `localStorage` for state, making it instantly deployable to any static host.

---

## Live Demo

```
Open index.html directly in your browser, or serve it locally (see Getting Started below).
```

---

## Features

### Job Seeker
- Keyword + location search with live filtering
- Sidebar filters: job type, salary range, experience level, date posted
- Sort jobs by relevance, most recent, oldest, salary (high/low)
- One-click **Apply Now** with login guard
- Save / unsave jobs (persisted in `localStorage`)
- Personal dashboard: application stats, recent activity, recommendations
- My Applications tracker with status indicators
- Salary Guide: lookup by industry across 4 experience tiers (Entry / Mid / Senior / Lead)
- Resume Tips: 5-tab interactive guide (Basics, ATS, Experience, Skills, Education)
- Career Advice: articles with category filtering
- Candidate profile page per user (`?id=1|2|3`)

### Employer
- Full **Post a Job** form — title, company, description, type, level, category, location, remote policy, salary range, skills, qualifications
- Live **skill tag manager** — type + Enter to add, click × to remove
- Job promotion tiers: Standard (free) / Featured ($99) / Urgent ($199)
- **Search Candidates** with experience level filter
- Candidate profile cards linking to standalone profile pages
- **Pricing page** with monthly / yearly toggle (20% yearly discount)
- Recruitment Solutions enterprise pitch with case studies
- Employer Branding page with live company profile preview

### Platform
- Three-role auth simulation: **Job Seeker**, **Employer**, **Admin**
- Auth persistence via `localStorage` — survives page refresh
- Google and LinkedIn OAuth stubs (ready to wire real client IDs)
- Toast notification system — success / error, auto-dismiss 3 s
- Modal dialogs for job details and company profiles
- Mobile-responsive hamburger navigation
- Mega-dropdown nav menus (Job Seekers, Employers, Company)
- Browser back / forward support via `hashchange` + `history.pushState`
- `fadeIn` page transitions with `cubic-bezier` easing

---

## Pages

| Section | Page | Hash Route |
|---|---|---|
| **Job Seekers** | Home | `#home` |
| | Browse Jobs | `#browse-jobs` |
| | Companies | `#companies` |
| | Career Advice | `#career-advice` |
| | Resume Tips | `#resume-tips` |
| | Salary Guide | `#salary-guide` |
| **Employers** | Post a Job | `#post-job` |
| | Search Candidates | `#search-candidates` |
| | Pricing | `#pricing` |
| | Recruitment Solutions | `#recruitment-solutions` |
| | Employer Branding | `#employer-branding` |
| **Company** | About Us | `#about` |
| | Contact | `#contact` |
| | Press | `#press` |
| | Blog | `#blog` |
| | Careers | `#careers` |
| **Auth** | Login | `#login` |
| | Register | `#register` |
| **User** | Dashboard | `#dashboard` |
| | My Profile | `#my-profile` |
| | My Applications | `#my-applications` |
| | Saved Jobs | `#saved-jobs` |
| | Settings | `#settings` |
| **Standalone** | Job Details | `job-details.html?id=N` |
| | Candidate Profile | `candidate-profile.html?id=1\|2\|3` |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (single `index.html` SPA + 2 standalone pages) |
| Styles | CSS3 with custom property design system (`styles.css`, ~2 900 lines) |
| Logic | Vanilla JavaScript ES6+ (`app.js`, ~1 500 lines) |
| Icons | [Font Awesome 6.4.0](https://fontawesome.com/) via CDN |
| Typography | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (weights 300–800) via Google Fonts |
| Images | Unsplash (editorial), randomuser.me (avatars), ui-avatars.com (initials) |
| State | `localStorage` for auth + saved jobs |
| Routing | Hash-based SPA (`history.pushState` + `hashchange`) |
| Build | None — open directly in a browser |

---

## Design System

Defined as CSS custom properties in `:root` inside `styles.css`:

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#4361ee` | Buttons, links, active states |
| `--primary-dark` | `#3a56d4` | Hover states |
| `--primary-light` | `#eef2ff` | Backgrounds, skill chips |
| `--primary-gradient` | `#4361ee → #3a0ca3` | Hero text, card headers |
| `--success` | `#10b981` | Salary badges, availability |
| `--warning` | `#f59e0b` | Highlight badges |
| `--danger` | `#ef4444` | Error toasts |
| `--dark` | `#1e293b` | Body text, headings |
| `--gray` | `#64748b` | Secondary text |
| `--gray-light` | `#f1f5f9` | Page background |

Border radius scale: `6px / 8px / 12px / 16px`  
Shadow scale: sm / default / md / lg  
Max-width container: `1280px` · Sticky navbar: `72px`

---

## Project Structure

```
CareerBridge/
├── index.html               # Main SPA — all 20+ pages live here (~2 000 lines)
├── app.js                   # All routing, rendering, state, and event logic (~1 500 lines)
├── styles.css               # Complete design system and component styles (~2 900 lines)
├── candidate-profile.html   # Standalone candidate detail page (query param ?id=1|2|3)
├── job-details.html         # Standalone job detail page (query param ?id=N)
└── README.md                # This file
```

---

## Getting Started

### Prerequisites
- Any modern browser (Chrome, Firefox, Edge, Safari)
- Optional: Python 3 or Node.js for a local dev server (avoids certain browser CORS quirks)

### Option 1 — Direct file open
```
Double-click index.html  →  opens instantly in your default browser
```

### Option 2 — Local dev server (recommended)
```powershell
# Python 3
python -m http.server 8000

# Node.js
npx http-server -c-1
```
Then open **http://localhost:8000** in your browser.

### Demo accounts
Log in via the **Login** page. Use any email/password combination — the auth is simulated. Select your role (Job Seeker, Employer, or Admin) to see the role-specific dashboard.

---

## Architecture

```
index.html          ← shell + all page <section> elements
    │
    └── app.js
          ├── State: currentUser, currentPage, jobs[], companies[], skills[]
          ├── navigateToPage(pageId)  ← central SPA router
          │     • hides all .page sections
          │     • shows target section (.active)
          │     • loads page-specific data/renderers
          │     • updates URL hash + highlights nav link
          ├── Hash routing: hashchange + history.pushState
          ├── Auth: localStorage read/write, role-based redirects
          ├── Renderers: renderFeaturedJobs(), renderCompanies(),
          │             renderJobDetailsPage(), renderCandidates(), …
          └── window.*  ← all interactive handlers exposed globally
                          for inline onclick attributes in HTML
```

**Standalone pages** (`job-details.html`, `candidate-profile.html`) load `app.js` independently, read `?id=N` from `URLSearchParams`, and call the relevant renderer directly.

---

## Customization

### Add or edit jobs
Open `app.js` and find the `sampleJobs` array (near the top). Each object accepts:
```js
{
  id, title, company, location, type,       // e.g. "Full-time"
  level, category, salary, remote,          // e.g. "Hybrid"
  description, skills[], qualifications[]
}
```

### Change brand colors
Edit the `:root` block at the top of `styles.css`. Swap `--primary` to instantly re-theme the entire UI.

### Wire real OAuth
In `app.js`, find the `OAUTH` config object and replace the placeholder client IDs:
```js
const OAUTH = {
  google:   { clientId: 'YOUR_GOOGLE_CLIENT_ID' },
  linkedin: { clientId: 'YOUR_LINKEDIN_CLIENT_ID' }
};
```

### Connect a real backend
Replace the `sampleJobs` / `sampleCompanies` arrays with `fetch()` calls to your API. The rendering functions are already decoupled from the data source.

---

## Known Issues

| Issue | Detail |
|---|---|
| Missing scripts | `index.html` references `login-role-selector.js` and `role-selector.js` which don't exist — causes harmless 404 console errors |
| Double script load | `app.js` is loaded twice at the bottom of `index.html` — no functional impact but wastes a network request |
| No real auth | Login is fully simulated; credentials are never validated against a server |

---

## Roadmap

- [ ] Extract sample data to `data/jobs.json` and `data/candidates.json`
- [ ] Add a REST API backend (Node/Express or Python/FastAPI)
- [ ] Integrate real authentication (JWT or OAuth 2.0)
- [ ] Migrate to a component framework (React or Vue) for scalability
- [ ] Add unit tests (Vitest / Jest) for routing and rendering logic
- [ ] Implement proper pagination for job and candidate listings
- [ ] Add an employer analytics dashboard (applications per job, funnel metrics)
- [ ] Progressive Web App (PWA) support — offline caching via Service Worker

---

## License

MIT © 2026 CareerBridge

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.