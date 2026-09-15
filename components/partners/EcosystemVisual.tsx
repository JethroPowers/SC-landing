import Image from "next/image";
import { ArrowUpRight, FileText, Layers3, UserRound } from "lucide-react";
import { juris } from "@/lib/partners";
import styles from "./Institutional.module.css";

export function EcosystemVisual() {
  return (
    <div
      className={styles.ecosystem}
      aria-label="Juris programme intelligence and illustrative professional work"
    >
      <div className={styles.visualRuler}>
        <span>JURIS / THE PROFESSIONAL ENVIRONMENT</span>
        <span>01 — 03</span>
      </div>
      <a className={styles.programmeWindow} href={juris.publicUrl}>
        <div className={styles.windowBar}>
          <span>
            <Layers3 size={15} aria-hidden="true" /> Programme intelligence
          </span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </div>
        <Image
          src="/previews/juris-atlas.png"
          alt="Actual public Juris map and programme discovery interface"
          width={1440}
          height={960}
          priority
          sizes="(max-width: 760px) 92vw, 55vw"
        />
      </a>
      <div className={styles.signalObject}>
        <span className={styles.objectLabel}>
          <FileText size={15} aria-hidden="true" /> CHANGE CONTEXT{" "}
          <small>Illustrative</small>
        </span>
        <strong>A new source. An open question.</strong>
        <p>Proposed change held for professional review.</p>
        <div>
          <span>Source recorded</span>
          <span>Review required</span>
        </div>
      </div>
      <div className={styles.professionalObject}>
        <UserRound size={22} strokeWidth={1.3} aria-hidden="true" />
        <div>
          <span>PROFESSIONAL EXPERTISE</span>
          <strong>Your firm. Your jurisdictions.</strong>
          <small>Profile concept · subject to agreement</small>
        </div>
      </div>
      <div className={styles.matterObject}>
        <div>
          <span>JP-024 / FICTIONAL MATTER</span>
          <small>Evidence review</small>
        </div>
        <strong>
          18 <i>/ 21</i>
          <span>Evidence items recorded</span>
        </strong>
        <p>
          <span className={styles.statusMark} />
          Provider confirmation outstanding
        </p>
      </div>
      <p className={styles.visualCaption}>
        Public intelligence, professional expertise and scoped client work.
      </p>
    </div>
  );
}
