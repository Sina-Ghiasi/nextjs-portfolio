import { z } from "zod";
import { ObjectId } from "mongodb";

const ObjectIdSchema = z
  .instanceof(ObjectId)
  .transform((val) => val.toHexString());

export const NavLinkSchema = z
  .object({
    _id: ObjectIdSchema,
    href: z
      .string()
      .regex(/^\/.*/, "href must be a relative path starting with '/'"),
    title: z.string(),
  })
  .transform((data) => ({
    id: data._id,
    href: data.href,
    title: data.title,
  }));

export const NavLinkArraySchema = z.array(NavLinkSchema);

export type NavLinkType = z.infer<typeof NavLinkSchema>;
