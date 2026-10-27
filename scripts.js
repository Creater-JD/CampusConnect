
const students = [
    { name: "Maya Chen", initials: "MC", color: "coral", major: "Product Design · Year 3", interest: "Design systems and accessible tech", category: "Design" },
    { name: "Andre Williams", initials: "AW", color: "blue", major: "Computer Science · Year 2", interest: "Building tools for local communities", category: "Technology" },
    { name: "Priya Nair", initials: "PN", color: "yellow", major: "Business · Year 4", interest: "Social enterprise and start-ups", category: "Business" },
    { name: "Leo Martinez", initials: "LM", color: "pink", major: "Visual Arts · Year 2", interest: "Photography, print, and city walks", category: "Arts" },
    { name: "Sam Okafor", initials: "SO", color: "", major: "Environmental Science · Year 3", interest: "Urban gardens and climate action", category: "Arts" },
    { name: "Elena Petrova", initials: "EP", color: "coral", major: "Data Science · Year 1", interest: "Making data easier to understand", category: "Technology" }
];
const posts = [
    { name: "Maya Chen", initials: "MC", color: "coral", subtitle: "Product Design · Year 3", time: "18 min ago", tag: "DESIGN", text: "Our accessibility audit team is looking for two more people to test a new campus map prototype. No design experience needed, just fresh eyes and 20 minutes. Drop a note if you're curious!", likes: 18, comments: 4, liked: false },
    { name: "Andre Williams", initials: "AW", color: "blue", subtitle: "Computer Science · Year 2", time: "1 hr ago", tag: "STUDY GROUP", text: "Starting a low-key study circle for algorithms this Thursday. We'll work through practice problems together and bring snacks. Room 214, 4 PM. All levels welcome.", likes: 12, comments: 7, liked: false },
    { name: "Priya Nair", initials: "PN", color: "yellow", subtitle: "Business · Year 4", time: "3 hrs ago", tag: "CAMPUS LIFE", text: "The student-run pantry collected 86 bags of groceries this weekend. Huge thanks to everyone who helped organize, donate, and spread the word. Next collection is in two weeks!", likes: 31, comments: 9, liked: false }
];
const jobs = [
    { company: "Fieldnotes Studio", mark: "F", title: "UX Research Intern", meta: "Internship · Hybrid · 10 weeks", copy: "Help a small product team understand how people use everyday tools. Great for curious listeners and thoughtful note-takers.", tags: ["Design", "Paid"], type: "Internship" },
    { company: "Cedar & Co.", mark: "C", title: "Community Programs Assistant", meta: "Part-time · On campus · 8 hrs/week", copy: "Support workshops, welcome visitors, and help local ideas find an audience.", tags: ["Community", "Flexible"], type: "Part-time" },
    { company: "OpenBench Labs", mark: "O", title: "Frontend Engineering Intern", meta: "Internship · Remote · Summer", copy: "Build clear, accessible interfaces alongside a small team working on open education tools.", tags: ["Engineering", "Remote"], type: "Internship" },
    { company: "Northbridge Library", mark: "N", title: "Digital Archive Assistant", meta: "Part-time · Library · 6 hrs/week", copy: "Help organize student stories and materials for a new campus history collection.", tags: ["Research", "On campus"], type: "Part-time" }
];
const events = [
    { day: "29", month: "OCT", title: "Design for Good Night", time: "Wednesday · 5:30–7:30 PM", place: "Student Union, Studio B", description: "Bring a question about your community. Make a small team. Leave with one idea to try.", type: "Workshop" },
    { day: "02", month: "NOV", title: "Autumn Makers Market", time: "Sunday · 11:00 AM–3:00 PM", place: "Arts Quad", description: "A student-run market for prints, handmade objects, music, and a little something to eat.", type: "Campus life" },
    { day: "06", month: "NOV", title: "First-Gen Meet & Eat", time: "Thursday · 6:00–7:00 PM", place: "Maple Hall Lounge", description: "A relaxed meal and conversation hosted by the First-Generation Student Network.", type: "Community" },
    { day: "10", month: "NOV", title: "Tiny Tech Showcase", time: "Monday · 4:00–6:00 PM", place: "Innovation Lab", description: "See what classmates have been making and share your own work in progress.", type: "Showcase" }
];
const communities = [
    { icon: "✳", name: "Creative Practice Club", members: "84 members", copy: "A welcoming corner for people who make things, from sketches to side projects.", tag: "DESIGN & ARTS" },
    { icon: "⌘", name: "Women in Computing", members: "126 members", copy: "Peer mentorship, shared learning, and room to grow in tech together.", tag: "TECHNOLOGY" },
    { icon: "↟", name: "Campus Garden Collective", members: "57 members", copy: "Grow food, share skills, and make greener places across campus.", tag: "SUSTAINABILITY" },
    { icon: "◎", name: "First-Gen Student Network", members: "103 members", copy: "Find your people, trade advice, and celebrate every milestone.", tag: "STUDENT LIFE" },
    { icon: "♫", name: "Open Mic Circle", members: "42 members", copy: "A friendly space for music, spoken word, and trying something new.", tag: "PERFORMING ARTS" },
    { icon: "✎", name: "The Campus Review", members: "68 members", copy: "Write, edit, illustrate, and tell the stories happening around us.", tag: "WRITING" }
];
const courses = [
    { code: "CS 204", name: "Algorithms & Society", detail: "Peer study circle · Tuesdays, 4 PM", people: "8 students · Room 214", tag: "COMPUTER SCIENCE" },
    { code: "ART 118", name: "Drawing from Observation", detail: "Open practice · Wednesdays, 2 PM", people: "5 students · Arts Annex", tag: "STUDIO ARTS" },
    { code: "BIO 231", name: "Ecology in the City", detail: "Study group · Thursdays, 5 PM", people: "11 students · Greenhouse", tag: "LIFE SCIENCES" },
    { code: "BUS 305", name: "Social Enterprise Lab", detail: "Project circle · Fridays, 1 PM", people: "6 students · Founders Hall", tag: "BUSINESS" }
];
const chatThreads = [
    { name: "Maya Chen", initials: "MC", color: "coral", preview: "That sounds perfect, see you there!", messages: [{ text: "Hey Jordan! Are you coming to the design meetup on Wednesday?", mine: false }, { text: "I am! I have a couple of ideas for the map project too.", mine: true }, { text: "That sounds perfect, see you there!", mine: false }] },
    { name: "Andre Williams", initials: "AW", color: "blue", preview: "I found a good practice set", messages: [{ text: "I found a good practice set for Thursday's study group.", mine: false }, { text: "Nice, send it over when you can.", mine: true }] },
    { name: "Priya Nair", initials: "PN", color: "yellow", preview: "Thanks for volunteering!", messages: [{ text: "Thanks for volunteering at the pantry this weekend!", mine: false }, { text: "Happy to help. Let me know the next date.", mine: true }] }
];

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
const avatar = (person, extra = "") => `<div class="avatar ${person.color || ""} ${extra}">${escapeHtml(person.initials)}</div>`;
const connected = new Set();
const joined = new Set();
const rsvps = new Set();
const applied = new Set();
let activePeopleFilter = "All students";
let activeJobFilter = "All roles";
let activeThread = 0;
let authMode = "signup";
let onboardingUsername = "";
let onboardingDetails = null;
let onboardingPhotoUrl = "";

