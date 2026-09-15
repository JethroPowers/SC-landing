import type { Metadata } from "next";
import { AdviserNetwork } from "@/components/partners/AdviserNetwork";
import { isEnquiryConfigured } from "@/lib/enquiry-server";

export const metadata: Metadata = {
  title: "Become a Juris adviser",
  description:
    "Bring your expertise into Juris. Explore an independent professional relationship, the proposed collaboration and how to register adviser-network interest.",
  alternates: { canonical: "/advisers" },
};

export default function AdvisersPage() {
  return <AdviserNetwork configured={isEnquiryConfigured()} />;
}
