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
    },
    {
        id: 5,
        title: "Senior Software Engineer",
        company: "CareerBridge",
        companyLogo: "CB",
        location: "Remote",
        type: "Full-time",
        level: "Senior level",
        salary: "$140k - $185k",
        description: "Build and scale the core platform that connects millions of job seekers with top employers worldwide. You'll work on high-impact features across the full stack.",
        posted: "1 day ago",
        remote: "Remote",
        skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
        featured: false
    },
    {
        id: 6,
        title: "Product Manager",
        company: "CareerBridge",
        companyLogo: "CB",
        location: "San Francisco, CA",
        type: "Full-time",
        level: "Mid level",
        salary: "$130k - $170k",
        description: "Drive product strategy and roadmap for CareerBridge's job seeker and employer products. Work cross-functionally with engineering, design, and marketing to ship impactful features.",
        posted: "2 days ago",
        remote: "Hybrid",
        skills: ["Product Strategy", "Agile", "User Research", "Data Analysis", "Roadmapping"],
        featured: false
    },
    {
        id: 7,
        title: "Enterprise Account Executive",
        company: "CareerBridge",
        companyLogo: "CB",
        location: "New York, NY",
        type: "Full-time",
        level: "Senior level",
        salary: "$120k - $160k + commission",
        description: "Own and grow enterprise relationships with Fortune 500 companies, helping them leverage CareerBridge's platform to attract and hire top talent at scale.",
        posted: "3 days ago",
        remote: "Hybrid",
        skills: ["B2B Sales", "SaaS", "CRM", "Negotiation", "Enterprise Software"],
        featured: false
    },
    {
        id: 8,
        title: "Customer Success Manager",
        company: "CareerBridge",
        companyLogo: "CB",
        location: "Remote",
        type: "Full-time",
        level: "Mid level",
        salary: "$90k - $120k",
        description: "Ensure CareerBridge customers achieve their hiring goals. You'll onboard new accounts, drive adoption, and serve as the primary point of contact for a portfolio of clients.",
        posted: "4 days ago",
        remote: "Remote",
        skills: ["Customer Success", "SaaS", "Onboarding", "Data Analysis", "Communication"],
        featured: false
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
    },
    {
        id: 4,
        title: "The Future of Remote Work: 2026 Trends",
        category: "Trends",
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80&auto=format&fit=crop",
        excerpt: "How companies are adapting to hybrid and distributed teams in 2026 — and what it means for your career.",
        readTime: "5 min read",
        author: "Sarah Chen",
        fullContent: `
            <p>The workplace has been reshaped permanently. Here's how leading companies are navigating hybrid work in 2026 — and how you can position yourself for success.</p>
            <h4>1. Hybrid is the New Default</h4>
            <p>Over 70% of Fortune 500 companies now operate on a structured hybrid model. Roles that were once seen as requiring full presence — like engineering, design, and product — are now fully hybrid-eligible.</p>
            <h4>2. Async-First Culture is Rising</h4>
            <p>Top distributed teams document everything, default to written communication, and minimize synchronous meetings. Learning to communicate effectively in async environments is now a core workplace skill.</p>
            <h4>3. Home Office Stipends Are Standard</h4>
            <p>Companies competing for remote talent now offer $1k–$3k annual home office stipends as standard. When evaluating offers, factor in equipment, ergonomics, and internet costs alongside base salary.</p>
            <h4>4. Location Flexibility Unlocks Salary Arbitrage</h4>
            <p>Remote workers in lower cost-of-living cities can earn top-market salaries from companies headquartered in San Francisco, New York, or London. Negotiate location-neutral compensation wherever possible.</p>
            <h4>5. "Proximity Bias" is a Real Career Risk</h4>
            <p>Studies consistently show remote employees are promoted at lower rates unless companies actively counter proximity bias. Make your work visible: send weekly recaps, present in all-hands meetings, and build relationships across the organization.</p>
            <h4>6. The Best Remote Jobs Go to the Best Communicators</h4>
            <p>Remote-first companies screen heavily for written communication, autonomy, and proactiveness. Tailor your resume and interviews to show these strengths explicitly.</p>
        `
    },
    {
        id: 5,
        title: "10 Resume Mistakes Costing You Interviews",
        category: "Resume",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80&auto=format&fit=crop",
        excerpt: "Avoid these common resume pitfalls that get candidates rejected before a human ever reads their application.",
        readTime: "7 min read",
        author: "Priya Nair",
        fullContent: `
            <p>Most resumes are eliminated in under 10 seconds — often for preventable reasons. Here are the top mistakes costing candidates interviews, and how to fix them.</p>
            <h4>1. Ignoring ATS Optimization</h4>
            <p>Over 90% of large companies use Applicant Tracking Systems to filter resumes before human review. Use keywords from the job description, avoid tables and graphics, and stick to standard section headings.</p>
            <h4>2. Leading With a Generic Objective Statement</h4>
            <p>Replace "Seeking a challenging role..." with a 2–3 sentence professional summary that immediately communicates your value: who you are, what you're great at, and what you're targeting.</p>
            <h4>3. Listing Duties Instead of Achievements</h4>
            <p>Recruiters don't want to know what your job required — they want to know what you accomplished. Start every bullet with an action verb and include a measurable outcome: "Reduced API latency by 40%."</p>
            <h4>4. One Resume for Every Job</h4>
            <p>Tailor your resume for each application. It takes 10 minutes but dramatically improves your match score. Emphasize the skills most relevant to each specific role.</p>
            <h4>5. Inconsistent Formatting</h4>
            <p>Mixed fonts, uneven spacing, and inconsistent date formats signal carelessness. Use a single font, consistent margins, and one date format throughout.</p>
            <h4>6. Burying Education at the Top</h4>
            <p>Once you have meaningful work experience, move education to the bottom. Lead with your professional experience where you have the most to show.</p>
            <h4>7. No Links or Portfolio</h4>
            <p>Include a clean LinkedIn URL, GitHub, portfolio site, or relevant project links. For technical and creative roles, these are often more important than your resume itself.</p>
            <h4>8. Typos and Grammatical Errors</h4>
            <p>A single typo can eliminate an otherwise strong candidate. Use spell check, read it aloud, and have at least one other person review before submitting.</p>
        `
    },
    {
        id: 6,
        title: "How to Negotiate Your Salary Like a Pro",
        category: "Career",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop",
        excerpt: "Expert tactics and exact scripts to confidently negotiate higher compensation at any career stage.",
        readTime: "9 min read",
        author: "David Kim",
        fullContent: `
            <p>Salary negotiation is one of the highest-ROI skills you can develop. A single successful negotiation can be worth tens of thousands of dollars over your career. Here's how to do it confidently.</p>
            <h4>1. Never Give a Number First</h4>
            <p>When asked about salary expectations early in the process, deflect: "I'd love to understand the full scope of the role first. What range did you have in mind?" This preserves your leverage.</p>
            <h4>2. Research Thoroughly Before Any Conversation</h4>
            <p>Use Levels.fyi (tech), Glassdoor, LinkedIn Salary, and industry surveys to build a solid understanding of market rates for your role, level, and location. Know your number before you pick up the phone.</p>
            <h4>3. Anchor High — With Justification</h4>
            <p>Once you give a number, anchor at the top of your researched range. Back it up: "Based on market data and my experience, I'm targeting $X." Specific justification makes the request professional, not presumptuous.</p>
            <h4>4. Negotiate the Package, Not Just Base Salary</h4>
            <p>If base is non-negotiable, push on signing bonus, equity, remote flexibility, extra PTO, or professional development budget. Total compensation is what matters.</p>
            <h4>5. Use Silence as a Tool</h4>
            <p>After stating your number, stop talking. Silence creates pressure on the other side to respond or move. Filling the silence yourself weakens your position.</p>
            <h4>6. Always Negotiate — Even When You're Excited</h4>
            <p>Roughly 85% of offers have negotiation room. Hiring managers expect it and rarely rescind offers because a candidate negotiated professionally.</p>
            <h4>7. Get It In Writing</h4>
            <p>Verbal commitments are not commitments. Don't give notice at your current job until you have a signed written offer that matches what was discussed.</p>
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
        } else if (pageId === 'blog-page') {
            renderBlogPage();
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

// Helper: run callback if logged in, otherwise redirect to login
function requireLogin(callback) {
    if (currentUser) {
        callback();
    } else {
        showToast('Please sign in to continue', 'error');
        setTimeout(() => navigateToPage('login-page'), 1200);
    }
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
function renderBlogPage() {
    const container = document.getElementById('blogPageContent');
    if (!container) return;

    const categoryColors = {
        interview: '#4361ee', networking: '#7209b7', skills: '#06d6a0',
        Trends: '#f72585', Resume: '#4361ee', Career: '#3a0ca3'
    };

    function categoryBadge(cat, large = false) {
        const color = categoryColors[cat] || '#4361ee';
        const pad = large ? '6px 16px' : '4px 12px';
        const size = large ? '0.82rem' : '0.78rem';
        return `<span style="background:${color}22;color:${color};padding:${pad};border-radius:30px;font-size:${size};font-weight:700;letter-spacing:0.5px;text-transform:uppercase;">${cat}</span>`;
    }

    const [featured, ...rest] = careerAdvice;

    container.innerHTML = `
        <div class="blog-grid">
            <!-- Featured full-width card -->
            <div class="blog-card featured" onclick="navigateToBlogArticle(${featured.id})">
                <div class="blog-image" style="position:relative;">
                    <img src="${featured.image}" alt="${featured.title}"
                         onerror="this.style.display='none'">
                    <div class="blog-image-overlay"></div>
                    <div class="blog-featured-content">
                        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
                            ${categoryBadge(featured.category, true)}
                            <span style="color:rgba(255,255,255,0.72);font-size:0.85rem;"><i class="fas fa-clock"></i> ${featured.readTime}</span>
                        </div>
                        <div class="blog-featured-meta">
                            <span><i class="fas fa-user"></i> ${featured.author}</span>
                            <span style="background:rgba(255,255,255,0.18);padding:3px 10px;border-radius:20px;font-size:0.78rem;letter-spacing:0.5px;">FEATURED</span>
                        </div>
                        <h3>${featured.title}</h3>
                        <p>${featured.excerpt}</p>
                        <span style="color:#fff;font-weight:700;display:inline-flex;align-items:center;gap:8px;font-size:0.95rem;">
                            Read Article <i class="fas fa-arrow-right"></i>
                        </span>
                    </div>
                </div>
            </div>

            <!-- 3-column grid for remaining articles -->
            <div class="blog-cards-grid">
                ${rest.map(article => `
                    <div class="blog-card" onclick="navigateToBlogArticle(${article.id})">
                        <div class="blog-image">
                            <img src="${article.image}" alt="${article.title}"
                                 onerror="this.style.display='none'">
                            <div style="position:absolute;top:12px;left:12px;">${categoryBadge(article.category)}</div>
                        </div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span><i class="fas fa-user"></i> ${article.author}</span>
                                <span><i class="fas fa-clock"></i> ${article.readTime}</span>
                            </div>
                            <h3>${article.title}</h3>
                            <p>${article.excerpt}</p>
                            <span style="color:var(--primary);font-weight:600;font-size:0.9rem;display:inline-flex;align-items:center;gap:6px;margin-top:auto;">
                                Read More <i class="fas fa-arrow-right"></i>
                            </span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}


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

function navigateToBlogArticle(id) {
    const advice = careerAdvice.find(a => a.id === id);
    if (!advice) return;

    const categoryColors = {
        interview: '#4361ee', networking: '#7209b7', skills: '#06d6a0',
        Trends: '#f72585', Resume: '#4361ee', Career: '#3a0ca3'
    };
    const color = categoryColors[advice.category] || '#4361ee';

    const container = document.getElementById('blogArticleContent');
    if (!container) return;

    container.innerHTML = `
        <div class="blog-article-hero">
            <img src="${advice.image}" alt="${advice.title}"
                 onerror="this.style.display='none'">
            <div class="blog-article-hero-overlay"></div>
        </div>
        <div class="blog-article-body">
            <div class="blog-article-meta">
                <span style="background:${color}22;color:${color};padding:4px 14px;border-radius:30px;font-size:0.82rem;font-weight:700;text-transform:uppercase;">
                    ${advice.category}
                </span>
                <span><i class="fas fa-user"></i> ${advice.author}</span>
                <span><i class="fas fa-clock"></i> ${advice.readTime}</span>
            </div>
            <h1>${advice.title}</h1>
            <div class="blog-article-lead">${advice.excerpt}</div>
            <div>${advice.fullContent}</div>
            <div class="blog-article-cta">
                <span>Ready to put these insights into action?</span>
                <button class="btn btn-primary" onclick="navigateToPage('browse-jobs-page')">
                    <i class="fas fa-briefcase"></i> Browse Jobs
                </button>
                <button class="btn btn-outline" onclick="navigateToPage('resources-page')">
                    <i class="fas fa-book"></i> More Resources
                </button>
            </div>
        </div>
    `;

    navigateToPage('blog-article-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openArticle(id) {
    navigateToBlogArticle(id);
}



function filterAdvice(category) {
    showToast('Filtering by: ' + category, 'success');
}

// ===== RESUME TEMPLATE FUNCTIONS =====
const resumeTemplates = {
    modern: {
        name: 'Modern Professional',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&q=85&auto=format&fit=crop',
        description: 'A clean, structured layout ideal for corporate roles in tech, finance, and consulting. ATS-friendly with clearly defined sections.',
        features: ['ATS Optimized', 'Clean Typography', 'Two-Column Layout', 'Skills Sidebar'],
        accentColor: '#667eea',
        profilePage: 'candidate-profile.html'
    },
    creative: {
        name: 'Creative Design',
        image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=85&auto=format&fit=crop',
        description: 'A bold, visually striking template for designers, marketers, and creative professionals who want to stand out.',
        features: ['Vibrant Color Accents', 'Portfolio Section', 'Icon-Based Skills', 'Custom Header'],
        accentColor: '#f5576c',
        profilePage: 'candidate-profile.html'
    },
    minimalist: {
        name: 'Minimalist',
        image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=900&q=85&auto=format&fit=crop',
        description: 'A refined, whitespace-driven design for executives and senior professionals who prefer understated elegance.',
        features: ['Single Column', 'Elegant Whitespace', 'Subtle Dividers', 'Print Ready'],
        accentColor: '#4facfe',
        profilePage: 'candidate-profile.html'
    }
};

function openTemplate(key) {
    const tpl = resumeTemplates[key];
    if (!tpl) return;
    const modal = document.getElementById('templateModal');
    const content = document.getElementById('templateModalContent');
    if (!modal || !content) return;

    content.innerHTML = `
        <div style="overflow:hidden;border-radius:var(--radius-lg) var(--radius-lg) 0 0;max-height:340px;">
            <img src="${tpl.image}" alt="${tpl.name}"
                 style="width:100%;object-fit:cover;display:block;"
                 onerror="this.parentElement.style.background='linear-gradient(135deg,${tpl.accentColor},#764ba2)';this.style.display='none';">
        </div>
        <div style="padding:32px 40px 36px;">
            <h2 style="font-size:1.7rem;margin-bottom:10px;">${tpl.name}</h2>
            <p style="color:var(--gray);line-height:1.7;margin-bottom:24px;">${tpl.description}</p>
            <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:28px;">
                ${tpl.features.map(f => `<span style="background:var(--primary-light);color:var(--primary);padding:6px 14px;border-radius:20px;font-size:0.85rem;font-weight:600;">${f}</span>`).join('')}
            </div>
            <div style="display:flex;gap:14px;">
                <button class="btn btn-primary" style="flex:1;padding:14px;" onclick="useTemplate('${key}')">
                    <i class="fas fa-edit"></i> Use This Template
                </button>
                <button class="btn btn-outline" style="padding:14px 22px;" onclick="document.getElementById('templateModal').classList.remove('show')">
                    Browse Others
                </button>
            </div>
        </div>
    `;
    modal.classList.add('show');
}

function useTemplate(key) {
    document.getElementById('templateModal').classList.remove('show');
    if (currentUser) {
        // Navigate to candidate profile to fill in details
        window.location.href = 'candidate-profile.html';
    } else {
        showToast('Please sign in to use a template', 'error');
        setTimeout(() => navigateToPage('login-page'), 1200);
    }
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
window.openArticle = openArticle;
window.navigateToBlogArticle = navigateToBlogArticle;
window.renderBlogPage = renderBlogPage;
window.downloadFile = downloadFile;
window.brandAssetsContent = brandAssetsContent;
window.factSheetContent = factSheetContent;
window.leadershipPhotoContent = leadershipPhotoContent;

// ===== DOWNLOAD HELPERS =====
function downloadFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`"${filename}" downloaded successfully!`, 'success');
}

function brandAssetsContent() {
    return `CAREERBRIDGE — LOGOS & BRAND ASSETS
=====================================
Version: 2026.1 | Released: March 2026

PRIMARY LOGO
  File: CareerBridge-Logo-Primary.svg
  Colors: Primary Blue #4361EE, Dark #1E1E2E
  Usage: Use on white or light backgrounds only

REVERSED LOGO (WHITE)
  File: CareerBridge-Logo-White.svg
  Colors: White #FFFFFF
  Usage: Use on dark or primary-color backgrounds

ICON / FAVICON
  File: CareerBridge-Icon.svg
  Description: Bridge icon mark only, no wordmark

COLOR PALETTE
  Primary Blue:   #4361EE
  Primary Dark:   #3A0CA3
  Accent:         #F72585
  Success:        #06D6A0
  Dark:           #1E1E2E
  Gray:           #6B7280

TYPOGRAPHY
  Primary Font:   Plus Jakarta Sans (Google Fonts)
  Weights:        300, 400, 500, 600, 700, 800

BRAND GUIDELINES
  - Do not stretch, distort, or recolor the logo
  - Maintain clear space equal to the height of the "C"
  - Do not use the logo smaller than 24px height
  - Do not place the primary logo on dark backgrounds

For questions: brand@careerbridge.com
`;
}

function factSheetContent() {
    return `CAREERBRIDGE — COMPANY FACT SHEET
===================================
Updated: March 2026

COMPANY OVERVIEW
  Name:        CareerBridge, Inc.
  Founded:     2022
  HQ:          123 Market Street, Suite 400, San Francisco, CA 94105
  Website:     https://careerbridge.com
  CEO:         James Wilson
  CTO:         Sarah Chen
  COO:         Michael Adebayo

MISSION
  To bridge the gap between talent and opportunity — connecting
  professionals with companies that value their potential.

KEY METRICS (March 2026)
  Registered Job Seekers:   500,000+
  Employer Partners:        10,000+
  Successful Placements:    50,000+
  Countries Active:         15
  Average Time-to-Hire:     12 days (68% below industry avg.)
  Net Promoter Score:       72

FUNDING
  Total Raised:  $75M
  Series C:      $50M (March 2026) — led by Sequoia Capital
  Series B:      $18M (2024) — led by Andreessen Horowitz
  Series A:      $5M  (2023) — led by Y Combinator

PRODUCTS & PLANS
  Starter:       $99/month   — 5 job posts, basic analytics
  Professional:  $249/month  — 20 job posts, AI matching, analytics suite
  Enterprise:    $599/month  — Unlimited posts, dedicated account manager

RECOGNITION
  - Forbes Best Startup Employers 2026 — #7
  - TechCrunch Disrupt Battlefield Finalist 2024
  - Built In Best Places to Work 2025

CONTACT
  Press:    press@careerbridge.com
  Sales:    sales@careerbridge.com
  Support:  support@careerbridge.com
  Phone:    +1 (888) 123-4567
`;
}

function leadershipPhotoContent() {
    return `CAREERBRIDGE — LEADERSHIP PHOTOS
==================================
Updated: March 2026

All images are provided in high-resolution (3000×3000px) JPEG format.
Licensed for editorial and press use only.

EXECUTIVE TEAM

1. James Wilson — Co-Founder & CEO
   File: james-wilson-ceo-headshot.jpg
   Bio:  James has 15+ years in HR tech and was previously VP of Product
         at LinkedIn. He co-founded CareerBridge in 2022.
   Download URL: https://randomuser.me/api/portraits/men/1.jpg

2. Sarah Chen — Co-Founder & CTO
   File: sarah-chen-cto-headshot.jpg
   Bio:  Sarah holds a PhD in Machine Learning from Stanford and led
         AI research at Google before co-founding CareerBridge.
   Download URL: https://randomuser.me/api/portraits/women/2.jpg

3. Michael Adebayo — Chief Operating Officer
   File: michael-adebayo-coo-headshot.jpg
   Bio:  Michael brings 12 years of operations leadership from Airbnb
         and Stripe, joining CareerBridge as COO in 2023.
   Download URL: https://randomuser.me/api/portraits/men/3.jpg

USAGE GUIDELINES
  - Images may be used for press and editorial coverage of CareerBridge
  - Do not alter, crop, or composite these images
  - Credit: "Photo courtesy of CareerBridge"
  - For other uses, contact: press@careerbridge.com
`;
}