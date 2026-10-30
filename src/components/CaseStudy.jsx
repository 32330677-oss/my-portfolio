import MockScene from "./MockScene";
import DeviceFrame from "./DeviceFrame";

// A featured project on the home page: big visual + the story in short.
export default function CaseStudy({ project, lang, label, flip }) {
  const p = project.text[lang];
  const cover = project.images[0];

  return (
    <article className={`case ${flip ? "case-flip" : ""}`}>
      <div className="case-visual" style={{ viewTransitionName: `visual-${project.slug}` }}>
        {cover ? (
          <DeviceFrame src={cover.src} alt={cover.caption?.[lang] || p.title} frame={cover.frame} />
        ) : (
          <MockScene mock={project.mock} lang={lang} />
        )}
      </div>

      <div className="case-text">
        <p className="case-category">{p.category}</p>
        <h3>{p.title}</h3>
        <p className="case-subtitle">{p.subtitle}</p>
        <p className="case-summary">{p.summary}</p>
        <ul className="case-points">
          {p.features.slice(0, 3).map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <a href={`#/project/${project.slug}`} className="btn btn-outline">
          {label}
        </a>
      </div>
    </article>
  );
}
