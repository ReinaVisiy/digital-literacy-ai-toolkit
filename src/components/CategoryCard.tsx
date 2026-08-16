import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Category } from "@/data/types";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex flex-col justify-between rounded-lg border border-border bg-surface p-5 hover:border-accent/50 hover:bg-surface-2 transition-colors"
    >
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-foreground text-[15px] text-balance">
            {category.name}
          </h3>
          {category.comingSoon && (
            <span className="inline-flex items-center gap-1 shrink-0 rounded-full border border-border bg-surface-2 px-2 py-0.5 text-[11px] text-muted">
              <Clock size={11} /> Coming soon
            </span>
          )}
        </div>
        <p className="text-sm text-muted mt-2 leading-relaxed">{category.shortDescription}</p>
      </div>

      <span className="inline-flex items-center gap-1 text-sm text-accent-strong mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        {category.comingSoon ? "Preview" : "Browse"}
        <ArrowRight size={14} />
      </span>
    </Link>
  );
}
