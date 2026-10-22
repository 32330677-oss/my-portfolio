import { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyMe from "./components/WhyMe";
import Process from "./components/Process";
import Experience from "./components/Experience";
import Accomplishments from "./components/Accomplishments";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import ProjectPage from "./components/ProjectPage";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Packages from "./components/Packages";
import NotFound from "./components/NotFound";
import { portfolioData, contact, stack, projects, experience } from "./data/portfolioData";

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
  return "dark";
};

// Simple hash router: "#/project/team-flow" shows a project page,
// anything else ("#services", "#contact", "") shows the home page.
const readHash = () => window.location.hash || "";
const projectSlugFrom = (hash) => {
  const m = hash.match(/^#\/project\/([\w-]+)/);
  return m ? m[1] : null;
};

// Fade/slide elements with class "reveal" into view while scrolling.
function useReveal(deps) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

// ---- app -----------------------------------------------------------------
export default function App() {
  const [lang, setLang] = useState(getInitialLang);
  const [theme, setTheme] = useState(getInitialTheme);
  const [hash, setHash] = useState(readHash);
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
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#070b14" : "#f6f8fc");
    storage.set("theme", theme);
  }, [theme]);

  // Follow the URL hash.
  useEffect(() => {
    const onHash = () => setHash(readHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // After a page change: project page → top; section link → scroll to it.
  useLayoutEffect(() => {
    if (hash.startsWith("#/")) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.replace(/^#/, "");
    if (id) document.getElementById(id)?.scrollIntoView();
  }, [hash]);

  useReveal([hash, lang]);

  return (
    <div className="app">
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar
        t={t.nav}
        name={t.hero.name}
        onToggleLang={() => setLang((l) => (l === "en" ? "ar" : "en"))}
        theme={theme}
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
            <Hero t={t.hero} contact={contact} />
            <Services t={t.services} />
            <Projects t={t.projectsSection} lang={lang} projects={projects} stack={stack} stackTitle={t.stackTitle} />
            <WhyMe t={t.whyMe} />
            <Packages t={t.packages} contact={contact} />
            <Process t={t.process} />
            <Experience t={t.experienceSection} lang={lang} items={experience} />
            <Accomplishments t={t.about} />
            <Faq t={t.faq} />
            <ContactForm t={t.contactSection} contact={contact} />
          </>
        )}
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {t.hero.name}</span>
          <span className="mono">{t.footer}</span>
        </div>
      </footer>

      <WhatsAppFloat number={contact.whatsapp} label={t.contactSection.floating} />
    </div>
  );
}
