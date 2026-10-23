// Four key numbers right under the hero.
export default function Stats({ items }) {
  return (
    <section className="stats">
      <div className="container">
        <dl className="stats-grid">
          {items.map((s) => (
            <div key={s.label} className="stat">
              <dt className="stat-label">{s.label}</dt>
              <dd className="stat-value" dir="ltr">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
