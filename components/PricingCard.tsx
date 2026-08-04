import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PricingCardProps = {
  title: string;
  price: string;
  scope: string;
  timing: string;
  bestFor: string;
  bullets: string[];
};

export function PricingCard({ title, price, scope, timing, bestFor, bullets }: PricingCardProps) {
  return (
    <article className="pricing-card">
      <p className="micro">{scope}</p>
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <p className="small">{timing}</p>
      <p className="muted">{bestFor}</p>
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <Link className="button button-primary" href="/contact">
        Request pricing discussion
        <ArrowRight size={17} aria-hidden="true" />
      </Link>
    </article>
  );
}
