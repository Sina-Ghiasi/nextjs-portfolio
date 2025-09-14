import { getAllProjectsFromDb } from "@/lib/db/queries/projects";
import { ProjectType } from "@/types/project";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects: ProjectType[] = await getAllProjectsFromDb();
  const baseUrl = process.env.BASE_URL!;
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${encodeURIComponent(project.slug)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
