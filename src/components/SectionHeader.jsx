export default function SectionHeader({ kicker, title }) {
  return (
    <div className="section-header reveal">
      <p className="kicker mono">// {kicker}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
