import { juris } from "./partners";
export type NavItem = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description: string;
    external?: boolean;
  }[];
};
export const navItems: NavItem[] = [
  {
    label: "What we do",
    href: "/what-we-do",
    children: [
      {
        label: "For your firm",
        href: "/use-cases",
        description: "Roles, handovers and workflow needs",
      },
      {
        label: "Working together",
        href: "/offers",
        description: "Scope, terms and possible next steps",
      },
    ],
  },
  {
    label: "Intelligence",
    href: "/intelligence",
    children: [
      {
        label: "Programme research",
        href: "/intelligence",
        description: "Sources, changes and professional context",
      },
      {
        label: "Juris insights",
        href: juris.insightsUrl,
        description: "Published insight on public Juris",
        external: true,
      },
    ],
  },
  { label: "For advisers", href: "/advisers" },
  {
    label: "Operations",
    href: "/how-matter-control-works",
    children: [
      {
        label: "Worked example",
        href: "/demo-case",
        description: "Inspect a fictional matter and its next actions",
      },
      {
        label: "Complimentary diagnostic",
        href: "/diagnostic",
        description: "One matter · 7–10 working days",
      },
      {
        label: "Workflow needs",
        href: "/use-cases#workflows",
        description: "Explore preparation, handovers and review",
      },
    ],
  },
  { label: "About", href: "/about" },
];
export const practicePages: NavItem[] = [
  { label: "For your firm", href: "/use-cases" },
  { label: "Worked example", href: "/demo-case" },
  { label: "Complimentary diagnostic", href: "/diagnostic" },
  { label: "Working together", href: "/offers" },
];
export const websitePages: NavItem[] = [
  { label: "Home", href: "/" },
  ...navItems,
  ...practicePages,
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Disclaimer", href: "/disclaimer" },
];
export const footerDisclaimer =
  "Juris supports programme understanding and agreed operational work. Qualified professionals retain advice, suitability, evidence sufficiency and submissions. Programme information requires professional review before client use.";
