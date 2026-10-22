import Icon from "./Icon";
import DeviceFrame from "./DeviceFrame";
import { Phone } from "./Devices";

const isDev = Boolean(import.meta.env?.DEV);

export default function ProjectPage({ project, nextProject, lang, t, contact }) {
  const p = project.text[lang];
  const next = nextProject.text[lang];
  const waText = encodeURIComponent(`${lang === "ar" ? "مرحبا حمزة، شفت مشروع" : "Hello Hamza, I saw your project"} ${p.title}`);
  const hasImages = project.images.length > 0;

  return (
    <article className="project-page">
      <div className="container">
        <a href="#projects" className="back-link">
          <Icon name="arrow" size={18} className="flip-ltr" />
          {t.back}
        </a>

        <header className="pp-header">
          <div className="pp-intro">
            <p className="case-category">{p.category}</p>
            <h1>{p.title}</h1>
            <p className="pp-subtitle">{p.subtitle}</p>
            <p className="pp-summary">{p.summary}</p>

            {(project.liveLink || project.codeLink) && (
              <div className="hero-actions">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary">{t.live}</a>
                )}
                {project.codeLink && (
                  <a href={project.codeLink} target="_blank" rel="noreferrer" className="btn btn-outline">{t.code}</a>
                )}
              </div>
            )}
          </div>

          {!hasImages && project.mock && (
            <div className="pp-visual" aria-hidden="true">
              <Phone mock={project.mock} lang={lang} />
            </div>
          )}
        </header>

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

        {hasImages ? (
          <section className="pp-section">
            <h2 className="pp-h2">{t.gallery}</h2>
            <div className="gallery">
              {project.images.map((img) => (
                <figure key={img.src} className={`gallery-item ${img.frame === "phone" ? "is-phone" : ""}`}>
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

        <section className="pp-section pp-story">
          <div>
            <h2 className="pp-h2">{t.problem}</h2>
            <p>{p.problem}</p>
          </div>
          <div>
            <h2 className="pp-h2">{t.solution}</h2>
            <p>{p.solution}</p>
          </div>
        </section>

        <section className="pp-section">
          <h2 className="pp-h2">{t.features}</h2>
          <ul className="feature-list">
            {p.features.map((f) => (
              <li key={f}>
                <Icon name="check" size={20} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="pp-section">
          <h2 className="pp-h2">{t.tech}</h2>
          <p className="stack-list" dir="ltr">{project.tags.join(", ")}</p>
        </section>

        <section className="pp-cta">
          <div>
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaText}</p>
          </div>
          <a className="btn btn-primary" href={`https://wa.me/${contact.whatsapp}?text=${waText}`} target="_blank" rel="noreferrer">
            {t.ctaButton}
          </a>
        </section>

        <a href={`#/project/${nextProject.slug}`} className="next-project">
          <span>{t.next}</span>
          <strong>{next.title}</strong>
        </a>
      </div>
    </article>
  );
}
