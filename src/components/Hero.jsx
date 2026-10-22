import Icon from "./Icon";
import TypeWriter from "./TypeWriter";

export default function Hero({ t, contact }) {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <div className="hero-badge reveal">
            <span className="pulse" aria-hidden="true" /> {t.badge}
          </div>
          <p className="hero-title mono reveal">&lt;{t.title} /&gt;</p>
          <h1 className="reveal" aria-label={`${t.headlineStart} ${t.typed.join(", ")}`}>
            <span aria-hidden="true">{t.headlineStart}</span>
            <br />
            {/* key: restart typing when the language changes */}
            <TypeWriter key={t.typed.join("|")} words={t.typed} />
          </h1>
          <p className="hero-bio reveal">{t.bio}</p>

          <div className="hero-actions reveal">
            <a href="#contact" className="btn btn-primary">
              {t.primary} <Icon name="arrow" size={18} className="flip-rtl" />
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

        <div className="hero-card reveal" aria-hidden="true">
          <div className="code-window float">
            <div className="code-dots"><span /><span /><span /></div>
            <pre className="mono">
{`const project = {
  client: "`}<b>you</b>{`",
  platforms: ["web", "android", "ios"],
  languages: ["ar", "en"],
  status: "`}<b className="ok">launched</b>{`",
};`}
            </pre>
          </div>
          <p className="hero-name">{t.name}</p>
        </div>
      </div>

      <div className="container">
        <ul className="highlights reveal">
          {t.highlights.map((h) => (
            <li key={h.value}>
              <strong>{h.value}</strong>
              <span>{h.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
