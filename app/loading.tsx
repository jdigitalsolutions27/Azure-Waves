import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container py-16">
      <Skeleton className="h-12 w-56" />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-64 w-full rounded-3xl" />
        ))}
      </div>
    </div>
  );
}

