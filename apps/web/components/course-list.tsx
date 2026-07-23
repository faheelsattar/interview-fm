"use client";
import { CourseCard } from "./course-card";
import { orpc } from "@/utils/orpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export function CourseListSkeleton() {
  return (
    <div className="flex justify-center" aria-label="Loading courses">
      <div className="h-48 w-full animate-pulse rounded-lg border bg-muted md:w-[calc(50%_-_0.75rem)] lg:w-[calc(33.333%_-_1rem)]" />
    </div>
  );
}
export function CourseList() {
  const { data: courses } = useSuspenseQuery(orpc.courses.list.queryOptions());

  if (courses.length === 0) {
    return (
      <div className="rounded-lg border p-6 text-center text-muted-foreground">
        No courses available yet.
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
