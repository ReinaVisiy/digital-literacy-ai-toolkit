import { TestStatus } from "@/data/types";
import { CheckCircle2, Loader2, CircleDashed } from "lucide-react";

const CONFIG: Record<TestStatus, { label: string; icon: typeof CheckCircle2; className: string }> = {
  tested: {
    label: "Tested by Reina",
    icon: CheckCircle2,
    className: "text-accent-strong",
  },
  testing: {
    label: "Testing in progress",
    icon: Loader2,
    className: "text-amber-300",
  },
  not_tested: {
    label: "Not yet tested",
    icon: CircleDashed,
    className: "text-muted",
  },
};

export default function TestStatusBadge({ status }: { status: TestStatus }) {
  const { label, icon: Icon, className } = CONFIG[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${className}`}>
      <Icon size={14} strokeWidth={2} />
      {label}
    </span>
  );
}
