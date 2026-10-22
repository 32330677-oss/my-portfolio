import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

// "About me" + achievements & certificates.
export default function Accomplishments({ t }) {
  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        <div>
          <SectionHeader kicker={t.kicker} title={t.title} />
          {t.paragraphs.map((p) => (
            <p key={p} className="about-text reveal">{p}</p>
          ))}
        </div>

        <div>
          <h3 className="sub-title reveal">{t.achievementsTitle}</h3>
          <ul className="achievements">
            {t.achievements.map((a, i) => (
              <li key={a.title} className="achievement reveal" style={{ "--d": `${i * 50}ms` }}>
                <span className="achievement-icon"><Icon name="award" size={20} /></span>
                <div>
                  <strong>{a.title}</strong>
                  <span>{a.issuer} · {a.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
