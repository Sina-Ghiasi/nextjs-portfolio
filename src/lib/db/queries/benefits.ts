import { BenefitArraySchema } from "@/types/benefits";
import { connectToDatabase } from "../db";

export async function getAllBenefitFromDb() {
  const { db } = await connectToDatabase();
  const rawBenefits = await db.collection("benefits").find({}).toArray();

  const result = BenefitArraySchema.safeParse(rawBenefits);
  if (!result.success) {
    console.error("Validation error in getAllBenefitsFromDb():", result.error);
    throw new Error(
      "Failed to validate FAQ data retrieved from the database in getAllBenefitsFromDb()."
    );
  }

  return result.data;
}
