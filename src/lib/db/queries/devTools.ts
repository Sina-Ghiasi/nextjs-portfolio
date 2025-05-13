import { DevToolArraySchema } from "@/types/devTools";
import { connectToDatabase } from "../db";

export async function getAllDevToolsFromDb() {
  const { db } = await connectToDatabase();
  const rawDevTools = await db.collection("dev_tools").find({}).toArray();

  const result = DevToolArraySchema.safeParse(rawDevTools);
  if (!result.success) {
    console.error("Validation error in getAllDevToolsFromDb():", result.error);
    throw new Error(
      "Failed to validate developer tool data retrieved from the database in getAllDevToolsFromDb()."
    );
  }

  return result.data;
}
