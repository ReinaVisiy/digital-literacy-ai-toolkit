"use client";

import { useMemo, useState } from "react";
import { Search, ChevronDown, ExternalLink, SearchX } from "lucide-react";
import { Tool, AccessType, TestStatus } from "@/data/types";
import AccessBadge from "./AccessBadge";
import TestStatusBadge from "./TestStatusBadge";
import ToolExperienceNote from "./ToolExperienceNote";

const ACCESS_OPTIONS: AccessType[] = [
  "Free",
  "Freemium",
  "Paid",
  "Open Source",
  "Not Verified",
];

const TEST_STATUS_OPTIONS: { value: TestStatus; label: string }[] = [
  { value: "tested", label: "Tested" },
  { value: "testing", label: "Testing in progress" },
  { value: "not_tested", label: "Not yet tested" },
];

export default function CategoryToolExplorer({
  tools,
  subcategories,
}: {
  tools: Tool[];
  subcategories: string[];
}) {
  const [query, setQuery] = useState("");
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [activeAccess, setActiveAccess] = useState<AccessType | null>(null);
  const [activeStatus, setActiveStatus] = useState<TestStatus | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((tool) => {
      if (activeSubcategory && tool.subcategory !== activeSubcategory) return false;
      if (activeAccess && tool.access !== activeAccess) return false;
      if (activeStatus && tool.testStatus !== activeStatus) return false;
      if (q) {
        const haystack = `${tool.name} ${tool.whatItDoes} ${tool.subcategory}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [tools, query, activeSubcategory, activeAccess, activeStatus]);

  const hasActiveFilters = Boolean(activeSubcategory || activeAccess || activeStatus || query);

  function clearFilters() {
    setQuery("");
    setActiveSubcategory(null);
    setActiveAccess(null);
    setActiveStatus(null);
  }

  return (
    <div>
      {/* Search */}
      <div className="relative mb-5">
        <Search
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
          aria-hidden="true"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tools in this category…"
          aria-label="Search tools in this category"
          className="w-full rounded-lg border border-border bg-surface pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent outline-none transition-colors"
        />
      </div>

      {/* Subcategory chips */}
      {subcategories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4" role="group" aria-label="Filter by subcategory">
          <FilterChip
            active={activeSubcategory === null}
            onClick={() => setActiveSubcategory(null)}
          >
            All subcategories
          </FilterChip>
          {subcategories.map((sub) => (
            <FilterChip
              key={sub}
              active={activeSubcategory === sub}
              onClick={() => setActiveSubcategory(activeSubcategory === sub ? null : sub)}
            >
              {sub}
            </FilterChip>
          ))}
        </div>
      )}

      {/* Access + test status filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <label className="text-xs text-muted mb-1.5 block">Access</label>
          <div className="flex flex-wrap gap-2">
            <FilterChip active={activeAccess === null} onClick={() => setActiveAccess(null)} small>
              Any
            </FilterChip>
            {ACCESS_OPTIONS.map((a) => (
              <FilterChip
                key={a}
                small
                active={activeAccess === a}
                onClick={() => setActiveAccess(activeAccess === a ? null : a)}
              >
                {a}
              </FilterChip>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <label className="text-xs text-muted mb-1.5 block">Test status</label>
          <div className="flex flex-wrap gap-2">
            <FilterChip active={activeStatus === null} onClick={() => setActiveStatus(null)} small>
              Any
            </FilterChip>
            {TEST_STATUS_OPTIONS.map((s) => (
              <FilterChip
                key={s.value}
                small
                active={activeStatus === s.value}
                onClick={() => setActiveStatus(activeStatus === s.value ? null : s.value)}
              >
                {s.label}
              </FilterChip>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-muted">
          {filtered.length} tool{filtered.length === 1 ? "" : "s"}
        </p>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-accent-strong hover:underline"
            type="button"
          >
            Clear filters
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-border bg-surface px-6 py-14 text-center">
          <SearchX size={28} className="mx-auto mb-3 text-muted" />
          <p className="text-sm text-foreground font-medium">No tools match these filters</p>
          <p className="text-sm text-muted mt-1">
            Try a different search term, or clear filters to see everything in this category.
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              type="button"
              className="mt-4 text-sm text-accent-strong hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden md:block rounded-lg border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface text-left text-xs text-muted uppercase tracking-wide">
                  <th className="px-4 py-3 font-medium">Tool</th>
                  <th className="px-4 py-3 font-medium">Subcategory</th>
                  <th className="px-4 py-3 font-medium">What it does</th>
                  <th className="px-4 py-3 font-medium">Access</th>
                  <th className="px-4 py-3 font-medium">Platforms</th>
                  <th className="px-4 py-3 font-medium">Website</th>
                  <th className="px-4 py-3 font-medium">Test status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((tool) => (
                  <ToolTableRow
                    key={tool.slug}
                    tool={tool}
                    expanded={expanded === tool.slug}
                    onToggle={() =>
                      setExpanded(expanded === tool.slug ? null : tool.slug)
                    }
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden flex flex-col gap-3">
            {filtered.map((tool) => (
              <ToolMobileCard
                key={tool.slug}
                tool={tool}
                expanded={expanded === tool.slug}
                onToggle={() => setExpanded(expanded === tool.slug ? null : tool.slug)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
  small,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border transition-colors whitespace-nowrap ${
        small ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-xs"
      } ${
        active
          ? "border-accent bg-accent-soft text-accent-strong"
          : "border-border bg-surface text-muted hover:text-foreground hover:border-muted"
      }`}
    >
      {children}
    </button>
  );
}

function ToolTableRow({
  tool,
  expanded,
  onToggle,
}: {
  tool: Tool;
  expanded: boolean;
  onToggle: () => void;
}) {
  const canExpand = Boolean(tool.testNote);
  return (
    <>
      <tr className="border-t border-border hover:bg-surface/60 transition-colors">
        <td className="px-4 py-3.5 align-top">
          <button
            type="button"
            onClick={canExpand ? onToggle : undefined}
            disabled={!canExpand}
            className={`flex items-center gap-1.5 text-left font-medium text-foreground ${
              canExpand ? "cursor-pointer hover:text-accent-strong" : "cursor-default"
            }`}
            aria-expanded={canExpand ? expanded : undefined}
          >
            {tool.name}
            {canExpand && (
              <ChevronDown
                size={14}
                className={`text-muted transition-transform ${expanded ? "rotate-180" : ""}`}
              />
            )}
          </button>
        </td>
        <td className="px-4 py-3.5 align-top text-muted whitespace-nowrap">{tool.subcategory}</td>
        <td className="px-4 py-3.5 align-top text-foreground/90 max-w-xs">{tool.whatItDoes}</td>
        <td className="px-4 py-3.5 align-top">
          <AccessBadge access={tool.access} />
        </td>
        <td className="px-4 py-3.5 align-top text-muted">{tool.platforms.join(", ")}</td>
        <td className="px-4 py-3.5 align-top">
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent-strong hover:underline"
          >
            Visit <ExternalLink size={12} />
          </a>
        </td>
        <td className="px-4 py-3.5 align-top">
          <TestStatusBadge status={tool.testStatus} />
        </td>
      </tr>
      {expanded && tool.testNote && (
        <tr className="border-t border-border/60 bg-surface/40">
          <td colSpan={7} className="px-4 py-4">
            <ToolExperienceNote note={tool.testNote} />
          </td>
        </tr>
      )}
    </>
  );
}

function ToolMobileCard({
  tool,
  expanded,
  onToggle,
}: {
  tool: Tool;
  expanded: boolean;
  onToggle: () => void;
}) {
  const canExpand = Boolean(tool.testNote);
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-medium text-foreground">{tool.name}</h3>
          <p className="text-xs text-muted mt-0.5">{tool.subcategory}</p>
        </div>
        <AccessBadge access={tool.access} />
      </div>

      <p className="text-sm text-foreground/90 mt-3">{tool.whatItDoes}</p>

      <dl className="mt-3 grid grid-cols-2 gap-y-2 text-xs">
        <div>
          <dt className="text-muted">Platforms</dt>
          <dd className="text-foreground/90">{tool.platforms.join(", ")}</dd>
        </div>
        <div>
          <dt className="text-muted">Last verified</dt>
          <dd className="text-foreground/90">{tool.lastVerified}</dd>
        </div>
      </dl>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/60">
        <TestStatusBadge status={tool.testStatus} />
        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-accent-strong hover:underline"
        >
          Visit <ExternalLink size={12} />
        </a>
      </div>

      {canExpand && (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          className="flex items-center gap-1.5 text-sm text-accent-strong mt-3 w-full justify-center border-t border-border/60 pt-3"
        >
          {expanded ? "Hide" : "Show"} Reina&rsquo;s Experience
          <ChevronDown
            size={14}
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      )}

      {expanded && tool.testNote && (
        <div className="mt-3">
          <ToolExperienceNote note={tool.testNote} />
        </div>
      )}
    </div>
  );
}
