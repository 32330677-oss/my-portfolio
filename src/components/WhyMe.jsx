import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

export default function WhyMe({ t }) {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeader kicker={t.kicker} title={t.title} />
        <div className="why-grid">
          {t.items.map((item, i) => (
            <div key={item.title} className="why-item reveal" style={{ "--d": `${i * 80}ms` }}>
              <div className="icon-box">
                <Icon name={item.icon} size={24} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
