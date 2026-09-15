import Link from "next/link";
import { JurisBrand } from "./JurisBrand";
import { juris } from "@/lib/partners";
import { footerDisclaimer } from "@/lib/site-data";

const groups = [
  {
    title: "Work with Juris",
    links: [
      ["What we do", "/what-we-do"],
      ["Adviser network", "/advisers"],
      ["Juris Control", "/how-matter-control-works"],
      ["Juris Intelligence", "/intelligence"],
    ],
  },
  {
    title: "Guides & examples",
    links: [
      ["For your firm", "/use-cases"],
      ["Worked example", "/demo-case"],
      ["Complimentary diagnostic", "/diagnostic"],
      ["Working together", "/offers"],
    ],
  },
  {
    title: "Juris Partners",
    links: [
      ["About", "/about"],
      ["Contact", "/contact"],
      ["Privacy", "/privacy"],
      ["Disclaimer", "/disclaimer"],
    ],
  },
];
export function Footer() {
  return (
    <footer className="juris-footer">
      <div className="container">
        <div className="juris-footer-grid">
          <div>
            <JurisBrand />
            <p>
              Global mobility intelligence, independent expertise and clearer
              client work.
            </p>
            <a href={juris.adviceUrl}>Looking for advice for yourself? ↗</a>
            <a href={juris.publicUrl}>Public Juris platform ↗</a>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="juris-footer-bottom">
          <span>© {new Date().getFullYear()} Juris Partners</span>
          <p>{footerDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
