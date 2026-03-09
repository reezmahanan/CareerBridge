# 🌉 CareerBridge

> A fully functional **job portal web app** built with plain HTML, CSS, and JavaScript — no frameworks, no installs, no build tools. Just open it in a browser and it works!

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Framework](https://img.shields.io/badge/Framework-None-lightgrey?style=flat)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

---

## 👋 What is CareerBridge?

CareerBridge is a job board web app — similar to LinkedIn Jobs or Indeed — where:

- 👤 **Job seekers** can browse jobs, apply, save listings, and get career advice
- 🏢 **Employers** can post jobs, search for candidates, and build a company brand page
- 🛡️ **Admins** get a dashboard with platform-wide stats

The cool part? The **entire app runs in one HTML file** with one CSS file and one JavaScript file. There's no backend server, no database, and no complex setup. It's perfect for learning how real-world web apps are structured!

---

## 🚀 How to Run It (Super Easy!)

### Option 1 — Just double-click the file
```
Double-click  index.html  →  opens instantly in your browser ✅
```

That's literally it. No installation needed.

---

### Option 2 — Use a local server (recommended)

If you have **Python** installed:
```bash
python -m http.server 8000
```

If you have **Node.js** installed:
```bash
npx http-server -c-1
```

Then open your browser and go to: **http://localhost:8000**

> 💡 **Why bother with a local server?** Some browsers block fonts or images when you open HTML files directly from your file system. A local server avoids those quirks and behaves more like a real website.

---

## 🔐 Logging In (Demo Accounts)

The login is **simulated** — meaning any email and password will work. No real account needed!

1. Click **Login** in the top navigation
2. Enter any email (e.g. `student@test.com`) and any password
3. Choose your role:

| Role | What you can do |
|---|---|
| **Job Seeker** | Browse jobs, apply, save listings, view dashboard |
| **Employer** | Post jobs, search candidates, manage branding |
| **Admin** | See the admin dashboard with platform stats |

> 💡 Your session is saved automatically in the browser — so if you refresh the page, you stay logged in!

---

## 📁 Project Files Explained

```
CareerBridge/
│
├── index.html              ← The main app (all 20+ pages live inside this one file!)
├── app.js                  ← All the JavaScript — routing, data, events (~1,500 lines)
├── styles.css              ← All the CSS — layout, colors, animations (~2,900 lines)
│
├── candidate-profile.html  ← Separate page to view a candidate's profile
├── job-details.html        ← Separate page to view a single job in detail
│
└── README.md               ← You're reading this! 📖
```

> 💡 **"How does ONE file have 20+ pages?"** — Great question! CareerBridge uses a technique called a **Single Page Application (SPA)**. All the pages are `<section>` elements inside `index.html`. JavaScript hides all of them and only shows the one you navigate to. The URL updates using `#` (called a **hash route**), but the browser never truly loads a new page. This is how apps like Gmail work too!

---

## 🗺️ All the Pages

| Category | Page Name | URL to visit |
|---|---|---|
| 🏠 | Home | `#home` |
| 👤 Job Seekers | Browse Jobs | `#browse-jobs` |
| | Companies | `#companies` |
| | Career Advice | `#career-advice` |
| | Resume Tips | `#resume-tips` |
| | Salary Guide | `#salary-guide` |
| 🏢 Employers | Post a Job | `#post-job` |
| | Search Candidates | `#search-candidates` |
| | Pricing | `#pricing` |
| | Recruitment Solutions | `#recruitment-solutions` |
| | Employer Branding | `#employer-branding` |
| 🏷️ Company Info | About Us | `#about` |
| | Contact | `#contact` |
| | Press | `#press` |
| | Blog | `#blog` |
| | Careers | `#careers` |
| 🔑 Auth | Login | `#login` |
| | Register | `#register` |
| 👤 My Account | Dashboard | `#dashboard` |
| | My Profile | `#my-profile` |
| | My Applications | `#my-applications` |
| | Saved Jobs | `#saved-jobs` |
| | Settings | `#settings` |

> 💡 To visit any page directly, just add the hash to the URL in your browser. E.g.: `http://localhost:8000/#browse-jobs`

---

## ✨ Features at a Glance

### For Job Seekers
- 🔍 Search jobs by keyword and location with live filtering
- 🎛️ Filter by job type, salary range, experience level, and date posted
- 💾 Save / unsave jobs (stored in your browser)
- 📄 Apply for jobs with one click
- 📊 Personal dashboard with application stats
- 💰 Salary Guide — look up pay ranges by industry and seniority level
- 📝 Resume Tips — interactive 5-tab guide (Basics, ATS, Experience, Skills, Education)
- 💡 Career Advice articles with real images and full article view

### For Employers
- ➕ Post a job with full details (title, skills, salary, type, location, remote policy)
- 🏷️ Add skill tags dynamically (type a skill + press Enter)
- 🔎 Search and browse candidate profiles
- 📣 Employer Branding page — hero section, stats, company profile preview, testimonials
- 💳 Pricing plans with monthly / yearly toggle (20% off for yearly)

### General
- 🔒 Role-based auth (Job Seeker / Employer / Admin)
- 📱 Fully mobile-responsive with hamburger navigation
- 🔔 Pop-up toast notifications (auto-dismiss after 3 seconds)
- 💬 Modal pop-ups for job details and company profiles
- ↩️ Browser back/forward button support works correctly

---

## 🧠 How the Code Works (Simple Overview)

Here's a map of how everything connects:

```
index.html  ←  All page sections live here (hidden/shown by JavaScript)
    │
    └── app.js
          │
          ├── 📦 Sample Data
          │     sampleJobs[], sampleCompanies[], careerAdvice[]
          │     (This is the "fake database" the app uses)
          │
          ├── 🔀 Router  →  navigateToPage('page-id')
          │     1. Hides ALL page sections
          │     2. Shows only the target section
          │     3. Updates the URL hash (#page-name)
          │     4. Loads that page's data if needed
          │
          ├── 🔐 Auth  →  login(), logout(), requireLogin()
          │     • Saves the user object to localStorage
          │     • Checks role and redirects accordingly
          │
          └── 🎨 Renderers  →  renderFeaturedJobs(), renderCompanies(), etc.
                • Build HTML strings using template literals
                • Inject them into the page with .innerHTML
```

> 💡 **What is `localStorage`?** Think of it as a mini-database inside your browser. CareerBridge uses it to remember who is logged in and which jobs you've saved — even after you close the tab. You can inspect it in DevTools → Application → Local Storage.

---

## 🎨 How Colors & Styles Work

CareerBridge uses **CSS custom properties** (CSS variables) so that all colors are defined in one place. They live inside `:root` at the top of `styles.css`.

```css
:root {
  --primary: #4361ee;       /* Main blue — used on buttons, links */
  --success: #10b981;       /* Green — used on salary badges */
  --danger:  #ef4444;       /* Red — used on error messages */
  --dark:    #1e293b;       /* Near-black — used for headings */
  --gray:    #64748b;       /* Gray — used for secondary text */
}
```

> 💡 **Try it yourself!** Open `styles.css`, find `:root`, change `--primary` to `#e74c3c` (red). Save the file and refresh the browser — the entire app changes color instantly. That's the power of CSS variables!

---

## 🛠️ How to Customize It

### Add your own job listings
Find the `sampleJobs` array near the top of `app.js` and add a new object:

```js
{
  id: 99,
  title: "Junior Web Developer",
  company: "My Startup",
  location: "Remote",
  type: "Full-time",          // "Full-time" | "Part-time" | "Contract"
  level: "Entry Level",       // "Entry Level" | "Mid Level" | "Senior"
  salary: "$50k - $70k",
  skills: ["HTML", "CSS", "JavaScript"],
  description: "A great role for beginners...",
  featured: true              // true = show on homepage
}
```

### Add a brand new page
1. Add a `<section id="my-new-page" class="page">` anywhere in `index.html`
2. Put your content inside it
3. Link to it from any button: `onclick="navigateToPage('my-new-page')"`

### Change the main color
Open `styles.css` → find `:root` → update `--primary` to any hex color.

---

## 📚 Concepts You'll Learn from This Project

This is a great project to study if you want to understand how real web apps work:

| Concept | Where to find it in the code |
|---|---|
| **HTML structure & sections** | `index.html` — especially the `<section>` tags |
| **CSS Flexbox & Grid layouts** | `styles.css` — most layout classes |
| **CSS variables (custom properties)** | `styles.css` — the `:root` block |
| **Responsive design (mobile-first)** | `styles.css` — `@media` blocks at the bottom |
| **DOM manipulation** | `app.js` — `renderFeaturedJobs()`, `renderCompanies()` |
| **Event listeners** | `app.js` — `setupEventListeners()` function |
| **Template literals** | `app.js` — all render functions use `` `${var}` `` |
| **localStorage (browser storage)** | `app.js` — `login()`, `saveJob()`, `checkAuthState()` |
| **SPA / hash-based routing** | `app.js` — `navigateToPage()`, `handleRouting()` |
| **Modals & overlays** | `app.js` — `viewJobDetails()`, `viewCompanyProfile()` |

---

## ⚠️ Things to Know (Limitations)

| Thing | What it means for you |
|---|---|
| **Login is not real** | Any email/password works — nothing is checked server-side |
| **Data lives in the browser** | Clearing browser storage (or switching browsers) resets saved jobs and login |
| **No actual file uploads** | Upload buttons are UI placeholders — they don't save real files |
| **Images are from the internet** | The app uses Unsplash images, so you need an internet connection for photos to appear |

---

## 🔮 Challenge Ideas (Try These!)

Want to level up the project? Here are some ideas from beginner to advanced:

**Beginner**
- [ ] 🎨 Change the color scheme — try a dark theme or a green theme
- [ ] ➕ Add 5 new job listings to `sampleJobs`
- [ ] 📝 Add a new section to the Home page

**Intermediate**
- [ ] 🗄️ Move job data to a `data/jobs.json` file and load it with `fetch()`
- [ ] 💾 Add a "Recently Viewed Jobs" feature using `localStorage`
- [ ] 📊 Add a simple bar chart to the employer dashboard

**Advanced**
- [ ] 🔌 Connect a real backend (Node.js + Express, or Python + FastAPI)
- [ ] 🔐 Add real login with Firebase Authentication or JWT tokens
- [ ] ⚛️ Migrate one page to React or Vue to compare how frameworks work
- [ ] 📱 Turn it into a PWA (Progressive Web App) that works offline

---

## 🤝 Tech Stack Summary

| Technology | What it does in this project |
|---|---|
| **HTML5** | Structure and content of every page |
| **CSS3** | All styling — layout, colors, animations, responsiveness |
| **JavaScript (ES6+)** | Routing, rendering, events, state management — everything dynamic |
| **Font Awesome 6** | Icons (briefcase, search, user, etc.) — loaded from CDN |
| **Plus Jakarta Sans** | The clean, modern font — loaded from Google Fonts |
| **Unsplash** | Free high-quality photos for articles, branding pages, templates |
| **localStorage API** | Saves login state and saved jobs inside the browser |

> 💡 **CDN** = Content Delivery Network. It means the icons and fonts are loaded from an external URL automatically — you don't need to download any files yourself.

---

## 📄 License

**MIT License** — Free to use, share, and modify for any purpose including school projects and portfolios. Just keep the license notice.

---

*Made with ❤️ as a learning project — CareerBridge 2026*

