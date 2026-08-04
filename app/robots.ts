import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      {
        userAgent: ["OAI-SearchBot", "ChatGPT-User", "GPTBot"],
        allow: "/"
      },
      {
        userAgent: ["Claude-SearchBot", "Claude-User", "ClaudeBot"],
        allow: "/"
      }
    ],
    sitemap: "https://sovereigntycontrol.com/sitemap.xml",
    host: "https://sovereigntycontrol.com"
  };
}
