import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { enquiryHref } from "@/lib/partners";
import { WorkflowExplorer } from "@/components/partners/WorkflowExplorer";
import {
  PageIntro,
  NextPages,
  ConversationCta,
} from "@/components/partners/Website";
import styles from "@/components/partners/Website.module.css";

export const metadata: Metadata = {
  title: "For your firm — roles and workflows",
  description:
    "Explore candidate workflows for introducers, advisory firms, authorised delivery teams and relocation providers, from existing enquiry to review.",
  alternates: { canonical: "/use-cases" },
};
const roles = [
  {
    id: "introducers",
    title: "Introducers & marketing agents",
    context: "Existing client requests and professional handovers",
    text: "You may originate a request and help it reach an appropriate professional, without managing the application. The useful record is who has permission to receive what, whether the professional has accepted and when the next status checkpoint is due.",
    output: "Accepted handover record",
    detail:
      "Request scope, permission, receiving professional, acceptance, agreed status and referral milestone. This is a candidate coordination output; no matching marketplace or commission protection is implemented.",
    interest: "introduction-discussion" as const,
    stage: undefined,
    cta: "Discuss an introduction",
  },
  {
    id: "advisers",
    title: "Advisory firms",
    context: "Consultation, comparison and engagement",
    text: "Bring objectives, household context and unanswered questions into a consultation. Carry reviewed route comparisons, fee assumptions and proposal exclusions into the engagement so the delivery team can see what was agreed.",
    output: "Enquiry brief and reviewed-assumption sheet",
    detail:
      "Separate investment capital, government charges, professional fees and unconfirmed costs. The adviser owns recommendations and approves the proposal.",
    interest: "operational-workflow" as const,
    stage: "comparison",
    cta: "Discuss adviser preparation",
  },
  {
    id: "delivery",
    title: "Local & authorised delivery teams",
    context: "Readiness, dependencies and next actions",
    text: "Coordinate document status, external-provider responses and requests from authorities. A useful register connects a missing item to its consequence, responsible person and next review date.",
    output: "Document-status and dependency register",
    detail:
      "Missing evidence remains missing when recorded. Authorised professionals decide sufficiency, control deadlines and use the required government filing systems.",
    interest: "operational-workflow" as const,
    stage: "readiness",
    cta: "Discuss delivery coordination",
  },
  {
    id: "relocation",
    title: "Relocation & multi-provider teams",
    context: "Separately responsible providers",
    text: "Carry appointments, provider milestones and outstanding actions into a shared plan. Identify who owns each checkpoint and which status may be communicated to the client or introducer.",
    output: "Provider milestone and review record",
    detail:
      "Renewal or review obligations are included where applicable and agreed. Each provider retains its professional role; no automatic deadline monitoring is implied.",
    interest: "operational-workflow" as const,
    stage: "review",
    cta: "Discuss provider handovers",
  },
];

export default function UseCasesPage() {
  return (
    <main className={styles.page}>
      <PageIntro
        eyebrow="FOR YOUR FIRM"
        title={
          <>
            Different roles.
            <br />
            Different points of friction.
          </>
        }
      >
        <p>
          A marketing agent, an adviser and an authorised delivery team do
          different work. Explore the part your firm actually handles, then
          consider whether a specific output would help.
        </p>
        <p>
          These are candidate workflow patterns. Citizenship, investor residence
          and relocation do not share one universal process.
        </p>
        <nav className={styles.miniNav} aria-label="Firm roles">
          {roles.map((role) => (
            <a key={role.id} href={`#${role.id}`}>
              {role.title}
            </a>
          ))}
          <a href="#workflows">Explore six workflow stages</a>
        </nav>
      </PageIntro>
      <section
        className={styles.section}
        aria-label="Work by professional role"
      >
        <div className={`container ${styles.roles}`}>
          {roles.map((role) => (
            <article key={role.id} id={role.id} className={styles.role}>
              <span className={styles.eyebrow}>{role.context}</span>
              <h2>{role.title}</h2>
              <p>{role.text}</p>
              <div className={styles.output}>
                <span className={styles.label}>POSSIBLE JURIS OUTPUT</span>
                <strong>{role.output}</strong>
                <p>{role.detail}</p>
              </div>
              <Link
                className={styles.textLink}
                href={enquiryHref(role.interest, role.stage)}
              >
                {role.cta}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.muted}`} id="workflows">
        <div className="container">
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>
                FROM EXISTING ENQUIRY TO REVIEW
              </span>
              <h2>Find the handoff that matters.</h2>
            </div>
            <p>
              Choose a perspective and stage to see the task, possible friction,
              proposed output and retained responsibility. The enquiry link
              carries only your selected workflow.
            </p>
          </div>
          <WorkflowExplorer />
          <p>
            Organising demand already present is different from generating new
            demand. None of these outputs promises increased traffic or sales.
          </p>
        </div>
      </section>
      <section className={styles.dark}>
        <div className={`container ${styles.split}`}>
          <div>
            <span className={styles.eyebrow}>
              PROFESSIONAL RELATIONSHIPS
            </span>
            <h2>Bring your expertise as well as your workflow.</h2>
          </div>
          <div>
            <p>
              Independent advisers and advisory firms can explore the Juris
              Adviser Network to discuss programme knowledge, contributions
              and suitable professional relationships. Participation follows
              review and agreement, independently of any Control work.
            </p>
            <Link className={styles.textLink} href="/advisers">
              Become a Juris adviser
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <p>
              Introducers and other providers can discuss a separate
              collaboration. If the need is new enquiries alone, operational
              support may not be useful; Juris does not guarantee leads or
              enquiry volumes.
            </p>
            <Link className={styles.textLink} href="/offers#collaboration">
              Explore professional collaboration
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <ConversationCta title="Tell us how your firm works.">
        Describe your role, existing process and the next step that is difficult
        to coordinate. Keep applicant identities and confidential case details
        out of the enquiry.
      </ConversationCta>
      <NextPages
        pages={[
          {
            href: "/demo-case",
            label: "See a worked example",
            description:
              "Follow JP-024 from scattered information to a record with owners and actions.",
          },
          {
            href: "/diagnostic",
            label: "Start with one matter",
            description:
              "The complimentary diagnostic, its six output groups and its boundaries.",
          },
          {
            href: "/intelligence",
            label: "Connect sources to work",
            description:
              "How dated programme information can support professional review.",
          },
        ]}
      />
    </main>
  );
}
