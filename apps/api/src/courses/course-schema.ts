import { z } from "zod";

// contract for returning data via the api
export const courseListItemSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string().nullable(),
  role: z.enum(["student", "educator"]),
});

export const courseListSchema = z.array(courseListItemSchema);

export type CourseListItem = z.infer<typeof courseListItemSchema>;
