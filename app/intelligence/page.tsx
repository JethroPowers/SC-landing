import { ProgrammeChangeExample } from "@/components/partners/ProgrammeChangeExample";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { juris, enquiryHref } from "@/lib/partners";
import {
  PageIntro,
  NextPages,
  ConversationCta,
} from "@/components/partners/Website";
import webStyles from "@/components/partners/Website.module.css";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  GitPullRequestDraft,
  RadioTower,
} from "lucide-react";

const IntelligenceRegister = dynamic(() =>
  import("@/components/control-room/IntelligenceRegister").then(
    (module) => module.IntelligenceRegister,
  ),
);

export const metadata: Metadata = {
  title: "Programme research",
  description:
    "Explore public Juris information and an illustrative source-review method, with separately scoped professional briefings and maintenance.",
  alternates: { canonical: "/intelligence" },
};

export default function IntelligencePage() {
  return (
    <main className="intelligence-page">
      <PageIntro
        eyebrow="JURIS INTELLIGENCE"
        title={
          <>
            Programme knowledge.
            <br />Context for every next step.
          </>
        }
        aside={
          <>
            <span className={webStyles.eyebrow}>EXPLORE PUBLIC JURIS</span>
            <h2>Begin with the published information.</h2>
            <p>
              Visit the directory, individual programme pages and insights.
              Check each page’s sources and review dates before professional
              use.
            </p>
            <div className={webStyles.linkGroup}>
              <a href={juris.programmesUrl} className={webStyles.textLink}>
                Programme directory
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href={juris.insightsUrl} className={webStyles.textLink}>
                Juris insights
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </>
        }
      >
        <p>
          Connect a programme claim to the source, effective date, assumptions
          and professional questions behind it. Discuss a specific briefing or
          coverage need where published information is not enough.
        </p>
        <p>
          All registers and impact counts below are simulated with fictional
          programmes. Public coverage and any recurring review service must be
          discussed separately.
        </p>
        <nav
          className={webStyles.miniNav}
          aria-label="Intelligence page sections"
        >
          <a href="#programme-register">Example register</a>
          <a href="#review-method">Review method</a>
          <a href="#source-standard">Source standard</a>
        </nav>
      </PageIntro>
      <section
        className="product-hierarchy"
        aria-label="Illustrative path from public information to scoped work"
      >
        <div className="container product-hierarchy-row">
          <div>
            <span>01</span>
            <strong>Published information</strong>
            <small>Public Juris orientation</small>
          </div>
          <ArrowRight size={17} aria-hidden="true" />
          <div>
            <span>02</span>
            <strong>Source & review context</strong>
            <small>Professional interpretation</small>
          </div>
          <ArrowRight size={17} aria-hidden="true" />
          <div>
            <span>03</span>
            <strong>Scoped operational work</strong>
            <small>Apply through Juris Control where agreed</small>
          </div>
          <ArrowRight size={17} aria-hidden="true" />
          <div>
            <span>04</span>
            <strong>A prepared working record</strong>
            <small>Simulated examples below</small>
          </div>
        </div>
      </section>
      <section
        className={`container ${webStyles.section}`}
        id="programme-register"
      >
        <div className={webStyles.sectionHeading}>
          <div>
            <span className={webStyles.eyebrow}>ILLUSTRATIVE RECORDS</span>
            <h2>Inspect the information behind a programme.</h2>
          </div>
          <p>
            The example separates routes, fees, dependant rules, presence
            requirements, processing ranges, official-source context and
            effective dates. Open a record to inspect its review state.
          </p>
        </div>
        <IntelligenceRegister />
      </section>
      <section className="intelligence-principles">
        <div className="container principles-grid">
          <div>
            <span>01</span>
            <h2>Record each qualifying route separately.</h2>
            <p>
              Contribution, property, bonds, funds, business and deposit routes
              remain separate so family assumptions can be reviewed properly.
            </p>
          </div>
          <div>
            <span>02</span>
            <h2>Keep announcements separate from approved figures.</h2>
            <p>
              A proposed value moves through source review and professional
              approval before it is allowed into client-facing calculations.
            </p>
          </div>
          <div>
            <span>03</span>
            <h2>Show which client work needs checking.</h2>
            <p>
              Every material update should show the old value, new value,
              source, effective date, reviewer and affected cases or reports.
            </p>
          </div>
        </div>
      </section>
      <section className="release-lifecycle" id="review-method">
        <div className="container release-lifecycle-grid">
          <div className="release-lifecycle-copy">
            <h2>
              A new fee notice must be checked before it reaches a client
              comparison.
            </h2>
            <p>
              The team needs the issuing authority, source link, effective date
              and reviewer. It also needs to know which proposals, family-cost
              comparisons and active matters still contain the previous figure.
            </p>
          </div>
          <ol className="release-steps">
            <li>
              <FileSearch size={18} />
              <div>
                <strong>Source captured</strong>
                <span>
                  Issuing authority, URL, retrieval date and source note
                </span>
              </div>
            </li>
            <li>
              <GitPullRequestDraft size={18} />
              <div>
                <strong>Draft record</strong>
                <span>Old and proposed values remain visibly separate</span>
              </div>
            </li>
            <li>
              <CheckCircle2 size={18} />
              <div>
                <strong>Professional review</strong>
                <span>
                  Confidence, limitations and effective date are checked
                </span>
              </div>
            </li>
            <li>
              <RadioTower size={18} />
              <div>
                <strong>Approved programme record</strong>
                <span>
                  Affected matters, comparisons and reports are listed for
                  review
                </span>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section
        className="source-standard"
        id="source-standard"
        aria-label="Fictional source-standard example"
      >
        <div className="container source-standard-grid">
          <div>
            <h2>What must sit behind a programme fee or eligibility claim.</h2>
            <p>
              Advisers must be able to distinguish an effective programme rule
              from a proposed announcement, a working assumption or an item
              still waiting for an official source.
            </p>
          </div>
          <dl>
            <div>
              <dt>Claim</dt>
              <dd>Fictional Programme C · family contribution</dd>
            </div>
            <div>
              <dt>State</dt>
              <dd>
                <span className="inline-status warning">Pending review</span>
              </dd>
            </div>
            <div>
              <dt>Authority</dt>
              <dd>Fictional issuing authority notice</dd>
            </div>
            <div>
              <dt>Effective date</dt>
              <dd>Not confirmed</dd>
            </div>
            <div>
              <dt>Reviewer</dt>
              <dd>Programme Data Review</dd>
            </div>
            <div>
              <dt>Downstream impact</dt>
              <dd>2 cases · 1 adviser report</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <h2>Current values and correction history stay separate.</h2>
          <p>
            A proposal is not an effective rule. In an illustrative record,
            correcting a source title does not overwrite the approved current
            value. An effective change still needs evidence and applicability
            review before it affects professional work.
          </p>
          <p>
            This is a method illustration, not an automated publishing or
            matter-monitoring pipeline. Private client evidence must not enter
            public content or another firm’s workspace. Maintenance coverage,
            review cadence and affected-work support require an agreed scope.
          </p>
        </div>
      </section>
      <section className="home-demo-cta">
        <div className="container home-demo-grid">
          <div>
            <h2>See a fictional change held for professional review.</h2>
            <p>
              JP-024 holds the changed assumption for adviser review and
              identifies the affected readiness work.
            </p>
          </div>
          <Link
            className="button button-primary"
            href="/how-matter-control-works#change"
          >
            See JP-024 change impact <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <div className="container"><ProgrammeChangeExample /></div>
      <ConversationCta
        title="Discuss a programme question."
        href={enquiryHref("programme-intelligence")}
        label="Discuss programme intelligence"
      >
        Start with the jurisdiction, research question and intended professional
        use. Agree sources, review ownership and the briefing’s scope before
        work begins.
      </ConversationCta>
      <NextPages
        pages={[
          {
            href: "/what-we-do#research",
            label: "Research and briefings",
            description:
              "Published information and possible outputs for a scoped research question.",
          },
          {
            href: "/how-matter-control-works#change",
            label: "From a change to a matter",
            description:
              "See how fictional JP-024 holds an affected assumption for professional review.",
          },
          {
            href: "/offers#research",
            label: "Scope a piece of work",
            description:
              "Agree the audience, sources, limitations and review responsibility.",
          },
        ]}
      />
    </main>
  );
}
