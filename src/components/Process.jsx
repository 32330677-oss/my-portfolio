import SectionHeader from "./SectionHeader";

export default function Process({ t }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader kicker={t.kicker} title={t.title} />
        <ol className="process">
          {t.steps.map((s, i) => (
            <li key={s.title} className="process-step reveal" style={{ "--d": `${i * 90}ms` }}>
              <span className="step-num mono">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
