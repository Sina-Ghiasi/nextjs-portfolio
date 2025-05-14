import { z } from "zod";

export const FaqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});
export const FaqArraySchema = z.array(FaqSchema);

export type FaqType = z.infer<typeof FaqSchema>;
