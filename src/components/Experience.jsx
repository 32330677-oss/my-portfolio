import SectionHeader from "./SectionHeader";

export default function Experience({ t, lang, items }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader kicker={t.kicker} title={t.title} />
        <ol className="timeline">
          {items.map((item, i) => {
            const x = item.text[lang];
            return (
              <li key={i} className={`timeline-item reveal ${item.education ? "is-education" : ""}`}>
                <span className="timeline-dot" aria-hidden="true" />
                <div className="timeline-date mono">
                  {item.education && <span className="edu-label">{t.education} · </span>}
                  {item.date[lang]}
                </div>
                <div className="card timeline-card">
                  <h3>{x.role}</h3>
                  <p className="timeline-org">{x.org}</p>
                  <p className="timeline-desc">{x.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
