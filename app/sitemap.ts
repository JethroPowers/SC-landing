import type { MetadataRoute } from "next";

const routes = [
  "",
  "/what-we-do",
  "/control-system",
  "/use-cases",
  "/offers",
  "/intelligence",
  "/method",
  "/how-matter-control-works",
  "/demo-case",
  "/about",
  "/contact",
  "/privacy",
  "/disclaimer"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://sovereigntycontrol.com${route}`,
    lastModified: new Date("2026-08-05"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
