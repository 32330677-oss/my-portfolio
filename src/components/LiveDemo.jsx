import { useState } from "react";
import { Attendance, Payroll } from "./AppMock";
import { initialStatuses, mockText } from "./appMockData";

// The hero's working demo: approve attendance on the phone, payroll on the
// laptop recalculates. Real screenshots (heroShots) replace it when set.
const next = { draft: "submitted", submitted: "approved", approved: "submitted" };

export default function LiveDemo({ lang, hint, resetLabel, heroShots }) {
  const t = mockText[lang] || mockText.en;
  const [statuses, setStatuses] = useState(initialStatuses);
  const [flash, setFlash] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const changed = submitted || statuses.some((s, i) => s !== initialStatuses[i]);

  const toggle = (i) => {
    setStatuses((prev) => prev.map((s, j) => (j === i ? next[s] : s)));
    setFlash(i);
  };

  const submitDay = () => {
    setStatuses((prev) => prev.map((s) => (s === "draft" ? "submitted" : s)));
    setSubmitted(true);
    setFlash(-1);
  };

  const reset = () => {
    setStatuses(initialStatuses);
    setSubmitted(false);
    setFlash(-1);
  };

  // Real screenshots set: show them, not the demo.
  if (heroShots.laptop || heroShots.phone) {
    return (
      <div className="hero-demo">
        <div className="hero-stage">
          {heroShots.laptop && (
            <div className="stage-laptop">
              <div className="device device-laptop">
                <div className="device-screen"><img src={heroShots.laptop} alt="" /></div>
                <div className="device-base" aria-hidden="true" />
              </div>
            </div>
          )}
          {heroShots.phone && (
            <div className="stage-phone">
              <div className="device device-phone">
                <div className="device-screen"><img src={heroShots.phone} alt="" /></div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="hero-demo">
      <div className="hero-stage">
        <div className="stage-laptop" aria-hidden="true">
          <div className="device device-laptop">
            <div className="device-screen">
              <Payroll t={t} statuses={statuses} flash={flash} />
            </div>
            <div className="device-base" />
          </div>
        </div>
        <div className="stage-phone">
          <div className="device device-phone">
            <div className="device-screen">
              <Attendance t={t} statuses={statuses} onToggle={toggle} onSubmit={submitDay} submitted={submitted} />
            </div>
          </div>
        </div>
      </div>
      <div className="demo-bar">
        <p className="demo-hint">
          <span className="demo-dot" aria-hidden="true" />
          {hint}
        </p>
        {changed && (
          <button type="button" className="demo-reset" onClick={reset}>
            {resetLabel}
          </button>
        )}
      </div>
    </div>
  );
}
