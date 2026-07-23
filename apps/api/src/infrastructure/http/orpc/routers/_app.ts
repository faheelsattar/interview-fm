import { kyselyInstance } from "../../../config/database";
import { createPostgresCourseRepository } from "../../../repositories/postgres-course-repository";
import { createCoursesRouter } from "./courses";

const courseRepository = createPostgresCourseRepository(kyselyInstance);

export const appRouter = {
    courses: createCoursesRouter({ courseRepository }),
};
export type AppRouter = typeof appRouter;
