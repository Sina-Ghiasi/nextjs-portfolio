import { ProjectArraySchema, ProjectSchema } from "@/types/project";
import { connectToDatabase } from "../db";

export async function getAllProjectsFromDb() {
  const { db } = await connectToDatabase();
  const rawProjects = await db.collection("projects").find({}).toArray();

  const result = ProjectArraySchema.safeParse(rawProjects);
  if (!result.success) {
    console.error("Validation error in getAllProjectsFromDb():", result.error);
    throw new Error(
      "Failed to validate project data retrieved from the database in getAllProjectsFromDb()."
    );
  }
  return result.data;
}

export async function getProjectBySlugFromDb(projectSlug: string) {
  const { db } = await connectToDatabase();
  const rawProject = await db
    .collection("projects")
    .findOne({ slug: projectSlug });

  const result = ProjectSchema.safeParse(rawProject);
  if (!result.success) {
    console.error(
      "Validation error in getProjectBySlugFromDb():",
      result.error
    );
    throw new Error(
      "Failed to validate Project data retrieved from the database in getProjectBySlugFromDb()."
    );
  }

  return result.data;
}
