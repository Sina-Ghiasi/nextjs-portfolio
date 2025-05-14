import { z } from "zod";

export const BenefitSchema = z.object({
  title: z.string(),
  description: z.string(),
});
export const BenefitArraySchema = z.array(BenefitSchema);

export type BenefitType = z.infer<typeof BenefitSchema>;
