import Link from "next/link";
import { ArrowRight } from "lucide-react";

type OfferCardProps = {
  title: string;
  price: string;
  timeline?: string;
  audience: string;
  description: string;
  bullets: string[];
  cta: string;
  href: string;
};

export function OfferCard({
  title,
  price,
  timeline,
  audience,
  description,
  bullets,
  cta,
  href
}: OfferCardProps) {
  return (
    <article className="offer-card">
      <p className="micro">{timeline ?? "Sprint"}</p>
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <p className="muted">{description}</p>
      <p className="small">
        <strong>Who it is for:</strong> {audience}
      </p>
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <Link className="button button-primary" href={href}>
        {cta}
        <ArrowRight size={17} aria-hidden="true" />
      </Link>
    </article>
  );
}
