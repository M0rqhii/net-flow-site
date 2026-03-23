import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://net-flow.pl/sitemap.xml",
    host: "https://net-flow.pl",
  };
}
