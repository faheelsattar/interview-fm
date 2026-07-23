import type { CourseRepository } from "../../../../courses/course-repository";
import { courseListSchema } from "../../../../courses/course-schema";
import { protectedProcedure } from "../protected-procedure";

interface CoursesRouterDependencies {
    courseRepository: CourseRepository;
}

export function createCoursesRouter({ courseRepository }: CoursesRouterDependencies) {
    const listCourses = protectedProcedure
        .output(courseListSchema)
        .handler(({ context }) => courseRepository.listForUser(context.user.id));

    return {
        list: listCourses,
    };
}
