import { Laptop, Phone } from "./Devices";

export default function Hero({ t, contact, lang, heroShots }) {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-badge">
            <span className="badge-dot" aria-hidden="true" />
            {t.badge}
          </p>
          <p className="hero-role">{t.name}, {t.title}</p>
          <h1>{t.headline}</h1>
          <p className="hero-bio">{t.bio}</p>
          <p className="hero-proof">{t.proof}</p>

          <div className="hero-actions">
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-primary">
              {t.primary}
            </a>
            <a href="#projects" className="btn btn-outline">
              {t.secondary}
            </a>
            {contact.resumeUrl && (
              <a href={contact.resumeUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
                {t.resume}
              </a>
            )}
          </div>
        </div>

        {/* The one animated moment on the page: the devices arrive on load. */}
        <div className="hero-stage" aria-hidden="true">
          <div className="stage-laptop">
            <Laptop src={heroShots.laptop} mock="payroll" lang={lang} />
          </div>
          <div className="stage-phone">
            <Phone src={heroShots.phone} mock="attendance" lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}
