// Single source of truth for all site content. Edit here, not in components.

export type Metric = {
  value: string; // e.g. "300+", "~30%"
  label: string;
  source: string;
  spark: number[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  short: string;
  company: string;
  year: string;
  size: "large" | "medium";
  problem: string;
  built: string[];
  /** Extra detail shown only on the case-study page. */
  extra?: string[];
  result: { metric: string; label: string };
  stack: string[];
  /** Swap in a real screenshot later: put the file in /public and set e.g. "/work/hrms.png". */
  image?: string;
  mock?: "hrms" | "erp" | "store" | "news";
  /** Real screenshots shown on the case-study page (files in /public). */
  gallery?: { src: string; alt: string; caption: string; phone?: boolean }[];
  /** Short demo clips played inline on the case-study page. */
  videos?: { src: string; poster: string; title: string; caption: string }[];
  /** Full demo video (external). */
  demoUrl?: string;
  repoUrl?: string;
};

export const profile = {
  name: "Sai Erukala",
  initials: "SE",
  title: "Full-Stack Developer",
  url: "https://saierukala.vercel.app",
  email: "sai.erukala1508@gmail.com",
  // Leave a link empty ("") to hide its button everywhere.
  linkedin: "https://linkedin.com/in/saierukala",
  github: "",
  resume: "/Sai_Erukala_FullStack_Developer.pdf",
  location: "Hyderabad",
  lastUpdated: "2026-10-04",
  headline: "I build the internal tools 300+ people open every morning.",
  subline: ["Full-Stack Developer", "React", "Next.js", "Node.js", "PostgreSQL", "OpenAI"],
  availability: ["Hyderabad", "Open to relocation", "Immediate joiner"],
  description:
    "Full-Stack Developer with 3+ years building internal business software — HRMS, ERP, e-commerce and a news CMS — plus GPT-powered features inside them.",
  contactLine: "Hiring for a full-stack role? I can start Monday.",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "AI", href: "#ai" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const modules = ["Employees", "Attendance", "Leave", "Inventory", "Orders"];

export const metrics: Metric[] = [
  { value: "300+", label: "daily employees on HRMS", source: "HRMS @ UX Crafts", spark: [4, 5, 5, 7, 8, 8, 10, 12] },
  { value: "500+", label: "orders / month", source: "E-commerce @ Kwikkoder", spark: [3, 5, 4, 6, 8, 7, 10, 11] },
  { value: "~30%", label: "faster initial load", source: "TG Agros ERP @ UX Crafts", spark: [12, 11, 10, 9, 7, 6, 5, 4] },
  { value: "90+", label: "Lighthouse score", source: "Storefront @ Kwikkoder", spark: [6, 7, 8, 8, 9, 10, 10, 11] },
];

const bh = "/work/businesshub";

export const caseStudies: CaseStudy[] = [
  {
    slug: "businesshub",
    title: "BusinessHub — Appliance Repair Booking & Field Service",
    short: "BusinessHub",
    company: "Personal project",
    year: "2026",
    size: "large",
    problem:
      "HomeFix Appliance Services needed customers to book repairs online, staff to run the day and take phone bookings, and technicians to work jobs from a phone, without ever double-booking a technician.",
    built: [
      "Next.js 16 web app for three roles: a 5-step customer booking wizard, a staff console (dashboard, assignment, reports, audit log) and a mobile-first technician view",
      "Node/Express/TypeScript API on PostgreSQL + Prisma; an exclusion constraint (btree_gist) makes double booking impossible, even for two requests at the same moment",
      "Razorpay payments (test mode) with server-set amounts, signature checks and a signed webhook; pg-boss background jobs for email and in-app notifications",
    ],
    extra: [
      "Availability engine built from technician skills, service areas, working hours, time off and existing jobs; business time in Asia/Kolkata, stored in UTC",
      "One booking service for customers and staff; staff overrides need a reason, which goes into the audit log",
      "Booking status rules with status history and an Owner-only audit log",
      "bcrypt + JWT in httpOnly cookies, role and ownership checks on every endpoint, Zod validation on every request",
      "Vitest + Supertest API tests, Testing Library UI tests and Playwright end-to-end tests of both booking paths, run in GitHub Actions CI",
      "React Native (Expo) mobile app for technicians",
    ],
    result: { metric: "0", label: "double bookings, enforced by the database" },
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Zod", "pg-boss", "Razorpay", "Playwright", "React Native"],
    image: `${bh}/staff-dashboard.png`,
    demoUrl: "https://drive.google.com/file/d/1l30L5yxm4BNmt8Jmm4eeJWW5m8gabDfW/view?usp=drivesdk",
    repoUrl: "https://github.com/saierukala/businesshub-frontend",
    gallery: [
      { src: `${bh}/staff-dashboard.png`, alt: "Staff dashboard with today's bookings by status, pending assignments, revenue and technician workload", caption: "Staff dashboard" },
      { src: `${bh}/customer-home.png`, alt: "Customer home with upcoming visit, appliances, payments and reviews", caption: "Customer home" },
      { src: `${bh}/booking-wizard.png`, alt: "Booking wizard step for picking a date and a free time slot", caption: "Booking wizard" },
      { src: `${bh}/staff-reports.png`, alt: "Reports for bookings, revenue, services and technicians", caption: "Reports" },
      { src: `${bh}/audit-log.png`, alt: "Owner-only audit log with filters", caption: "Audit log" },
      { src: `${bh}/technician-phone.png`, alt: "Technician's job screen on a phone with large on my way, arrived and start buttons", caption: "Technician on a phone", phone: true },
    ],
    videos: [
      { src: `${bh}/01-customer-books-a-repair.webm`, poster: `${bh}/01-customer-books-a-repair-poster.png`, title: "Customer books a repair", caption: "The 5-step booking wizard, from appliance to a free time slot." },
      { src: `${bh}/03-technician-on-the-job.webm`, poster: `${bh}/03-technician-on-the-job-poster.png`, title: "Technician on the job", caption: "On my way, arrived, start: one-hand buttons on a phone." },
      { src: `${bh}/11-double-booking-refused.webm`, poster: `${bh}/11-double-booking-refused-poster.png`, title: "Double booking refused", caption: "Two bookings for the same technician and time: the second gets a 409." },
      { src: `${bh}/08-owner-dashboard-reports-audit.webm`, poster: `${bh}/08-owner-dashboard-reports-audit-poster.png`, title: "Owner: dashboard, reports, audit", caption: "The owner reviews the day, revenue and every change in the audit log." },
    ],
  },
  {
    slug: "hrms",
    title: "HRMS — Human Resource Management System",
    short: "HRMS",
    company: "UX Crafts",
    year: "2024–2026",
    size: "large",
    mock: "hrms",
    problem: "300+ employees needed one system for records, attendance, leave approvals and HR questions.",
    built: [
      "React + Tailwind front end for Employee, Attendance, Leave, Team, Projects and Help Desk modules",
      "Node/Express/MySQL REST APIs for attendance, multi-level leave approvals and ticketing",
      "GPT-powered HR Assistant answering leave, attendance, reimbursement, holiday and policy questions",
    ],
    extra: [
      "Validation, search and filtering that reduced data-entry errors",
      "Jest + React Testing Library tests on critical flows",
    ],
    result: { metric: "300+", label: "employees use it daily" },
    stack: ["React", "Tailwind", "Node.js", "Express", "MySQL", "OpenAI API", "Jest", "RTL"],
  },
  {
    slug: "tg-agros-erp",
    title: "TG Agros ERP",
    short: "ERP",
    company: "UX Crafts",
    year: "2024–2026",
    size: "large",
    mock: "erp",
    problem: "Sales, purchasing and inventory tables had to stay fast on large datasets.",
    built: [
      "Sales, Purchasing and Inventory modules in React + Redux Toolkit on a shared Material UI component library",
      "Node/Express APIs on PostgreSQL with server-side pagination and lazy loading for large tables",
      "OpenAI-generated inventory recommendations flagging shortages and reorder priorities",
    ],
    extra: ["Route-based code splitting, lazy loading and React.memo to cut initial load"],
    result: { metric: "~30%", label: "faster initial load" },
    stack: ["React", "Redux Toolkit", "Material UI", "Node.js", "Express", "PostgreSQL", "OpenAI API"],
  },
  {
    slug: "sri-lakshmi-kalamkari",
    title: "Sri Lakshmi Kalamkari — E-Commerce",
    short: "E-commerce",
    company: "Kwikkoder",
    year: "2023–2024",
    size: "medium",
    mock: "store",
    problem: "A storefront that stays fast and easy to check out on mobile.",
    built: [
      "Next.js SSR storefront with catalog, cart and checkout",
      "Node + PostgreSQL APIs for catalog, search and orders",
      "Mobile-first checkout flow",
    ],
    extra: ["Lighthouse 90+"],
    result: { metric: "500+", label: "orders / month" },
    stack: ["Next.js", "SSR", "Node.js", "PostgreSQL", "Tailwind"],
  },
  {
    slug: "swechaa-news-portal",
    title: "Swechaa News Portal & E-Paper",
    short: "News CMS",
    company: "UX Crafts",
    year: "2024–2026",
    size: "medium",
    mock: "news",
    problem: "Editors needed one dashboard to run articles, e-paper editions and short news.",
    built: [
      "Content dashboard for articles, e-paper editions and category short news",
      "Role-based access for editors and admins, with media uploads",
      "Live updates on the public portal",
    ],
    result: { metric: "Live", label: "updates on the public portal" },
    stack: ["React", "Node.js", "Express", "PostgreSQL", "RBAC"],
  },
];

export const aiCards = [
  {
    title: "HR Assistant",
    where: "HRMS @ UX Crafts",
    body: "GPT-powered assistant inside the HRMS that answers leave, attendance, reimbursement, holiday and policy questions.",
    stack: ["OpenAI API", "Node.js", "React"],
  },
  {
    title: "Inventory Recommendations",
    where: "TG Agros ERP @ UX Crafts",
    body: "OpenAI-generated recommendations that flag stock shortages and set reorder priorities.",
    stack: ["OpenAI API", "Node.js", "PostgreSQL"],
  },
];

export const aiWorkflow = "Day to day I build with Claude Code, Cursor and OpenAI Codex.";

export const askQuestions: { q: string; a: string }[] = [
  {
    q: "What did you build with OpenAI?",
    a: "Two things at UX Crafts. An HR Assistant inside the HRMS that answers leave, attendance, reimbursement, holiday and policy questions, and OpenAI-generated inventory recommendations in the TG Agros ERP that flag shortages and reorder priorities.",
  },
  {
    q: "Are you available now?",
    a: "Yes. I'm an immediate joiner, based in Hyderabad and open to relocation. My UX Crafts role ended in Jul 2026.",
  },
  {
    q: "Strongest stack?",
    a: "React, Next.js, Node.js, PostgreSQL and TypeScript. I use them to build full-stack business apps: React/Next.js front ends over Node/Express REST APIs on PostgreSQL.",
  },
  {
    q: "Biggest performance win?",
    a: "About 30% faster initial load on the TG Agros ERP, from route-based code splitting, lazy loading and React.memo, plus server-side pagination for large tables. The Next.js SSR storefront also holds a Lighthouse score of 90+.",
  },
  {
    q: "How do you test?",
    a: "Jest and React Testing Library on critical flows in the HRMS, alongside validation, search and filtering that cut data-entry errors.",
  },
];

export const experience = [
  {
    company: "UX Crafts",
    role: "Full-Stack (MERN) Developer",
    dates: "Nov 2024 – Jul 2026",
    location: "Hyderabad",
    points: [
      "HRMS used daily by 300+ employees",
      "TG Agros ERP and Swechaa News Portal",
      "GPT-powered HR Assistant and inventory recommendations",
    ],
  },
  {
    company: "Kwikkoder IT Solutions",
    role: "React Developer",
    dates: "Jun 2023 – Nov 2024",
    location: "Hyderabad",
    points: [
      "Sri Lakshmi Kalamkari Next.js storefront, 500+ orders / month",
      "Node + PostgreSQL APIs for catalog, search and orders",
    ],
  },
];

export const coreSkills = ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Front-End",
    items: ["React", "Next.js SSR", "TypeScript", "JavaScript ES6+", "Redux Toolkit", "Context API", "React Router", "Tailwind", "Material UI", "Vue.js", "Nuxt.js"],
  },
  { group: "Back-End & AI", items: ["Node.js", "Express.js", "REST APIs", "RBAC", "OpenAI API"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { group: "Testing & Tools", items: ["Jest", "React Testing Library", "Git/GitHub", "CI/CD", "Vercel", "Agile"] },
  { group: "AI Dev Tools", items: ["Claude Code", "Cursor", "Codex"] },
];

export const education = [
  { name: "NxtWave — MERN", dates: "2022–23" },
  { name: "B.Tech Mechanical, Malla Reddy Engineering College", dates: "2017–21" },
];
