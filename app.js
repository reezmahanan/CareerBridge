// ===== STATE MANAGEMENT =====
let currentUser = null;
let currentPage = 'home';
let jobs = [];
let companies = [];
let skills = [];

// ===== SAMPLE DATA =====
const sampleJobs = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        company: "Google",
        companyLogo: "G",
        location: "Mountain View, CA",
        type: "Full-time",
        level: "Senior level",
        salary: "$150k - $200k",
        description: "We're looking for an experienced Frontend Developer to build next-generation web applications...",
        posted: "2 days ago",
        remote: "Hybrid",
        skills: ["React", "TypeScript", "Next.js", "Tailwind"],
        featured: true
    },
    {
        id: 2,
        title: "Product Manager",
        company: "Microsoft",
        companyLogo: "MS",
        location: "Redmond, WA",
        type: "Full-time",
        level: "Lead",
        salary: "$160k - $210k",
        description: "Lead product strategy for Azure cloud services...",
        posted: "1 day ago",
        remote: "Hybrid",
        skills: ["Product Strategy", "Agile", "Azure", "User Research"],
        featured: true
    },
    {
        id: 3,
        title: "DevOps Engineer",
        company: "Amazon",
        companyLogo: "A",
        location: "Seattle, WA",
        type: "Full-time",
        level: "Mid level",
        salary: "$130k - $170k",
        description: "Build and maintain AWS infrastructure at scale...",
        posted: "3 days ago",
        remote: "On-site",
        skills: ["AWS", "Kubernetes", "Terraform", "Python"],
        featured: true
    },
    {
        id: 4,
        title: "UX Designer",
        company: "Apple",
        companyLogo: "A",
        location: "Cupertino, CA",
        type: "Full-time",
        level: "Senior level",
        salary: "$140k - $190k",
        description: "Design beautiful and intuitive experiences for millions of users...",
        posted: "5 days ago",
        remote: "On-site",
        skills: ["Figma", "UI/UX", "Prototyping", "User Testing"],
        featured: true
    }
];

const sampleCompanies = [
    {
        id: 1,
        name: "Google",
        logo: "G",
        industry: "Technology",
        location: "Mountain View, CA",
        employees: "100k+",
        openJobs: 245,
        featured: true
    },
    {
        id: 2,
        name: "Microsoft",
        logo: "MS",
        industry: "Technology",
        location: "Redmond, WA",
        employees: "180k+",
        openJobs: 189,
        featured: true
    },
    {
        id: 3,
        name: "Amazon",
        logo: "A",
        industry: "E-commerce",
        location: "Seattle, WA",
        employees: "1.5M+",
        openJobs: 567,
        featured: true
    },
    {
        id: 4,
        name: "Apple",
        logo: "A",
        industry: "Technology",
        location: "Cupertino, CA",
        employees: "150k+",
        openJobs: 178,
        featured: true
    },
    {
        id: 5,
        name: "Meta",
        logo: "M",
        industry: "Social Media",
        location: "Menlo Park, CA",
        employees: "80k+",
        openJobs: 134,
        featured: true
    },
    {
        id: 6,
        name: "Netflix",
        logo: "N",
        industry: "Entertainment",
        location: "Los Gatos, CA",
        employees: "12k+",
        openJobs: 45,
        featured: true
    }
];

const careerAdvice = [
    {
        id: 1,
        title: "How to Ace Your Technical Interview",
        category: "interview",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
        excerpt: "Master the art of technical interviews with these proven strategies...",
        readTime: "8 min read",
        author: "Jordan Lee",
        fullContent: `
            <p>Technical interviews can be daunting, but with the right preparation you can walk in with confidence. Here's what top candidates do differently.</p>
            <h4>1. Master Data Structures & Algorithms</h4>
            <p>Practice common patterns daily — arrays, linked lists, trees, graphs, and dynamic programming. Aim for at least two problems per day on LeetCode or HackerRank in the month before your interview.</p>
            <h4>2. Think Out Loud</h4>
            <p>Interviewers evaluate your problem-solving approach, not just the final answer. Narrate your thinking as you work through the problem — this shows communication skills and lets interviewers guide you if you go off track.</p>
            <h4>3. Ask Clarifying Questions</h4>
            <p>Before writing a single line of code, verify your understanding of the problem. Ask about edge cases, expected input sizes, and constraints. This signals strong engineering judgment.</p>
            <h4>4. Practice on a Whiteboard or Paper</h4>
            <p>Get comfortable writing code without an IDE. Make sure your solution is readable and your variable names are meaningful — interviewers read your code, not just run it.</p>
            <h4>5. Review System Design Fundamentals</h4>
            <p>For mid-to-senior roles, expect system design questions. Study load balancing, caching strategies, database sharding, and how to design for scale and fault tolerance.</p>
            <h4>6. Prepare Your Behavioral Stories</h4>
            <p>Use the STAR method (Situation, Task, Action, Result) to craft concise stories about past challenges — especially around conflict resolution, leadership, and failure.</p>
        `
    },
    {
        id: 2,
        title: "Building a Professional Network That Works",
        category: "networking",
        image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&q=80&auto=format&fit=crop",
        excerpt: "Learn how to network effectively and build meaningful professional relationships...",
        readTime: "6 min read",
        author: "Sarah Chen",
        fullContent: `
            <p>Networking is not about collecting contacts — it's about building genuine, mutually beneficial relationships. Here's how to do it right.</p>
            <h4>1. Start With Who You Know</h4>
            <p>Reconnect with former colleagues, classmates, and mentors. These warm connections are your strongest starting point and often lead to the best opportunities.</p>
            <h4>2. Be Genuinely Helpful First</h4>
            <p>The best networkers give before they ask. Share a useful article, make an introduction, or offer feedback freely. People remember those who add value.</p>
            <h4>3. Attend Industry Events & Meetups</h4>
            <p>Conferences, local meetups, and virtual webinars put you in proximity with like-minded professionals. Come prepared with a clear, authentic description of what you do and what you're looking for.</p>
            <h4>4. Optimize Your LinkedIn Presence</h4>
            <p>Post thoughtful content, engage with others' posts, and personalize every connection request with a brief note explaining why you want to connect.</p>
            <h4>5. Conduct Informational Interviews</h4>
            <p>Reach out to people in roles or companies that interest you and ask for a 20-minute chat. Most professionals are happy to share their experience — and these conversations often lead directly to opportunities.</p>
            <h4>6. Follow Up Consistently</h4>
            <p>A network you don't nurture fades quickly. A brief check-in every few months — sharing an article they'd find interesting, congratulating them on a milestone — keeps relationships alive.</p>
        `
    },
    {
        id: 3,
        title: "Essential Skills for 2026",
        category: "skills",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80&auto=format&fit=crop",
        excerpt: "Discover the most in-demand skills that employers are looking for...",
        readTime: "10 min read",
        author: "Marcus Rivera",
        fullContent: `
            <p>The job market shifts faster than ever. These are the skills employers are actively seeking in 2026 — and how to build them.</p>
            <h4>1. AI & Generative Tool Literacy</h4>
            <p>You don't need to be a data scientist, but understanding how to prompt AI tools effectively, automate repetitive tasks, and evaluate AI-generated output is now a baseline expectation in most knowledge-work roles.</p>
            <h4>2. Data Analysis & Visualization</h4>
            <p>The ability to interpret data and communicate insights clearly is valued across every department. Learn Excel/Sheets deeply, add SQL basics, and explore tools like Tableau or Power BI.</p>
            <h4>3. Cloud Platform Fundamentals</h4>
            <p>Familiarity with AWS, Azure, or Google Cloud — even at a non-technical level — is increasingly required for both technical and operational roles. Introductory certifications signal genuine commitment.</p>
            <h4>4. Emotional Intelligence & Collaboration</h4>
            <p>As automation handles routine tasks, the skills that remain uniquely human — empathy, conflict resolution, cross-cultural communication, and mentoring — become ever more valuable.</p>
            <h4>5. Cybersecurity Awareness</h4>
            <p>Every employee is now a security stakeholder. Understanding phishing, safe data handling, and organizational security policies is a minimum requirement in most industries.</p>
            <h4>6. Adaptability & Continuous Learning</h4>
            <p>The half-life of specific technical skills is shrinking. Employers value candidates who demonstrate a habit of learning — through courses, side projects, or open-source contributions — over those who simply list static credentials.</p>
        `
    }
];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Load sample data
    jobs = [...sampleJobs];
    companies = [...sampleCompanies];
    
    // Initialize UI
    renderFeaturedJobs();
    renderCompanies();
    renderCareerAdvice();
    renderAllCompanies();
    
    // Setup event listeners
    setupEventListeners();
    
    // Handle initial route
    handleRouting();
    
    // Check for logged in user
    checkAuthState();
    
    // Update stats
    updateStats();
});

