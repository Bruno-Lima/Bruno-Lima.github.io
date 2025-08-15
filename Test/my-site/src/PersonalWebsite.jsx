import React, { useMemo, useState, useEffect } from "react";

//import useTheme from "./useTheme"; // ou do mesmo ficheiro, se mantiveres no App.jsx

/**
 * Assistant Professor Personal Website — Single-file React Component
 * - Clean, modern, mobile-first layout with Tailwind CSS classes
 * - Sections: About, News, Publications, Teaching, Students, Projects, Contact
 * - Easy to customize: edit the data objects below
 * - Light/Dark theme toggle with localStorage persistence
 * - Smooth in-page navigation
 */

// =====================
// 1) EDIT YOUR PROFILE
// =====================
const PROFILE = {
  name: "Bruno Lima, Ph.D.",
  role: "Assistant Professor",
  dept: "Department of Informatics Engineering (DEI) — Faculty of Engineering, University of Porto (FEUP)",
  location: "Porto, Portugal",
  email: "brunolima@fe.up.pt",
  scholar: "https://scholar.google.com/",
  github: "https://github.com/username",
  twitter: "https://twitter.com/username",
  linkedin: "https://www.linkedin.com/in/username/",
  orcid: "https://orcid.org/0000-0000-0000-0000",
  cv_url: "#", // link a PDF CV here
  headshot: import.meta.env.BASE_URL + "images/bruno.jpg", // optional: link to an image URL
  interests: [
    "Software Testing",
    "Requirements Engineering",
    "IoT Systems",
    "LLMs in Education",
  ],
  shortBio:
    "I am an Assistant Professor whose research focuses on software testing, IoT systems, and the impact of large language models on engineering education. I collaborate with industry and interdisciplinary teams to build trustworthy, sustainable, and human-centered software.",
  lab_name: "LIACC — Artificial Intelligence and Computer Science Laboratory",
  lab_url: "https://www.liacc.up.pt/",

};

// ================
// 2) NEWS / UPDATES
// ================
const NEWS = [
  { date: "2025-08-01", text: "Our paper on LLMs in programming education was accepted!" },
  { date: "2025-07-10", text: "Opened two MSc positions on IoT testing frameworks." },
];

// =================
// 3) PUBLICATIONS
// =================
const PUBLICATIONS = [
  {
    year: 2025,
    title:
      "When Knowing Isn’t Required: How LLMs Challenge the Foundations of Programming Education",
    authors: ["Your Name", "Coauthor A", "Coauthor B"],
    venue: "IEEE Transactions on Education",
    links: { doi: "https://doi.org/xx.xxxx/xxxxx", pdf: "#", code: "#" },
    tags: ["LLM", "Education", "SE"],
  },
  {
    year: 2024,
    title: "Challenges of Testing IoT Systems: A Systematic Review",
    authors: ["Your Name", "Coauthor C"],
    venue: "IEEE Access",
    links: { doi: "#", pdf: "#" },
    tags: ["IoT", "Testing", "SLR"],
  },
];

// ==============
// 4) TEACHING
// ==============
const COURSES = [
  {
    code: "CS101",
    name: "Introduction to Programming for IoT",
    term: "Fall 2025",
    role: "Instructor",
    page: "#",
    summary:
      "Foundations of IoT programming: sensors/actuators, MQTT, Node-RED, and cloud dashboards.",
  },
  {
    code: "CS405",
    name: "Software Testing and Quality Assurance",
    term: "Spring 2026",
    role: "Instructor",
    page: "#",
    summary: "Unit testing, property-based testing, CI, and test automation for modern systems.",
  },
];

// ===============
// 5) STUDENTS
// ===============
const CURRENT_STUDENTS = [
  { name: "Student A", program: "PhD", topic: "Model-based testing for IoT" },
  { name: "Student B", program: "MSc", topic: "RAG for clinical ADT records" },
];
const ALUMNI = [
  { name: "Alumnus One", program: "MSc 2024", placement: "Deloitte — Software Engineer" },
  { name: "Alumna Two", program: "PhD 2023", placement: "University of X — Assistant Professor" },
];

