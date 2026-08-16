import { TestNote } from "@/data/types";
import { Quote, Sparkle } from "lucide-react";

export default function ToolExperienceNote({ note }: { note: TestNote }) {
  return (
    <div className="rounded-lg border border-accent/25 bg-accent-soft px-4 py-4 sm:px-5 sm:py-5">
      <div className="flex items-center gap-2 mb-3">
        <Quote size={15} className="text-accent-strong" />
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
          Reina&rsquo;s Experience
        </p>
      </div>

      <dl className="space-y-3 text-sm">
        <div>
          <dt className="text-muted text-xs mb-0.5">Verdict</dt>
          <dd className="text-foreground">{note.verdict}</dd>
        </div>
        <div>
          <dt className="text-muted text-xs mb-0.5">Best for</dt>
          <dd className="text-foreground">{note.bestFor}</dd>
        </div>
        <div>
          <dt className="text-muted text-xs mb-0.5">Caution</dt>
          <dd className="text-foreground">{note.caution}</dd>
        </div>
        {note.standoutFeature && (
          <div>
            <dt className="text-muted text-xs mb-0.5 flex items-center gap-1">
              <Sparkle size={12} /> Standout feature
            </dt>
            <dd className="text-foreground">{note.standoutFeature}</dd>
          </div>
        )}
      </dl>

      <p className="text-[11px] text-muted mt-4 pt-3 border-t border-border/60">
        This reflects one person&rsquo;s hands-on experience, not an objective specification. It
        can vary by plan, model version, prompt, task and product updates.
      </p>
    </div>
  );
}
