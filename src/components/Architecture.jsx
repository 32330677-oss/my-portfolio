// Simplified system diagram: columns of boxes joined by arrows.
// Data: project.text[lang].architecture in src/data/portfolioData.js
import Icon from "./Icon";

export default function Architecture({ data }) {
  return (
    <figure className="arch">
      <div className="arch-grid">
        {data.columns.map((col, i) => (
          <div key={col.title} className="arch-cell">
            {i > 0 && (
              <span className="arch-arrow" aria-hidden="true">
                <Icon name="arrow" size={22} className="flip-rtl" />
              </span>
            )}
            <div className="arch-col">
              <h3 className="arch-title">{col.title}</h3>
              <ul className="arch-items">
                {col.items.map((item) => (
                  <li key={item.name} className="arch-item">
                    <strong>{item.name}</strong>
                    <span>{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {data.caption && <figcaption className="arch-caption">{data.caption}</figcaption>}
    </figure>
  );
}
