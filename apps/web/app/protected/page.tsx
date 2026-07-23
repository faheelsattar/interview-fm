import { CourseList, CourseListSkeleton } from "@/components/course-list";
import { HydrateClient, orpc, prefetch } from "@/utils/orpc/server";
import { Suspense } from "react";

export default function ProtectedPage() {
  prefetch(orpc.courses.list.queryOptions());

  return (
    <div className="flex-1 w-full max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Course Overview</h1>
          <p className="text-muted-foreground mt-2">Select a course to view available exams</p>
        </div>
        <HydrateClient>
          <Suspense fallback={<CourseListSkeleton />}>
            <CourseList />
          </Suspense>
        </HydrateClient>
      </div>
    </div>
  );
}
