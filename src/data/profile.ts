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
  /** CSS aspect-ratio of the featured card image; defaults to 16 / 10. */
  imageRatio?: string;
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
const hf = "/work/homefix-mobile";

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
    slug: "homefix-mobile",
    title: "HomeFix — React Native App for Field Service",
    short: "HomeFix Mobile",
    company: "Personal project",
    year: "2026",
    size: "large",
    problem:
      "Customers, technicians, managers and the owner of an appliance repair business needed one phone app to book, run and pay for repairs, on the same API as the BusinessHub web app.",
    built: [
      "React Native 0.86 + Expo SDK 57 app with Expo Router and TypeScript: one app, four roles (customer, technician, manager, owner)",
      "Customers book in 5 steps, follow the visit on a live step tracker, approve extra charges and pay with Razorpay's native checkout",
      "Technicians run the day with one-tap visit steps, call or open Maps, add notes, request extra work and collect cash or UPI",
    ],
    extra: [
      "Managers assign technicians, book for phone-in customers (including phone-only customers with no email) and see reports; the owner also manages services, users and the audit log",
      "JWT kept in the phone's secure keystore (expo-secure-store) and sent as a Bearer token; a 401 logs out and clears all cached data",
      "The server decides: free slots, prices, totals and permissions come from the API; a PostgreSQL exclusion constraint refuses double bookings and the app asks the user to pick again",
      "6-digit one-time codes finish reset-password, invite and email-verification flows inside the app, without a web link",
      "React Native Paper (Material 3) with light / dark mode and 8 app colours, TanStack Query, React Hook Form + Zod",
      "Vitest unit tests and Playwright end-to-end tests on phone-sized screens (Pixel 7, iPhone 14); EAS Build for the Android APK",
    ],
    result: { metric: "4", label: "roles in one app, on one shared API" },
    stack: ["React Native", "Expo", "Expo Router", "TypeScript", "React Native Paper", "TanStack Query", "React Hook Form", "Zod", "Razorpay", "Playwright", "EAS Build"],
    image: `${hf}/banner.jpg`,
    imageRatio: "1600 / 820",
    demoUrl: "https://drive.google.com/file/d/157z9WD6HO0IEs9F54uRjFi96dneqXbnd/view?usp=drive_link",
    repoUrl: "https://github.com/saierukala/businesshub-reactnative",
    gallery: [
      { src: `${hf}/banner.jpg`, alt: "HomeFix app screens: customer home, booking with live tracker, technician job and manager dashboard", caption: "Customer, technician and manager screens" },
      { src: `${hf}/app-colours.png`, alt: "The app in eight colour palettes, light and dark", caption: "Eight app colours, light and dark" },
      { src: `${hf}/login.png`, alt: "Log in screen", caption: "Log in", phone: true },
      { src: `${hf}/customer-home.png`, alt: "Customer home with upcoming visit and appliances", caption: "Customer home", phone: true },
      { src: `${hf}/book-step-4.png`, alt: "Booking step 4: picking a free time slot", caption: "Book: pick a time", phone: true },
      { src: `${hf}/booking-detail.png`, alt: "Booking detail with a live visit tracker", caption: "Booking with live tracker", phone: true },
      { src: `${hf}/technician-job.png`, alt: "Technician's job screen with call, map and visit steps", caption: "Technician's job", phone: true },
      { src: `${hf}/staff-dashboard.png`, alt: "Manager dashboard with revenue, bookings today and last 7 days", caption: "Manager dashboard", phone: true },
      { src: `${hf}/reports.png`, alt: "Reports screen", caption: "Reports", phone: true },
      { src: `${hf}/settings.png`, alt: "Settings with light / dark mode and app colour", caption: "Settings", phone: true },
      { src: `${hf}/customer-home-dark.png`, alt: "Customer home in dark mode", caption: "Customer home, dark", phone: true },
      { src: `${hf}/technician-job-dark.png`, alt: "Technician's job in dark mode", caption: "Technician's job, dark", phone: true },
      { src: `${hf}/profile.png`, alt: "Profile with photo", caption: "Profile", phone: true },
    ],
    videos: [
      { src: `${hf}/01-customer-books-a-repair.webm`, poster: `${hf}/01-customer-books-a-repair-poster.jpg`, title: "Customer books a repair", caption: "Log in, 5 booking steps, booking confirmed." },
      { src: `${hf}/03-technician-on-the-job.webm`, poster: `${hf}/03-technician-on-the-job-poster.jpg`, title: "Technician on the job", caption: "On my way, arrived, start work, then ask for an extra charge." },
      { src: `${hf}/06-manager-books-for-a-caller.webm`, poster: `${hf}/06-manager-books-for-a-caller-poster.jpg`, title: "Manager books for a caller", caption: "Booking for a phone-only customer who called in." },
      { src: `${hf}/09-settings-dark-mode.webm`, poster: `${hf}/09-settings-dark-mode-poster.jpg`, title: "Settings and dark mode", caption: "Switch to dark mode; the choice is saved on the device." },
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
    image: "/work/hrms.webp",
    gallery: [{ src: "/work/hrms.webp", alt: "HRMS attendance dashboard: present, late and on-leave counts, attendance table, leave approvals and the HR Assistant chat", caption: "Attendance, leave approvals and HR Assistant (illustrative, dummy data)" }],
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
    image: "/work/erp.webp",
    gallery: [{ src: "/work/erp.webp", alt: "TG Agros ERP inventory screen: SKU table with stock bars and low-stock status, server-side pagination and AI reorder recommendations", caption: "Inventory with AI reorder recommendations (illustrative, dummy data)" }],
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
    image: "/work/store.webp",
    gallery: [{ src: "/work/store.webp", alt: "Sri Lakshmi Kalamkari storefront: product grid and a checkout summary with the order total", caption: "Catalog and checkout (illustrative, dummy data)" }],
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
    image: "/work/news.webp",
    gallery: [{ src: "/work/news.webp", alt: "Swechaa news CMS: article list with Draft, Scheduled and Published status, e-paper edition preview and media upload", caption: "Article dashboard and e-paper editions (illustrative, dummy data)" }],
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
    items: ["React", "Next.js (App Router, SSR)", "TypeScript", "JavaScript ES6+", "Redux Toolkit", "TanStack Query", "React Hook Form", "Context API", "React Router", "Tailwind", "Material UI", "Vue.js", "Nuxt.js"],
  },
  { group: "Mobile", items: ["React Native (Expo)", "Expo Router", "React Native Paper"] },
  { group: "Back-End & AI", items: ["Node.js", "Express.js", "REST APIs", "Prisma", "Zod", "JWT Auth", "RBAC", "Razorpay", "Swagger/OpenAPI", "OpenAI API"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { group: "Testing & DevOps", items: ["Jest", "Vitest", "React Testing Library", "Supertest", "Playwright", "Git/GitHub", "GitHub Actions CI/CD", "Vercel", "Agile"] },
  { group: "AI Dev Tools", items: ["Claude Code", "Cursor", "Codex"] },
];

export const education = [
  { name: "NxtWave — MERN", dates: "2022–23" },
  { name: "B.Tech Mechanical, Malla Reddy Engineering College", dates: "2017–21" },
];
