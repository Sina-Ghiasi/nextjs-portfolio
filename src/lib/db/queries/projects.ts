import { ProjectArraySchema } from "@/types/project";
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
