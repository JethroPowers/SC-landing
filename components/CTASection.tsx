import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTASectionProps = {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title,
  description,
  primaryLabel = "Request a private demo",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref
}: CTASectionProps) {
  return (
    <section className="section section-dark">
      <div className="container split">
        <div>
          <p className="eyebrow">Private demo</p>
          <h2>{title}</h2>
          {description ? <p className="lead">{description}</p> : null}
        </div>
        <div className="dark-panel">
          <p className="muted">
            Intelligence controls the programme knowledge. Control turns that
            intelligence into case operations.
          </p>
          <div className="cta-actions">
            <Link className="button button-gold" href={primaryHref}>
              {primaryLabel}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link className="button button-secondary" href={secondaryHref}>
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
