import { siteLinks } from "@/lib/site-config";
import { type MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteLinks.url}/sitemap.xml`,
  };
}
