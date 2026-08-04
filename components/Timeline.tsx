type TimelineStep = {
  title: string;
  description: string;
};

export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="timeline">
      {steps.map((step, index) => (
        <article className="timeline-item" key={step.title}>
          <div className="timeline-index" aria-hidden="true">
            {index + 1}
          </div>
          <div className="timeline-card">
            <h3>{step.title}</h3>
            <p className="muted">{step.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
