import Icon from "./Icon";
import DeviceFrame from "./DeviceFrame";

const isDev = Boolean(import.meta.env?.DEV);

export default function ProjectPage({ project, nextProject, lang, t, contact }) {
  const p = project.text[lang];
  const next = nextProject.text[lang];
  const waText = encodeURIComponent(`${lang === "ar" ? "مرحبا حمزة، شفت مشروع" : "Hello Hamza, I saw your project"} ${p.title}`);

  return (
    <article className="project-page">
      <div className="container">
        <a href="#projects" className="back-link">
          <Icon name="arrow" size={18} className="flip-ltr" /> {t.back}
        </a>

        <header className="pp-header reveal">
          <span className="project-type">{p.category}</span>
          <h1>{p.title}</h1>
          <p className="pp-subtitle">{p.subtitle}</p>
          <p className="pp-summary">{p.summary}</p>

          <dl className="pp-meta">
            <div>
              <dt>{t.role}</dt>
              <dd>{p.role}</dd>
            </div>
            <div>
              <dt>{t.platforms}</dt>
              <dd>{p.platforms}</dd>
            </div>
            <div>
              <dt>{t.year}</dt>
              <dd>{project.year}</dd>
            </div>
          </dl>

          {(project.liveLink || project.codeLink) && (
            <div className="hero-actions">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                  {t.live} <Icon name="external" size={18} />
                </a>
              )}
              {project.codeLink && (
                <a href={project.codeLink} target="_blank" rel="noreferrer" className="btn btn-outline">
                  {t.code}
                </a>
              )}
            </div>
          )}
        </header>

        {project.images.length > 0 ? (
          <section className="pp-section">
            <h2 className="pp-h2 reveal">{t.gallery}</h2>
            <div className="gallery">
              {project.images.map((img, i) => (
                <figure
                  key={img.src}
                  className={`gallery-item reveal ${img.frame === "phone" ? "is-phone" : ""}`}
                  style={{ "--d": `${(i % 2) * 80}ms` }}
                >
                  <a href={img.src} target="_blank" rel="noreferrer">
                    <DeviceFrame src={img.src} alt={img.caption?.[lang] || p.title} frame={img.frame} />
                  </a>
                  {img.caption?.[lang] && <figcaption>{img.caption[lang]}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        ) : (
          isDev && (
            <p className="dev-hint">
              <Icon name="image" size={20} /> {t.devHint.replace("{slug}", project.slug)}
            </p>
          )
        )}

        <section className="pp-section pp-two">
          <div className="card pp-block reveal">
            <span className="pp-icon pp-icon-problem"><Icon name="alert" size={22} /></span>
            <h2 className="pp-h2">{t.problem}</h2>
            <p>{p.problem}</p>
          </div>
          <div className="card pp-block reveal" style={{ "--d": "80ms" }}>
            <span className="pp-icon"><Icon name="bulb" size={22} /></span>
            <h2 className="pp-h2">{t.solution}</h2>
            <p>{p.solution}</p>
          </div>
        </section>

        <section className="pp-section">
          <h2 className="pp-h2 reveal">{t.features}</h2>
          <ul className="feature-list">
            {p.features.map((f, i) => (
              <li key={f} className="reveal" style={{ "--d": `${(i % 2) * 60}ms` }}>
                <Icon name="check" size={20} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="pp-section reveal">
          <h2 className="pp-h2">{t.tech}</h2>
          <ul className="stack-list">
            {project.tags.map((tag) => (
              <li key={tag} className="mono">{tag}</li>
            ))}
          </ul>
        </section>

        <section className="pp-cta reveal">
          <div>
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaText}</p>
          </div>
          <a className="btn btn-primary" href={`https://wa.me/${contact.whatsapp}?text=${waText}`} target="_blank" rel="noreferrer">
            <Icon name="chat" size={18} /> {t.ctaButton}
          </a>
        </section>

        <a href={`#/project/${nextProject.slug}`} className="next-project reveal">
          <span>{t.next}</span>
          <strong>
            {next.title} <Icon name="arrow" size={22} className="flip-rtl" />
          </strong>
        </a>
      </div>
    </article>
  );
}
