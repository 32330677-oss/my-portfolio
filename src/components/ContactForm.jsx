import { useState } from "react";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

// There is no server, so the form opens WhatsApp (or the email app)
// with the message already written.
export default function ContactForm({ t, contact }) {
  const f = t.form;
  const [form, setForm] = useState({ name: "", type: f.types[0], message: "" });

  const update = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const buildText = () => `${f.intro} ${form.name}.\n${f.typeLabel}: ${form.type}\n\n${form.message}`;

  const sendWhatsapp = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(buildText())}`, "_blank", "noopener");
  };

  const sendEmail = (e) => {
    const formEl = e.currentTarget.form;
    if (!formEl.reportValidity()) return;
    const subject = encodeURIComponent(`${f.typeLabel}: ${form.type}, ${form.name}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(buildText())}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div>
          <SectionHeader title={t.title} lead={t.text} />

          <ul className="contact-links">
            <li>
              <a className="contact-link contact-link-primary" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">
                <Icon name="chat" size={24} />
                <span>
                  <small>{t.whatsapp}</small>
                  <strong dir="ltr">{contact.whatsappDisplay}</strong>
                </span>
              </a>
            </li>
            <li>
              <a className="contact-link" href={`mailto:${contact.email}`}>
                <Icon name="mail" size={22} />
                <span>
                  <small>{t.email}</small>
                  <strong dir="ltr">{contact.email}</strong>
                </span>
              </a>
            </li>
            {contact.linkedin && (
              <li>
                <a className="contact-link" href={contact.linkedin} target="_blank" rel="noreferrer">
                  <Icon name="linkedin" size={22} />
                  <span>
                    <small>{t.linkedin}</small>
                    <strong dir="ltr">hamza-hashma</strong>
                  </span>
                </a>
              </li>
            )}
            {contact.github && (
              <li>
                <a className="contact-link" href={contact.github} target="_blank" rel="noreferrer">
                  <Icon name="github" size={22} />
                  <span>
                    <small>GitHub</small>
                    <strong dir="ltr">{contact.github.replace(/^https?:\/\/(www\.)?github\.com\//, "")}</strong>
                  </span>
                </a>
              </li>
            )}
          </ul>
        </div>

        <form onSubmit={sendWhatsapp} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{f.name}</label>
            <input id="name" name="name" required value={form.name} onChange={update} className="form-control" placeholder={f.namePh} />
          </div>
          <div className="form-group">
            <label htmlFor="type">{f.type}</label>
            <select id="type" name="type" value={form.type} onChange={update} className="form-control">
              {f.types.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">{f.message}</label>
            <textarea id="message" name="message" rows="5" required value={form.message} onChange={update} className="form-control" placeholder={f.messagePh} />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">{f.sendWhatsapp}</button>
            <button type="button" className="btn btn-outline" onClick={sendEmail}>{f.sendEmail}</button>
          </div>
        </form>
      </div>
    </section>
  );
}
