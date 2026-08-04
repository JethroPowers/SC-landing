import type { LucideIcon } from "lucide-react";

type ProductCardProps = {
  title: string;
  description: string;
  bullets?: string[];
  icon: LucideIcon;
};

export function ProductCard({ title, description, bullets, icon: Icon }: ProductCardProps) {
  return (
    <article className="card">
      <div className="card-icon" aria-hidden="true">
        <Icon size={20} />
      </div>
      <h3>{title}</h3>
      <p className="muted">{description}</p>
      {bullets?.length ? (
        <ul>
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
