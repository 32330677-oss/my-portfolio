import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function Projects({ t, lang, projects, stack, stackTitle }) {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHeader kicker={t.kicker} title={t.title} />

        <div className="projects-grid projects-featured">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} lang={lang} label={t.details} index={i} large />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 className="sub-title more-title reveal">{t.more}</h3>
            <div className="projects-grid projects-more">
              {others.map((project, i) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  lang={lang}
                  label={t.details}
                  index={featured.length + i}
                />
              ))}
            </div>
          </>
        )}

        <div className="stack reveal">
          <h3 className="stack-title">{stackTitle}</h3>
          <ul className="stack-list">
            {stack.map((s) => (
              <li key={s} className="mono">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
