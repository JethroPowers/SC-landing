import Link from "next/link";
import { footerDisclaimer } from "@/lib/site-data";

const columns = [
  {
    title: "Explore",
    links: [
      ["How Matter Control Works", "/how-matter-control-works"],
      ["Intelligence", "/intelligence"],
      ["Complimentary Diagnostic", "/diagnostic"]
    ]
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Contact", "/contact"],
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
              <span className="brand-sub">Programme intelligence. Matter readiness.</span>
            </span>
          </Link>
          <p className="small" style={{ marginTop: 18, maxWidth: 420 }}>
            An early-stage managed matter-readiness method for firms handling
            citizenship, residence, relocation and investment-migration matters.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h2 className="footer-heading">{column.title}</h2>
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
