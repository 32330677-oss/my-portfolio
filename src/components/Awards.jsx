import SectionHeader from "./SectionHeader";

export default function Awards({ t }) {
  return (
    <section id="awards" className="section">
      <div className="container">
        <SectionHeader title={t.title} />
        <ul className="achievements">
          {t.items.map((a) => (
            <li key={a.title}>
              <strong>{a.title}</strong>
              <span className="achievement-issuer">{a.org}</span>
              {a.date && <span className="achievement-date">{a.date}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
