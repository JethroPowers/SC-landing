import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { homepageStructuredData } from "@/lib/discovery";
import { PartnersLanding } from "@/components/partners/PartnersLanding";
import { juris } from "@/lib/partners";

export const metadata: Metadata = {
  title: { absolute: "Juris Partners | Intelligence, expertise and client work." },
  description: juris.description,
  alternates: { canonical: "/" },
};
export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageStructuredData} />
      <PartnersLanding />
    </>
  );
}
