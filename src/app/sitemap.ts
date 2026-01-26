// src/app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://deepanshu-portfolio.vercel.app";
  const routes = [
    "",
    "/about",
    "/projects",
    "/skills",
    "/notes",
    "/hackathons",
    "/roadmap",
    "/contact",
    "/resume",
    "/build",
    "/recruiter",
  ];

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }));

  return staticPages;
}
