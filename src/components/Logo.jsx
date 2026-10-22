// The brand mark: <H> on an ink square. Same drawing as public/favicon.svg.
export default function Logo({ size = 34 }) {
  return (
    <svg className="logo" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#14213D" />
      <g fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21 9 32l8 11M47 21l8 11-8 11" stroke="#F2B705" />
        <path d="M25 20v24M39 20v24M25 32h14" stroke="#F3F1EC" />
      </g>
    </svg>
  );
}
