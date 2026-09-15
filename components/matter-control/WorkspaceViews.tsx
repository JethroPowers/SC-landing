"use client";

import {
  ClipboardCheck,
  FileQuestion,
  FolderKanban,
  History,
  LayoutList,
} from "lucide-react";
import { useRef } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import type {
  FictionalMatterFixture,
  WorkspaceViewId,
} from "@/lib/matter-control-fixture";
import { StatusLanguage } from "./StatusLanguage";
import styles from "./MatterControl.module.css";
import { programmeOptions } from "@/lib/control-room-data";

type WorkspaceViewsProps = {
  matter: FictionalMatterFixture;
  activeView: WorkspaceViewId;
  onViewChange: (view: WorkspaceViewId) => void;
};

export const workspaceViews = [
  { id: "matter", label: "Matter", icon: FolderKanban },
  { id: "readiness", label: "Readiness", icon: ClipboardCheck },
  { id: "review", label: "Review Queue", icon: FileQuestion },
  { id: "change", label: "Change Impact", icon: History },
  { id: "closeout", label: "Closeout", icon: LayoutList },
] satisfies Array<{
  id: WorkspaceViewId;
  label: string;
  icon: typeof FolderKanban;
}>;

function MatterView({ matter }: { matter: FictionalMatterFixture }) {
  return (
    <div className={styles.matterView}>
      <div className={styles.viewLead}>
        <span className={styles.kicker}>One current operational record</span>
        <h3>
          The matter is visible without reconstructing six partial versions.
        </h3>
        <p>
          This is a fictional demonstration of the information state, not an
          eligibility view or programme recommendation.
        </p>
      </div>
      <div className={styles.factTable}>
        {matter.matterFacts.map((fact) => (
          <div className={styles.factRow} key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </div>
        ))}
      </div>
      <details className={styles.comparisonDisclosure}>
        <summary>Compare the four fictional route assumptions</summary>
        <p>
          Sample working values only. Capital, family charges and due-diligence
          charges stay separate. Professional fees, ancillary costs and any tax
          effects are not included; a subtotal is not a complete client quote.
          No route is recommended.
        </p>
        <div
          className={styles.comparisonScroll}
          tabIndex={0}
          role="region"
          aria-label="Fictional family fee assumptions"
        >
          <table>
            <caption>
              JP-024 · fictional amounts in GBP for a family of four
            </caption>
            <thead>
              <tr>
                <th>Programme</th>
                <th>Capital</th>
                <th>Family charges</th>
                <th>Due diligence</th>
                <th>Subtotal</th>
                <th>Review point</th>
              </tr>
            </thead>
            <tbody>
              {programmeOptions.map((option) => (
                <tr key={option.id}>
                  <th scope="row">{option.programme}</th>
                  <td>{option.indicativeMinimum}</td>
                  <td>{option.familyFees}</td>
                  <td>{option.dueDiligence}</td>
                  <td>
                    £
                    {[
                      option.indicativeMinimum,
                      option.familyFees,
                      option.dueDiligence,
                    ].reduce(
                      (sum, value) =>
                        sum + Number(value.replace(/[^0-9.]/g, "")),
                      0,
                    )}
                    k
                  </td>
                  <td>{option.reviewRequired}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Example workbook entries require source and professional review.
          Programme C also has a fictional dependant-condition review; changing
          a source or value does not complete that review.
        </p>
      </details>
      <div className={styles.issueTable}>
        <div className={styles.tableHeader}>
          <span>Current issue</span>
          <span>Record state</span>
          <span>Status</span>
        </div>
        {matter.currentIssues.map((issue) => (
          <div className={styles.issueRow} key={issue.label}>
            <strong>{issue.label}</strong>
            <span>{issue.value}</span>
            <StatusLanguage status={issue.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ReadinessView({
  matter,
  focus,
}: {
  matter: FictionalMatterFixture;
  focus?: "evidence" | "blockers";
}) {
  return (
    <div data-focus={focus}>
      <div className={styles.viewLeadCompact}>
        <div>
          <span className={styles.kicker}>Readiness control</span>
          <h3>Attention is concentrated where the firm can act.</h3>
        </div>
        <p>
          Status language is operational: ready, attention, dependency and
          blocked.
        </p>
      </div>
      <div className={styles.metrics}>
        {matter.readinessMetrics.map((metric) => (
          <div className={styles.metric} key={metric.label}>
            <StatusLanguage status={metric.status} />
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <small>{metric.note}</small>
          </div>
        ))}
      </div>
      <div className={styles.dependencyTable}>
        <div className={styles.tableHeaderWide}>
          <span>Open dependency</span>
          <span>Named owner</span>
          <span>Timing</span>
          <span>Status</span>
        </div>
        {matter.dependencies.map((dependency) => (
          <div className={styles.dependencyRow} key={dependency.item}>
            <strong>{dependency.item}</strong>
            <span>{dependency.owner}</span>
            <span>{dependency.timing}</span>
            <StatusLanguage status={dependency.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewQueueView({ matter }: { matter: FictionalMatterFixture }) {
  return (
    <div>
      <div className={styles.viewLeadCompact}>
        <div>
          <span className={styles.kicker}>Professional review boundary</span>
          <h3>Questions arrive with context—not as a rebuilt file.</h3>
        </div>
        <p>The firm answers every question requiring professional judgement.</p>
      </div>
      <div className={styles.reviewList}>
        {matter.reviewQuestions.map((item, index) => (
          <article className={styles.reviewItem} key={item.question}>
            <div className={styles.reviewIndex}>0{index + 1}</div>
            <div>
              <div className={styles.reviewItemHead}>
                <h4>{item.question}</h4>
                <StatusLanguage status={item.status} />
              </div>
              <dl className={styles.reviewDetails}>
                <div>
                  <dt>Prepared context</dt>
                  <dd>{item.context}</dd>
                </div>
                <div>
                  <dt>If unanswered</dt>
                  <dd>{item.consequence}</dd>
                </div>
                <div>
                  <dt>Firm owner</dt>
                  <dd>{item.owner}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.assumptionNote}>
        <strong>Programme assumption requiring confirmation</strong>
        <span>
          A superseded government-fee value is held outside approved client use
          until the firm's adviser confirms the current basis.
        </span>
      </div>
    </div>
  );
}

function ChangeImpactView({ matter }: { matter: FictionalMatterFixture }) {
  const change = matter.changeImpact;

  return (
    <div>
      <div className={styles.viewLeadCompact}>
        <div>
          <span className={styles.kicker}>Fictional programme change</span>
          <h3>Intelligence matters only when it reaches the affected work.</h3>
        </div>
        <p>
          The system surfaces the issue. The firm confirms its professional
          effect.
        </p>
      </div>
      <ol
        className={styles.changeSequence}
        aria-label="Programme-change impact sequence"
      >
        {change.sequence.map((item, index) => (
          <li key={item}>
            <span>{index + 1}</span>
            <strong>{item}</strong>
          </li>
        ))}
      </ol>
      <div className={styles.changeRecord}>
        <div className={styles.changeRecordHead}>
          <div>
            <span>Change event</span>
            <strong>{change.change}</strong>
          </div>
          <StatusLanguage status="attention" />
        </div>
        <dl className={styles.changeFacts}>
          <div>
            <dt>Source</dt>
            <dd>{change.source}</dd>
          </div>
          <div>
            <dt>Publication date</dt>
            <dd>{change.publicationDate}</dd>
          </div>
          <div>
            <dt>Effective date</dt>
            <dd>{change.effectiveDate}</dd>
          </div>
          <div>
            <dt>Affected route</dt>
            <dd>{change.route}</dd>
          </div>
          <div>
            <dt>Previous value</dt>
            <dd>{change.previousValue}</dd>
          </div>
          <div>
            <dt>Future value at effective date</dt>
            <dd>{change.currentValue}</dd>
          </div>
          <div className={styles.verificationFact}>
            <dt>Verification status</dt>
            <dd>{change.verificationStatus}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

function CloseoutView({ matter }: { matter: FictionalMatterFixture }) {
  return (
    <div>
      <div className={styles.viewLeadCompact}>
        <div>
          <span className={styles.kicker}>Diagnostic closeout</span>
          <h3>A usable operating pack—not a speculative software promise.</h3>
        </div>
        <p>Sample outputs from the fictional matter JP-024.</p>
      </div>
      <div className={styles.outputList}>
        {matter.closeoutOutputs.map((output, index) => (
          <div className={styles.outputRow} key={output.title}>
            <span className={styles.outputIndex}>0{index + 1}</span>
            <strong>{output.title}</strong>
            <span>{output.sample}</span>
            <StatusLanguage status={output.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

type WorkspaceSurfaceProps = WorkspaceViewsProps & {
  compact?: boolean;
  focus?: "evidence" | "blockers";
  instanceId?: string;
  panelOverride?: ReactNode;
  panelTestId?: string;
  testId?: string;
};

export function WorkspaceViewPanel({
  matter,
  view,
  focus,
}: {
  matter: FictionalMatterFixture;
  view: WorkspaceViewId;
  focus?: "evidence" | "blockers";
}) {
  if (view === "matter") return <MatterView matter={matter} />;
  if (view === "readiness") {
    return <ReadinessView focus={focus} matter={matter} />;
  }
  if (view === "review") return <ReviewQueueView matter={matter} />;
  if (view === "change") return <ChangeImpactView matter={matter} />;
  return <CloseoutView matter={matter} />;
}

export function WorkspaceSurface({
  matter,
  activeView,
  onViewChange,
  compact = false,
  focus,
  instanceId = "default",
  panelOverride,
  panelTestId,
  testId = "workspace",
}: WorkspaceSurfaceProps) {
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);

  function moveFocus(index: number) {
    const nextIndex = (index + workspaceViews.length) % workspaceViews.length;
    const nextView = workspaceViews[nextIndex];
    onViewChange(nextView.id);
    buttons.current[nextIndex]?.focus();
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      moveFocus(index + 1);
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      moveFocus(index - 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      moveFocus(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      moveFocus(workspaceViews.length - 1);
    }
  }

  return (
    <div
      className={`${styles.workspace} ${compact ? styles.workspaceCompact : ""}`}
      data-testid={testId}
    >
      <div
        aria-label="Matter workspace views"
        className={styles.viewControl}
        role="tablist"
      >
        {workspaceViews.map((view, index) => {
          const Icon = view.icon;
          const selected = activeView === view.id;
          return (
            <button
              aria-controls={
                selected
                  ? `workspace-${instanceId}-panel-${view.id}`
                  : undefined
              }
              aria-selected={selected}
              className={selected ? styles.viewButtonActive : styles.viewButton}
              id={`workspace-${instanceId}-tab-${view.id}`}
              key={view.id}
              onClick={() => onViewChange(view.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              ref={(node) => {
                buttons.current[index] = node;
              }}
              role="tab"
              tabIndex={selected ? 0 : -1}
              type="button"
            >
              <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
              <span>{view.label}</span>
            </button>
          );
        })}
      </div>
      <div
        className={styles.workspaceMatterBar}
        aria-label="Persistent matter summary"
      >
        <strong>{matter.reference}</strong>
        <span>{matter.household}</span>
        <span>{matter.objective}</span>
        <span>{matter.routeCount} routes</span>
        <span>{matter.status}</span>
        <span>Review {matter.nextReviewDate}</span>
      </div>
      <div className={styles.workspacePanels}>
        <div
          aria-labelledby={`workspace-${instanceId}-tab-${activeView}`}
          className={styles.workspacePanelActive}
          data-testid={panelTestId ?? `workspace-view-${activeView}`}
          id={`workspace-${instanceId}-panel-${activeView}`}
          key={activeView}
          role="tabpanel"
        >
          {panelOverride ?? (
            <WorkspaceViewPanel
              focus={focus}
              matter={matter}
              view={activeView}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function WorkspaceViews({
  matter,
  activeView,
  onViewChange,
}: WorkspaceViewsProps) {
  return (
    <section
      className={styles.workspaceSection}
      aria-labelledby="workspace-heading"
    >
      <div className={styles.sectionHeadingDark}>
        <div>
          <span className={styles.kickerLight}>Readiness Workspace</span>
          <h2 id="workspace-heading">
            The same matter, prepared for judgement.
          </h2>
        </div>
        <p>
          Five controlled views share one fictional matter record. Changing view
          does not change your selected process step.
        </p>
      </div>
      <WorkspaceSurface
        activeView={activeView}
        matter={matter}
        onViewChange={onViewChange}
      />
    </section>
  );
}
