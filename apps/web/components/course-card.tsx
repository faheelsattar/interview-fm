import type { InferRouterOutputs } from "@orpc/server";
import type { AppRouter } from "@workspace/api";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

type Course = InferRouterOutputs<AppRouter>["courses"]["list"][number];

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="w-full space-y-4 rounded-lg border p-6 transition-shadow hover:shadow-md md:w-[calc(50%_-_0.75rem)] lg:w-[calc(33.333%_-_1rem)]">
      <div>
        <h3 className="text-xl font-semibold">{course.title}</h3>
        <p className="text-muted-foreground mt-2">{course.description}</p>
      </div>

      <Button asChild className="w-full">
        <Link href={`/protected/${course.id}`}>View Exams</Link>
      </Button>
    </div>
  );
}