// ===== ROUTING =====
function handleRouting() {
    const hash = window.location.hash || '#home';
    let pageId = hash.substring(1);
    
    // Handle query params
    if (pageId.includes('?')) {
        pageId = pageId.split('?')[0];
    }
    
    navigateToPage(pageId + '-page');
}

function navigateToPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageId;
        
        // Update URL hash without triggering navigation
        const hash = pageId.replace('-page', '');
        if (window.location.hash !== '#' + hash) {
            history.pushState(null, null, '#' + hash);
        }
        
        // Load page-specific data
        if (pageId === 'browse-jobs-page') {
            renderJobsList();
        } else if (pageId === 'companies-page') {
            renderAllCompanies();
        } else if (pageId === 'career-advice-page') {
            renderCareerAdvice();
        } else if (pageId === 'resume-tips-page') {
            showResumeTip('basics');
        } else if (pageId === 'profile-page') {
            renderProfilePage();
        } else if (pageId === 'saved-jobs-page') {
            renderSavedJobs();
        } else if (pageId === 'settings-page') {
            renderSettings();
        }
        
        // Update active nav link
        updateActiveNavLink(pageId);
        
        // Close mobile menu
        document.getElementById('navMenu')?.classList.remove('active');
    } else {
        // Fallback to home
        document.getElementById('home-page').classList.add('active');
    }
}

function updateActiveNavLink(pageId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const pageName = pageId.replace('-page', '');
    const activeLink = document.querySelector(`.nav-link[href="#${pageName}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// ===== AUTHENTICATION =====
function checkAuthState() {
    const savedUser = localStorage.getItem('careerbridge_user');
    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
            updateUIForAuth();
        } catch (e) {
            console.error('Failed to parse user data');
        }
    }
}

function login(email, role) {
    // Simulate login
    currentUser = {
        id: Date.now(),
        email: email,
        role: role,
        name: role === 'employer' ? 'Google' : 'Alex Morgan',
        avatar: `https://ui-avatars.com/api/?name=${role === 'employer' ? 'Google' : 'Alex+Morgan'}&background=4361ee&color=fff`
    };
    
    localStorage.setItem('careerbridge_user', JSON.stringify(currentUser));
    updateUIForAuth();
    
    showToast(`Welcome back, ${currentUser.name}!`, 'success');
    
    // Redirect based on role
    if (role === 'employer') {
        navigateToPage('dashboard-page');
    } else if (role === 'admin') {
        navigateToPage('dashboard-page');
    } else {
        navigateToPage('browse-jobs-page');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('careerbridge_user');
    updateUIForAuth();
    showToast('Logged out successfully', 'success');
    navigateToPage('home-page');
}

function updateUIForAuth() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const userProfile = document.getElementById('userProfile');
    const userName = document.getElementById('userName');
    const userAvatar = document.querySelector('.user-profile img');
    const dashboardName = document.getElementById('dashboardUserName');
    
    if (currentUser) {
        // Show user profile
        if (loginBtn) loginBtn.style.display = 'none';
        if (registerBtn) registerBtn.style.display = 'none';
        if (userProfile) userProfile.style.display = 'flex';
        if (userName) userName.textContent = currentUser.name;
        if (userAvatar) userAvatar.src = currentUser.avatar || `https://ui-avatars.com/api/?name=${currentUser.name}&background=4361ee&color=fff`;
        if (dashboardName) dashboardName.textContent = currentUser.name.split(' ')[0];
        
        // Set role class on body
        document.body.classList.add(`role-${currentUser.role}`);
        
        // Update dashboard based on role
        updateDashboard();
    } else {
        // Show login/register
        if (loginBtn) loginBtn.style.display = 'block';
        if (registerBtn) registerBtn.style.display = 'block';
        if (userProfile) userProfile.style.display = 'none';
        
        // Remove role classes
        document.body.classList.remove('role-employer', 'role-jobseeker', 'role-admin');
    }
}

function updateDashboard() {
    if (!currentUser) return;
    
    const jobseekerDashboard = document.getElementById('jobseekerDashboard');
    const employerDashboard = document.getElementById('employerDashboard');
    
    if (currentUser.role === 'jobseeker') {
        if (jobseekerDashboard) jobseekerDashboard.style.display = 'block';
        if (employerDashboard) employerDashboard.style.display = 'none';
    } else if (currentUser.role === 'employer') {
        if (jobseekerDashboard) jobseekerDashboard.style.display = 'none';
        if (employerDashboard) employerDashboard.style.display = 'block';
    }
}

