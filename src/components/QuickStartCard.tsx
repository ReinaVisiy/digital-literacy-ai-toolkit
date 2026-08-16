import Link from "next/link";
import * as Icons from "lucide-react";
import { QuickStartOption } from "@/data/types";

export default function QuickStartCard({ option }: { option: QuickStartOption }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[option.icon] ?? Icons.Sparkles;
  const href = option.categorySlug ? `/category/${option.categorySlug}` : "/explore";

  return (
    <Link
      href={href}
      className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-5 hover:border-accent/50 hover:bg-surface-2 transition-colors"
    >
      <span className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border bg-surface-2 text-accent-strong">
        <Icon size={18} strokeWidth={1.75} />
      </span>
      <div>
        <h3 className="font-medium text-foreground text-sm">{option.title}</h3>
        <p className="text-sm text-muted mt-1 leading-relaxed">{option.description}</p>
      </div>
    </Link>
  );
}