function setView(view) {
    const known = ["home", "people", "jobs", "events", "communities", "courses", "chat", "profile", "auth", "signup", "details", "photo"];
    const target = known.includes(view) ? view : "home";
    document.querySelectorAll("[data-panel]").forEach((panel) => { panel.hidden = panel.dataset.panel !== target; });
    document.querySelectorAll(".nav-button[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === target));
    document.querySelector("[data-mobile-menu-toggle]").classList.toggle("active", ["communities", "courses", "profile", "auth"].includes(target));
    closeMobileMoreMenu();
    const titles = { home: "Home feed", people: "Discover people", jobs: "Jobs & internships", events: "College events", communities: "Communities", courses: "Courses", chat: "Messages", profile: "Student profile", auth: "Join CampusConnect", signup: "Create account", details: "Student details", photo: "Profile photo" };
    document.getElementById("topbar-title").textContent = titles[target];
    if (target === "people") renderPeople(document.getElementById("global-search").value.trim());
    if (window.location.hash !== `#${target}`) window.location.hash = target;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeMobileMoreMenu() {
    const menu = document.getElementById("mobile-more-menu");
    const toggle = document.querySelector("[data-mobile-menu-toggle]");
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
}

function clearPhoto() {
    if (onboardingPhotoUrl) URL.revokeObjectURL(onboardingPhotoUrl);
    onboardingPhotoUrl = "";
}

function updatePhotoElement(element, initials) {
    if (!element) return;
    element.innerHTML = onboardingPhotoUrl ? `<img src="${onboardingPhotoUrl}" alt="Profile photo">` : escapeHtml(initials);
}

function acceptPhoto(file) {
    const error = document.getElementById("photo-error");
    error.textContent = "";
    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type)) { error.textContent = "Choose a JPG, PNG, or WebP image."; return; }
    if (file.size > 5 * 1024 * 1024) { error.textContent = "Choose an image smaller than 5 MB."; return; }
    clearPhoto();
    onboardingPhotoUrl = URL.createObjectURL(file);
    document.getElementById("onboarding-photo-preview").innerHTML = `<img src="${onboardingPhotoUrl}" alt="Preview of selected profile photo">`;
    document.getElementById("photo-filename").textContent = file.name;
    updatePhotoElement(document.getElementById("profile-avatar"), "JD");
}

