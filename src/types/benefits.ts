import { z } from "zod";
import { ObjectId } from "mongodb";

const ObjectIdSchema = z
  .instanceof(ObjectId)
  .transform((val) => val.toHexString());

export const BenefitSchema = z
  .object({
    _id: ObjectIdSchema,
    title: z.string(),
    description: z.string(),
  })
  .transform((data) => ({
    id: data._id,
    title: data.title,
    description: data.description,
  }));

export const BenefitArraySchema = z.array(BenefitSchema);

export type BenefitType = z.infer<typeof BenefitSchema>;
