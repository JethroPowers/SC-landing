"use client";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarClock,
  ChevronDown,
  GitBranch,
  ShieldCheck,
  UsersRound
} from "lucide-react";
import { useState } from "react";
import {
  fictionalMatter,
  type WorkspaceViewId
} from "@/lib/matter-control-fixture";
import { ProcessJourney } from "./ProcessJourney";
import { WorkspaceViews } from "./WorkspaceViews";
import styles from "./MatterControl.module.css";

const responsibilityRows = [
  {
    firm: "Client relationships, professional judgement and legal or regulatory advice",
    control:
      "Matter reconstruction, readiness tracking and advisor-review preparation"
  },
  {
    firm: "Approval of programme assumptions and source-of-funds sufficiency",
    control:
      "Programme-assumption records, source dates and confirmation queues"
  },
  {
    firm: "Final decisions, client wording, filings and submissions",
    control:
      "Blocker ownership, dependency control and practical next-action planning"
  }
];

export function MatterControlExplainer() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeView, setActiveView] = useState<WorkspaceViewId>("matter");
  const matter = fictionalMatter;

  return (
    <main className={styles.page}>
      <section className={styles.experience} aria-labelledby="experience-title">
        <div className={`container ${styles.experienceShell}`}>
          <header className={styles.experienceHeader}>
            <div>
              <span className={styles.experienceLabel}>Interactive operating explainer</span>
              <h1 id="experience-title">How Matter Control Works</h1>
            </div>
            <div className={styles.fictionalNote}>
              <ShieldCheck size={17} strokeWidth={1.7} aria-hidden="true" />
              <span>
                <strong>{matter.fictionalLabel}</strong>
                No real client or confidential information.
              </span>
            </div>
          </header>

          <div className={styles.matterSummary} data-testid="matter-summary">
            <div className={styles.summaryIdentity}>
              <span>Matter</span>
              <strong>{matter.reference}</strong>
              <small>{matter.status}</small>
            </div>
            <div>
              <UsersRound size={16} aria-hidden="true" />
              <span>Household</span>
              <strong>{matter.household}</strong>
            </div>
            <div>
              <BriefcaseBusiness size={16} aria-hidden="true" />
              <span>Objective</span>
              <strong>{matter.objective}</strong>
            </div>
            <div>
              <GitBranch size={16} aria-hidden="true" />
              <span>Routes</span>
              <strong>{matter.routeCount} under consideration</strong>
            </div>
            <div>
              <CalendarClock size={16} aria-hidden="true" />
              <span>Next review</span>
              <strong>{matter.nextReviewDate}</strong>
            </div>
          </div>

          <ProcessJourney
            activeStep={activeStep}
            onStepChange={setActiveStep}
            steps={matter.steps}
          />
        </div>
      </section>

      <div className={styles.workspaceBand}>
        <div className="container">
          <WorkspaceViews
            activeView={activeView}
            matter={matter}
            onViewChange={setActiveView}
          />
        </div>
      </div>

      <section className={styles.boundarySection}>
        <div className={`container ${styles.boundaryGrid}`}>
          <div>
            <span className={styles.kicker}>Operating boundary</span>
            <h2>The firm keeps the judgement. Sovereignty Control keeps the matter ready for it.</h2>
            <p>
              Sovereignty Control is an early-stage operating method being validated.
              It is not presented as a mature platform, a regulated service or a
              substitute for the firm's professional team.
            </p>
          </div>
          <div className={styles.responsibilityTable}>
            <div className={styles.responsibilityHead}>
              <span>The firm retains</span>
              <span>Sovereignty Control supports</span>
            </div>
            {responsibilityRows.map((row) => (
              <div className={styles.responsibilityRow} key={row.firm}>
                <p>{row.firm}</p>
                <p>{row.control}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.offerSection} id="complimentary-diagnostic">
        <div className={`container ${styles.offerGrid}`}>
          <div className={styles.offerTitle}>
            <span className={styles.kickerLight}>Current validation offer</span>
            <h2>Start with one matter, not a software purchase.</h2>
            <p>
              The complimentary diagnostic tests whether the matter-control method
              genuinely improves visibility, ownership and advisor preparation.
            </p>
          </div>
          <dl className={styles.offerFacts}>
            <div>
              <dt>Fee</dt>
              <dd>{matter.diagnostic.fee}</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>{matter.diagnostic.scope}</dd>
            </div>
            <div>
              <dt>Timing</dt>
              <dd>{matter.diagnostic.timing}</dd>
            </div>
            <div>
              <dt>Commitment</dt>
              <dd>{matter.diagnostic.obligation}</dd>
            </div>
          </dl>
          <div className={styles.offerBoundary}>
            <ShieldCheck size={18} aria-hidden="true" />
            <p>{matter.diagnostic.communicationBoundary}. Participation is subject to an agreed entry gate.</p>
          </div>
          <Link
            className={`button button-gold ${styles.offerCta}`}
            data-testid="primary-cta"
            href="/contact?interest=matter-control-diagnostic"
          >
            Discuss a complimentary matter-control diagnostic
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className={styles.dataSection}>
        <div className="container">
          <details className={styles.dataDisclosure} data-testid="data-handling-disclosure">
            <summary>
              <span>
                <ShieldCheck size={18} aria-hidden="true" />
                Data handling during the diagnostic
              </span>
              <ChevronDown size={18} aria-hidden="true" />
            </summary>
            <div className={styles.dataDisclosureBody}>
              <p>
                The diagnostic works from minimised operational states and existing
                location references—not a new repository of sensitive documents.
              </p>
              <ul>
                {matter.dataBoundaries.map((boundary) => (
                  <li key={boundary}>{boundary}</li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </section>
    </main>
  );
}
