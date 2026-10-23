import { useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";

export default function Navbar({ t, name, onToggleLang, theme, onToggleTheme, activeId, email }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const links = [
    { href: "#projects", label: t.projects },
    { href: "#skills", label: t.skills },
    { href: "#experience", label: t.experience },
    { href: "#awards", label: t.awards },
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
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${activeId === l.href.slice(1) ? "is-active" : ""}`}
              aria-current={activeId === l.href.slice(1) ? "location" : undefined}
              onClick={close}
            >
              {l.label}
            </a>
          ))}
          <a href={`mailto:${email}`} className="btn btn-primary btn-sm nav-cta" onClick={close}>
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
