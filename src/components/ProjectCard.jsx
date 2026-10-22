import Icon from "./Icon";
import DeviceFrame from "./DeviceFrame";

// A project tile on the home page. The whole card links to the project's page.
export default function ProjectCard({ project, lang, label, index, large }) {
  const p = project.text[lang];
  const cover = project.images[0];

  return (
    <a
      href={`#/project/${project.slug}`}
      className={`card project-card reveal ${large ? "project-card-large" : ""}`}
      style={{ "--d": `${(index % 3) * 80}ms` }}
    >
      {large && cover && (
        <div className={`project-cover cover-${cover.frame || "none"}`}>
          <DeviceFrame src={cover.src} alt="" frame={cover.frame} />
        </div>
      )}
      <div className="project-body">
        <div className="project-head">
          <span className="project-num mono">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-type">{p.category}</span>
        </div>
        <h3 className="card-title">{p.title}</h3>
        <p className="project-subtitle">{p.subtitle}</p>
        <p className="card-desc">{p.summary}</p>

        <div className="tag-container">
          {project.tags.slice(0, large ? 6 : 3).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <span className="card-more">
          {label} <Icon name="arrow" size={18} className="flip-rtl" />
        </span>
      </div>
    </a>
  );
}
