export default function SectionHeader({ title, lead }) {
  return (
    <header className="section-header">
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </header>
  );
}
