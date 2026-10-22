// Drawn screens based on the real Team Flow / Equipment Flow features.
// They are shown until real screenshots are added (see heroShots and
// each project's `images` in src/data/portfolioData.js).

const text = {
  en: {
    site: "North site, today",
    submit: "Submit day",
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
    people: ["Ahmad K.", "Omar S.", "Khaled M.", "Yousef A.", "Hasan R."],
    equipment: ["Excavator 320", "Wheel loader", "Mobile crane", "Dump truck"],
  },
  ar: {
    site: "الموقع الشمالي، اليوم",
    submit: "إرسال اليوم",
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
    people: ["أحمد ك.", "عمر س.", "خالد م.", "يوسف أ.", "حسن ر."],
    equipment: ["حفارة 320", "شيول", "رافعة متحركة", "قلاب"],
  },
};

function Attendance({ t }) {
  const rows = [
    ["07:02", "16:05", "approved"],
    ["06:58", "16:00", "approved"],
    ["07:15", "16:10", "submitted"],
    ["07:00", "—", "draft"],
    ["07:04", "16:02", "submitted"],
  ];
  return (
    <div className="mock mock-phone-ui">
      <div className="mock-bar">
        <span className="mock-title">{t.site}</span>
      </div>
      <ul className="mock-list">
        {rows.map(([inT, outT, st], i) => (
          <li key={i}>
            <span className="mock-avatar">{t.people[i].charAt(0)}</span>
            <span className="mock-name">
              {t.people[i]}
              <small dir="ltr">{inT} – {outT}</small>
            </span>
            <span className={`chip chip-${st}`}>{t[st]}</span>
          </li>
        ))}
      </ul>
      <span className="mock-button">{t.submit}</span>
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
            <span className="mock-avatar mock-square">{t.equipment[i].charAt(0)}</span>
            <span className="mock-name">
              {t.equipment[i]}
              <small dir="ltr">{h} h</small>
            </span>
            <span className={`chip chip-${st}`}>{t[st]}</span>
          </li>
        ))}
      </ul>
      <span className="mock-button">{t.submit}</span>
    </div>
  );
}

function Payroll({ t }) {
  const rows = [
    [26, 212, "1,240"],
    [25, 204, "1,190"],
    [26, 230, "1,365"],
    [22, 176, "1,020"],
    [26, 214, "1,255"],
  ];
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
            <tr key={i}>
              <td>{t.people[i]}</td>
              <td>{r[0]}</td>
              <td>{r[1]}</td>
              <td>{r[2]}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>{t.total}</td>
            <td></td>
            <td>1,036</td>
            <td>6,070</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default function AppMock({ variant, lang }) {
  const t = text[lang] || text.en;
  if (variant === "payroll") return <Payroll t={t} />;
  if (variant === "machines") return <Machines t={t} />;
  return <Attendance t={t} />;
}
