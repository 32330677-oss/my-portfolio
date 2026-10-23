import SectionHeader from "./SectionHeader";

export default function Experience({ t, lang, items, education }) {
  const e = education;
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <SectionHeader title={t.title} />
        <ol className="timeline">
          {items.map((item, i) => {
            const x = item.text[lang];
            return (
              <li key={i} className="timeline-item">
                <p className="timeline-date">{item.date[lang]}</p>
                <div className="timeline-body">
                  <h3>{x.role}</h3>
                  <p className="timeline-org">{x.org}</p>
                  <p className="timeline-desc">{x.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <h3 className="sub-title education-title">{e.title}</h3>
        <ol className="timeline">
          <li className="timeline-item">
            <p className="timeline-date">{e.date}</p>
            <div className="timeline-body">
              <h3>{e.degree}</h3>
              <p className="timeline-org">{e.school}</p>
              <p className="timeline-desc">{e.desc}</p>
            </div>
          </li>
          <li className="timeline-item">
            <p className="timeline-date">{e.dafiDate}</p>
            <div className="timeline-body">
              <h3>{e.dafiTitle}</h3>
              <p className="timeline-desc">{e.dafiDesc}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
