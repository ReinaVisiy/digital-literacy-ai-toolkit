import Link from "next/link";
import { GitFork, User } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-page py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-foreground">{siteConfig.name}</p>
          <p className="text-sm text-muted mt-1">
            Created by <span className="text-foreground">{siteConfig.creator}</span>
          </p>
          <p className="text-xs text-muted mt-3 max-w-md">
            An independent personal project. Not affiliated with or endorsed by any
            organization.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <GitFork size={16} />
            GitHub
          </Link>
          <Link
            href={siteConfig.links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <User size={16} />
            Portfolio
          </Link>
        </div>
      </div>
    </footer>
  );
}
