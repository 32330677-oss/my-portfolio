import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ShowMore from "./ShowMore";

// How many roles are shown before "Show all".
const VISIBLE = 3;

export default function Experience({ t, lang, items, education }) {
  const e = education;
  const [open, setOpen] = useState(false);
  const shown = open ? items : items.slice(0, VISIBLE);
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <SectionHeader title={t.title} />
        <ol className="timeline" id="experience-list">
          {shown.map((item, i) => {
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
        {items.length > VISIBLE && (
          <ShowMore
            open={open}
            total={items.length}
            onToggle={() => setOpen((v) => !v)}
            showAll={t.showAll}
            showLess={t.showLess}
            controls="experience-list"
          />
        )}

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
