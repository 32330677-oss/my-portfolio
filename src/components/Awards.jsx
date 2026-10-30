import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ShowMore from "./ShowMore";
import usePrinting from "./usePrinting";

// How many awards are shown before "Show all".
const VISIBLE = 5;

export default function Awards({ t }) {
  const [open, setOpen] = useState(false);
  const printing = usePrinting();
  const shown = open || printing ? t.items : t.items.slice(0, VISIBLE);
  return (
    <section id="awards" className="section">
      <div className="container">
        <SectionHeader title={t.title} />
        <ul className="achievements" id="awards-list">
          {shown.map((a) => (
            <li key={a.title}>
              <strong>{a.title}</strong>
              <span className="achievement-issuer">{a.org}</span>
              {a.date && <span className="achievement-date">{a.date}</span>}
            </li>
          ))}
        </ul>
        {t.items.length > VISIBLE && (
          <ShowMore
            open={open}
            total={t.items.length}
            onToggle={() => setOpen((v) => !v)}
            showAll={t.showAll}
            showLess={t.showLess}
            controls="awards-list"
          />
        )}
      </div>
    </section>
  );
}
