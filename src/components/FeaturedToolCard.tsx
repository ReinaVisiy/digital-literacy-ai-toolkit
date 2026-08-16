import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Tool } from "@/data/types";
import AccessBadge from "./AccessBadge";

export default function FeaturedToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-surface p-5">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-foreground">{tool.name}</h3>
        <AccessBadge access={tool.access} />
      </div>
      <p className="text-sm text-muted mt-2 leading-relaxed">{tool.whatItDoes}</p>

      {tool.testNote && (
        <div className="mt-4 pt-4 border-t border-border/60">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-accent-strong mb-1.5">
            Reina&rsquo;s take
          </p>
          <p className="text-sm text-foreground/90 leading-relaxed">{tool.testNote.verdict}</p>
        </div>
      )}

      <Link
        href={`/category/${tool.category}`}
        className="inline-flex items-center gap-1 text-sm text-accent-strong mt-4 hover:underline"
      >
        See full details
        <ArrowUpRight size={14} />
      </Link>
    </div>
  );
}
