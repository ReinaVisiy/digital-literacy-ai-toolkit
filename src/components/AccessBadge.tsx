import { AccessType } from "@/data/types";

const STYLES: Record<AccessType, string> = {
  Free: "text-emerald-300 bg-emerald-400/10 border-emerald-400/25",
  Freemium: "text-accent-strong bg-accent-soft border-accent/30",
  Paid: "text-amber-300 bg-amber-400/10 border-amber-400/25",
  "Open Source": "text-sky-300 bg-sky-400/10 border-sky-400/25",
  "Not Verified": "text-muted bg-surface-2 border-border",
};

export default function AccessBadge({ access }: { access: AccessType }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${STYLES[access]}`}
    >
      {access}
    </span>
  );
}
