import Link from "next/link";
import { GitFork, User } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="container-page py-12">
      <div className="max-w-xl">
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance">
          About
        </h1>
        <p className="text-muted mt-4 leading-relaxed">
          {siteConfig.name} is a personal project by {siteConfig.creator}, created to make
          useful digital and AI tools easier to discover and evaluate. It is an independent
          project and is not affiliated with or endorsed by any organization.
        </p>
        <p className="text-muted mt-4 leading-relaxed">
          The goal isn&rsquo;t just to list tools, but to help people understand what a tool is
          actually good for, how to evaluate it critically, and when a different tool might
          serve a task better.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:border-muted transition-colors"
          >
            <GitFork size={15} />
            GitHub
          </Link>
          <Link
            href={siteConfig.links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:border-muted transition-colors"
          >
            <User size={15} />
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
