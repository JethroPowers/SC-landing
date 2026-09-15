import type { Metadata } from "next";
import { MatterControlExplainer } from "@/components/matter-control/MatterControlExplainer";

export const metadata: Metadata = {
  title: "How Matter Control Works",
  description:
    "Explore a fictional matter-control diagnostic from minimised intake through readiness, adviser review, programme-change impact and closeout.",
  alternates: { canonical: "/how-matter-control-works" }
};

export default function HowMatterControlWorksPage() {
  return <MatterControlExplainer />;
}
