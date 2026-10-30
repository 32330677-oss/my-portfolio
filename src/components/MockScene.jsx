import { Phone } from "./Devices";
import { mockText } from "./appMockData";

// A drawn, illustrative scene for a project: the phone screen plus two small
// floating cards that show what the system does. No real screenshots or data.
function Card({ className = "", title, children }) {
  return (
    <div className={`scene-card ${className}`}>
      <p className="scene-card-title">{title}</p>
      {children}
    </div>
  );
}

function AttendanceCards({ t }) {
  return (
    <>
      <Card className="scene-card-a" title={t.fpTitle}>
        <p className="scene-big" dir="ltr">
          118 <span>/ 121</span>
        </p>
        <p className="scene-small">{t.fpMatched}</p>
        <span className="chip chip-paused">{t.fpReview}</span>
      </Card>
      <Card className="scene-card-b" title={t.paidTitle}>
        <p className="scene-row">
          <span>{t.paidState}</span>
          <span className="scene-lock">
            <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            {t.locked}
          </span>
        </p>
      </Card>
    </>
  );
}

function MachineCards({ t }) {
  return (
    <>
      <Card className="scene-card-a scene-card-price" title={t.priceTitle}>
        <p className="scene-small">{t.equipment[0]}</p>
        <p className="scene-calc" dir="ltr">
          6.5 h × 45 = <strong>292.50</strong>
        </p>
        <p className="scene-small">{t.priceTotal}</p>
      </Card>
      <Card className="scene-card-b" title={t.invoiceTitle}>
        <dl className="scene-list">
          <div>
            <dt>{t.invMachines}</dt>
            <dd>4</dd>
          </div>
          <div>
            <dt>{t.invHours}</dt>
            <dd>186</dd>
          </div>
          <div className="scene-list-total">
            <dt>{t.invTotal}</dt>
            <dd>8,370</dd>
          </div>
        </dl>
      </Card>
    </>
  );
}

export default function MockScene({ mock, lang }) {
  const t = mockText[lang] || mockText.en;
  return (
    <div className={`scene scene-${mock}`} aria-hidden="true">
      <Phone mock={mock} lang={lang} />
      {mock === "machines" ? <MachineCards t={t} /> : <AttendanceCards t={t} />}
    </div>
  );
}
