import { AlertCircle, Ban, CircleCheck, Link2 } from "lucide-react";
import type { MatterStatus } from "@/lib/matter-control-fixture";
import styles from "./MatterControl.module.css";

const statusLabels: Record<MatterStatus, string> = {
  ready: "Ready",
  attention: "Attention",
  dependency: "Dependency",
  blocked: "Blocked"
};

const statusIcons = {
  ready: CircleCheck,
  attention: AlertCircle,
  dependency: Link2,
  blocked: Ban
} as const;

export function StatusLanguage({ status }: { status: MatterStatus }) {
  const Icon = statusIcons[status];

  return (
    <span className={`${styles.status} ${styles[`status_${status}`]}`}>
      <Icon size={13} strokeWidth={1.8} aria-hidden="true" />
      {statusLabels[status]}
    </span>
  );
}
