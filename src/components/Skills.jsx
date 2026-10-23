import SectionHeader from "./SectionHeader";

export default function Skills({ t }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader title={t.title} />
        <div className="skills-grid">
          {t.groups.map((g) => (
            <div key={g.title} className="skill-group">
              <h3>{g.title}</h3>
              <p className="skill-desc">{g.desc}</p>
              <p className="skill-items">{g.items}</p>
            </div>
          ))}
        </div>
        <p className="skills-langs">{t.languages}</p>
      </div>
    </section>
  );
}
