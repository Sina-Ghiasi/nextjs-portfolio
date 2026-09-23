import { ProjectArraySchema, ProjectSchema } from "@/types/project";
import { connectToDatabase } from "../db";

export async function getAllProjects() {
  const { db } = await connectToDatabase();
  const rawProjects = await db.collection("projects").find({}).toArray();

  const result = ProjectArraySchema.safeParse(rawProjects);
  if (!result.success) {
    console.error("Validation error in getAllProjects():", result.error);
    throw new Error(
      "Failed to validate project data retrieved from the database in getAllProjects().",
    );
  }
  return result.data;
}

export async function getProjectBySlug(projectSlug: string) {
  const { db } = await connectToDatabase();
  const rawProject = await db
    .collection("projects")
    .findOne({ slug: projectSlug });

  const result = ProjectSchema.safeParse(rawProject);
  if (!result.success) {
    console.error("Validation error in getProjectBySlug():", result.error);
    throw new Error(
      "Failed to validate Project data retrieved from the database in getProjectBySlug().",
    );
  }

  return result.data;
}
