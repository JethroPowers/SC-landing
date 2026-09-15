import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  FileText,
  Globe2,
  MoveUpRight,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { juris, enquiryHref } from "@/lib/partners";
import { NextPages } from "./Website";
import styles from "./Advisers.module.css";

import { adviserProcess as process } from "./adviser-content";

const faqs = [
  [
    "What does becoming a Juris adviser mean?",
    "An independent professional or firm accepted into a defined collaboration with Juris. It does not mean employment, government authorisation, a new qualification, guaranteed suitability for every client or unlimited permission to use the Juris brand.",
  ],
  [
    "Is an application the same as acceptance?",
    "No. The form registers interest for a founder conversation. Mutual fit, applicable professional claims, responsibilities and terms need review and agreement before any adviser designation or agreed activity begins.",
  ],
  [
    "Will Juris send me clients?",
    "There is no guaranteed traffic, lead quota, client volume, exclusivity or revenue. Relevant enquiries may be considered only where need, fit, permission and capacity are established and a suitable professional accepts. Introductions and any associated fees need their own terms.",
  ],
  [
    "Is a public profile or directory listing included?",
    "A profile is a possible element to discuss. Publication depends on acceptance, agreed terms and actual profile functionality. The layout on this page is illustrative; it is not an existing approved adviser or a functioning public directory.",
  ],
  [
    "Are there membership fees or required contributions?",
    "No membership price, commission rate or mandatory publishing schedule is set here. Any commercial terms or contribution commitments must be discussed and agreed. Payment and contributions do not buy editorial conclusions or preferential recommendations.",
  ],
  [
    "Do I need to buy Juris Control?",
    "No. Operational support is separately scoped and is not compulsory for affiliation or referral consideration. The complimentary one-matter diagnostic remains available to discuss where the firm has a relevant operational need.",
  ],
  [
    "Can introducers and other providers collaborate?",
    "Yes. Use the professional collaboration route to discuss your role and a relevant relationship. Submitting an enquiry does not give an introducer or other provider an adviser designation.",
  ],
];

