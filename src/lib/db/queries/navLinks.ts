import { NavLinkArraySchema } from "@/types/navLink";
import { connectToDatabase } from "../db";

export async function getAllNavLinks() {
  const { db } = await connectToDatabase();
  const rawNavLinks = await db.collection("nav_links").find({}).toArray();

  const result = NavLinkArraySchema.safeParse(rawNavLinks);
  if (!result.success) {
    console.error("Validation error in getAllNavLinks():", result.error);
    throw new Error(
      "Failed to validate nav link data retrieved from the database in getAllNavLinks().",
    );
  }

  return result.data;
}
