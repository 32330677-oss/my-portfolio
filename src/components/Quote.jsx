export default function Quote({ t }) {
  return (
    <section className="quote-band">
      <div className="container">
        <figure className="quote">
          <blockquote>
            <p>{t.text}</p>
          </blockquote>
          <figcaption>
            <strong>{t.name}</strong>
            <span>{t.role}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
