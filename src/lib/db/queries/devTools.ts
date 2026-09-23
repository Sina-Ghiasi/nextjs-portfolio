import { DevToolArraySchema } from "@/types/devTools";
import { connectToDatabase } from "../db";

export async function getAllDevTools() {
  const { db } = await connectToDatabase();
  const rawDevTools = await db.collection("dev_tools").find({}).toArray();

  const result = DevToolArraySchema.safeParse(rawDevTools);
  if (!result.success) {
    console.error("Validation error in getAllDevTools():", result.error);
    throw new Error(
      "Failed to validate developer tool data retrieved from the database in getAllDevTools().",
    );
  }

  return result.data;
}
