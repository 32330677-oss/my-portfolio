import SectionHeader from "./SectionHeader";

export default function WhyMe({ t }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader title={t.title} />
        <dl className="why-grid">
          {t.items.map((item) => (
            <div key={item.title} className="why-item">
              <dt>{item.title}</dt>
              <dd>{item.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
