// Drawn screens based on the real Team Flow / Equipment Flow features.
// Shown until real screenshots are added (heroShots and each project's
// `images` in src/data/portfolioData.js).
// In the hero they are interactive: see LiveDemo.jsx.

import { mockText, attendanceTimes, initialStatuses, payrollRows } from "./appMockData";

const fmt = (n) => n.toLocaleString("en-US");

export function Attendance({ t, statuses = initialStatuses, onToggle, onSubmit, submitted }) {
  const interactive = Boolean(onToggle);
  return (
    <div className="mock mock-phone-ui">
      <div className="mock-bar">
        <span className="mock-title">{t.site}</span>
      </div>
      <ul className="mock-list">
        {statuses.map((st, i) => {
          const [inT, outT] = attendanceTimes[i];
          const content = (
            <>
              <span className="mock-avatar">{t.people[i].charAt(0)}</span>
              <span className="mock-name">
                {t.people[i]}
                <small dir="ltr">{inT} – {st === "draft" ? "—" : outT}</small>
              </span>
              <span className={`chip chip-${st}`}>{t[st]}</span>
            </>
          );
          return (
            <li key={i}>
              {interactive ? (
                <button
                  type="button"
                  className="mock-row-btn"
                  onClick={() => onToggle(i)}
                  aria-label={`${t.people[i]}: ${t[st]}`}
                >
                  {content}
                </button>
              ) : (
                <span className="mock-row">{content}</span>
              )}
            </li>
          );
        })}
      </ul>
      {interactive ? (
        <button type="button" className="mock-button" onClick={onSubmit} disabled={submitted}>
          {submitted ? t.submittedAll : t.submit}
        </button>
      ) : (
        <span className="mock-button">{t.submit}</span>
      )}
    </div>
  );
}

export function Payroll({ t, statuses = initialStatuses, flash = -1 }) {
  const rows = payrollRows(statuses);
  const totalHours = rows.reduce((a, r) => a + r.hours, 0);
  const totalNet = rows.reduce((a, r) => a + r.net, 0);
  return (
    <div className="mock mock-desktop-ui">
      <div className="mock-bar">
        <span className="mock-title">{t.payroll}</span>
        <span className="mock-actions">
          <span className="mock-btn-ghost">{t.excel}</span>
          <span className="mock-btn">{t.save}</span>
        </span>
      </div>
      <table className="mock-table">
        <thead>
          <tr>
            <th>{t.worker}</th>
            <th>{t.days}</th>
            <th>{t.hours}</th>
            <th>{t.net}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            // the key changes with the value, so the highlight replays on every change
            <tr key={`${i}-${r.days}`} className={flash === i ? "is-flash" : ""}>
              <td>{t.people[i]}</td>
              <td>{r.days}</td>
              <td>{r.hours}</td>
              <td>{fmt(r.net)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr key={totalNet} className={flash >= 0 ? "is-flash" : ""}>
            <td>{t.total}</td>
            <td></td>
            <td>{fmt(totalHours)}</td>
            <td>{fmt(totalNet)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function Machines({ t }) {
  const rows = [
    ["working", "6.5"],
    ["paused", "3.0"],
    ["working", "7.0"],
    ["out", "8.0"],
  ];
  return (
    <div className="mock mock-phone-ui">
      <div className="mock-bar">
        <span className="mock-title">{t.machines}</span>
      </div>
      <ul className="mock-list">
        {rows.map(([st, h], i) => (
          <li key={i}>
            <span className="mock-row">
              <span className="mock-avatar mock-square">{t.equipment[i].charAt(0)}</span>
              <span className="mock-name">
                {t.equipment[i]}
                <small dir="ltr">{h} h</small>
              </span>
              <span className={`chip chip-${st}`}>{t[st]}</span>
            </span>
          </li>
        ))}
      </ul>
      <span className="mock-button">{t.submit}</span>
    </div>
  );
}

export default function AppMock({ variant, lang }) {
  const t = mockText[lang] || mockText.en;
  if (variant === "payroll") return <Payroll t={t} />;
  if (variant === "machines") return <Machines t={t} />;
  return <Attendance t={t} />;
}
