import { z } from "zod";
import { ObjectId } from "mongodb";

const ObjectIdSchema = z
  .instanceof(ObjectId)
  .transform((val) => val.toHexString());

export const FaqSchema = z
  .object({
    _id: ObjectIdSchema,
    question: z.string(),
    answer: z.string(),
  })
  .transform((data) => ({
    id: data._id,
    question: data.question,
    answer: data.answer,
  }));

export const FaqArraySchema = z.array(FaqSchema);

export type FaqType = z.infer<typeof FaqSchema>;
