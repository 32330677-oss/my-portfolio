export default function NotFound({ t }) {
  return (
    <section className="not-found">
      <div className="container">
        <p className="not-found-code">404</p>
        <h1>{t.title}</h1>
        <p>{t.text}</p>
        <a href="#top" className="btn btn-primary">{t.button}</a>
      </div>
    </section>
  );
}