function renderPosts(query = "") {
    const filtered = posts.filter((post) => `${post.name} ${post.subtitle} ${post.tag} ${post.text}`.toLowerCase().includes(query.toLowerCase()));
    document.getElementById("feed-posts").innerHTML = filtered.length ? filtered.map((post, index) => `
                <article class="post-card">
                    <div class="post-head">${avatar(post)}<div class="post-author"><strong>${escapeHtml(post.name)}</strong><span>${escapeHtml(post.subtitle)} · ${escapeHtml(post.time)}</span></div><button class="icon-button" data-post-options aria-label="More post options" title="More options">···</button></div>
                    <p class="post-copy">${escapeHtml(post.text)}</p><span class="post-tag">${escapeHtml(post.tag)}</span>
                    <div class="post-actions"><button class="post-action ${post.liked ? "liked" : ""}" data-like="${posts.indexOf(post)}" aria-pressed="${post.liked}">${post.liked ? "♥" : "♡"} <span>${post.likes} likes</span></button><button class="post-action" data-comment="${index}">◷ <span>${post.comments} comments</span></button><button class="post-action" data-share="${index}">↗ <span>Share</span></button></div>
                </article>`).join("") : `<div class="empty-state">No posts match that search. Try another name or topic.</div>`;
}
function renderPeople(query = "") {
    const filtered = students.filter((student) => (activePeopleFilter === "All students" || student.category === activePeopleFilter) && `${student.name} ${student.major} ${student.interest} ${student.category}`.toLowerCase().includes(query.toLowerCase()));
    document.getElementById("people-grid").innerHTML = filtered.length ? filtered.map((student) => `<article class="person-card">${avatar(student)}<h3>${escapeHtml(student.name)}</h3><p class="subheading">${escapeHtml(student.major)}</p><p class="subheading">${escapeHtml(student.interest)}</p><button class="${connected.has(student.name) ? "outline-button" : "primary-button"}" data-connect="${escapeHtml(student.name)}">${connected.has(student.name) ? "Connected ✓" : "＋ Connect"}</button></article>`).join("") : `<div class="empty-state">No students match your search.</div>`;
}
function renderSuggestions() {
    document.getElementById("suggested-people").innerHTML = students.slice(0, 3).map((student) => `<div class="suggestion">${avatar(student)}<div class="suggestion-copy"><strong>${escapeHtml(student.name)}</strong><span>${escapeHtml(student.category)} · ${escapeHtml(student.major.split(" · ")[0])}</span></div><button class="plus-button" data-connect="${escapeHtml(student.name)}" aria-label="Connect with ${escapeHtml(student.name)}">${connected.has(student.name) ? "✓" : "+"}</button></div>`).join("");
}
function renderJobs() {
    const filtered = jobs.filter((job) => activeJobFilter === "All roles" || job.type === activeJobFilter || (activeJobFilter === "Remote" && job.meta.toLowerCase().includes("remote")));
    document.getElementById("jobs-grid").innerHTML = filtered.map((job) => `<article class="listing-card"><div class="listing-top"><div class="company-mark">${escapeHtml(job.mark)}</div><span class="small-tag">DEMO LISTING</span></div><h3>${escapeHtml(job.title)}</h3><div class="listing-meta">${escapeHtml(job.company)} · ${escapeHtml(job.meta)}</div><p>${escapeHtml(job.copy)}</p><div class="listing-footer"><div class="tag-row">${job.tags.map((tag) => `<span class="small-tag">${escapeHtml(tag)}</span>`).join("")}</div><button class="outline-button" data-apply="${escapeHtml(job.title)}">${applied.has(job.title) ? "Saved ✓" : "Save role"}</button></div></article>`).join("");
}
function renderEvents() {
    document.getElementById("events-grid").innerHTML = events.map((event) => `<article class="event-card"><div class="date-tile"><strong>${event.day}</strong><span>${event.month}</span></div><div><span class="small-tag">${escapeHtml(event.type)}</span><h3>${escapeHtml(event.title)}</h3><div class="listing-meta">${escapeHtml(event.time)} · ${escapeHtml(event.place)}</div><p>${escapeHtml(event.description)}</p><div class="event-bottom"><span class="listing-meta">${rsvps.has(event.title) ? "You're on the list" : "Open to all students"}</span><button class="${rsvps.has(event.title) ? "outline-button" : "primary-button"}" data-rsvp="${escapeHtml(event.title)}">${rsvps.has(event.title) ? "Going ✓" : "RSVP"}</button></div></div></article>`).join("");
}
function renderCommunities() {
    document.getElementById("communities-grid").innerHTML = communities.map((group) => `<article class="community-card"><div class="community-mark">${group.icon}</div><span class="course-code">${escapeHtml(group.tag)}</span><h3>${escapeHtml(group.name)}</h3><p>${escapeHtml(group.copy)}</p><div class="listing-footer"><span class="listing-meta">${escapeHtml(group.members)}</span><button class="${joined.has(group.name) ? "outline-button" : "primary-button"}" data-join="${escapeHtml(group.name)}">${joined.has(group.name) ? "Joined ✓" : "Join group"}</button></div></article>`).join("");
}
function renderCourses() {
    document.getElementById("courses-grid").innerHTML = courses.map((course) => `<article class="course-card"><div class="course-topline"><span class="course-code">${escapeHtml(course.code)}</span><span class="small-tag">${escapeHtml(course.tag)}</span></div><h3>${escapeHtml(course.name)}</h3><p>${escapeHtml(course.detail)}</p><div class="listing-footer"><span class="listing-meta">${escapeHtml(course.people)}</span><button class="outline-button" data-course="${escapeHtml(course.code)}">Find group</button></div></article>`).join("");
}
function renderThread() {
    const thread = chatThreads[activeThread];
    document.getElementById("chat-name").textContent = thread.name;
    document.getElementById("chat-avatar").textContent = thread.initials;
    document.getElementById("chat-avatar").className = `avatar ${thread.color}`;
    document.getElementById("chat-messages").innerHTML = thread.messages.map((message) => `<div class="chat-bubble ${message.mine ? "mine" : ""}">${escapeHtml(message.text)}</div>`).join("");
    document.getElementById("chat-messages").scrollTop = document.getElementById("chat-messages").scrollHeight;
    document.getElementById("chat-contacts").innerHTML = chatThreads.map((item, index) => `<button class="chat-contact ${index === activeThread ? "active" : ""}" data-thread="${index}">${avatar(item)}<span class="chat-contact-copy"><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.preview)}</span></span></button>`).join("");
}
document.addEventListener("click", (event) => {
    const moreToggle = event.target.closest("[data-mobile-menu-toggle]");
    if (moreToggle) {
        const menu = document.getElementById("mobile-more-menu");
        const expanded = moreToggle.getAttribute("aria-expanded") === "true";
        menu.hidden = expanded;
        moreToggle.setAttribute("aria-expanded", String(!expanded));
        return;
    }
    if (!event.target.closest("#mobile-more-menu")) closeMobileMoreMenu();
    const nav = event.target.closest("[data-view]");
    if (nav) { setView(nav.dataset.view); return; }
    const passwordToggle = event.target.closest("[data-toggle-password]");
    if (passwordToggle) { const input = document.getElementById(passwordToggle.dataset.togglePassword); const visible = input.type === "password"; input.type = visible ? "text" : "password"; passwordToggle.textContent = visible ? "Hide" : "Show"; passwordToggle.setAttribute("aria-label", `${visible ? "Hide" : "Show"} password`); return; }
    const photoPicker = event.target.closest("[data-photo-picker]");
    if (photoPicker) { document.getElementById(photoPicker.dataset.photoPicker).click(); return; }
    const onboardingBack = event.target.closest("[data-onboarding-back]");
    if (onboardingBack) { setView(onboardingBack.dataset.onboardingBack); return; }
    if (event.target.closest("[data-auth-return]")) { authMode = "login"; updateAuthMode(); setView("auth"); return; }
    if (event.target.closest("#skip-photo")) { clearPhoto(); document.getElementById("photo-filename").textContent = "No photo selected"; document.getElementById("onboarding-photo-preview").textContent = onboardingDetails ? onboardingDetails.initials : "?"; finishOnboarding(); return; }
    if (event.target.closest("#finish-setup")) { finishOnboarding(); return; }
    const like = event.target.closest("[data-like]");
    if (like) { const post = posts[Number(like.dataset.like)]; post.liked = !post.liked; post.likes += post.liked ? 1 : -1; renderPosts(document.getElementById("global-search").value.trim()); return; }
    const connect = event.target.closest("[data-connect]");
    if (connect) { const name = connect.dataset.connect; connected.has(name) ? connected.delete(name) : connected.add(name); renderPeople(document.getElementById("global-search").value.trim()); renderSuggestions(); return; }
    const join = event.target.closest("[data-join]");
    if (join) { const name = join.dataset.join; joined.has(name) ? joined.delete(name) : joined.add(name); renderCommunities(); return; }
    const rsvp = event.target.closest("[data-rsvp]");
    if (rsvp) { const name = rsvp.dataset.rsvp; rsvps.has(name) ? rsvps.delete(name) : rsvps.add(name); renderEvents(); return; }
    const apply = event.target.closest("[data-apply]");
    if (apply) { const title = apply.dataset.apply; applied.has(title) ? applied.delete(title) : applied.add(title); renderJobs(); return; }
    const thread = event.target.closest("[data-thread]");
    if (thread) { activeThread = Number(thread.dataset.thread); renderThread(); return; }
    const peopleFilter = event.target.closest("[data-people-filter]");
    if (peopleFilter) { activePeopleFilter = peopleFilter.dataset.peopleFilter; document.querySelectorAll("[data-people-filter]").forEach((button) => button.classList.toggle("active", button === peopleFilter)); renderPeople(document.getElementById("global-search").value.trim()); return; }
    const jobFilter = event.target.closest("[data-job-filter]");
    if (jobFilter) { activeJobFilter = jobFilter.dataset.jobFilter; document.querySelectorAll("[data-job-filter]").forEach((button) => button.classList.toggle("active", button === jobFilter)); renderJobs(); return; }
    const authTab = event.target.closest("[data-auth-mode]");
    if (authTab) { authMode = authTab.dataset.authMode; updateAuthMode(); return; }
    const comment = event.target.closest("[data-comment]");
    if (comment) window.alert("Comments are a preview in this local demo.");
    const share = event.target.closest("[data-share]");
    if (share) window.alert("Sharing is not connected in this local demo.");
    const postOptions = event.target.closest("[data-post-options]");
    if (postOptions) window.alert("Post options are not available in this local demo.");
    const course = event.target.closest("[data-course]");
    if (course) window.alert(`Study group details for ${course.dataset.course} are part of this demo.`);
});
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMobileMoreMenu(); });
function updateAuthMode() {
    document.querySelectorAll("[data-auth-mode]").forEach((button) => button.classList.toggle("active", button.dataset.authMode === authMode));
    document.getElementById("auth-credentials").hidden = authMode === "signup";
    document.getElementById("auth-email").required = authMode === "login";
    document.getElementById("auth-password").required = authMode === "login";
    document.getElementById("auth-title").textContent = authMode === "signup" ? "Create your account" : "Welcome back";
    document.getElementById("auth-subtitle").textContent = authMode === "signup" ? "Join your campus community today." : "Log in to your campus community.";
    document.getElementById("auth-submit").textContent = authMode === "signup" ? "Continue to sign up" : "Log in to demo";
    document.getElementById("auth-password").autocomplete = "current-password";
    document.getElementById("auth-status").textContent = "";
}

