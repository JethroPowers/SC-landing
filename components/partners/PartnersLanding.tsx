import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  UserRound,
  BriefcaseBusiness,
  Building2,
  FileText,
  Network,
  BookOpen,
} from "lucide-react";
import { juris, enquiryHref } from "@/lib/partners";
import { EcosystemVisual } from "./EcosystemVisual";
import {
  PublicProductStory,
  IntelligenceStory,
  ControlProductStory,
} from "./ProductStories";
import { FrictionExplorer } from "./FrictionExplorer";
import { adviserProcess } from "./adviser-content";
import styles from "./Institutional.module.css";

const faqs = [
  [
    "Will Juris guarantee us clients?",
    "No. There is no promised traffic, lead quota, client volume or revenue. A relevant enquiry may be considered only after need, suitability, permission and capacity are established and a professional accepts the introduction.",
  ],
  [
    "Do I need to buy Juris Control to become an adviser?",
    "No. Adviser participation and operational services have their own purposes and terms. Control is not compulsory for affiliation or consideration for an introduction.",
  ],
  [
    "Does paying Juris give my firm preferential recommendation?",
    "No. Payment does not determine suitability, buy editorial conclusions or secure a preferential recommendation. Introductions and any associated fees require their own agreed terms.",
  ],
  [
    "What does becoming a Juris Adviser mean?",
    "An independent professional or firm accepted into a defined collaboration with Juris. It is not employment, government authorisation, a new qualification or unlimited permission to use the brand. An application registers interest; the relationship starts only after review and agreement.",
  ],
  [
    "Is Control software or a service?",
    "Control is an operational capability being validated through separately scoped work. The interfaces here demonstrate the method using a fictional matter. They are not a self-service SaaS product. Any live work, tools, access, outputs and responsibilities need agreement.",
  ],
  [
    "Is Juris replacing our CRM?",
    "That is not assumed. We first understand the existing tools and the point where preparation, handover or follow-up needs support. Government portals remain the required filing systems, with authorised professionals controlling submissions.",
  ],
  [
    "Can we discuss an operational problem without joining the network?",
    "Yes. A workflow or active-matter question is a separate starting point. The complimentary one-matter diagnostic may be appropriate; it runs over 7–10 working days and carries no obligation to continue.",
  ],
  [
    "Does Juris give legal or immigration advice?",
    "This professional offering supports programme information, workflow and preparation. Qualified professionals retain legal and immigration advice, tax outcomes, investment suitability, programme recommendations, evidence sufficiency and submissions. Juris does not decide application approval.",
  ],
  [
    "Can we start without uploading client files?",
    "Yes. Use business context and a non-confidential description of the work. No client documents are requested in the enquiry form. Any later intake uses agreed access and minimised information; the diagnostic does not require raw passports, bank statements or source-of-wealth files.",
  ],
];
export function PartnersLanding() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className={styles.kicker}>
              JURIS PARTNERS / THE PROFESSIONAL ENVIRONMENT
            </span>
            <h1>
              For the people behind <em>global mobility.</em>
            </h1>
            <p>
              Juris is a global mobility intelligence platform. Here, programme
              knowledge, independent expertise and clearer operating workflows
              come together for citizenship, residence and relocation
              professionals.
            </p>
            <div className={styles.actions}>
              <Link className={styles.button} href="/advisers">
                Become a Juris Adviser
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                className={styles.textLink}
                href="/how-matter-control-works"
              >
                Explore professional support
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <a href={juris.publicUrl} className={styles.publicLink}>
              Explore public Juris
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <EcosystemVisual />
        </div>
        <div className={`container ${styles.heroFoot}`}>
          <span>
            Citizenship · Residence · Investment migration · Relocation
          </span>
          <span>Independent expertise. Clearly scoped relationships.</span>
        </div>
      </section>
      <section className={styles.section} id="for-your-firm">
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.kicker}>ONE JURIS</span>
              <h2>
                Different needs.
                <br />A connected foundation.
              </h2>
            </div>
            <p>
              Juris Intelligence connects the public platform, professional
              relationships and the preparation behind client work.
            </p>
          </div>
          <div className={styles.pathways}>
            <article className={styles.pathway}>
              <span>01 / INTELLIGENCE</span>
              <h3>Understand the context.</h3>
              <div className={styles.pathObject}>
                <span>PROGRAMME RECORD</span>
                <strong>Source · review · change</strong>
                <small>Knowledge with context</small>
              </div>
              <p>
                Explore programmes, published research and the source context
                behind a professional question.
              </p>
              <Link className={styles.textLink} href="/intelligence">
                Explore Juris Intelligence
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
            <article className={styles.pathway}>
              <span>02 / PROFESSIONAL NETWORK</span>
              <h3>Bring your expertise.</h3>
              <div className={styles.pathObject}>
                <span>PROFESSIONAL RELATIONSHIP</span>
                <strong>Practice · contribution · fit</strong>
                <small>Review and agreement first</small>
              </div>
              <p>
                Explore the Juris Adviser Network and contribute to relevant
                professional relationships.
              </p>
              <Link className={styles.textLink} href="/advisers">
                For advisers and firms
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
            <article className={styles.pathway}>
              <span>03 / OPERATIONS</span>
              <h3>Make work clearer.</h3>
              <div className={styles.pathObject}>
                <span>WORKING RECORD</span>
                <strong>State · owner · next action</strong>
                <small>Separately scoped support</small>
              </div>
              <p>
                Investigate friction around existing enquiries, handovers,
                active matters and follow-up.
              </p>
              <Link
                className={styles.textLink}
                href="/how-matter-control-works"
              >
                Explore Juris Control
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          </div>
          <p className={styles.note}>
            Adviser participation does not require purchasing Juris Control.
            Neither route promises traffic or client introductions.{" "}
            <Link href="/what-we-do">
              See how the professional offering fits together.
            </Link>
          </p>
        </div>
      </section>
      <section className={styles.productSection} id="public-platform">
        <div className="container">
          <div className={styles.productHead}>
            <div>
              <span className={styles.kicker}>THE PUBLIC PLATFORM</span>
              <h2>
                Built on real
                <br />
                programme intelligence.
              </h2>
            </div>
            <p>
              Start with the product already available: global discovery,
              programme detail and published insight.
            </p>
          </div>
          <PublicProductStory />
        </div>
      </section>
      <section className={styles.adviserSection} id="adviser-network">
        <div className="container">
          <div className={styles.adviserGrid}>
            <div className={styles.adviserIntro}>
              <span className={styles.kicker}>JURIS ADVISER NETWORK</span>
              <h2>
                Bring your expertise
                <br />
                into Juris.
              </h2>
              <p>
                A professional relationship built around programme knowledge,
                useful contributions and appropriate collaboration. Tell us
                where you operate, who you serve and what you would like to
                bring.
              </p>
              <p>
                Independent advisers and advisory firms can express interest;
                participation follows review and agreement.
              </p>
              <div className={styles.actions}>
                <Link className={styles.button} href="/advisers#apply">
                  Apply to become a Juris Adviser
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link className={styles.textLink} href="/advisers">
                  Explore the relationship
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className={styles.benefits}>
              <details open>
                <summary>
                  Represent your practice.
                  <Plus size={17} aria-hidden="true" />
                </summary>
                <p>
                  Discuss an approved professional presence showing your real
                  firm, services, jurisdictions, languages and relevant
                  credentials.
                </p>
                <p>
                  Profile publication requires acceptance, agreed terms and
                  supported functionality.{" "}
                  <Link href="/advisers">
                    See the illustrative profile and full scope.
                  </Link>
                </p>
              </details>
              <details open>
                <summary>
                  Contribute to the knowledge.
                  <Plus size={17} aria-hidden="true" />
                </summary>
                <p>
                  Use published Juris research and propose local insight,
                  corrections or bylined commentary for editorial review.
                  Discuss further briefing needs where useful.
                </p>
                <p>
                  Bespoke research has its own scope. Contributions do not buy
                  factual conclusions or automatic publication.
                </p>
              </details>
              <details>
                <summary>
                  Build relevant relationships.
                  <Plus size={17} aria-hidden="true" />
                </summary>
                <p>
                  Discuss cross-jurisdiction needs and appropriate introductions
                  where a suitable professional relationship exists.
                </p>
                <p>
                  When Juris receives a relevant client enquiry, it first
                  clarifies the need and obtains appropriate permission. A
                  suitable, available professional must accept before the client
                  and professional agree an engagement.
                </p>
                <p>
                  <strong>
                    No guaranteed leads or preferential recommendation through
                    payment.
                  </strong>{" "}
                  Introductions and any associated fees need their own terms.
                </p>
              </details>
              <details>
                <summary>
                  Shape practical client work.
                  <Plus size={17} aria-hidden="true" />
                </summary>
                <p>
                  Bring workflow questions and product feedback into a founder
                  conversation. Where your firm has an operational need, explore
                  Juris Control separately.
                </p>
                <p>
                  Operational support is neither included in affiliation nor
                  required for referral consideration. Benefits,
                  responsibilities and permitted brand use are agreed
                  individually.
                </p>
              </details>
            </div>
          </div>
          <div className={styles.process}>
            <div className={styles.processHeader}>
              <span className={styles.kicker}>HOW THE RELATIONSHIP BEGINS</span>
              <p>
                Expressing interest is the first conversation, not acceptance.
              </p>
            </div>
            <div className={styles.processSteps}>
              {adviserProcess.map((step, i) => (
                <details key={step.title}>
                  <summary>
                    <span>0{i + 1}</span>
                    {step.title}
                    <Plus size={14} aria-hidden="true" />
                  </summary>
                  <p>{step.description}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.intelligenceSection} id="intelligence">
        <div className={`container ${styles.intelligenceGrid}`}>
          <div>
            <span className={styles.kicker}>
              JURIS INTELLIGENCE / THE CONNECTIVE LAYER
            </span>
            <h2>
              When the context changes,
              <br />
              know what needs review.
            </h2>
            <p>
              A source is the beginning. Understanding what changed, what
              remains uncertain and which work may be affected makes the
              information useful.
            </p>
            <Link className={styles.textLink} href="/intelligence">
              Explore sources and change context
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <p className={styles.note}>
              This sequence illustrates the method. It does not automatically
              publish changes, send alerts or update client matters.
            </p>
          </div>
          <IntelligenceStory />
        </div>
      </section>
      <section className={styles.operationsSection} id="worked-example">
        <div className="container">
          <span className={styles.kicker}>
            JURIS CONTROL / FROM INFORMATION TO CLIENT WORK
          </span>
          <h2>
            Information gives context.
            <br />
            <em>Clear records move work forward.</em>
          </h2>
          <div className={styles.operationsIntro}>
            <p>
              Structured operational support for firms managing complex client
              work. Juris prepares the state of the work so your professionals
              can focus on the judgement it needs.
            </p>
            <div className={styles.actions}>
              <Link
                className={styles.outlineButton}
                href="/how-matter-control-works"
              >
                Explore the method
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link className={styles.textLink} href="/demo-case">
                Open the interactive example
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ControlProductStory />
          <div className={styles.diagnosticLine} id="working-together">
            <div>
              <span className={styles.kicker}>A PRACTICAL FIRST STEP</span>
              <h3>Complimentary Matter Control Diagnostic</h3>
            </div>
            <p>
              One matter · 7–10 working days.
              <br />
              No obligation to continue.
            </p>
            <Link className={styles.textLink} href="/diagnostic">
              See the scope
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.workflowSection} id="workflows">
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.kicker}>
                START WITH THE WORK YOU ALREADY HAVE
              </span>
              <h2>
                Where does your
                <br />
                work get stuck?
              </h2>
            </div>
            <p>
              Choose a point of friction. Explore a possible piece of scoped
              support, then bring your firm’s context to the conversation.
            </p>
          </div>
          <FrictionExplorer />
          <p className={styles.note}>
            These are potential operational outputs, not automatically included
            software features.{" "}
            <Link href="/use-cases">
              Explore the full workflows for introducers, advisers and delivery
              teams.
            </Link>
          </p>
        </div>
      </section>
      <section className={styles.collaborationSection} id="collaboration">
        <div className={`container ${styles.collaborationGrid}`}>
          <div>
            <span className={styles.kicker}>PROFESSIONAL COLLABORATION</span>
            <h2>
              Good relationships.
              <br />
              Clear handovers.
            </h2>
            <p>
              Juris can help structure the handoff between information,
              professional expertise and an appropriate next action.
            </p>
            <p>
              Agree who is responsible, what may be shared and whether the
              receiving professional has accepted. Each party retains its own
              role.
            </p>
            <Link className={styles.textLink} href="/offers#collaboration">
              Explore collaboration arrangements
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div>
            <div
              className={styles.relationship}
              aria-label="Illustrative professional collaboration model"
            >
              <div className={styles.relationshipCore}>
                <strong>Juris</strong>
                <span>Information · expertise · agreed next steps</span>
              </div>
              {[
                [UserRound, "Independent adviser"],
                [Building2, "Local / authorised provider"],
                [Network, "Introducer"],
                [BriefcaseBusiness, "Specialist professional"],
                [FileText, "Client enquiry"],
                [BookOpen, "Intelligence"],
              ].map(([Icon, label]) => {
                const Symbol = Icon as typeof UserRound;
                return (
                  <div key={String(label)}>
                    <Symbol size={20} strokeWidth={1.3} aria-hidden="true" />
                    {String(label)}
                  </div>
                );
              })}
            </div>
            <p className={styles.note}>
              Illustrative roles, not a claim of existing partners or network
              coverage. Introducers and other providers use a separate
              collaboration route.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.boundary}>
        <div className={`container ${styles.boundaryGrid}`}>
          <div>
            <span className={styles.kicker}>PROFESSIONAL RESPONSIBILITY</span>
            <h2>
              Judgement stays
              <br />
              with the professional.
            </h2>
          </div>
          <div>
            <p>
              Juris supports information, workflow and preparation. Qualified
              professionals retain legal and immigration advice, tax outcomes,
              investment suitability, source-of-funds sufficiency, programme
              recommendations and submissions. Application approval remains with
              the relevant authority.
            </p>
            <Link className={styles.textLink} href="/disclaimer">
              Read the professional boundaries
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.engagementSection} id="ways-to-work">
        <div className="container">
          <span className={styles.kicker}>WAYS TO WORK WITH JURIS</span>
          <h2>Start with your purpose.</h2>
          <div className={styles.engagements}>
            <article className={styles.engagement}>
              <span>01</span>
              <h3>Become a Juris Adviser</h3>
              <p>
                For independent professionals interested in knowledge,
                contribution and appropriate collaboration.
              </p>
              <Link className={styles.textLink} href="/advisers#apply">
                Apply to become an adviser
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
            <article className={styles.engagement}>
              <span>02</span>
              <h3>Explore operational support</h3>
              <p>
                For firms with a specific workflow, handover or active-matter
                problem.
              </p>
              <Link
                className={styles.textLink}
                href={enquiryHref("operational-workflow")}
              >
                Discuss your workflow
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
            <article className={styles.engagement}>
              <span>03</span>
              <h3>Intelligence & research</h3>
              <p>
                For a programme question, source context or a separately scoped
                professional briefing.
              </p>
              <Link
                className={styles.textLink}
                href={enquiryHref("programme-intelligence")}
              >
                Discuss intelligence
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          </div>
          <div className={styles.engagementNote}>
            <Link href="/offers">
              How scope, terms and continuation are agreed
            </Link>
            <Link href="/about">Meet Jethro and Alberto, the founders</Link>
          </div>
        </div>
      </section>
      <section className={styles.faqSection} id="questions">
        <div className={`container ${styles.faqGrid}`}>
          <div>
            <span className={styles.kicker}>BEFORE WE BEGIN</span>
            <h2>
              The questions
              <br />
              that matter.
            </h2>
            <Link className={styles.textLink} href="/offers#questions">
              More on working together
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div>
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <Plus size={17} aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.final} id="contact">
        <div className="container">
          <span className={styles.kicker} id="enquiry">
            JURIS PARTNERS
          </span>
          <h2>
            Build the professional layer
            <br />
            of global mobility with us.
          </h2>
          <div className={styles.actions}>
            <Link className={styles.button} href="/advisers#apply">
              Become a Juris Adviser
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link
              className={styles.textLink}
              href={enquiryHref("operational-workflow")}
            >
              Explore operational support
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link className={styles.textLink} href="/contact">
              Talk to Juris
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <p>
            Looking for advice for yourself?{" "}
            <a href={juris.adviceUrl}>Start with public Juris.</a>
          </p>
        </div>
      </section>
    </main>
  );
}
