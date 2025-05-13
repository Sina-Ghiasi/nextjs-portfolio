import { z } from "zod";

export const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  images: z.array(z.string().url()),
  technologies: z.array(z.string()),
  status: z.enum(["archived", "on-hold", "active"]),
  demoUrl: z.string().url().or(z.literal("")).optional(),
  githubUrl: z.string().url().or(z.literal("")).optional(),
});
export const ProjectArraySchema = z.array(ProjectSchema);

export type ProjectType = z.infer<typeof ProjectSchema>;
