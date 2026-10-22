import SectionHeader from "./SectionHeader";

export default function Experience({ t, lang, items }) {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <SectionHeader title={t.title} />
        <ol className="timeline">
          {items.map((item, i) => {
            const x = item.text[lang];
            return (
              <li key={i} className={`timeline-item ${item.education ? "is-education" : ""}`}>
                <p className="timeline-date">
                  {item.education ? `${t.education}, ${item.date[lang]}` : item.date[lang]}
                </p>
                <div className="timeline-body">
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
