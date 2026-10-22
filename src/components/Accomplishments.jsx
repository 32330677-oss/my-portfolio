import SectionHeader from "./SectionHeader";

// "About me" + achievements & certificates.
export default function Accomplishments({ t }) {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <SectionHeader title={t.title} />
          {t.paragraphs.map((p) => (
            <p key={p} className="about-text">{p}</p>
          ))}
        </div>

        <div>
          <h3 className="sub-title">{t.achievementsTitle}</h3>
          <ul className="achievements">
            {t.achievements.map((a) => (
              <li key={a.title}>
                <strong>{a.title}</strong>
                <span className="achievement-issuer">{a.issuer}</span>
                <span className="achievement-date">{a.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
