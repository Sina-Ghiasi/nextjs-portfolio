import { z } from "zod";
import { ObjectId } from "mongodb";

const ObjectIdSchema = z
  .instanceof(ObjectId)
  .transform((val) => val.toHexString());

export const DevToolSchema = z
  .object({
    _id: ObjectIdSchema,
    name: z.string(),
    imageUrl: z
      .string()
      .regex(/^\/.*/, "href must be a relative path starting with '/'"),
  })
  .transform((data) => ({
    id: data._id,
    name: data.name,
    imageUrl: data.imageUrl,
  }));

export const DevToolArraySchema = z.array(DevToolSchema);

export type DevToolType = z.infer<typeof DevToolSchema>;
