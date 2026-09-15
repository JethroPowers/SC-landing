import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/discovery";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["OAI-SearchBot", "ChatGPT-User", "GPTBot"],
        allow: "/",
      },
      {
        userAgent: ["Claude-SearchBot", "Claude-User", "ClaudeBot"],
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
