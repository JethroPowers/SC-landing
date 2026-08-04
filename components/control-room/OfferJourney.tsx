import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { offerPaths } from "@/lib/control-room-data";
import styles from "./ControlRoom.module.css";

export function OfferJourney() {
  return (
    <div className={styles.offerJourney}>
      {offerPaths.map((offer, index) => (
        <article className={styles.offerChapter} id={offer.id} key={offer.id}>
          <span className={styles.offerIndex}>0{index + 1} · {offer.step}</span>
          <div className={styles.offerLead}>
            <h2>{offer.title}</h2>
            <div className={styles.offerField}>
              <span>Buying trigger</span>
              <p className="lead">{offer.buyingTrigger}</p>
            </div>
            <div className={styles.offerField}>
              <span>Work performed</span>
              <p>{offer.workPerformed}</p>
            </div>
          </div>
          <aside className={styles.offerRecord}>
            <span className="small">Price and timing</span>
            <strong className={styles.offerPrice}>{offer.price}</strong>
            <span className="small">{offer.timing}</span>
            <div className={styles.offerFormat}>
              <span>Engagement format</span>
              <p>{offer.engagementFormat}</p>
            </div>
            <div className={styles.offerOutcome}>
              <span>Firm outcome</span>
              <strong>{offer.firmOutcome}</strong>
            </div>
            <div className={styles.offerDeliverables}>
              <span>What the firm receives</span>
              <ul>
                {offer.deliverables.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <Link className="button button-primary" href={`/contact?interest=${offer.id}`}>
              Request a private demo <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </aside>
          <div className={styles.offerTransition}>
            <ArrowDown size={18} aria-hidden="true" />
            <span>{offer.next}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
