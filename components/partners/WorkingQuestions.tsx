import { Plus } from "lucide-react";
import styles from "./Partners.module.css";
const faqs = [
  [
    "Is Juris a source of guaranteed new leads?",
    "No. Juris has a public discovery platform, but we do not promise enquiry volumes or a dependable referral flow. If your need is new enquiries, discuss collaboration directly; an operational engagement is not automatically relevant.",
  ],
  [
    "Can we collaborate without buying operational work?",
    "Yes. Professional collaboration has its own scope and terms. Operational work does not buy preferential referrals, paid endorsement or editorial treatment. There is no automatic partner approval.",
  ],
  [
    "What can we explore now?",
    "The public Juris map, programme directory, programme pages and editorial content are available to explore. The operational examples here are simulated. Bespoke briefings, recurring intelligence and work on your firm’s processes require a scoped engagement.",
  ],
  [
    "Will this replace our CRM or a government filing portal?",
    "That is not assumed. We first understand your existing tools and the specific handoff or output you need. Government portals remain the filing systems where required, with submissions controlled by appropriately authorised parties.",
  ],
  [
    "Can we start without uploading client documents?",
    "Yes. Start with a non-confidential description of your firm’s work. The diagnostic uses minimised operational status and a pseudonymous reference; raw passports, bank statements and source-of-wealth files are not required. Pseudonymous records can still be personal data, so handling and access are agreed before intake.",
  ],
  [
    "Is the displayed workspace live?",
    "It is an interactive simulation using fictional matter JP-024. Actions change only this example. No message is sent, application filed, government record checked or professional decision completed. Reset returns to the starting state.",
  ],
  [
    "What is complimentary, and how is later work priced?",
    "The one-matter diagnostic is complimentary, runs over 7–10 working days and carries no obligation to continue. A 30-day co-managed pilot may be discussed after closeout. Its scope and commercial terms must be agreed; no public pilot fee is set here. The future managed desk is not an established service.",
  ],
  [
    "Who makes decisions and approves communication?",
    "Your firm retains the client relationship, advice, suitability decisions, evidence sufficiency and submissions. It approves client communication. During the diagnostic Juris does not contact your client, provider or authority.",
  ],
  [
    "What happens after we contact you?",
    "A founder reviews the interest you selected, then discusses fit and the relevant next step. That may be a research brief, collaboration discussion, diagnostic or an honest no-fit response. An enquiry creates no membership or service commitment.",
  ],
];

export function WorkingQuestions() {
  return (
    <section className={styles.faqSection} id="questions">
      <div className={`container ${styles.faqGrid}`}>
        <div>
          <span className={styles.kicker}>WORKING TOGETHER</span>
          <h2>Questions before we begin.</h2>
        </div>
        <div>
          {faqs.map(([question, answer]) => (
            <details className={styles.faq} key={question}>
              <summary>
                {question}
                <Plus size={18} aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
