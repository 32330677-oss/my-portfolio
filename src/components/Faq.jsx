import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

// <details>/<summary>: keyboard and screen-reader friendly with no extra JS.
export default function Faq({ t }) {
  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <SectionHeader title={t.title} />
        <div className="faq-list">
          {t.items.map((item, i) => (
            <details key={item.q} className="faq-item" open={i === 0}>
              <summary>
                <span>{item.q}</span>
                <Icon name="chevron" size={20} className="faq-chevron" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
