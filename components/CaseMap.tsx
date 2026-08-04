type CaseMapItem = {
  label: string;
  value: string;
};

export function CaseMap({ items }: { items: CaseMapItem[] }) {
  return (
    <div className="case-map">
      {items.map((item) => (
        <div className="case-map-cell" key={item.label}>
          <strong>{item.label}</strong>
          <p className="small">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
