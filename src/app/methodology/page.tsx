import {
  BookOpen,
  FunctionSquare,
  Newspaper,
  FileStack,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata = { title: "Methodology" };

const BENCHMARK_TESTS = [
  {
    title: "Learning",
    description: "Explanation quality and accuracy.",
    icon: BookOpen,
  },
  {
    title: "STEM reasoning",
    description: "Reasoning, correctness, and clarity.",
    icon: FunctionSquare,
  },
  {
    title: "Current information / opportunities",
    description: "Freshness and source reliability.",
    icon: Newspaper,
  },
  {
    title: "Document handling",
    description: "Ability to work accurately from supplied material.",
    icon: FileStack,
  },
  {
    title: "Multi-turn consistency",
    description: "Ability to maintain instructions and context through follow-up prompts.",
    icon: MessagesSquare,
  },
  {
    title: "Source quality",
    description: "Whether authoritative evidence is prioritized over weak sources.",
    icon: ShieldCheck,
  },
];

export default function MethodologyPage() {
  return (
    <div className="container-page py-12">
      <div className="max-w-2xl mb-14">
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">
          Methodology
        </h1>
        <p className="text-muted mt-2.5 leading-relaxed">
          How entries in this toolkit are checked, what &ldquo;last verified&rdquo; means, and
          how factual information is separated from personal experience.
        </p>
      </div>

      <div className="rounded-lg border border-accent/25 bg-accent-soft px-6 py-8 sm:px-8 mb-14 max-w-2xl">
        <p className="text-lg font-medium text-foreground text-balance leading-snug">
          There is no universally best AI assistant.
        </p>
        <p className="text-muted mt-2 leading-relaxed">
          The right tool depends on the task. This toolkit is built around comparison, not a
          single ranking.
        </p>
      </div>

      <section className="max-w-2xl mb-14">
        <SectionHeading eyebrow="Facts" title="Factual product information" />
        <p className="text-muted leading-relaxed">
          Details like what a tool does, its access model, supported platforms and official
          website are checked against first-party or official sources where possible — the
          product&rsquo;s own site, documentation, or announcements — rather than secondhand
          write-ups.
        </p>
      </section>

      <section className="max-w-2xl mb-14">
        <SectionHeading eyebrow="Freshness" title="What “last verified” means" />
        <p className="text-muted leading-relaxed">
          Every tool entry carries a <code className="text-foreground/90 font-mono text-[13px]">lastVerified</code>{" "}
          date — the date its factual details were last checked. AI products change quickly:
          pricing, features and access models can shift with little notice. A recent{" "}
          <code className="text-foreground/90 font-mono text-[13px]">lastVerified</code> date
          means higher confidence, not a permanent guarantee. If something looks out of date,
          check the tool&rsquo;s official website before relying on it.
        </p>
      </section>

      <section className="max-w-2xl mb-14">
        <SectionHeading eyebrow="Experience" title="Facts vs. Reina's testing notes" />
        <p className="text-muted leading-relaxed">
          Product cards and table rows show factual information only. Where a tool has been
          personally tested, a separate, clearly labeled &ldquo;Reina&rsquo;s Experience&rdquo;
          section holds her verdict, what she found it best for, and any cautions. That section
          is one person&rsquo;s hands-on experience — it can vary by plan, model version, prompt,
          task and product updates — and it is never presented as an objective specification.
        </p>
      </section>

      <section className="max-w-3xl">
        <SectionHeading
          eyebrow="Framework"
          title="Standard Assistant Benchmark"
          description="A set of six informal tests used, where applicable, to evaluate general-purpose assistants consistently. Not every tool has necessarily undergone every test — coverage grows as testing continues."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BENCHMARK_TESTS.map((test, i) => (
            <div
              key={test.title}
              className="rounded-lg border border-border bg-surface p-5 flex gap-4"
            >
              <span className="inline-flex items-center justify-center h-9 w-9 shrink-0 rounded-md border border-border bg-surface-2 text-accent-strong">
                <test.icon size={17} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-xs text-muted font-mono mb-1">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-sm font-medium text-foreground">{test.title}</h3>
                <p className="text-sm text-muted mt-1 leading-relaxed">{test.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
