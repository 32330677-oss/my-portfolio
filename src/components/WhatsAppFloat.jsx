import Icon from "./Icon";

export default function WhatsAppFloat({ number, label }) {
  return (
    <a
      className="wa-float"
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <Icon name="chat" size={28} />
      <span className="wa-float-label">{label}</span>
    </a>
  );
}
