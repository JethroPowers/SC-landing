import type { MetadataRoute } from "next";

const routes = [
  "",
  "/how-matter-control-works",
  "/intelligence",
  "/diagnostic",
  "/about",
  "/contact",
  "/privacy",
  "/disclaimer"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://sovereigntycontrol.com${route}`,
    lastModified: new Date("2026-08-07"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
