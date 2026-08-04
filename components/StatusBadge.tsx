type StatusBadgeProps = {
  children: React.ReactNode;
};

const toneByLabel: Record<string, string> = {
  draft: "status-draft",
  "pending review": "status-review",
  "needs advisor review": "status-review",
  "source required": "status-source",
  proposed: "status-proposed",
  published: "status-published",
  complete: "status-complete",
  confirmed: "status-confirmed",
  blocked: "status-blocked",
  missing: "status-missing",
  "client action required": "status-client",
  "not started": "status-default",
  "needs review": "status-review"
};

export function StatusBadge({ children }: StatusBadgeProps) {
  const key = String(children).toLowerCase();
  const tone = toneByLabel[key] ?? "status-default";

  return <span className={`status-badge ${tone}`}>{children}</span>;
}
