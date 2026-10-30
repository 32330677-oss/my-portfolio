import LiveDemo from "./LiveDemo";

export default function Hero({ t, contact, lang, heroShots }) {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          {/* Print-only: name and contact details at the top of the PDF. */}
          <div className="print-only print-header">
            <p className="print-name">{t.name}</p>
            <p dir="ltr">
              {t.title} | {contact.email} | {contact.whatsappDisplay}
              {contact.linkedin && ` | ${contact.linkedin.replace(/^https?:\/\/(www\.)?/, "")}`}
            </p>
          </div>
          <p className="hero-badge">
            <span className="badge-dot" aria-hidden="true" />
            {t.badge}
          </p>
          <h1>{t.headline}</h1>
          <p className="hero-bio">{t.bio}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              {t.primary}
            </a>
            <a href={`mailto:${contact.email}`} className="btn btn-outline">
              {t.secondary}
            </a>
            {contact.resumeUrl && (
              <a href={contact.resumeUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
                {t.resume}
              </a>
            )}
          </div>

          {t.openTo?.items?.length > 0 && (
            <div className="hero-open">
              <span className="hero-open-label">{t.openTo.label}</span>
              <ul>
                {t.openTo.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Animates once on load; after that it only moves when you use it. */}
        <LiveDemo key={lang} lang={lang} hint={t.demoHint} resetLabel={t.demoReset} heroShots={heroShots} />
      </div>
    </section>
  );
}
