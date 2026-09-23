import { FaqArraySchema } from "@/types/faq";
import { connectToDatabase } from "../db";

export async function getAllFaqs() {
  const { db } = await connectToDatabase();
  const rawFaqs = await db.collection("faqs").find({}).toArray();

  const result = FaqArraySchema.safeParse(rawFaqs);
  if (!result.success) {
    console.error("Validation error in getAllFaqs():", result.error);
    throw new Error(
      "Failed to validate FAQ data retrieved from the database in getAllFaqs().",
    );
  }

  return result.data;
}
