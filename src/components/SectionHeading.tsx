export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-wide text-accent-strong mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-[28px] font-semibold text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-muted mt-2.5 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
