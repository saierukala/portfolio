import type { MetadataRoute } from "next";
import { caseStudies, profile } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(profile.lastUpdated);
  return [
    { url: profile.url, lastModified, priority: 1 },
    ...caseStudies.map((s) => ({ url: `${profile.url}/work/${s.slug}`, lastModified, priority: 0.7 })),
  ];
}
