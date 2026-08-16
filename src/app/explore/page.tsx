import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";

export const metadata = { title: "Explore" };

export default function ExplorePage() {
  const ready = categories.filter((c) => !c.comingSoon);
  const comingSoon = categories.filter((c) => c.comingSoon);

  return (
    <div className="container-page py-12">
      <div className="max-w-2xl mb-10">
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">
          Explore categories
        </h1>
        <p className="text-muted mt-2.5 leading-relaxed">
          Every category below is real — the ones marked &ldquo;Coming soon&rdquo; simply
          don&rsquo;t have verified data yet. Global search across the whole toolkit arrives
          once more categories are populated.
        </p>
      </div>

      <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-4">
        Available now
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {ready.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>

      <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-4">
        Coming soon
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {comingSoon.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}
