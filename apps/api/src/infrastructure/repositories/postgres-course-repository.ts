import type { CourseRepository } from "../../courses/course-repository";
import type { KyselyInstance } from "../config/database";

// creates a CourseRepository backed by postgres
export function createPostgresCourseRepository(database: KyselyInstance): CourseRepository {
    return {
        listForUser(userId) {
            return database
                .selectFrom("course_members")
                .innerJoin("courses", "course_members.course_id", "courses.id")
                .where("course_members.user_id", "=", userId)
                .select(["courses.id", "courses.title", "courses.description", "course_members.role"])
                .orderBy("courses.title")
                .execute();
        },
    };
}
