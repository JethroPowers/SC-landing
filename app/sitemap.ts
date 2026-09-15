import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/discovery";
import { websitePages } from "@/lib/site-data";

const routes = websitePages.map((page) => (page.href === "/" ? "" : page.href));

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-09-15"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
