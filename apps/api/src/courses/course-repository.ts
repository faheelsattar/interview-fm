import type { CourseListItem } from "./course-schema";

// handlers depend on this interface rather than a specific db implementation.
export interface CourseRepository {
  listForUser(userId: string): Promise<CourseListItem[]>;
}
