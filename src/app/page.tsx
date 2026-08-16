import Link from "next/link";
import { ArrowRight, Compass, ScanSearch } from "lucide-react";
import { categories } from "@/data/categories";
import { quickStartOptions } from "@/data/quickStart";
import { getFeaturedTools } from "@/data/tools";
import { siteConfig } from "@/data/siteConfig";
import CategoryCard from "@/components/CategoryCard";
import QuickStartCard from "@/components/QuickStartCard";
import FeaturedToolCard from "@/components/FeaturedToolCard";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  const featuredTools = getFeaturedTools();

  return (
    <>
      {/* HERO */}
      <section className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-wide text-accent-strong mb-4">
              A personal, independent project
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight">
              {siteConfig.name}
            </h1>
            <p className="text-muted text-lg mt-4 leading-relaxed text-balance">
              {siteConfig.subtitle}
            </p>
            <p className="text-muted mt-4 leading-relaxed">
              This isn&rsquo;t just a list of AI products. It&rsquo;s a guide to help you
              understand what a tool is actually useful for, discover alternatives, evaluate
              tools critically, and make informed decisions about when and how to use them.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/explore"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-[#05070d] hover:bg-accent-strong transition-colors"
              >
                Explore Tools
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/methodology"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:border-muted transition-colors"
              >
                How We Evaluate Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK START */}
      <section className="border-b border-border">
        <div className="container-page py-16">
          <SectionHeading title="What do you want to do?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStartOptions.map((option) => (
              <QuickStartCard key={option.title} option={option} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED / TESTED TOOLS */}
      {featuredTools.length > 0 && (
        <section className="border-b border-border">
          <div className="container-page py-16">
            <SectionHeading
              eyebrow="Personally tested"
              title="Featured tools"
              description="A first look at tools Reina has actually used. Factual details come from the product itself — her verdict, marked separately, is one person's experience."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredTools.map((tool) => (
                <FeaturedToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BROWSE CATEGORIES */}
      <section className="border-b border-border">
        <div className="container-page py-16">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
            <SectionHeading
              eyebrow="17 categories"
              title="Browse categories"
              description="General-Purpose AI Assistants and Learning & Education have real, verified data today. The rest are coming soon — we don't invent entries to fill space."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY PREVIEW */}
      <section>
        <div className="container-page py-16 sm:py-20">
          <div className="rounded-lg border border-border bg-surface px-6 py-10 sm:px-10 sm:py-12 flex flex-col sm:flex-row sm:items-center gap-8">
            <div className="flex-1">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-border bg-surface-2 text-accent-strong mb-4">
                <ScanSearch size={19} strokeWidth={1.75} />
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground text-balance">
                There is no universally &ldquo;best&rdquo; AI tool.
              </h2>
              <p className="text-muted mt-2 leading-relaxed">
                There is a better tool for a particular task. See how entries here are checked,
                verified and tested before they&rsquo;re published.
              </p>
            </div>
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:border-muted transition-colors shrink-0"
            >
              <Compass size={15} />
              Read the methodology
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