export function AdviserInvitation() {
  return (
    <section className={styles.invitation} id="adviser-network">
      <div className={`container ${styles.invitationGrid}`}>
        <div>
          <span className={styles.eyebrow}>JURIS ADVISER NETWORK</span>
          <h2>Bring your expertise into Juris.</h2>
        </div>
        <div>
          <p>
            Explore a professional relationship built around programme
            knowledge, relevant collaboration and clearer client work.
          </p>
          <div className={styles.actions}>
            <Link
              className={styles.darkButton}
              href={juris.adviserApplicationUrl}
            >
              Apply to join the adviser network
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className={styles.textLink} href="/advisers#collaboration">
              See how collaboration works
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileIllustration() {
  return (
    <aside
      className={styles.profile}
      aria-label="Illustrative professional profile structure"
    >
      <div className={styles.profileHead}>
        <FileText size={20} strokeWidth={1.4} aria-hidden="true" />
        <span>PROFESSIONAL PROFILE</span>
        <span className={styles.profileTag}>Illustrative</span>
      </div>
      <div className={styles.profileIdentity}>
        <span className={styles.eyebrow}>YOUR PROFESSIONAL PRESENCE</span>
        <h2>
          Your firm.
          <br />
          Your expertise.
        </h2>
        <p>Independent adviser or advisory firm</p>
      </div>
      <dl className={styles.profileFields}>
        <div>
          <dt>Practice</dt>
          <dd>Services your firm actually provides</dd>
        </div>
        <div>
          <dt>Jurisdictions</dt>
          <dd>Your areas of professional work</dd>
        </div>
        <div>
          <dt>Languages</dt>
          <dd>Languages available to clients</dd>
        </div>
        <div>
          <dt>Credentials</dt>
          <dd>Independently stated; checked where applicable</dd>
        </div>
      </dl>
      <p className={styles.profileNote}>
        An illustrative layout, not an approved adviser. Publication requires
        acceptance, agreed terms and supported profile functionality.
      </p>
    </aside>
  );
}

function RelationshipMap() {
  return (
    <div
      className={styles.relationship}
      aria-label="How the Juris brands relate"
    >
      <div className={styles.relationshipTop}>
        <a href={juris.publicUrl}>
          <strong>Juris</strong>
          <span>The public intelligence platform</span>
        </a>
        <ArrowRight size={22} aria-hidden="true" />
        <div>
          <strong>Juris Partners</strong>
          <span>The professional-facing site</span>
        </div>
      </div>
      <p className={styles.relationshipContext}>Juris Intelligence supplies the programme knowledge and source context connecting the work.</p>
      <div className={styles.relationshipBranches}>
        <div>
          <strong>Juris Adviser Network</strong>
          <span>An agreed independent relationship</span>
        </div>
        <Link href="/how-matter-control-works">
          <strong>Juris Control</strong>
          <span>Separately scoped operational support</span>
        </Link>
      </div>
    </div>
  );
}

export function AdviserNetwork({ configured }: { configured: boolean }) {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>BECOME A JURIS ADVISER</span>
            <h1>
              Bring your
              <br />
              <em>expertise</em>
              <br />
              into Juris.
            </h1>
            <p>
              Explore a professional relationship built around programme
              knowledge, relevant collaboration and clearer client work. Tell us
              where you operate, who you serve and how you would like to
              contribute.
            </p>
            <div className={styles.actions}>
              <a className={styles.darkButton} href="#apply">
                Apply to join the adviser network
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className={styles.textLink} href="#collaboration">
                See how collaboration works
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <Link className={styles.quietLink} href="/how-matter-control-works">
              Looking for operational support? Explore Juris Control
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <ProfileIllustration />
        </div>
      </section>
      <section className={styles.identity}>
        <div className={`container ${styles.identityGrid}`}>
          <div>
            <span className={styles.eyebrow}>
              INDEPENDENT EXPERTISE. AN AGREED RELATIONSHIP.
            </span>
            <h2>
              One Juris.
              <br />A clear professional remit.
            </h2>
            <p>
              A Juris adviser is an independent professional or firm accepted
              into a defined collaboration with Juris. Your professional advice,
              client engagement and delivery remain your responsibility.
            </p>
            <p>
              The relationship does not confer employment, government
              authorisation or a new professional qualification.
            </p>
          </div>
          <RelationshipMap />
        </div>
      </section>
      <section className={styles.benefits} id="collaboration">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>WHAT WE CAN EXPLORE TOGETHER</span>
            <h2>
              Contribute knowledge.
              <br />
              Build relevant relationships.
            </h2>
            <p>
              Start with a useful contribution and a clear remit. Agree the
              elements that make sense for your firm.
            </p>
          </div>
          <article className={styles.benefitRow}>
            <div className={styles.benefitTitle}>
              <span>01 / KNOWLEDGE</span>
              <h3>
                A better-informed
                <br />
                professional conversation.
              </h3>
            </div>
            <div className={styles.benefitBody}>
              <dl>
                <div>
                  <dt>Programme understanding</dt>
                  <dd>
                    Use published Juris programme pages, research and source
                    context. Discuss a further briefing when you have a defined
                    question.
                  </dd>
                </div>
                <div>
                  <dt>Editorial contribution</dt>
                  <dd>
                    Submit useful local insight, corrections or bylined
                    commentary for editorial review. Contributions and payment
                    cannot buy factual conclusions or automatic publication.
                  </dd>
                </div>
                <div>
                  <dt>Product dialogue</dt>
                  <dd>
                    Bring workflow needs and practical feedback to the founders.
                    Discuss what would make professional work clearer.
                  </dd>
                </div>
              </dl>
              <a className={styles.textLink} href={juris.insightsUrl}>
                Explore published Juris insights
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>
          <article className={styles.benefitRow}>
            <div className={styles.benefitTitle}>
              <span>02 / RELATIONSHIPS</span>
              <h3>
                Make your remit clear.
                <br />
                Find the right conversation.
              </h3>
            </div>
            <div className={styles.benefitBody}>
              <dl>
                <div>
                  <dt>Professional presence</dt>
                  <dd>
                    Discuss an approved profile that sets out the real firm,
                    services, jurisdictions, languages and independently stated
                    credentials.
                  </dd>
                </div>
                <div>
                  <dt>Professional connections</dt>
                  <dd>
                    Discuss a suitable introduction when a client’s needs extend
                    beyond your remit, using relationships that actually exist
                    and appropriate permissions.
                  </dd>
                </div>
                <div>
                  <dt>Relevant client enquiries</dt>
                  <dd>
                    Consideration for suitable Juris enquiries can be discussed
                    after the need, fit, permissions and your capacity are
                    established. The professional must accept the introduction.
                  </dd>
                </div>
              </dl>
            </div>
          </article>
          <article className={styles.benefitRow}>
            <div className={styles.benefitTitle}>
              <span>03 / CLIENT WORK</span>
              <h3>
                Practical support.
                <br />
                Its own agreed scope.
              </h3>
            </div>
            <div className={styles.benefitBody}>
              <p>
                Explore enquiry preparation, proposal handover, document
                readiness, dependencies and follow-up through Juris Control. A
                defined output might be a structured brief, handover record or
                client-update draft for the firm to approve.
              </p>
              <p>
                Operational work is separately scoped. It is neither
                automatically included in affiliation nor compulsory for
                introduction consideration.
              </p>
              <Link className={styles.textLink} href="/demo-case">
                See a worked operational example
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </article>
          <div className={styles.expectations}>
            <strong>Agree what participation means.</strong>
            <p>
              Benefits and responsibilities are discussed case by case. Profile
              publication needs acceptance, agreed terms and actual
              functionality. Joining does not promise traffic, clients,
              exclusivity, unlimited research, alerts or support. There is no
              established membership price or mandatory contribution schedule
              here.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.process} id="joining">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>
              FROM INTEREST TO COLLABORATION
            </span>
            <h2>
              A conversation first.
              <br />
              An agreement before activity.
            </h2>
          </div>
          <div className={styles.processGrid}>
            {process.map((step, index) => (
              <details key={step.title}>
                <summary>
                  <span>0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <Plus size={20} aria-hidden="true" />
                </summary>
                <p>{step.description}</p>
              </details>
            ))}
          </div>
          <p className={styles.processNote}>
            The form below registers interest. A founder conversation and agreed
            relationship come before acceptance or any introduction activity.
          </p>
        </div>
      </section>
      <section className={styles.publicJourney} id="public-journey">
        <div className={`container ${styles.journeyGrid}`}>
          <div>
            <span className={styles.eyebrow}>CONNECTED TO PUBLIC JURIS</span>
            <h2>
              From programme research
              <br />
              to professional help.
            </h2>
            <p>
              Professionals can explore public Juris, learn about collaboration
              here and register interest for review. Prospective clients use the
              separate public advisory route.
            </p>
            <a href={juris.programmesUrl} className={styles.journeyPreview}>
              <Image
                src="/previews/juris-programmes.png"
                alt="Actual Juris programme directory, captured 15 September 2026"
                width={1440}
                height={960}
                sizes="(max-width:800px) 100vw, 50vw"
              />
              <span>
                EXPLORE THE PUBLIC PROGRAMME DIRECTORY
                <ArrowUpRight size={17} aria-hidden="true" />
              </span>
            </a>
          </div>
          <div className={styles.clientSteps}>
            <span className={styles.eyebrow}>
              WHEN AN INTRODUCTION IS APPROPRIATE
            </span>
            <ol>
              <li>
                <strong>Programme research</strong>
                <span>
                  The individual explores the public Juris information.
                </span>
              </li>
              <li>
                <strong>Request professional help</strong>
                <span>
                  They contact Juris through the public advisory journey.
                </span>
              </li>
              <li>
                <strong>Clarify need & permission</strong>
                <span>
                  Confirm the request and what information may be shared.
                </span>
              </li>
              <li>
                <strong>A suitable professional accepts</strong>
                <span>
                  Check the existing relationship, remit and availability.
                </span>
              </li>
              <li>
                <strong>Agree the engagement</strong>
                <span>
                  The client and independent professional agree advice and
                  delivery.
                </span>
              </li>
            </ol>
            <p>
              This illustrates the intended introduction process. Referrals and
              any associated fees need agreed terms; no automatic matching or
              client-data sharing is connected here.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.faqSection}>
        <div className={`container ${styles.faqGrid}`}>
          <div>
            <span className={styles.eyebrow}>BEFORE YOU APPLY</span>
            <h2>
              Clear expectations.
              <br />
              Useful answers.
            </h2>
            <p>
              Not an adviser? There is a separate route for introducers and
              other providers.
            </p>
            <Link
              className={styles.textLink}
              href={enquiryHref("professional-collaboration")}
            >
              Discuss another collaboration
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div>
            {faqs.map(([question, answer]) => (
              <details className={styles.faq} key={question}>
                <summary>
                  {question}
                  <Plus size={19} aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.application} id="apply">
        <div className={`container ${styles.applicationGrid}`}>
          <div className={styles.applicationCopy}>
            <span className={styles.eyebrow}>YOUR NEXT STEP</span>
            <h2>
              Let’s begin
              <br />
              with your expertise.
            </h2>
            <p>
              Register interest in the Juris Adviser Network. Share your areas
              of practice, the clients you serve and the kind of contribution or
              collaboration you want to discuss.
            </p>
            <div className={styles.applicationNote}>
              <Globe2 size={24} strokeWidth={1.4} aria-hidden="true" />
              <div>
                <strong>Professional context only.</strong>
                <p>
                  No client names or documents. Relevant credentials can be
                  discussed where applicable, without assuming every role
                  requires the same authorisation.
                </p>
              </div>
            </div>
            <a className={styles.quietLink} href={juris.adviceUrl}>
              Looking for advice for yourself?
              <MoveUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <ContactForm configured={configured} variant="adviser" />
        </div>
      </section>
      <NextPages
        pages={[
          {
            href: "/how-matter-control-works",
            label: "Juris Control",
            description:
              "Explore separately scoped support for existing client work.",
          },
          {
            href: "/offers#collaboration",
            label: "Other professional collaboration",
            description:
              "A distinct route for introducers, knowledge contributors and providers.",
          },
          {
            href: "/about",
            label: "Meet the founders",
            description:
              "Jethro and Alberto’s contributions and the work behind Juris.",
          },
        ]}
      />
    </main>
  );
}
