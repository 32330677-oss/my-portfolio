import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

// Cards stay here: this is the one place people compare options side by side.
export default function Packages({ t, contact }) {
  return (
    <section id="packages" className="section section-alt">
      <div className="container">
        <SectionHeader title={t.title} lead={t.text} />

        <div className="packages-grid">
          {t.items.map((pkg) => {
            const wa = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`${t.waIntro} ${pkg.name}`)}`;
            return (
              <article key={pkg.name} className={`package ${pkg.popular ? "is-popular" : ""}`}>
                {pkg.popular && <p className="package-badge">{t.popular}</p>}
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