document.getElementById("signup-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const usernameInput = document.getElementById("signup-username");
    const passwordInput = document.getElementById("signup-password");
    const confirmInput = document.getElementById("signup-confirm");
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const confirmation = confirmInput.value;
    document.getElementById("signup-username-error").textContent = username.length < 3 || !/^[a-zA-Z0-9_]+$/.test(username) ? "Use at least 3 letters, numbers, or underscores." : "";
    document.getElementById("signup-password-error").textContent = password.length < 8 ? "Use at least 8 characters for this demo check." : "";
    document.getElementById("signup-confirm-error").textContent = confirmation !== password ? "Passwords do not match. Check both fields." : "";
    if (document.querySelector("#signup-form .field-error:not(:empty)")) return;
    onboardingUsername = username;
    passwordInput.value = "";
    confirmInput.value = "";
    setView("details");
});

document.getElementById("details-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const fields = ["student-full-name", "student-email", "student-age", "student-qualification"];
    fields.forEach((id) => { document.querySelector(`[data-error-for="${id}"]`).textContent = ""; });
    const fullName = document.getElementById("student-full-name").value.trim();
    const email = document.getElementById("student-email").value.trim();
    const ageValue = Number(document.getElementById("student-age").value);
    const qualification = document.getElementById("student-qualification").value;
    let valid = true;
    if (!fullName) { document.querySelector('[data-error-for="student-full-name"]').textContent = "Enter your full name."; valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { document.querySelector('[data-error-for="student-email"]').textContent = "Enter a valid email address."; valid = false; }
    if (!Number.isInteger(ageValue) || ageValue < 16 || ageValue > 120) { document.querySelector('[data-error-for="student-age"]').textContent = "Enter an age from 16 to 120."; valid = false; }
    if (!qualification) { document.querySelector('[data-error-for="student-qualification"]').textContent = "Choose your qualification."; valid = false; }
    if (!valid) return;
    const initials = fullName.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
    onboardingDetails = { fullName, email, gender: document.getElementById("student-gender").value, age: ageValue, qualification, initials };
    document.getElementById("onboarding-photo-preview").textContent = initials;
    setView("photo");
});

