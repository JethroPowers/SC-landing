import Link from "next/link";
import { ArrowRight, MonitorUp } from "lucide-react";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  variant?: "default" | "dark" | "plain" | "case" | "registry";
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  children?: React.ReactNode;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  variant = "default",
  primaryLabel = "Discuss a complimentary diagnostic",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  children
}: HeroProps) {
  return (
    <section className={`hero hero-${variant}`}>
      <div className="container hero-grid">
        <div className="hero-copy">
          {eyebrow ? <p className="eyebrow hero-eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p className="lead">{subtitle}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <Link className="button button-primary" href={primaryHref}>
              <MonitorUp size={18} aria-hidden="true" />
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link className="button button-secondary" href={secondaryHref}>
                {secondaryLabel}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        </div>
        {children ? <div className="hero-visual">{children}</div> : null}
      </div>
    </section>
  );
}
