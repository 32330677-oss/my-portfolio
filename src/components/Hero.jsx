import LiveDemo from "./LiveDemo";

export default function Hero({ t, contact, lang, heroShots }) {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
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
        </div>

        {/* Animates once on load; after that it only moves when you use it. */}
        <LiveDemo key={lang} lang={lang} hint={t.demoHint} resetLabel={t.demoReset} heroShots={heroShots} />
      </div>
    </section>
  );
}