function finishOnboarding() {
    if (!onboardingDetails) { setView("home"); return; }
    const details = onboardingDetails;
    document.getElementById("sidebar-name").textContent = details.fullName;
    document.getElementById("home-greeting").textContent = `Good morning, ${details.fullName.split(/\s+/)[0]}`;
    document.getElementById("profile-card-name").textContent = details.fullName;
    document.getElementById("profile-name").value = details.fullName;
    document.getElementById("profile-campus").value = "Northbridge College";
    document.getElementById("profile-card-major").textContent = `${details.qualification} · Northbridge College`;
    updatePhotoElement(document.getElementById("profile-avatar"), details.initials);
    const miniAvatar = document.querySelector(".profile-mini .avatar");
    updatePhotoElement(miniAvatar, details.initials);
    document.getElementById("signup-username").value = "";
    onboardingUsername = "";
    onboardingDetails = null;
    setView("home");
}

document.getElementById("onboarding-photo-input").addEventListener("change", (event) => { const [file] = event.target.files; if (file) acceptPhoto(file); event.target.value = ""; });
document.getElementById("profile-photo-input").addEventListener("change", (event) => { const [file] = event.target.files; if (file) acceptPhoto(file); event.target.value = ""; });
document.getElementById("global-search-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = document.getElementById("global-search").value.trim();
    setView("people");
    renderPeople(query);
    renderPosts(query);
});
document.getElementById("global-search").addEventListener("input", (event) => {
    if (event.target.value.trim() && !document.getElementById("view-people").hidden) renderPeople(event.target.value.trim());
    if (document.getElementById("view-home").hidden === false && event.target.value.trim()) renderPosts(event.target.value.trim());
    if (!event.target.value.trim()) renderPosts();
});
document.getElementById("post-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("post-input");
    const text = input.value.trim();
    if (!text) { input.focus(); return; }
    posts.unshift({ name: document.getElementById("sidebar-name").textContent, initials: "JD", color: "", subtitle: "Northbridge College · Student", time: "Just now", tag: "YOUR UPDATE", text, likes: 0, comments: 0, liked: false });
    input.value = "";
    renderPosts();
});
document.getElementById("profile-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("profile-name").value.trim() || "Jordan Davis";
    const major = document.getElementById("profile-major-input").value.trim() || "Student";
    const year = document.getElementById("profile-year").value;
    const initials = name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
    document.getElementById("sidebar-name").textContent = name;
    document.getElementById("home-greeting").textContent = `Good morning, ${name.split(/\s+/)[0]}`;
    document.getElementById("profile-card-name").textContent = name;
    document.getElementById("profile-card-major").textContent = `${major} · Class of ${year}`;
    updatePhotoElement(document.getElementById("profile-avatar"), initials);
    updatePhotoElement(document.querySelector(".profile-mini .avatar"), initials);
    document.getElementById("profile-status").textContent = "Profile updated for this demo session.";
});
document.getElementById("auth-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (authMode === "signup") { setView("signup"); return; }
    document.getElementById("auth-status").textContent = "Demo login only. No account was accessed.";
    document.getElementById("auth-password").value = "";
});
document.getElementById("chat-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("chat-input");
    const text = input.value.trim();
    if (!text) return;
    chatThreads[activeThread].messages.push({ text, mine: true });
    chatThreads[activeThread].preview = text;
    input.value = "";
    renderThread();
});
document.getElementById("chat-search").addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    document.querySelectorAll(".chat-contact").forEach((button) => { button.hidden = !button.textContent.toLowerCase().includes(query); });
});
document.getElementById("event-calendar-button").addEventListener("click", () => window.alert("Calendar export is not connected in this local demo."));
window.addEventListener("hashchange", () => setView(window.location.hash.slice(1)));

renderPosts();
renderPeople();
renderSuggestions();
renderJobs();
renderEvents();
renderCommunities();
renderCourses();
renderThread();
if (window.location.hash) setView(window.location.hash.slice(1));
