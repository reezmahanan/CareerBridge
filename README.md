# CareerBridge 🌉

CareerBridge is a fully dynamic and responsive job portal system developed using **vanilla HTML, CSS, and JavaScript**. Built with a client-side `localStorage` state management architecture, the platform connects job seekers and employers across Sri Lanka in a simulated interactive ecosystem.

## Live Demo

👉 **[https://reezmahanan.github.io/CareerBridge/](https://reezmahanan.github.io/CareerBridge/)**

---

## 🌟 Premium Features

### 1. 🤖 Smart Match Compatibility Score
- Automatically compares a candidate's profile skills against job requirements.
- Displays a color-coded matching badge on vacancy cards (e.g. `90% Match` in green, `50% Match` in orange).
- Within job details, matching candidate skills are highlighted in green with a checkmark ($\checkmark$), and missing skills are shown in gray with a plus icon ($+$).

### 2. 💬 Interactive Mock Interview Simulator
- A role-specific chat prep assistant under the `Interview Prep` page.
- Choose from tracks: **Software Engineering, Quality Assurance, Digital Marketing, or Business Analysis**.
- Simulates a 3-question sequence interview, parses response lengths to give constructive advice, and highlights topics you should cover.
- Generates a final score report scorecard mapping simulated performance.

### 3. 📊 Sri Lankan Salary Guide & Skill Tracker
- Updated check tool database that outputs salary ranges in **Sri Lankan Rupees (LKR)** per month.
- Features a **Top In-Demand Skills Tracker** showing relative yearly growth percentages (e.g. React/Next.js +24.8% growth) represented as horizontal CSS bar graphs.

### 4. 📄 ATS Resume Builder & Exporter
- Instantly compiles profile details into standard, professional resume templates (**Minimalist, Modern Clean, or Creative**).
- Export resumes directly: print directly via native print dialogs (custom print stylesheet `@media print` overrides hide site navigation/footers to print only the resume) or download as a standalone HTML file.

### 5. 💼 Employer Job Posting & Received Applicants
- Employers can post listings (automatically formats monthly minimum/maximum values into clean LKR abbreviations).
- Shows live listings dashboard where employers can view received applications with complete profiles, shortlist/reject applicants, or delete listings.

---

## 📂 Project Structure

```text
CareerBridge/
│
├── index.html               # Main Single Page Application (SPA) markup
├── styles.css               # Premium CSS design tokens, layouts, and print overrides
├── app.js                   # State persistence, interview simulations, and routing logic
├── candidate-profile.html   # Dedicated candidate profile detail page
├── job-details.html         # Dedicated job detail page
└── README.md                # Project documentation
```

---

## 🛠️ How to Run the Project

### Method 1: Open Directly
Double-click `index.html` to run in any modern browser.

### Method 2: Use Python Local Server
To run a local web server for resource caching and clean path testing, execute:

```bash
python -m http.server 8000
```
Then visit: **`http://localhost:8000`** in your browser.

---

## 📝 Technologies Used
- **Frontend**: HTML5, Vanilla CSS3 (Custom Variables, Flexbox, CSS Gradients)
- **Programming & Logic**: JavaScript (ES6+), `localStorage` persistence layer
- **Libraries & Fonts**: Font Awesome Icons, Google Fonts (Plus Jakarta Sans & Outfit)

---

## 👨‍💻 Author
**Reezma Hanan**  
*Student Project – CareerBridge Job Portal System*
