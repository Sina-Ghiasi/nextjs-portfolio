import { z } from "zod";
import { ObjectId } from "mongodb";

const ObjectIdSchema = z
  .instanceof(ObjectId)
  .transform((val) => val.toHexString());

export const ProjectSchema = z
  .object({
    _id: ObjectIdSchema,
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    images: z.array(z.string().url()),
    technologies: z.array(z.string()),
    status: z.enum(["archived", "on-hold", "active"]),
    demoUrl: z.string().url().or(z.literal("")).optional(),
    githubUrl: z.string().url().or(z.literal("")).optional(),
  })
  .transform((data) => ({
    id: data._id,
    slug: data.slug,
    title: data.title,
    description: data.description,
    images: data.images,
    technologies: data.technologies,
    status: data.status,
    demoUrl: data.demoUrl,
    githubUrl: data.githubUrl,
  }));

export const ProjectArraySchema = z.array(ProjectSchema);

export type ProjectType = z.infer<typeof ProjectSchema>;