// ===============
// 6) PROJECTS
// ===============
const PROJECTS = [
  {
    title: "URBAN-NET",
    subtitle: "AI for sustainable urban infrastructure",
    role: "PI / Work Package Lead",
    years: "2024–2027",
    summary:
      "Optimizing municipal EV charging and mobility using AI/IoT, with a focus on resilience and green software.",
    links: { site: "#", repo: "#" },
  },
  {
    title: "AISPO",
    subtitle: "ML optimization for swimming pool operations",
    role: "Co-PI",
    years: "2023–2025",
    summary:
      "Energy-efficient scheduling and predictive maintenance for public facilities using time-series ML.",
    links: { site: "#" },
  },
];

// Helper: simple date format
function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}

// Theme hook with localStorage
function useThemeBruno() {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    // se não existir valor guardado, usar preferência do SO
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return { theme, toggle };
}

// Section wrapper
function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-12" aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-5xl px-4">
        <h2
          id={`${id}-title`}
          className="text-2xl md:text-3xl font-semibold tracking-tight mb-6"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

// Chip component
const Chip = ({ label }) => (
  <span className="inline-flex items-center rounded-full border px-2 py-1 text-xs mr-2 mb-2 dark:border-zinc-700">
    {label}
  </span>
);

// Nav links
const NAV = [
  { id: "about", label: "About" },
  { id: "news", label: "News" },
  { id: "publications", label: "Publications" },
  { id: "teaching", label: "Teaching" },
  { id: "students", label: "Students" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function PersonalWebsite() {
  const { theme, toggle } = useThemeBruno();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Header / Hero */}
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur dark:bg-zinc-950/70 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div>
                <div className="font-semibold leading-tight">{PROFILE.name}</div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  {PROFILE.role}
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-4">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="text-sm px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  {n.label}
                </button>
              ))}
              <button
                 onClick={toggle}
                 className="ml-2 rounded-lg border px-3 py-1 text-sm dark:border-zinc-700"
                  aria-label="Alternar tema"
                  >
                   {theme === "dark" ? "☀️" : "🌙"}
                  </button>
            </nav>

            <button
              className="md:hidden rounded-lg border px-3 py-1 text-sm dark:border-zinc-700"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              Menu
            </button>
          </div>
        </div>
        {menuOpen && (
          <div id="mobile-nav" className="md:hidden border-t dark:border-zinc-800">
            <div className="mx-auto max-w-6xl px-4 py-2 flex flex-wrap gap-2">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="text-sm px-3 py-2 rounded bg-zinc-100 dark:bg-zinc-800"
                >
                  {n.label}
                </button>
              ))}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded bg-zinc-100 px-3 py-2 text-sm dark:bg-zinc-800"
              >
                {theme === "dark" ? "Light" : "Dark"} mode
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero banner */}
      <div className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
        <div className="mx-auto max-w-5xl px-4 py-12">
          {PROFILE.headshot && (
            <img
              src={PROFILE.headshot}
              alt={`${PROFILE.name} headshot`}
              className="h-40 w-40 rounded-full object-cover shadow-lg mx-auto mb-6 border-4 border-white dark:border-zinc-900"
            />
          )}

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            {PROFILE.name}
          </h1>
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            {PROFILE.role} · {PROFILE.dept}
          </p>
          {PROFILE.lab_name && (
            <p className="mt-1 text-zinc-700 dark:text-zinc-300">
              Research Lab: {PROFILE.lab_url ? (<a className="underline" href={PROFILE.lab_url}>{PROFILE.lab_name}</a>) : PROFILE.lab_name}
            </p>
          )}
          <p className="mt-4 max-w-3xl text-zinc-700 dark:text-zinc-300">
            {PROFILE.shortBio}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            {PROFILE.cv_url !== "#" && (
              <a
                href={PROFILE.cv_url}
                className="rounded-lg border px-3 py-1 dark:border-zinc-700"
              >
                Download CV
              </a>
            )}
            {PROFILE.scholar && (
              <a className="underline" href={PROFILE.scholar}>
                Google Scholar
              </a>
            )}
            {PROFILE.github && (
              <a className="underline" href={PROFILE.github}>
                GitHub
              </a>
            )}
            {PROFILE.linkedin && (
              <a className="underline" href={PROFILE.linkedin}>
                LinkedIn
              </a>
            )}
            {PROFILE.twitter && (
              <a className="underline" href={PROFILE.twitter}>
                X/Twitter
              </a>
            )}
            {PROFILE.orcid && (
              <a className="underline" href={PROFILE.orcid}>
                ORCID
              </a>
            )}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {PROFILE.interests.map((k) => (
              <Chip key={k} label={k} />
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <main>
        <Section id="about" title="About">
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p>
              {PROFILE.shortBio}
            </p>
            <p>
              I am based in <strong>{PROFILE.location}</strong>. I welcome collaborations and
              supervise motivated students in my research areas.
            </p>
          </div>
        </Section>

        <Section id="news" title="News">
          <ul className="space-y-3">
            {NEWS.map((n, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 w-28 shrink-0">
                  {formatDate(n.date)}
                </div>
                <div className="flex-1">{n.text}</div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="publications" title="Selected Publications">
          <div className="space-y-6">
            {PUBLICATIONS.sort((a, b) => b.year - a.year).map((p, i) => (
              <article key={i} className="rounded-2xl border p-4 dark:border-zinc-800">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                  <span className="text-sm text-zinc-500">{p.year}</span>
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {p.authors.join(", ")} — <em>{p.venue}</em>
                </div>
                {p.tags?.length ? (
                  <div className="mt-2">
                    {p.tags.map((t) => (
                      <Chip key={t} label={t} />
                    ))}
                  </div>
                ) : null}
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  {p.links?.doi && (
                    <a className="underline" href={p.links.doi}>
                      DOI
                    </a>
                  )}
                  {p.links?.pdf && (
                    <a className="underline" href={p.links.pdf}>
                      PDF
                    </a>
                  )}
                  {p.links?.code && (
                    <a className="underline" href={p.links.code}>
                      Code
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="teaching" title="Teaching">
          <div className="overflow-x-auto rounded-2xl border dark:border-zinc-800">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-3 py-2 text-left">Code</th>
                  <th className="px-3 py-2 text-left">Course</th>
                  <th className="px-3 py-2 text-left">Term</th>
                  <th className="px-3 py-2 text-left">Role</th>
                  <th className="px-3 py-2 text-left">Links</th>
                </tr>
              </thead>
              <tbody>
                {COURSES.map((c, i) => (
                  <tr key={i} className="border-t dark:border-zinc-800">
                    <td className="px-3 py-2">{c.code}</td>
                    <td className="px-3 py-2 font-medium">{c.name}
                      <div className="text-xs text-zinc-600 dark:text-zinc-400 max-w-xl">{c.summary}</div>
                    </td>
                    <td className="px-3 py-2">{c.term}</td>
                    <td className="px-3 py-2">{c.role}</td>
                    <td className="px-3 py-2">{c.page !== "#" ? <a className="underline" href={c.page}>Page</a> : <span className="text-zinc-500">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="students" title="Students">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Current</h3>
              <ul className="space-y-2">
                {CURRENT_STUDENTS.map((s, i) => (
                  <li key={i} className="rounded-xl border p-3 dark:border-zinc-800">
                    <div className="font-medium">{s.name}</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      {s.program} — {s.topic}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Alumni</h3>
              <ul className="space-y-2">
                {ALUMNI.map((s, i) => (
                  <li key={i} className="rounded-xl border p-3 dark:border-zinc-800">
                    <div className="font-medium">{s.name}</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      {s.program} — {s.placement}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <article key={i} className="rounded-2xl border p-5 dark:border-zinc-800">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                  <span className="text-sm text-zinc-500">{p.years}</span>
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{p.subtitle}</div>
                <div className="text-sm">{p.summary}</div>
                <div className="mt-3 flex gap-3 text-sm">
                  {p.links?.site && (
                    <a className="underline" href={p.links.site}>Website</a>
                  )}
                  {p.links?.repo && (
                    <a className="underline" href={p.links.repo}>Repository</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="rounded-2xl border p-6 dark:border-zinc-800">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Email is the best way to reach me:
            </p>
            <p className="mt-1 text-lg font-medium">{PROFILE.email}</p>
            <div className="mt-4 text-sm">
              <p>Department: {PROFILE.dept}</p>
              <p>Location: {PROFILE.location}</p>
              {PROFILE.lab_name && (
                <p>Research Lab: {PROFILE.lab_url ? (<a className="underline" href={PROFILE.lab_url}>{PROFILE.lab_name}</a>) : PROFILE.lab_name}</p>
              )}
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-zinc-600 dark:text-zinc-400 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4">
          © {new Date().getFullYear()} {PROFILE.name}. Built with React + Tailwind.
        </div>
      </footer>
    </div>
  );
}