// ===== PROFILE RENDERING =====
function renderProfilePage() {
    const nameEl = document.getElementById('profileName');
    const emailEl = document.getElementById('profileEmail');
    const roleEl = document.getElementById('profileRole');
    const avatarEl = document.getElementById('profileAvatar');
    const bioEl = document.getElementById('profileBio');
    const skillsEl = document.getElementById('profileSkills');

    if (!currentUser) {
        // Not logged in: redirect to login
        navigateToPage('login-page');
        showToast('Please sign in to view your profile', 'error');
        return;
    }

    if (nameEl) nameEl.textContent = currentUser.name || (currentUser.email || '').split('@')[0];
    if (emailEl) emailEl.textContent = currentUser.email || '';
    if (roleEl) roleEl.textContent = (currentUser.role === 'employer') ? 'Employer' : 'Job Seeker';
    if (avatarEl) avatarEl.src = currentUser.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent((currentUser.name || '').replace(/\s+/g,'+'))}&background=4361ee&color=fff`;
    if (bioEl) bioEl.textContent = currentUser.bio || 'Tell us about yourself.';

    // Render skills if present
    if (skillsEl) {
        skillsEl.innerHTML = '';
        const userSkills = currentUser.skills || ['Communication', 'Teamwork'];
        userSkills.forEach(s => {
            const span = document.createElement('span');
            span.className = 'skill-tag';
            span.textContent = s;
            skillsEl.appendChild(span);
        });
    }
}

// ===== SAVED JOBS =====
function renderSavedJobs() {
    if (!currentUser) {
        navigateToPage('login-page');
        showToast('Please sign in to view saved jobs', 'error');
        return;
    }

    const listEl = document.getElementById('savedJobsList');
    if (!listEl) return;

    // Use user's saved jobs; if none, seed with sample items and persist so View works
    let saved = Array.isArray(currentUser.savedJobs) ? currentUser.savedJobs.slice() : [];
    if (!saved.length) {
        saved = [
            { id: 101, title: 'Frontend Engineer', company: 'StartupX', location: 'Remote', description: 'Remote frontend role.' },
            { id: 102, title: 'Product Designer', company: 'Designly', location: 'New York, NY', description: 'Design-focused role.' }
        ];
        currentUser.savedJobs = saved.slice();
        localStorage.setItem('careerbridge_user', JSON.stringify(currentUser));
    }

    listEl.innerHTML = saved.map(job => `
        <div class="job-item">
            <div>
                <h4>${job.title}</h4>
                <p class="muted">${job.company} • ${job.location}</p>
            </div>
            <div class="job-actions">
                <a class="btn btn-outline" href="job-details.html?id=${job.id}">View</a>
                <button class="btn" onclick="saveJob(${job.id})">Remove</button>
            </div>
        </div>
    `).join('');
}

// Render a full page view for a job (used by job-details.html)
function renderJobDetailsPage(jobId) {
    if (!jobId) return;
    jobId = parseInt(jobId, 10);

    let job = jobs.find(j => j.id === jobId);
    if (!job) {
        const saved = currentUser?.savedJobs || [];
        job = saved.find(s => s.id === jobId);
        if (!job) {
            const container = document.getElementById('jobDetailsPageContent');
            if (container) container.innerHTML = `<div class="page-header"><h2>Job not found</h2><p>Unable to locate this job.</p></div>`;
            return;
        }
        job = Object.assign({ title: 'Job', company: '', companyLogo: '', location: '', type: '', level: '', salary: '', description: 'No description available.', posted: '', skills: [], remote: '' }, job);
    }

    const container = document.getElementById('jobDetailsPageContent');
    if (!container) return;

    container.innerHTML = `
        <div style="max-width:1100px;margin:40px auto;padding:24px;background:#fff;border-radius:12px;">
            <div style="display:flex;gap:24px;align-items:center;margin-bottom:24px;">
                <div style="width:84px;height:84px;background:var(--primary-light);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:700;color:var(--primary);">${job.companyLogo}</div>
                <div>
                    <h1 style="margin:0 0 6px 0;">${job.title}</h1>
                    <div style="color:var(--gray);">${job.company} • ${job.location}</div>
                </div>
            </div>

            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:20px;">
                <div><div style="color:var(--gray);font-size:0.85rem;margin-bottom:6px;">Job Type</div><div style="font-weight:600;">${job.type}</div></div>
                <div><div style="color:var(--gray);font-size:0.85rem;margin-bottom:6px;">Experience</div><div style="font-weight:600;">${job.level}</div></div>
                <div><div style="color:var(--gray);font-size:0.85rem;margin-bottom:6px;">Salary</div><div style="font-weight:600;color:var(--success);">${job.salary}</div></div>
                <div><div style="color:var(--gray);font-size:0.85rem;margin-bottom:6px;">Remote</div><div style="font-weight:600;">${job.remote}</div></div>
            </div>

            <div style="margin-bottom:20px;">
                <h3>Job Description</h3>
                <p style="color:var(--dark);line-height:1.6;">${job.description}</p>
            </div>

            <div style="margin-bottom:20px;">
                <h3>Required Skills</h3>
                <div style="display:flex;flex-wrap:wrap;gap:10px;">${(job.skills || []).map(s => `<span style="background:var(--primary-light);color:var(--primary);padding:8px 16px;border-radius:20px;font-weight:600;">${s}</span>`).join('')}</div>
            </div>

            <div style="display:flex;gap:12px;">
                <button class="btn btn-primary" onclick="applyForJob(${job.id})">Apply Now</button>
                <button class="btn btn-outline" onclick="saveJob(${job.id})">Save</button>
                <a href="index.html#saved-jobs" class="btn" style="margin-left:auto;">Back to Saved Jobs</a>
            </div>
        </div>
    `;
}

// ===== SETTINGS =====
function renderSettings() {
    if (!currentUser) {
        navigateToPage('login-page');
        showToast('Please sign in to edit settings', 'error');
        return;
    }

    const nameInput = document.getElementById('settingsName');
    const emailInput = document.getElementById('settingsEmail');
    const notifSelect = document.getElementById('settingsNotifications');

    if (nameInput) nameInput.value = currentUser.name || '';
    if (emailInput) emailInput.value = currentUser.email || '';
    if (notifSelect) notifSelect.value = currentUser.notifications || 'all';
}

function saveSettings(e) {
    e && e.preventDefault();
    if (!currentUser) return;

    const name = document.getElementById('settingsName')?.value || currentUser.name;
    const email = document.getElementById('settingsEmail')?.value || currentUser.email;
    const notifications = document.getElementById('settingsNotifications')?.value || 'all';

    currentUser.name = name;
    currentUser.email = email;
    currentUser.notifications = notifications;

    localStorage.setItem('careerbridge_user', JSON.stringify(currentUser));
    updateUIForAuth();
    showToast('Settings saved', 'success');
    renderProfilePage();
}

// ===== JOBS FUNCTIONS =====
function renderFeaturedJobs() {
    const container = document.getElementById('featuredJobs');
    if (!container) return;
    
    const featuredJobs = jobs.filter(job => job.featured).slice(0, 4);
    
    container.innerHTML = featuredJobs.map(job => `
        <div class="job-card" onclick="viewJobDetails(${job.id})">
            <div class="job-card-header">
                <div class="company-logo">${job.companyLogo}</div>
                <div class="job-info">
                    <h3>${job.title}</h3>
                    <div class="company-name">
                        <i class="fas fa-building"></i> ${job.company}
                    </div>
                </div>
            </div>
            <div class="job-details">
                <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                <span><i class="fas fa-briefcase"></i> ${job.type}</span>
                <span><i class="fas fa-clock"></i> ${job.posted}</span>
            </div>
            <div class="job-tags">
                ${job.skills.slice(0, 3).map(skill => `<span class="job-tag">${skill}</span>`).join('')}
                ${job.skills.length > 3 ? `<span class="job-tag">+${job.skills.length - 3}</span>` : ''}
            </div>
            <div class="job-card-footer">
                <span class="salary">${job.salary}</span>
                <button class="apply-btn" onclick="event.stopPropagation(); applyForJob(${job.id})">
                    Apply Now <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function renderJobsList() {
    const container = document.getElementById('jobsList');
    if (!container) return;
    
    // Get filter values
    const keywords = document.getElementById('jobKeywordFilter')?.value.toLowerCase() || '';
    const location = document.getElementById('jobLocationFilter')?.value.toLowerCase() || '';
    const jobTypeFilters = Array.from(document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked')).map(cb => cb.value);
    const salaryFilter = document.getElementById('salaryFilter')?.value || '';
    const dateFilter = document.getElementById('dateFilter')?.value || 'any';
    const sortBy = document.getElementById('jobSort')?.value || 'newest';
    
    let filteredJobs = [...jobs];
    
    // Apply keyword filter
    if (keywords) {
        filteredJobs = filteredJobs.filter(job => 
            job.title.toLowerCase().includes(keywords) ||
            job.company.toLowerCase().includes(keywords) ||
            job.skills.some(skill => skill.toLowerCase().includes(keywords))
        );
    }
    
    // Apply location filter
    if (location) {
        filteredJobs = filteredJobs.filter(job => 
            job.location.toLowerCase().includes(location) ||
            (job.remote && location === 'remote')
        );
    }
    
    // Apply job type filter
    if (jobTypeFilters.length > 0) {
        filteredJobs = filteredJobs.filter(job => 
            jobTypeFilters.includes(job.type.toLowerCase()) ||
            (jobTypeFilters.includes('remote') && job.remote === 'Fully Remote')
        );
    }
    
    // Apply salary filter
    if (salaryFilter) {
        filteredJobs = filteredJobs.filter(job => {
            const salaryNum = parseInt(job.salary.replace(/[^0-9]/g, ''));
            if (salaryFilter === '0-50000') return salaryNum < 50000;
            if (salaryFilter === '50000-80000') return salaryNum >= 50000 && salaryNum < 80000;
            if (salaryFilter === '80000-100000') return salaryNum >= 80000 && salaryNum < 100000;
            if (salaryFilter === '100000-150000') return salaryNum >= 100000 && salaryNum < 150000;
            if (salaryFilter === '150000+') return salaryNum >= 150000;
            return true;
        });
    }
    
    // Apply sorting
    if (sortBy === 'newest') {
        filteredJobs.sort((a, b) => (a.id > b.id ? -1 : 1));
    } else if (sortBy === 'salary-high') {
        filteredJobs.sort((a, b) => {
            const aSalary = parseInt(a.salary.replace(/[^0-9]/g, ''));
            const bSalary = parseInt(b.salary.replace(/[^0-9]/g, ''));
            return bSalary - aSalary;
        });
    } else if (sortBy === 'salary-low') {
        filteredJobs.sort((a, b) => {
            const aSalary = parseInt(a.salary.replace(/[^0-9]/g, ''));
            const bSalary = parseInt(b.salary.replace(/[^0-9]/g, ''));
            return aSalary - bSalary;
        });
    }
    
    // Update jobs count
    const jobsCountEl = document.getElementById('jobsCount');
    if (jobsCountEl) jobsCountEl.textContent = filteredJobs.length;
    
    if (filteredJobs.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--gray); margin-bottom: 20px;"></i>
                <h3>No jobs found</h3>
                <p style="color: var(--gray);">Try adjusting your filters</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredJobs.map(job => `
        <div class="job-item" onclick="viewJobDetails(${job.id})">
            <div style="display: flex; gap: 20px;">
                <div class="company-logo" style="width: 60px; height: 60px;">${job.companyLogo}</div>
                <div style="flex: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                        <div>
                            <h3 style="margin-bottom: 6px; font-size: 1.2rem;">${job.title}</h3>
                            <div style="display: flex; gap: 20px; color: var(--gray); font-size: 0.95rem;">
                                <span><i class="fas fa-building"></i> ${job.company}</span>
                                <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                                <span><i class="fas fa-briefcase"></i> ${job.type}</span>
                            </div>
                        </div>
                        <span style="font-weight: 700; color: var(--success); font-size: 1.1rem;">${job.salary}</span>
                    </div>
                    <div class="job-tags" style="margin-bottom: 0;">
                        ${job.skills.map(skill => `<span class="job-tag">${skill}</span>`).join('')}
                    </div>
                    <div style="margin-top: 12px; color: var(--gray); font-size: 0.9rem;">
                        <i class="fas fa-clock"></i> ${job.posted}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function viewJobDetails(jobId) {
    let job = jobs.find(j => j.id === jobId);
    if (!job) {
        // Try to find in user's saved jobs
        const saved = currentUser?.savedJobs || [];
        job = saved.find(s => s.id === jobId);
        if (!job) return;
        // If saved entry is minimal, ensure fields exist
        job = Object.assign({ title: 'Job', company: '', companyLogo: '', location: '', type: '', level: '', salary: '', description: 'No description available.', posted: '', skills: [], remote: '' }, job);
    }
    
    const modal = document.getElementById('jobModal');
    const content = document.getElementById('jobDetailsContent');
    
    content.innerHTML = `
        <div style="padding: 40px;">
            <div style="display: flex; align-items: center; gap: 24px; margin-bottom: 32px;">
                <div style="width: 80px; height: 80px; background: var(--primary-light); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 700; color: var(--primary);">
                    ${job.companyLogo}
                </div>
                <div>
                    <h2 style="margin-bottom: 8px; font-size: 1.8rem;">${job.title}</h2>
                    <div style="display: flex; gap: 24px; color: var(--gray);">
                        <span><i class="fas fa-building"></i> ${job.company}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                    </div>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; padding: 24px; background: var(--gray-light); border-radius: var(--radius); margin-bottom: 32px;">
                <div>
                    <div style="color: var(--gray); font-size: 0.85rem; margin-bottom: 4px;">Job Type</div>
                    <div style="font-weight: 600;">${job.type}</div>
                </div>
                <div>
                    <div style="color: var(--gray); font-size: 0.85rem; margin-bottom: 4px;">Experience</div>
                    <div style="font-weight: 600;">${job.level}</div>
                </div>
                <div>
                    <div style="color: var(--gray); font-size: 0.85rem; margin-bottom: 4px;">Salary</div>
                    <div style="font-weight: 600; color: var(--success);">${job.salary}</div>
                </div>
                <div>
                    <div style="color: var(--gray); font-size: 0.85rem; margin-bottom: 4px;">Remote Policy</div>
                    <div style="font-weight: 600;">${job.remote}</div>
                </div>
            </div>
            
            <div style="margin-bottom: 32px;">
                <h3 style="margin-bottom: 16px;">Job Description</h3>
                <p style="line-height: 1.8; color: var(--dark);">${job.description}</p>
            </div>
            
            <div style="margin-bottom: 32px;">
                <h3 style="margin-bottom: 16px;">Required Skills</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                    ${job.skills.map(skill => `<span style="background: var(--primary-light); color: var(--primary); padding: 8px 20px; border-radius: 30px; font-weight: 500;">${skill}</span>`).join('')}
                </div>
            </div>
            
            <div style="display: flex; gap: 16px;">
                <button class="btn btn-primary" style="flex: 1; padding: 16px;" onclick="applyForJob(${job.id})">
                    <i class="fas fa-paper-plane"></i> Apply Now
                </button>
                <button class="btn btn-outline" style="padding: 16px 24px;" onclick="saveJob(${job.id})">
                    <i class="fas fa-bookmark"></i> Save
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

function applyForJob(jobId) {
    if (!currentUser) {
        showToast('Please login to apply for jobs', 'error');
        setTimeout(() => {
            navigateToPage('login-page');
        }, 1500);
        return;
    }
    
    const modal = document.getElementById('jobModal');
    modal.classList.remove('show');
    
    showToast('Application submitted successfully!', 'success');
}

function saveJob(jobId) {
    if (!currentUser) {
        showToast('Please login to save jobs', 'error');
        return;
    }

    // Ensure savedJobs array
    if (!Array.isArray(currentUser.savedJobs)) currentUser.savedJobs = [];

    const idx = currentUser.savedJobs.findIndex(j => j.id === jobId);
    if (idx >= 0) {
        // remove
        currentUser.savedJobs.splice(idx, 1);
        localStorage.setItem('careerbridge_user', JSON.stringify(currentUser));
        showToast('Removed from saved jobs', 'success');
        // If currently viewing saved jobs page, re-render
        if (currentPage === 'saved-jobs-page' || document.getElementById('saved-jobs-page')?.classList.contains('active')) {
            renderSavedJobs();
        }
        return;
    }

    // Try to find full job data
    const job = jobs.find(j => j.id === jobId);
    const toSave = job ? { id: job.id, title: job.title, company: job.company, location: job.location } : { id: jobId, title: 'Saved Job', company: '', location: '' };
    currentUser.savedJobs.push(toSave);
    localStorage.setItem('careerbridge_user', JSON.stringify(currentUser));
    showToast('Job saved to your profile', 'success');
    if (currentPage === 'saved-jobs-page' || document.getElementById('saved-jobs-page')?.classList.contains('active')) {
        renderSavedJobs();
    }
}

// ===== COMPANIES FUNCTIONS =====
function renderCompanies() {
    const container = document.getElementById('featuredCompanies');
    if (!container) return;
    
    const featuredCompanies = companies.filter(company => company.featured).slice(0, 4);
    
    container.innerHTML = featuredCompanies.map(company => `
        <div class="company-card" onclick="viewCompanyProfile(${company.id})">
            <div class="company-card-logo">${company.logo}</div>
            <h3>${company.name}</h3>
            <p><i class="fas fa-industry"></i> ${company.industry}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${company.location}</p>
            <span class="company-jobs">${company.openJobs} open jobs</span>
        </div>
    `).join('');
}

function renderAllCompanies() {
    const container = document.getElementById('allCompanies');
    if (!container) return;
    
    const searchTerm = document.getElementById('companySearch')?.value.toLowerCase() || '';
    
    let filteredCompanies = [...companies];
    
    if (searchTerm) {
        filteredCompanies = filteredCompanies.filter(company => 
            company.name.toLowerCase().includes(searchTerm) ||
            company.industry.toLowerCase().includes(searchTerm) ||
            company.location.toLowerCase().includes(searchTerm)
        );
    }
    
    container.innerHTML = filteredCompanies.map(company => `
        <div class="company-card" onclick="viewCompanyProfile(${company.id})">
            <div class="company-card-logo">${company.logo}</div>
            <h3>${company.name}</h3>
            <p><i class="fas fa-industry"></i> ${company.industry}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${company.location}</p>
            <p><i class="fas fa-users"></i> ${company.employees} employees</p>
            <span class="company-jobs">${company.openJobs} open jobs</span>
        </div>
    `).join('');
}

function viewCompanyProfile(companyId) {
    const company = companies.find(c => c.id === companyId);
    if (!company) return;
    
    const modal = document.getElementById('companyModal');
    const content = document.getElementById('companyDetailsContent');
    
    content.innerHTML = `
        <div style="padding: 40px;">
            <div style="display: flex; align-items: center; gap: 24px; margin-bottom: 32px;">
                <div style="width: 100px; height: 100px; background: var(--primary-light); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: 700; color: var(--primary);">
                    ${company.logo}
                </div>
                <div>
                    <h2 style="margin-bottom: 8px; font-size: 2rem;">${company.name}</h2>
                    <p style="color: var(--gray); margin-bottom: 8px;"><i class="fas fa-industry"></i> ${company.industry}</p>
                    <p style="color: var(--gray);"><i class="fas fa-map-marker-alt"></i> ${company.location}</p>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 32px;">
                <div style="background: var(--gray-light); padding: 20px; border-radius: var(--radius); text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary); margin-bottom: 8px;">${company.employees}</div>
                    <div style="color: var(--gray);">Employees</div>
                </div>
                <div style="background: var(--gray-light); padding: 20px; border-radius: var(--radius); text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary); margin-bottom: 8px;">${company.openJobs}</div>
                    <div style="color: var(--gray);">Open Positions</div>
                </div>
                <div style="background: var(--gray-light); padding: 20px; border-radius: var(--radius); text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary); margin-bottom: 8px;">4.8</div>
                    <div style="color: var(--gray);">Company Rating</div>
                </div>
            </div>
            
            <div style="margin-bottom: 32px;">
                <h3 style="margin-bottom: 16px;">About ${company.name}</h3>
                <p style="line-height: 1.8; color: var(--dark);">
                    ${company.name} is a leading company in the ${company.industry} industry. 
                    We're committed to innovation, diversity, and creating amazing products that impact millions of users worldwide.
                </p>
            </div>
            
            <div style="display: flex; gap: 16px;">
                <button class="btn btn-primary" style="flex: 1;" onclick="navigateToPage('browse-jobs-page')">
                    <i class="fas fa-search"></i> View Open Positions
                </button>
                <button class="btn btn-outline" onclick="followCompany(${company.id})">
                    <i class="fas fa-bell"></i> Follow
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

function followCompany(companyId) {
    if (!currentUser) {
        showToast('Please login to follow companies', 'error');
        return;
    }
    
    showToast('Company followed successfully!', 'success');
}

// ===== CAREER ADVICE FUNCTIONS =====
function renderCareerAdvice() {
    const container = document.getElementById('careerAdvice');
    if (!container) return;
    
    container.innerHTML = careerAdvice.map(advice => `
        <div class="advice-card" style="background: var(--white); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow); display: flex; flex-direction: column;">
            <div style="height: 200px; overflow: hidden; position: relative;">
                <img 
                    src="${advice.image}" 
                    alt="${advice.title}"
                    style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease;"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                />
                <div style="display:none; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); height: 100%; align-items: center; justify-content: center; position: absolute; inset: 0;">
                    <i class="fas fa-lightbulb" style="font-size: 3rem; color: rgba(255,255,255,0.4);"></i>
                </div>
            </div>
            <div style="padding: 24px; flex: 1; display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
                    <span style="background: var(--primary-light); color: var(--primary); padding: 4px 12px; border-radius: 30px; font-size: 0.8rem; font-weight: 600;">
                        ${advice.category.charAt(0).toUpperCase() + advice.category.slice(1)}
                    </span>
                    <span style="color: var(--gray); font-size: 0.85rem;"><i class="fas fa-clock"></i> ${advice.readTime}</span>
                </div>
                <h3 style="margin-bottom: 12px; font-size: 1.15rem; line-height: 1.4;">${advice.title}</h3>
                <p style="color: var(--gray); margin-bottom: 20px; flex: 1; line-height: 1.6;">${advice.excerpt}</p>
                <a href="javascript:void(0)" onclick="openArticle(${advice.id})" class="read-more" style="color: var(--primary); font-weight: 600; display: flex; align-items: center; gap: 8px; text-decoration: none;">
                    Read Article <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');
}

function openArticle(id) {
    const advice = careerAdvice.find(a => a.id === id);
    if (!advice) return;

    const modal = document.getElementById('articleModal');
    const content = document.getElementById('articleContent');
    if (!modal || !content) return;

    content.innerHTML = `
        <div style="overflow: hidden; border-radius: var(--radius-lg) var(--radius-lg) 0 0;">
            <img src="${advice.image}" alt="${advice.title}"
                 style="width: 100%; height: 280px; object-fit: cover; display: block;"
                 onerror="this.style.background='linear-gradient(135deg,var(--primary),var(--primary-dark))'; this.style.height='200px';">
        </div>
        <div style="padding: 32px 40px 40px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 18px; flex-wrap: wrap;">
                <span style="background: var(--primary-light); color: var(--primary); padding: 4px 14px; border-radius: 30px; font-size: 0.85rem; font-weight: 600;">
                    ${advice.category.charAt(0).toUpperCase() + advice.category.slice(1)}
                </span>
                <span style="color: var(--gray); font-size: 0.9rem;"><i class="fas fa-clock"></i> ${advice.readTime}</span>
                <span style="color: var(--gray); font-size: 0.9rem; margin-left: auto;"><i class="fas fa-user"></i> ${advice.author}</span>
            </div>
            <h2 style="font-size: 1.7rem; margin-bottom: 24px; line-height: 1.3;">${advice.title}</h2>
            <div style="color: var(--dark); line-height: 1.8; font-size: 1rem;">
                ${advice.fullContent}
            </div>
        </div>
    `;

    content.querySelectorAll('h4').forEach(h => {
        h.style.cssText = 'margin: 24px 0 8px; font-size: 1.1rem; color: var(--dark);';
    });
    content.querySelectorAll('p').forEach(p => {
        p.style.cssText = 'margin-bottom: 14px; color: #555;';
    });

    modal.classList.add('show');
}

function filterAdvice(category) {
    showToast('Filtering by: ' + category, 'success');
}

// ===== RESUME TIPS FUNCTIONS =====
function showResumeTip(tip) {
    const content = document.getElementById('resumeTipContent');
    if (!content) return;
    
    // Update active state
    document.querySelectorAll('.resume-guide-card').forEach(card => {
        card.classList.remove('active');
    });
    
    const activeCard = Array.from(document.querySelectorAll('.resume-guide-card')).find(card => 
        card.innerHTML.includes(tip === 'basics' ? 'Resume Basics' : 
                              tip === 'ats' ? 'ATS Optimization' :
                              tip === 'experience' ? 'Experience Section' :
                              tip === 'skills' ? 'Skills Section' : 'Education')
    );
    
    if (activeCard) activeCard.classList.add('active');
    
    const tips = {
        basics: {
            title: "Resume Basics",
            content: `
                <h2 style="margin-bottom: 20px;">Resume Basics: The Foundation of Your Job Search</h2>
                <p style="margin-bottom: 20px;">Your resume is often the first impression you make on potential employers. Here's how to make it count:</p>
                
                <h3 style="margin: 30px 0 15px;">Key Elements</h3>
                <ul style="margin-bottom: 20px; padding-left: 20px;">
                    <li style="margin-bottom: 10px;"><strong>Length:</strong> 1-2 pages maximum</li>
                    <li style="margin-bottom: 10px;"><strong>Format:</strong> Clean, professional, and easy to scan</li>
                    <li style="margin-bottom: 10px;"><strong>Font:</strong> Use professional fonts like Arial, Calibri, or Helvetica</li>
                    <li style="margin-bottom: 10px;"><strong>File Format:</strong> PDF is preferred (unless specified otherwise)</li>
                </ul>
                
                <h3 style="margin: 30px 0 15px;">Essential Sections</h3>
                <ul style="margin-bottom: 20px;">
                    <li style="margin-bottom: 10px;"><strong>Contact Information:</strong> Name, phone, email, LinkedIn</li>
                    <li style="margin-bottom: 10px;"><strong>Professional Summary:</strong> 2-3 sentences highlighting your value</li>
                    <li style="margin-bottom: 10px;"><strong>Work Experience:</strong> Reverse chronological order</li>
                    <li style="margin-bottom: 10px;"><strong>Education:</strong> Degrees, institutions, graduation dates</li>
                    <li style="margin-bottom: 10px;"><strong>Skills:</strong> Relevant technical and soft skills</li>
                </ul>
            `
        },
        ats: {
            title: "ATS Optimization",
            content: `
                <h2 style="margin-bottom: 20px;">ATS Optimization: Beat the Bots</h2>
                <p style="margin-bottom: 20px;">Most companies use Applicant Tracking Systems (ATS) to filter resumes. Here's how to get past them:</p>
                
                <h3 style="margin: 30px 0 15px;">ATS-Friendly Formatting</h3>
                <ul style="margin-bottom: 20px;">
                    <li style="margin-bottom: 10px;">Use standard section headings (Experience, Education, Skills)</li>
                    <li style="margin-bottom: 10px;">Avoid headers, footers, tables, and columns</li>
                    <li style="margin-bottom: 10px;">Don't use graphics or charts</li>
                    <li style="margin-bottom: 10px;">Save as .docx or .pdf (check job posting)</li>
                </ul>
                
                <h3 style="margin: 30px 0 15px;">Keyword Optimization</h3>
                <ul style="margin-bottom: 20px;">
                    <li style="margin-bottom: 10px;">Include keywords from the job description</li>
                    <li style="margin-bottom: 10px;">Use both acronyms and full terms (e.g., "CRM" and "Customer Relationship Management")</li>
                    <li style="margin-bottom: 10px;">Focus on industry-specific terminology</li>
                </ul>
            `
        },
        experience: {
            title: "Experience Section",
            content: `
                <h2 style="margin-bottom: 20px;">Experience Section: Showcase Your Impact</h2>
                <p style="margin-bottom: 20px;">Don't just list duties—highlight achievements:</p>
                
                <h3 style="margin: 30px 0 15px;">Use the STAR Method</h3>
                <ul style="margin-bottom: 20px;">
                    <li style="margin-bottom: 10px;"><strong>Situation:</strong> Context of your work</li>
                    <li style="margin-bottom: 10px;"><strong>Task:</strong> Your responsibility</li>
                    <li style="margin-bottom: 10px;"><strong>Action:</strong> What you did</li>
                    <li style="margin-bottom: 10px;"><strong>Result:</strong> The outcome with metrics</li>
                </ul>
                
                <h3 style="margin: 30px 0 15px;">Example</h3>
                <div style="background: var(--gray-light); padding: 20px; border-radius: var(--radius); margin-bottom: 20px;">
                    <p><strong>Before:</strong> "Responsible for social media marketing"</p>
                    <p><strong>After:</strong> "Developed and executed social media strategy that increased engagement by 150% and grew followers from 10K to 50K in 6 months"</p>
                </div>
            `
        },
        skills: {
            title: "Skills Section",
            content: `
                <h2 style="margin-bottom: 20px;">Skills Section: Technical & Soft Skills</h2>
                
                <h3 style="margin: 30px 0 15px;">Technical Skills</h3>
                <ul style="margin-bottom: 20px;">
                    <li style="margin-bottom: 10px;">Group by category (Programming Languages, Tools, Platforms)</li>
                    <li style="margin-bottom: 10px;">Be honest about proficiency levels</li>
                    <li style="margin-bottom: 10px;">Include relevant certifications</li>
                </ul>
                
                <h3 style="margin: 30px 0 15px;">Soft Skills</h3>
                <ul style="margin-bottom: 20px;">
                    <li style="margin-bottom: 10px;">Back up with examples in experience section</li>
                    <li style="margin-bottom: 10px;">Focus on skills mentioned in job description</li>
                    <li style="margin-bottom: 10px;">Common in-demand skills: Leadership, Communication, Problem-solving</li>
                </ul>
            `
        },
        education: {
            title: "Education & Certifications",
            content: `
                <h2 style="margin-bottom: 20px;">Education & Certifications</h2>
                
                <h3 style="margin: 30px 0 15px;">Education Section</h3>
                <ul style="margin-bottom: 20px;">
                    <li style="margin-bottom: 10px;">Include degree, major, institution, graduation year</li>
                    <li style="margin-bottom: 10px;">GPA only if 3.5+ or required</li>
                    <li style="margin-bottom: 10px;">Relevant coursework for entry-level positions</li>
                </ul>
                
                <h3 style="margin: 30px 0 15px;">Certifications</h3>
                <ul style="margin-bottom: 20px;">
                    <li style="margin-bottom: 10px;">List active certifications with dates</li>
                    <li style="margin-bottom: 10px;">Include issuing organization</li>
                    <li style="margin-bottom: 10px;">Prioritize industry-recognized certifications</li>
                </ul>
                
                <h3 style="margin: 30px 0 15px;">Professional Development</h3>
                <ul style="margin-bottom: 20px;">
                    <li style="margin-bottom: 10px;">Workshops, bootcamps, continuing education</li>
                    <li style="margin-bottom: 10px;">Online courses (Coursera, Udemy, LinkedIn Learning)</li>
                    <li style="margin-bottom: 10px;">Professional association memberships</li>
                </ul>
            `
        }
    };
    
    content.innerHTML = tips[tip]?.content || tips.basics.content;
}

// ===== SALARY GUIDE FUNCTIONS =====
function showSalaryRole(role) {
    const salaryResults = document.getElementById('salaryResults');
    const salaryRoleDisplay = document.getElementById('salaryRoleDisplay');
    
    if (salaryResults && salaryRoleDisplay) {
        salaryResults.style.display = 'block';
        
        const roleNames = {
            technology: 'Technology',
            finance: 'Finance',
            marketing: 'Marketing',
            sales: 'Sales',
            hr: 'Human Resources',
            operations: 'Operations'
        };
        
        salaryRoleDisplay.textContent = roleNames[role] || role;
        
        // Set salary ranges based on role
        const salaries = {
            technology: { entry: '$75k', mid: '$105k', senior: '$145k', lead: '$175k' },
            finance: { entry: '$65k', mid: '$95k', senior: '$135k', lead: '$165k' },
            marketing: { entry: '$55k', mid: '$80k', senior: '$115k', lead: '$145k' },
            sales: { entry: '$50k', mid: '$85k', senior: '$125k', lead: '$160k' },
            hr: { entry: '$52k', mid: '$78k', senior: '$108k', lead: '$138k' },
            operations: { entry: '$58k', mid: '$82k', senior: '$112k', lead: '$142k' }
        };
        
        const roleSalaries = salaries[role] || salaries.technology;
        
        document.getElementById('entrySalary').textContent = roleSalaries.entry;
        document.getElementById('midSalary').textContent = roleSalaries.mid;
        document.getElementById('seniorSalary').textContent = roleSalaries.senior;
        document.getElementById('leadSalary').textContent = roleSalaries.lead;
    }
}

// ===== STATS =====
function updateStats() {
    const stats = {
        activeJobs: '12,345+',
        companies: '1,200+',
        jobseekers: '500K+',
        placements: '50K+'
    };
    
    document.getElementById('activeJobsCount').textContent = stats.activeJobs;
    document.getElementById('companiesCount').textContent = stats.companies;
    document.getElementById('jobseekersCount').textContent = stats.jobseekers;
    document.getElementById('placementsCount').textContent = stats.placements;
}

// ===== JOB POSTING =====
let currentSkills = [];

function handlePostJob(e) {
    e.preventDefault();
    
    if (!currentUser || currentUser.role !== 'employer') {
        showToast('Please login as employer to post jobs', 'error');
        navigateToPage('login-page');
        return;
    }
    
    const title = document.getElementById('jobTitle')?.value;
    const company = document.getElementById('jobCompany')?.value;
    const logo = document.getElementById('jobLogo')?.value || company.charAt(0);
    const location = document.getElementById('jobLocation')?.value;
    const type = document.getElementById('jobType')?.value;
    const level = document.getElementById('jobLevel')?.value;
    const description = document.getElementById('jobDescription')?.value;
    const salaryMin = document.getElementById('jobSalaryMin')?.value;
    const salaryMax = document.getElementById('jobSalaryMax')?.value;
    const remote = document.getElementById('jobRemote')?.value;
    
    if (!title || !company || !location || !type || !level || !description) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    
    const newJob = {
        id: jobs.length + 1,
        title: title,
        company: company,
        companyLogo: logo,
        location: location,
        type: type,
        level: level,
        salary: salaryMin && salaryMax ? `$${salaryMin} - $${salaryMax}` : 'Competitive',
        description: description,
        posted: 'Just now',
        remote: remote,
        skills: currentSkills.length > 0 ? currentSkills : ['Communication', 'Teamwork'],
        featured: false
    };
    
    jobs.unshift(newJob);
    
    // Reset form
    document.getElementById('postJobForm').reset();
    currentSkills = [];
    document.getElementById('skillsList').innerHTML = '';
    
    showToast('Job posted successfully!', 'success');
    
    // Redirect to jobs page
    setTimeout(() => {
        navigateToPage('browse-jobs-page');
    }, 1500);
}

// ===== ACCOUNT TYPE SWITCHING =====
function switchAccountType(type) {
    const seekerBtn = document.getElementById('registerSeekerBtn');
    const employerBtn = document.getElementById('registerEmployerBtn');
    const seekerFields = document.getElementById('seekerRegisterFields');
    const employerFields = document.getElementById('employerRegisterFields');
    
    if (type === 'seeker') {
        seekerBtn.classList.add('active');
        employerBtn.classList.remove('active');
        if (seekerFields) seekerFields.style.display = 'block';
        if (employerFields) employerFields.style.display = 'none';
    } else {
        employerBtn.classList.add('active');
        seekerBtn.classList.remove('active');
        if (employerFields) employerFields.style.display = 'block';
        if (seekerFields) seekerFields.style.display = 'none';
    }
}

// ===== SKILLS MANAGEMENT =====
function addSkill() {
    const input = document.getElementById('skillInput');
    if (!input) return;
    
    const skill = input.value.trim();
    if (skill && !currentSkills.includes(skill)) {
        currentSkills.push(skill);
        renderSkills();
        input.value = '';
    }
}

function removeSkill(skill) {
    currentSkills = currentSkills.filter(s => s !== skill);
    renderSkills();
}

function renderSkills() {
    const container = document.getElementById('skillsList');
    if (!container) return;
    
    container.innerHTML = currentSkills.map(skill => `
        <span class="skill-tag">
            ${skill}
            <i class="fas fa-times" onclick="removeSkill('${skill}')"></i>
        </span>
    `).join('');
}

// ===== PRICING TOGGLE =====
function togglePricing() {
    const toggle = document.getElementById('pricingToggle');
    const starterPrice = document.getElementById('starterPrice');
    const professionalPrice = document.getElementById('professionalPrice');
    const enterprisePrice = document.getElementById('enterprisePrice');
    
    if (toggle.checked) {
        // Yearly pricing (20% off)
        starterPrice.textContent = '79';
        professionalPrice.textContent = '199';
        enterprisePrice.textContent = '479';
    } else {
        // Monthly pricing
        starterPrice.textContent = '99';
        professionalPrice.textContent = '249';
        enterprisePrice.textContent = '599';
    }
}

// ===== UI UTILITIES =====
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const messageEl = document.getElementById('toastMessage');
    const icon = document.querySelector('.toast-icon');
    
    if (!toast || !messageEl) return;
    
    messageEl.textContent = message;
    
    if (type === 'success') {
        icon.style.color = 'var(--success)';
        icon.className = 'fas fa-check-circle toast-icon';
    } else if (type === 'error') {
        icon.style.color = 'var(--danger)';
        icon.className = 'fas fa-exclamation-circle toast-icon';
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href && href !== '#') {
                if (href === '#login' || href === '#register') {
                    navigateToPage(href.substring(1) + '-page');
                } else if (!href.includes('#')) {
                    return;
                } else {
                    navigateToPage(href.substring(1) + '-page');
                }
            }
        });
    });
    
    // Feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', function() {
            const link = this.querySelector('.feature-link');
            if (link) {
                const href = link.getAttribute('onclick');
                if (href) {
                    const pageId = href.match(/'([^']+)'/)[1];
                    navigateToPage(pageId);
                }
            }
        });
    });
    
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const role = document.querySelector('input[name="loginRole"]:checked')?.value || 'jobseeker';
            login(email, role);
        });
    }
    
    // Register form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const isEmployer = document.getElementById('employerRegisterFields')?.style.display === 'block';
            const role = isEmployer ? 'employer' : 'jobseeker';
            const email = document.querySelector('#registerForm input[type="email"]').value;
            login(email, role);
        });
    }
    
    // Post job form
    const postJobForm = document.getElementById('postJobForm');
    if (postJobForm) {
        postJobForm.addEventListener('submit', handlePostJob);
    }
    
    // Skill input
    const skillInput = document.getElementById('skillInput');
    if (skillInput) {
        skillInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                addSkill();
            }
        });
    }
    
    // Company search
    const companySearch = document.getElementById('companySearch');
    if (companySearch) {
        companySearch.addEventListener('input', function() {
            renderAllCompanies();
        });
    }
    
    const searchCompaniesBtn = document.getElementById('searchCompaniesBtn');
    if (searchCompaniesBtn) {
        searchCompaniesBtn.addEventListener('click', function() {
            renderAllCompanies();
        });
    }

    // Social auth buttons — redirect to OAuth authorize endpoints when configured,
    // otherwise open the provider login page in a new tab.
    const OAUTH = {
        googleClientId: '', // Set your Google client ID here (or leave empty to open login page)
        linkedinClientId: '', // Set your LinkedIn client ID here
        redirectUri: window.location.origin + '/oauth-callback.html' // Configure your redirect URI in the provider console
    };

    document.querySelectorAll('.btn-social').forEach(btn => {
        btn.addEventListener('click', function() {
            const text = (this.textContent || '').toLowerCase();
            if (text.includes('google')) {
                if (OAUTH.googleClientId) {
                    const scope = encodeURIComponent('profile email');
                    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(OAUTH.googleClientId)}&redirect_uri=${encodeURIComponent(OAUTH.redirectUri)}&response_type=code&scope=${scope}&include_granted_scopes=true&prompt=select_account`;
                    window.location.href = url;
                } else {
                    window.open('https://accounts.google.com/signin', '_blank');
                }
            } else if (text.includes('linkedin') || text.includes('linkedin-in')) {
                if (OAUTH.linkedinClientId) {
                    const scope = encodeURIComponent('r_liteprofile r_emailaddress');
                    const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${encodeURIComponent(OAUTH.linkedinClientId)}&redirect_uri=${encodeURIComponent(OAUTH.redirectUri)}&scope=${scope}`;
                    window.location.href = url;
                } else {
                    window.open('https://www.linkedin.com/login', '_blank');
                }
            } else {
                // fallback: open provider home
                window.open('https://www.google.com', '_blank');
            }
        });
    });
    
    // Job filters
    const applyFilters = document.getElementById('applyJobFilters');
    if (applyFilters) {
        applyFilters.addEventListener('click', function() {
            renderJobsList();
        });
    }
    
    const clearFilters = document.getElementById('clearJobFilters');
    if (clearFilters) {
        clearFilters.addEventListener('click', function() {
            document.getElementById('jobKeywordFilter').value = '';
            document.getElementById('jobLocationFilter').value = '';
            document.querySelectorAll('.checkbox-group input[type="checkbox"]').forEach(cb => cb.checked = false);
            document.getElementById('salaryFilter').value = '';
            document.getElementById('dateFilter').value = 'any';
            renderJobsList();
        });
    }
    
    // Job sort
    const jobSort = document.getElementById('jobSort');
    if (jobSort) {
        jobSort.addEventListener('change', function() {
            renderJobsList();
        });
    }
    
    // Salary check button
    const checkSalaryBtn = document.getElementById('checkSalaryBtn');
    if (checkSalaryBtn) {
        checkSalaryBtn.addEventListener('click', function() {
            const title = document.getElementById('salaryJobTitle')?.value;
            if (title) {
                showSalaryRole('technology');
                showToast(`Showing salaries for ${title}`, 'success');
            }
        });
    }
    
    // Pricing toggle
    const pricingToggle = document.getElementById('pricingToggle');
    if (pricingToggle) {
        pricingToggle.addEventListener('change', togglePricing);
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showToast('Message sent successfully! We\'ll reply within 24 hours.', 'success');
            this.reset();
        });
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            logout();
        });
    }

    // Settings form save
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            saveSettings();
        });
    }
    
    // Modal close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('show');
        });
    });
    
    // Close modal on outside click
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('show');
        }
    });
    
    // Hash change
    window.addEventListener('hashchange', handleRouting);
    
    // Preview job button
    const previewJobBtn = document.getElementById('previewJobBtn');
    if (previewJobBtn) {
        previewJobBtn.addEventListener('click', function() {
            showToast('Preview feature coming soon!', 'success');
        });
    }
}

// ===== EXPOSE GLOBAL FUNCTIONS =====
window.navigateToPage = navigateToPage;
window.viewJobDetails = viewJobDetails;
window.applyForJob = applyForJob;
window.saveJob = saveJob;
window.viewCompanyProfile = viewCompanyProfile;
window.followCompany = followCompany;
window.filterAdvice = filterAdvice;
window.showResumeTip = showResumeTip;
window.showSalaryRole = showSalaryRole;
window.switchAccountType = switchAccountType;
window.addSkill = addSkill;
window.removeSkill = removeSkill;
window.togglePricing = togglePricing;
window.login = login;
window.logout = logout;
window.renderSavedJobs = renderSavedJobs;
window.renderSettings = renderSettings;
window.saveSettings = saveSettings;