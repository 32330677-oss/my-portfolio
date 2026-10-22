// Drawn screens based on the real Team Flow / Equipment Flow features.
// Shown until real screenshots are added (heroShots and each project's
// `images` in src/data/portfolioData.js).
// In the hero they are interactive: see LiveDemo.jsx.

export const mockText = {
  en: {
    site: "North site, today",
    submit: "Submit day",
    submittedAll: "Day submitted",
    approved: "Approved",
    submitted: "Submitted",
    draft: "Draft",
    payroll: "Payroll preview, October",
    worker: "Worker",
    days: "Days",
    hours: "Hours",
    net: "Net",
    total: "Total",
    excel: "Download Excel",
    save: "Save batch",
    machines: "Machines today",
    working: "Working",
    paused: "Paused",
    out: "Checked out",
    approve: "Approve",
    people: ["Ahmad K.", "Omar S.", "Khaled M.", "Yousef A.", "Hasan R."],
    equipment: ["Excavator 320", "Wheel loader", "Mobile crane", "Dump truck"],
  },
  ar: {
    site: "الموقع الشمالي، اليوم",
    submit: "إرسال اليوم",
    submittedAll: "انبعت اليوم",
    approved: "معتمد",
    submitted: "مُرسل",
    draft: "مسودة",
    payroll: "معاينة الرواتب، تشرين الأول",
    worker: "العامل",
    days: "أيام",
    hours: "ساعات",
    net: "الصافي",
    total: "المجموع",
    excel: "تحميل Excel",
    save: "حفظ الدفعة",
    machines: "الآليات اليوم",
    working: "شغّالة",
    paused: "متوقفة",
    out: "طلعت",
    approve: "اعتماد",
    people: ["أحمد ك.", "عمر س.", "خالد م.", "يوسف أ.", "حسن ر."],
    equipment: ["حفارة 320", "شيول", "رافعة متحركة", "قلاب"],
  },
};

export const attendanceTimes = [
  ["07:02", "16:05"],
  ["06:58", "16:00"],
  ["07:15", "16:10"],
  ["07:00", "16:02"],
  ["07:04", "16:02"],
];

export const initialStatuses = ["approved", "approved", "submitted", "draft", "submitted"];

// Before today: days, hours, hourly rate.
export const payrollBase = [
  [25, 203, 5.85],
  [24, 195, 5.83],
  [25, 221, 5.93],
  [21, 167, 5.8],
  [25, 205, 5.86],
];
export const TODAY_HOURS = 9;

export const payrollRows = (statuses) =>
  payrollBase.map(([d, h, rate], i) => {
    const today = statuses[i] === "approved";
    const days = d + (today ? 1 : 0);
    const hours = h + (today ? TODAY_HOURS : 0);
    return { days, hours, net: Math.round(hours * rate) };
  });

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
