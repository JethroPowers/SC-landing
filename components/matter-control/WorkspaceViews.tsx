"use client";

import {
  ClipboardCheck,
  FileQuestion,
  FolderKanban,
  History,
  LayoutList
} from "lucide-react";
import { KeyboardEvent, useRef } from "react";
import type {
  FictionalMatterFixture,
  WorkspaceViewId
} from "@/lib/matter-control-fixture";
import { StatusLanguage } from "./StatusLanguage";
import styles from "./MatterControl.module.css";

type WorkspaceViewsProps = {
  matter: FictionalMatterFixture;
  activeView: WorkspaceViewId;
  onViewChange: (view: WorkspaceViewId) => void;
};

const workspaceViews = [
  { id: "matter", label: "Matter", icon: FolderKanban },
  { id: "readiness", label: "Readiness", icon: ClipboardCheck },
  { id: "review", label: "Review Queue", icon: FileQuestion },
  { id: "change", label: "Change Impact", icon: History },
  { id: "closeout", label: "Closeout", icon: LayoutList }
] satisfies Array<{ id: WorkspaceViewId; label: string; icon: typeof FolderKanban }>;

function MatterView({ matter }: { matter: FictionalMatterFixture }) {
  return (
    <div className={styles.matterView}>
      <div className={styles.viewLead}>
        <span className={styles.kicker}>One current operational record</span>
        <h3>The matter is visible without reconstructing six partial versions.</h3>
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

function ReadinessView({ matter }: { matter: FictionalMatterFixture }) {
  return (
    <div>
      <div className={styles.viewLeadCompact}>
        <div>
          <span className={styles.kicker}>Readiness control</span>
          <h3>Attention is concentrated where the firm can act.</h3>
        </div>
        <p>
          Status language is operational: ready, attention, dependency and blocked.
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
          A superseded government-fee value is held outside approved client use until
          the firm's advisor confirms the current basis.
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
        <p>The system surfaces the issue. The firm confirms its professional effect.</p>
      </div>
      <ol className={styles.changeSequence} aria-label="Programme-change impact sequence">
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
            <dt>Current value</dt>
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
        <p>Sample outputs from the fictional matter SC-024.</p>
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

export function WorkspaceViews({ matter, activeView, onViewChange }: WorkspaceViewsProps) {
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);

  function moveFocus(index: number) {
    const nextIndex = (index + workspaceViews.length) % workspaceViews.length;
    const nextView = workspaceViews[nextIndex];
    onViewChange(nextView.id);
    buttons.current[nextIndex]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
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
    <section className={styles.workspaceSection} aria-labelledby="workspace-heading">
      <div className={styles.sectionHeadingDark}>
        <div>
          <span className={styles.kickerLight}>Readiness Workspace</span>
          <h2 id="workspace-heading">The same matter, prepared for judgement.</h2>
        </div>
        <p>
          Five controlled views share one fictional matter record. Changing view does
          not change your selected process step.
        </p>
      </div>

      <div className={styles.workspace} data-testid="workspace">
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
                aria-controls={`workspace-panel-${view.id}`}
                aria-selected={selected}
                className={selected ? styles.viewButtonActive : styles.viewButton}
                id={`workspace-tab-${view.id}`}
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
        <div className={styles.workspaceMatterBar} aria-label="Persistent matter summary">
          <strong>{matter.reference}</strong>
          <span>{matter.household}</span>
          <span>{matter.objective}</span>
          <span>{matter.routeCount} routes</span>
          <span>{matter.status}</span>
          <span>Review {matter.nextReviewDate}</span>
        </div>
        <div className={styles.workspacePanels}>
          <div
            aria-hidden={activeView !== "matter"}
            aria-labelledby="workspace-tab-matter"
            className={activeView === "matter" ? styles.workspacePanelActive : styles.workspacePanel}
            data-testid="workspace-view-matter"
            id="workspace-panel-matter"
            role="tabpanel"
          >
            <MatterView matter={matter} />
          </div>
          <div
            aria-hidden={activeView !== "readiness"}
            aria-labelledby="workspace-tab-readiness"
            className={activeView === "readiness" ? styles.workspacePanelActive : styles.workspacePanel}
            data-testid="workspace-view-readiness"
            id="workspace-panel-readiness"
            role="tabpanel"
          >
            <ReadinessView matter={matter} />
          </div>
          <div
            aria-hidden={activeView !== "review"}
            aria-labelledby="workspace-tab-review"
            className={activeView === "review" ? styles.workspacePanelActive : styles.workspacePanel}
            data-testid="workspace-view-review"
            id="workspace-panel-review"
            role="tabpanel"
          >
            <ReviewQueueView matter={matter} />
          </div>
          <div
            aria-hidden={activeView !== "change"}
            aria-labelledby="workspace-tab-change"
            className={activeView === "change" ? styles.workspacePanelActive : styles.workspacePanel}
            data-testid="workspace-view-change"
            id="workspace-panel-change"
            role="tabpanel"
          >
            <ChangeImpactView matter={matter} />
          </div>
          <div
            aria-hidden={activeView !== "closeout"}
            aria-labelledby="workspace-tab-closeout"
            className={activeView === "closeout" ? styles.workspacePanelActive : styles.workspacePanel}
            data-testid="workspace-view-closeout"
            id="workspace-panel-closeout"
            role="tabpanel"
          >
            <CloseoutView matter={matter} />
          </div>
        </div>
      </div>
    </section>
  );
}
