import SectionHeader from "./SectionHeader";

// Numbered on purpose: this is a real sequence.
export default function Process({ t }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader title={t.title} />
        <ol className="process">
          {t.steps.map((s, i) => (
            <li key={s.title} className="process-step">
              <span className="step-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
