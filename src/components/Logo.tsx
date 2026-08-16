import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 shrink-0 group"
      aria-label="Digital Literacy & AI Toolkit — Home"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="24" height="24" rx="6" stroke="var(--accent)" strokeWidth="1.4" />
        <circle cx="8.5" cy="13" r="1.6" fill="var(--accent)" />
        <circle cx="17.5" cy="8" r="1.6" fill="var(--accent-strong)" />
        <circle cx="17.5" cy="18" r="1.6" fill="var(--accent-strong)" />
        <path
          d="M8.5 13L17.5 8M8.5 13L17.5 18"
          stroke="var(--accent)"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="font-semibold text-[15px] tracking-tight text-foreground">
          Digital Literacy
          <span className="text-accent"> &amp; AI</span> Toolkit
        </span>
      </span>
    </Link>
  );
}
