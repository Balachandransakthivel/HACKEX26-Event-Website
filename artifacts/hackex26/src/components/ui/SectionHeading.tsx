export function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? 'light-heading' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="display">{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
