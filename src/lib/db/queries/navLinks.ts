import { NavLinkArraySchema } from "@/types/navLink";
import { connectToDatabase } from "../db";

export async function getAllNavLinksFromDb() {
  const { db } = await connectToDatabase();
  const rawNavLinks = await db.collection("nav_links").find({}).toArray();

  const result = NavLinkArraySchema.safeParse(rawNavLinks);
  if (!result.success) {
    console.error("Validation error in getAllNavLinksFromDb():", result.error);
    throw new Error(
      "Failed to validate nav link data retrieved from the database in getAllNavLinksFromDb()."
    );
  }

  return result.data;
}
