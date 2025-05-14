import { z } from "zod";

export const NavLinkSchema = z.object({
  href: z
    .string()
    .regex(/^\/.*/, "href must be a relative path starting with '/'"),
  title: z.string(),
});
export const NavLinkArraySchema = z.array(NavLinkSchema);

export type NavLinkType = z.infer<typeof NavLinkSchema>;
