import { useState } from "react";
import Icon from "./Icon";
import Planner from "./Planner";

export default function ContactForm({ t, planner, contact }) {
  const [copied, setCopied] = useState(false);

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
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div>
          <header className="section-header">
            <h2 className="section-title">{planner.title}</h2>
            <p className="section-lead">{planner.lead}</p>
          </header>

          <ul className="contact-links">
            <li className="contact-wa">
              <a className="contact-link contact-link-primary" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">
                <Icon name="chat" size={24} />
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

        <Planner t={planner} contact={contact} />
      </div>
    </section>
  );
}
