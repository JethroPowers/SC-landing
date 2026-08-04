import { CircleAlert } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

type Row = Record<string, string>;

type ComparisonTableProps = {
  caption: string;
  columns: string[];
  rows: Row[];
};

const statusColumns = new Set(["Confidence", "Status"]);

export function ComparisonTable({ caption, columns, rows }: ComparisonTableProps) {
  return (
    <>
      <div className="table-wrap">
        <table className="comparison-table">
          <caption className="small" style={{ captionSide: "bottom", padding: 14 }}>
            {caption}
          </caption>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={columns.map((column) => row[column]).join("-")}>
                {columns.map((column) => (
                  <td key={column}>
                    {statusColumns.has(column) ? (
                      <StatusBadge>{row[column]}</StatusBadge>
                    ) : column === "Review required" ? (
                      <span className="review-action">
                        <CircleAlert size={15} aria-hidden="true" />
                        {row[column]}
                      </span>
                    ) : column === columns[0] ? (
                      <strong>{row[column]}</strong>
                    ) : (
                      row[column]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="comparison-cards" aria-label={caption}>
        {rows.map((row) => {
          const title = row[columns[0]];
          const total = row["Estimated total"];
          const confidence = row["Confidence"];
          const review = row["Review required"];
          return (
            <article className="comparison-card" key={columns.map((column) => row[column]).join("-")}>
              <div className="comparison-card-head">
                <strong>{title}</strong>
                {confidence ? <StatusBadge>{confidence}</StatusBadge> : null}
              </div>
              {total ? (
                <div className="comparison-card-total">
                  <span>Estimated total</span>
                  <strong>{total}</strong>
                </div>
              ) : null}
              {review ? (
                <div className="review-action">
                  <CircleAlert size={15} aria-hidden="true" />
                  {review}
                </div>
              ) : null}
              <details>
                <summary>View details</summary>
                <dl>
                  {columns.slice(1).map((column) =>
                    column === "Confidence" || column === "Review required" ? null : (
                      <div key={column}>
                        <dt>{column}</dt>
                        <dd>{row[column]}</dd>
                      </div>
                    )
                  )}
                </dl>
              </details>
            </article>
          );
        })}
        <p className="small">{caption}</p>
      </div>
    </>
  );
}
