import { WorkingQuestions } from "@/components/partners/WorkingQuestions";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { juris, enquiryHref } from "@/lib/partners";
import {
  PageIntro,
  NextPages,
  ConversationCta,
} from "@/components/partners/Website";
import styles from "@/components/partners/Website.module.css";

export const metadata: Metadata = {
  title: "Working together — scope and engagement",
  description:
    "How Juris engagements begin, what the complimentary diagnostic includes, and how research, collaboration and potential continuation are scoped.",
  alternates: { canonical: "/offers" },
};
const steps = [
  [
    "Discuss the need",
    "A founder reviews your interest and the non-confidential business context. The next step may be a fit conversation or an honest no-fit response.",
  ],
  [
    "Agree fit and scope",
    "Identify the question or workflow, the output, its limits and who will review and accept it. Agree commercial terms where relevant before work starts.",
  ],
  [
    "Confirm inputs and access",
    "Agree the minimum information, permissions, confidentiality and processing arrangements. The first enquiry is not a client-document intake.",
  ],
  [
    "Prepare the agreed work",
    "Complete the diagnostic or other explicitly agreed piece of work. Your firm retains professional decisions and approves external communication.",
  ],
  [
    "Review and hand over",
    "Walk through the record, unresolved questions and next actions. Confirm acceptance and the responsible owner before considering optional continuation.",
  ],
];

