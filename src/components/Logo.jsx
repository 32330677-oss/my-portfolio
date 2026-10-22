// The brand mark: <H> in a rounded square. Same drawing as public/favicon.svg.
export default function Logo({ size = 34 }) {
  return (
    <svg className="logo" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="15" fill="var(--logo-bg)" />
      <rect x="1.5" y="1.5" width="61" height="61" rx="13.5" fill="none" stroke="var(--primary)" strokeOpacity="0.35" strokeWidth="3" />
      <g fill="none" stroke="var(--primary)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21 9 32l8 11" />
        <path d="M47 21l8 11-8 11" />
        <path d="M25 20v24M39 20v24M25 32h14" />
      </g>
    </svg>
  );
}
