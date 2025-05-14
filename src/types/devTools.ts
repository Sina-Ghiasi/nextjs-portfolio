import { z } from "zod";

export const DevToolSchema = z.object({
  name: z.string(),
  imageUrl: z
    .string()
    .regex(/^\/.*/, "href must be a relative path starting with '/'"),
});
export const DevToolArraySchema = z.array(DevToolSchema);

export type DevToolType = z.infer<typeof DevToolSchema>;
