// A smaller project, shown as one row on the home page.
export default function ProjectCard({ project, lang, label }) {
  const p = project.text[lang];
  return (
    <li className="project-row">
      <a href={`#/project/${project.slug}`}>
        <span className="project-row-main">
          <strong>{p.title}</strong>
          <span>{p.summary}</span>
        </span>
        <span className="project-row-meta">
          <span>{p.category}</span>
          <span>{project.year}</span>
        </span>
        <span className="project-row-link">{label}</span>
      </a>
    </li>
  );
}
