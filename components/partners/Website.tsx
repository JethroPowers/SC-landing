import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { juris } from "@/lib/partners";
import styles from "./Website.module.css";

export function PageIntro({
  eyebrow,
  title,
  children,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className={styles.intro}>
      <div className={`container ${aside ? styles.introGrid : ""}`}>
        <div>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h1>{title}</h1>
          <div className={styles.introCopy}>{children}</div>
        </div>
        {aside && <aside className={styles.introAside}>{aside}</aside>}
      </div>
    </section>
  );
}

export function NextPages({
  title = "Related pages",
  pages,
}: {
  title?: string;
  pages: { href: string; label: string; description: string }[];
}) {
  return (
    <nav className={styles.related} aria-label={title}>
      <div className={`container ${styles.relatedInner}`}>
        <span>Related pages</span>
        <ul>
          {pages.map((page) => (
            <li key={page.href}>
              <Link href={page.href}>
                {page.label}
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <p>{page.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function ConversationCta({
  title = "Find the right starting point.",
  children,
  href = "/contact",
  label = juris.primaryCta,
}: {
  title?: string;
  children: ReactNode;
  href?: string;
  label?: string;
}) {
  return (
    <section className={styles.conversation}>
      <div className={`container ${styles.conversationGrid}`}>
        <div>
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
        <Link href={href} className={styles.button}>
          {label}
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
