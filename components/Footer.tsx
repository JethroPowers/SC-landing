import Link from "next/link";
import { footerDisclaimer } from "@/lib/site-data";

const columns = [
  {
    title: "Product",
    links: [
      ["What We Do", "/what-we-do"],
      ["Case Control", "/control-system"],
      ["Intelligence", "/intelligence"],
      ["How Matter Control Works", "/how-matter-control-works"],
      ["Demo Case", "/demo-case"]
    ]
  },
  {
    title: "Start",
    links: [
      ["Offers", "/offers"],
      ["Contact", "/contact"]
    ]
  },
  {
    title: "Company",
    links: [
      ["Use Cases", "/use-cases"],
      ["Method", "/method"],
      ["About", "/about"],
      ["Privacy", "/privacy"],
      ["Disclaimer", "/disclaimer"]
    ]
  }
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/" aria-label="Sovereignty Control home">
            <span className="brand-mark">SC</span>
            <span className="brand-text">
              <span>Sovereignty Control</span>
              <span className="brand-sub">Programme data. Client matters.</span>
            </span>
          </Link>
          <p className="small" style={{ marginTop: 18, maxWidth: 420 }}>
            An early-stage managed matter-readiness method for firms handling
            citizenship, residence, relocation and investment-migration matters.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h4>{column.title}</h4>
            <div className="footer-links">
              {column.links.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="container footer-disclaimer">
        <strong>Disclaimer:</strong> {footerDisclaimer}
      </div>
    </footer>
  );
}
