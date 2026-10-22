import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

export default function Packages({ t, contact }) {
  return (
    <section id="packages" className="section">
      <div className="container">
        <SectionHeader kicker={t.kicker} title={t.title} />
        <p className="section-lead reveal">{t.text}</p>

        <div className="packages-grid">
          {t.items.map((pkg, i) => {
            const wa = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`${t.waIntro} ${pkg.name}`)}`;
            return (
              <article
                key={pkg.name}
                className={`card package reveal ${pkg.popular ? "is-popular" : ""}`}
                style={{ "--d": `${i * 90}ms` }}
              >
                {pkg.popular && <span className="package-badge">{t.popular}</span>}
                <h3>{pkg.name}</h3>
                <p className="package-for">{pkg.for}</p>
                <ul className="package-features">
                  {pkg.features.map((f) => (
                    <li key={f}>
                      <Icon name="check" size={18} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${pkg.popular ? "btn-primary" : "btn-outline"}`}
                >
                  {t.cta}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
