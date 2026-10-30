import { useState } from "react";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

export default function Contact({ t, contact, resumeLabel }) {
  const [copied, setCopied] = useState(false);
  const [topicId, setTopicId] = useState("");
  const topic = t.topics?.find((x) => x.id === topicId);

  // The chosen topic fills in the email subject and the WhatsApp message.
  const mailHref = topic
    ? `mailto:${contact.email}?subject=${encodeURIComponent(topic.subject)}&body=${encodeURIComponent(topic.message)}`
    : `mailto:${contact.email}`;
  const waHref = topic
    ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(topic.message)}`
    : `https://wa.me/${contact.whatsapp}`;

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(contact.whatsappDisplay.replace(/\s/g, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the number is still visible to copy by hand */
    }
  };

  return (
    <section id="contact" className="section section-alt contact-section">
      <div className="container contact-grid">
        <div className="contact-intro">
          <SectionHeader title={t.title} lead={t.text} />
          {/* Print-only: the contact details as plain text. */}
          <p className="print-only print-contact" dir="ltr">
            {contact.email} | {contact.whatsappDisplay}
            {contact.linkedin && ` | ${contact.linkedin.replace(/^https?:\/\/(www\.)?/, "")}`}
          </p>
        </div>

        <div className="contact-panel">
          {t.topics?.length > 0 && (
            <fieldset className="topic-picker">
              <legend>{t.topicLabel}</legend>
              <div className="topic-options">
                {t.topics.map((x) => (
                  <label key={x.id} className="topic-option">
                    <input
                      type="radio"
                      name="contact-topic"
                      value={x.id}
                      checked={topicId === x.id}
                      onChange={() => setTopicId(x.id)}
                    />
                    <span>{x.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          <ul className="contact-links">
            <li>
              <a className="contact-link contact-link-primary" href={mailHref}>
                <Icon name="mail" size={22} />
                <span>
                  <small>{t.email}</small>
                  <strong dir="ltr">{contact.email}</strong>
                </span>
              </a>
            </li>
            <li className="contact-wa">
              <a className="contact-link" href={waHref} target="_blank" rel="noreferrer">
                <Icon name="chat" size={22} />
                <span>
                  <small>{t.whatsapp}</small>
                  <strong dir="ltr">{contact.whatsappDisplay}</strong>
                </span>
              </a>
              <button type="button" className="copy-btn" onClick={copyNumber} aria-live="polite">
                <Icon name={copied ? "check" : "copy"} size={18} />
                {copied ? t.copied : t.copy}
              </button>
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

          <div className="contact-extras">
            {contact.resumeUrl && (
              <a href={contact.resumeUrl} className="btn btn-outline btn-sm" target="_blank" rel="noreferrer">
                {resumeLabel}
              </a>
            )}
            <button type="button" className="text-btn" onClick={() => window.print()}>
              <Icon name="printer" size={18} />
              {t.savePdf}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
