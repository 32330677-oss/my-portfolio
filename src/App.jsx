import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ProjectPage from "./components/ProjectPage";
import NotFound from "./components/NotFound";
import Skills from "./components/Skills";
import Quote from "./components/Quote";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import { portfolioData, contact, projects, experience, heroShots } from "./data/portfolioData";

// ---- small helpers -------------------------------------------------------
const storage = {
  get(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch { /* storage blocked */ }
  },
};

const getInitialLang = () => {
  const saved = storage.get("lang");
  if (saved === "en" || saved === "ar") return saved;
  return navigator.language?.startsWith("ar") ? "ar" : "en";
};

const getInitialTheme = () => {
  const saved = storage.get("theme");
  if (saved === "light" || saved === "dark") return saved;
  return "light";
};

// Simple hash router: "#/project/team-flow" shows a project page,
// anything else ("#services", "#contact", "") shows the home page.
const readHash = () => window.location.hash || "";
const projectSlugFrom = (hash) => {
  const m = hash.match(/^#\/project\/([\w-]+)/);
  return m ? m[1] : null;
};

const prefersReducedMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Sections the menu links to; the one on screen is highlighted in the menu.
const NAV_SECTIONS = ["projects", "skills", "experience", "awards", "contact"];

// ---- app -----------------------------------------------------------------
export default function App() {
  const [lang, setLang] = useState(getInitialLang);
  const [theme, setTheme] = useState(getInitialTheme);
  const [hash, setHash] = useState(readHash);
  const [activeId, setActiveId] = useState("");
  const hashRef = useRef(hash);
  const t = portfolioData[lang];

  const slug = projectSlugFrom(hash);
  const projectIndex = slug ? projects.findIndex((p) => p.slug === slug) : -1;
  const project = projectIndex >= 0 ? projects[projectIndex] : null;
  // Any "#/..." route that isn't a known project is a 404.
  const notFound = hash.startsWith("#/") && !project;

  // Language: direction, <html lang>, page title.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    document.title = notFound
      ? `404 | ${t.hero.name}`
      : project
        ? `${project.text[lang].title} | ${t.hero.name}`
        : `${t.hero.name} | ${t.hero.title}`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", project ? project.text[lang].summary : t.seoDescription);
    storage.set("lang", lang);
  }, [lang, t, project, notFound]);

  // Theme.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0E1626" : "#F3F1EC");
    storage.set("theme", theme);
  }, [theme]);

  // Follow the URL hash. Moving between the home page and a project page
  // uses a view transition (the project's picture grows into its page).
  useEffect(() => {
    const onHash = () => {
      const h = readHash();
      const from = hashRef.current;
      hashRef.current = h;
      const pageChange = h !== from && (h.startsWith("#/") || from.startsWith("#/"));
      if (pageChange && document.startViewTransition && !prefersReducedMotion()) {
        document.startViewTransition(() => flushSync(() => setHash(h)));
      } else {
        setHash(h);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Highlight the menu link of the section on screen (home page only).
  useEffect(() => {
    if (hash.startsWith("#/") || !("IntersectionObserver" in window)) {
      setActiveId("");
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [hash, lang]);

  // After a page change: project page → top; section link → scroll to it.
  useLayoutEffect(() => {
    if (hash.startsWith("#/")) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.replace(/^#/, "");
    if (id) document.getElementById(id)?.scrollIntoView();
  }, [hash]);

  return (
    <div className="app">
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar
        t={t.nav}
        name={t.hero.name}
        onToggleLang={() => setLang((l) => (l === "en" ? "ar" : "en"))}
        theme={theme}
        activeId={activeId}
        email={contact.email}
        onToggleTheme={() => setTheme((m) => (m === "dark" ? "light" : "dark"))}
      />

      <main id="main">
        {notFound ? (
          <NotFound t={t.notFound} />
        ) : project ? (
          <ProjectPage
            key={project.slug}
            project={project}
            nextProject={projects[(projectIndex + 1) % projects.length]}
            lang={lang}
            t={t.projectPage}
            contact={contact}
          />
        ) : (
          <>
            <Hero t={t.hero} contact={contact} lang={lang} heroShots={heroShots} />
            <Projects t={t.projectsSection} lang={lang} projects={projects} />
            <Skills t={t.skills} />
            <Experience t={t.experienceSection} lang={lang} items={experience} education={t.education} />
            <Quote t={t.quote} />
            <Awards t={t.awards} />
            <Contact t={t.contactSection} contact={contact} />
          </>
        )}
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {t.hero.name}</span>
          <span>{t.footer}</span>
        </div>
      </footer>

    </div>
  );
}
