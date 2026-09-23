import { BenefitArraySchema } from "@/types/benefits";
import { connectToDatabase } from "../db";

export async function getAllBenefits() {
  const { db } = await connectToDatabase();
  const rawBenefits = await db.collection("benefits").find({}).toArray();

  const result = BenefitArraySchema.safeParse(rawBenefits);
  if (!result.success) {
    console.error("Validation error in getAllBenefits():", result.error);
    throw new Error(
      "Failed to validate benefits data retrieved from the database in getAllBenefits().",
    );
  }

  return result.data;
}
