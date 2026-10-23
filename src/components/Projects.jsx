import CaseStudy from "./CaseStudy";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function Projects({ t, lang, projects }) {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHeader title={t.title} />

        <div className="cases">
          {featured.map((project, i) => (
            <CaseStudy key={project.slug} project={project} lang={lang} label={t.details} flip={i % 2 === 1} />
          ))}
        </div>

        {others.length > 0 && (
          <div className="more-projects">
            <h3 className="sub-title">{t.more}</h3>
            <ul className="project-rows">
              {others.map((project) => (
                <ProjectCard key={project.slug} project={project} lang={lang} label={t.more_details} />
              ))}
            </ul>
          </div>
        )}

      </div>
    </section>
  );
}
