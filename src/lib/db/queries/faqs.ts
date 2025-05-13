import { FaqArraySchema } from "@/types/faq";
import { connectToDatabase } from "../db";

export async function getAllFaqsFromDb() {
  const { db } = await connectToDatabase();
  const rawFaqs = await db.collection("faqs").find({}).toArray();

  const result = FaqArraySchema.safeParse(rawFaqs);
  if (!result.success) {
    console.error("Validation error in getAllFaqsFromDb():", result.error);
    throw new Error(
      "Failed to validate FAQ data retrieved from the database in getAllFaqsFromDb()."
    );
  }

  return result.data;
}
