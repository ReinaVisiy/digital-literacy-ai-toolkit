import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { categories } from "@/data/categories";
import { getToolsByCategory } from "@/data/tools";
import CategoryToolExplorer from "@/components/CategoryToolExplorer";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  return { title: category?.name ?? "Category" };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const tools = getToolsByCategory(category.slug);

  return (
    <div className="container-page py-12">
      <Link
        href="/explore"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft size={14} />
        All categories
      </Link>

      <div className="max-w-2xl">
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">
          {category.name}
        </h1>
        <p className="text-muted mt-2.5 leading-relaxed">{category.shortDescription}</p>
      </div>

      <div className="mt-10">
        {category.comingSoon || tools.length === 0 ? (
          <div className="rounded-lg border border-border bg-surface px-6 py-16 text-center">
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-border bg-surface-2 text-muted mx-auto mb-4">
              <Clock size={18} />
            </span>
            <p className="text-foreground font-medium">Coming soon</p>
            <p className="text-sm text-muted mt-1.5 max-w-sm mx-auto leading-relaxed">
              This category doesn&rsquo;t have verified data yet. We don&rsquo;t populate empty
              categories with invented tools — check back as research is completed.
            </p>
            <Link
              href="/explore"
              className="inline-block mt-5 text-sm text-accent-strong hover:underline"
            >
              Browse available categories
            </Link>
          </div>
        ) : (
          <CategoryToolExplorer tools={tools} subcategories={category.subcategories} />
        )}
      </div>
    </div>
  );
}
