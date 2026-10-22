import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

export default function Services({ t }) {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeader kicker={t.kicker} title={t.title} />
        <div className="services-grid">
          {t.items.map((s, i) => (
            <article key={s.icon} className="card service-card reveal" style={{ "--d": `${(i % 3) * 80}ms` }}>
              <div className="icon-box">
                <Icon name={s.icon} size={26} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
