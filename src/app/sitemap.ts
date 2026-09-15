import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: Array<[string, number]> = [
    [ROUTES.home, 1],
    [ROUTES.services, 0.9],
    [ROUTES.supportedLiving, 0.8],
    [ROUTES.eligibility, 0.9],
    [ROUTES.housing, 0.9],
    [ROUTES.about, 0.8],
    [ROUTES.team, 0.6],
    [ROUTES.serviceCoordinators, 0.7],
    [ROUTES.careers, 0.8],
    [ROUTES.contact, 0.9],
  ];
  return entries.map(([path, priority]) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