export default function OffersPage() {
  return (
    <main className={styles.page}>
      <PageIntro
        eyebrow="WORKING TOGETHER"
        title={<>How working together begins.</>}
      >
        <p>
          Begin with the need, agree the output and make responsibility
          explicit. Further work follows a separate agreement.
        </p>
        <nav className={styles.miniNav} aria-label="Engagement options">
          <Link href="/advisers">Adviser network</Link>
          <a href="#diagnostic">Complimentary diagnostic</a>
          <a href="#continuation">Possible continuation</a>
          <a href="#research">Research</a>
          <a href="#collaboration">Collaboration</a>
        </nav>
      </PageIntro>
      <section className={styles.section} id="engagement">
        <div className="container">
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>
                FROM CONVERSATION TO HANDOVER
              </span>
              <h2>What an engagement looks like.</h2>
            </div>
            <p>
              The route depends on what you need. A briefing or professional
              relationship does not have to begin with an operational
              diagnostic.
            </p>
          </div>
          <ol className={styles.steps}>
            {steps.map(([title, body]) => (
              <li key={title}>
                <strong>{title}</strong>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className={`${styles.section} ${styles.muted}`} id="diagnostic">
        <div className={`container ${styles.split}`}>
          <div>
            <span className={styles.eyebrow}>A PRACTICAL STARTING POINT</span>
            <h2>{juris.diagnostic.title}</h2>
            <p>
              Use one active, recent or anonymised matter to reconstruct current
              status, gaps, dependencies and the next professional decisions.
            </p>
            <dl className={styles.facts}>
              <div>
                <dt>Fee</dt>
                <dd>{juris.diagnostic.fee}</dd>
              </div>
              <div>
                <dt>Timing</dt>
                <dd>{juris.diagnostic.timing}</dd>
              </div>
              <div>
                <dt>Commitment</dt>
                <dd>{juris.diagnostic.obligation}</dd>
              </div>
            </dl>
            <Link className={styles.textLink} href="/diagnostic">
              Read the full diagnostic scope
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div>
            <span className={styles.label}>WHAT YOU RECEIVE</span>
            <ul>
              <li>
                A current-state matter map and document-readiness register.
              </li>
              <li>
                Blockers, dependency ownership and immediate next actions.
              </li>
              <li>
                Programme assumptions and prepared professional-review
                questions.
              </li>
              <li>A closeout summary for the firm to review.</li>
            </ul>
            <p>
              Start with operational status. Raw passports, bank statements and
              source-of-wealth files are not required. Juris does not contact
              your client, provider or authority during the diagnostic.
            </p>
            <Link
              className={styles.textLink}
              href={enquiryHref("operational-workflow", "diagnostic")}
            >
              Discuss the complimentary diagnostic
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.section} id="continuation">
        <div className="container">
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>AFTER DIAGNOSTIC CLOSEOUT</span>
              <h2>Continuation is a separate decision.</h2>
            </div>
            <p>
              No obligation to continue. Recurring work must be worth doing for
              its own operational value.
            </p>
          </div>
          <div className={styles.rows}>
            <article className={styles.row}>
              <span className={styles.number}>01</span>
              <div>
                <span className={styles.label}>{juris.pilot.status}</span>
                <h3>{juris.pilot.title}</h3>
              </div>
              <div>
                <p>
                  If recurring work is useful, discuss a defined cycle of
                  readiness review, dependency maintenance, review queues and
                  closeout evidence.
                </p>
                <p>
                  The historical outline is 30 days, five to ten named matters
                  and four weekly cycles. It is a starting point for scope, not
                  a committed package. Availability, owners, cadence, limits and
                  commercial terms need agreement; no pilot fee is set here.
                </p>
              </div>
            </article>
            <article className={styles.row}>
              <span className={styles.number}>02</span>
              <div>
                <span className={styles.label}>{juris.desk.status}</span>
                <h3>{juris.desk.title}</h3>
              </div>
              <div>
                <p>
                  A possible later service depends on useful, repeatable
                  delivery. It is not an established managed desk or a promise
                  of indefinite maintenance.
                </p>
                <p>
                  Any ongoing arrangement would need its own scope, named owner,
                  access, authority, review cadence and commercial agreement.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.muted}`} id="research">
        <div className={`container ${styles.split}`}>
          <div>
            <span className={styles.eyebrow}>PROGRAMME INTELLIGENCE</span>
            <h2>Begin with a research question.</h2>
          </div>
          <div>
            <p>
              Agree the jurisdiction or route, intended audience, source
              expectations and the decision the briefing should inform. Identify
              uncertain points and who will review professional interpretation.
            </p>
            <p>
              Published Juris information is available to explore. A bespoke
              briefing, recurring review or affected-work review is separately
              scoped; public coverage does not promise continuous maintenance.
            </p>
            <Link
              className={styles.textLink}
              href={enquiryHref("programme-intelligence")}
            >
              Discuss a research brief
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.section} id="collaboration">
        <div className={`container ${styles.split}`}>
          <div>
            <span className={styles.eyebrow}>PROFESSIONAL COLLABORATION</span>
            <h2>A relationship with its own purpose and terms.</h2>
          </div>
          <div>
            <p>
              Independent advisers and advisory firms can explore the Juris
              Adviser Network, with interest, review and agreement before any
              approved activity. Introducers and other providers can discuss a
              separate collaboration below.
            </p>
            <Link className={styles.textLink} href="/advisers">
              Explore the adviser relationship
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <p>
              Discuss jurisdiction knowledge, editorial contributions, a
              provider handover or an appropriate introduction where a suitable
              relationship exists.
            </p>
            <p>
              For a handover, agree the request’s scope and permission, confirm
              that a suitable professional accepts, then define the permitted
              status sharing and any relevant referral milestone. This describes
              coordination; it is not an implemented marketplace or guaranteed
              commission.
            </p>
            <p>
              Operational work does not buy preferential referrals or editorial
              treatment. There are no guaranteed leads, automatic approvals or
              mandatory operational purchases.
            </p>
            <div className={styles.linkGroup}>
              <Link
                className={styles.textLink}
                href={enquiryHref("professional-collaboration")}
              >
                Discuss collaboration
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                className={styles.textLink}
                href={enquiryHref("introduction-discussion")}
              >
                Discuss an introduction
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <WorkingQuestions />
      <ConversationCta>
        Start with a short description of your firm, your interest and the piece
        of work or relationship you want to discuss.
      </ConversationCta>
      <NextPages
        pages={[
          {
            href: "/diagnostic",
            label: "Diagnostic scope",
            description:
              "The outputs, inputs and professional boundaries of the complimentary review.",
          },
          {
            href: "/how-matter-control-works",
            label: "The operational method",
            description:
              "Reconstruct, control and prepare a matter for professional review.",
          },
          {
            href: "/about",
            label: "Who you will work with",
            description:
              "The founders’ contributions and the responsibilities that stay with your firm.",
          },
        ]}
      />
    </main>
  );
}
