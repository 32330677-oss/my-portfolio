import { useRef, useState } from "react";
import Icon from "./Icon";

// "Plan your project": three short steps, then a summary that is sent
// to WhatsApp (or email) already written. No server needed.
const empty = { type: "", size: "", lang: "", features: [], time: "", name: "", biz: "", notes: "" };

function Choice({ name, options, value, onChange, cols = 1 }) {
  return (
    <div className={`choices choices-${cols}`}>
      {options.map((o) => (
        <label key={o.id} className={`choice ${value === o.id ? "is-on" : ""}`}>
          <input type="radio" name={name} value={o.id} checked={value === o.id} onChange={() => onChange(o.id)} />
          <span className="choice-label">{o.label}</span>
          {o.hint && <span className="choice-hint">{o.hint}</span>}
        </label>
      ))}
    </div>
  );
}

export default function Planner({ t, contact }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(empty);
  const [error, setError] = useState("");
  const [sent, setSent] = useState("");
  const top = useRef(null);

  const set = (key, value) => {
    setData((d) => ({ ...d, [key]: value }));
    setError("");
    setSent("");
  };

  const toggleFeature = (id) =>
    set("features", data.features.includes(id) ? data.features.filter((f) => f !== id) : [...data.features, id]);

  const labelOf = (list, id) => list.find((o) => o.id === id)?.label || "";

  const goTo = (n) => {
    setStep(n);
    setError("");
    top.current?.focus({ preventScroll: true });
    top.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  };

  const nextStep = () => {
    if (step === 1 && !data.type) return setError(t.required);
    if (step === 2 && (!data.size || !data.lang)) return setError(t.required);
    goTo(step + 1);
  };

  const lines = () => {
    const m = t.msg;
    const features = data.features.length ? data.features.map((f) => labelOf(t.features, f)).join(", ") : m.none;
    return [
      [m.name, data.name],
      [m.biz, data.biz],
      [m.type, labelOf(t.types, data.type)],
      [m.size, labelOf(t.sizes, data.size)],
      [m.lang, labelOf(t.langs, data.lang)],
      [m.features, features],
      [m.time, labelOf(t.times, data.time)],
      [m.notes, data.notes],
    ].filter(([, v]) => v);
  };

  const message = () => `${t.msgIntro}\n\n${lines().map(([k, v]) => `${k}: ${v}`).join("\n")}`;

  const validFinal = (form) => {
    if (!data.time) {
      setError(t.required);
      return false;
    }
    return form.reportValidity();
  };

  const sendWhatsapp = (e) => {
    e.preventDefault();
    if (!validFinal(e.currentTarget)) return;
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message())}`, "_blank", "noopener");
    setSent(t.sent);
  };

  const sendEmail = (e) => {
    const form = e.currentTarget.form;
    if (!validFinal(form)) return;
    const subject = encodeURIComponent(`${t.msg.type}: ${labelOf(t.types, data.type)}, ${data.name}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(message())}`;
    setSent(t.sentEmail);
  };

  return (
    <form className="planner" onSubmit={sendWhatsapp} noValidate={step < 3}>
      <div className="planner-head" ref={top} tabIndex={-1}>
        <p className="planner-step">{t.stepOf.replace("{n}", step)}</p>
        <div className="planner-progress" aria-hidden="true">
          {[1, 2, 3].map((n) => (
            <span key={n} className={n <= step ? "is-on" : ""} />
          ))}
        </div>
      </div>

      {step === 1 && (
        <fieldset>
          <legend>{t.step1}</legend>
          <Choice name="type" options={t.types} value={data.type} onChange={(v) => set("type", v)} cols={2} />
        </fieldset>
      )}

      {step === 2 && (
        <>
          <fieldset>
            <legend>{t.sizeLabel}</legend>
            <Choice name="size" options={t.sizes} value={data.size} onChange={(v) => set("size", v)} cols={3} />
          </fieldset>
          <fieldset>
            <legend>{t.langLabel}</legend>
            <Choice name="lang" options={t.langs} value={data.lang} onChange={(v) => set("lang", v)} cols={3} />
          </fieldset>
          <fieldset>
            <legend>{t.featuresLabel}</legend>
            <div className="checks">
              {t.features.map((f) => (
                <label key={f.id} className={`check ${data.features.includes(f.id) ? "is-on" : ""}`}>
                  <input type="checkbox" checked={data.features.includes(f.id)} onChange={() => toggleFeature(f.id)} />
                  <span className="check-box" aria-hidden="true"><Icon name="check" size={14} /></span>
                  <span>{f.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </>
      )}

      {step === 3 && (
        <>
          <fieldset>
            <legend>{t.timeLabel}</legend>
            <Choice name="time" options={t.times} value={data.time} onChange={(v) => set("time", v)} cols={3} />
          </fieldset>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="pl-name">{t.nameLabel}</label>
              <input id="pl-name" required className="form-control" value={data.name} onChange={(e) => set("name", e.target.value)} placeholder={t.namePh} />
            </div>
            <div className="form-group">
              <label htmlFor="pl-biz">{t.bizLabel}</label>
              <input id="pl-biz" className="form-control" value={data.biz} onChange={(e) => set("biz", e.target.value)} placeholder={t.bizPh} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="pl-notes">{t.notesLabel}</label>
            <textarea id="pl-notes" rows="3" className="form-control" value={data.notes} onChange={(e) => set("notes", e.target.value)} placeholder={t.notesPh} />
          </div>

          <div className="planner-summary">
            <div className="planner-summary-head">
              <h3>{t.summary}</h3>
              <button type="button" className="link-btn" onClick={() => goTo(1)}>{t.edit}</button>
            </div>
            <dl>
              {lines().map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </>
      )}

      {error && <p className="planner-error" role="alert">{error}</p>}
      {sent && <p className="planner-sent" role="status"><Icon name="check" size={18} /> {sent}</p>}

      <div className="planner-actions">
        {step > 1 && (
          <button type="button" className="btn btn-outline" onClick={() => goTo(step - 1)}>{t.back}</button>
        )}
        {step < 3 ? (
          <button type="button" className="btn btn-primary" onClick={nextStep}>{t.next}</button>
        ) : (
          <>
            <button type="submit" className="btn btn-primary">{t.sendWhatsapp}</button>
            <button type="button" className="btn btn-outline" onClick={sendEmail}>{t.sendEmail}</button>
          </>
        )}
      </div>
    </form>
  );
}
