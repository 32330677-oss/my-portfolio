import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

// A plain list reads faster than six identical cards.
export default function Services({ t }) {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeader title={t.title} />
        <ul className="service-list">
          {t.items.map((s) => (
            <li key={s.icon} className="service-row">
              <span className="service-icon"><Icon name={s.icon} size={22} /></span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
