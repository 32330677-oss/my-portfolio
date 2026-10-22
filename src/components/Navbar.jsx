import { useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";

export default function Navbar({ t, name, onToggleLang, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const links = [
    { href: "#services", label: t.services },
    { href: "#projects", label: t.projects },
    { href: "#packages", label: t.packages },
    { href: "#experience", label: t.experience },
    { href: "#faq", label: t.faq },
    { href: "#contact", label: t.contact },
  ];

  const themeLabel = theme === "dark" ? t.themeLight : t.themeDark;

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" onClick={close}>
          <Logo size={34} /> {name}
        </a>

        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm nav-cta" onClick={close}>
            {t.cta}
          </a>
        </nav>

        <div className="nav-actions">
          <button type="button" className="icon-btn" onClick={onToggleTheme} aria-label={themeLabel} title={themeLabel}>
            <Icon name={theme === "dark" ? "sun" : "moon"} size={20} />
          </button>
          <button type="button" className="icon-btn lang-btn" onClick={onToggleLang}>
            {t.langSwitch}
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
