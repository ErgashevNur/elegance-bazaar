import { Skeleton } from "@/components/ui/skeleton";

const ProductsLoading = ({ count = 4 }: { count?: number }) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="rounded-xl border border-border bg-card p-4 shadow-card">
        <Skeleton className="mb-4 h-56 w-full rounded-lg" />
        <Skeleton className="mb-2 h-3 w-1/3" />
        <Skeleton className="mb-2 h-4 w-2/3" />
        <Skeleton className="mb-3 h-3 w-1/4" />
        <div className="flex items-end justify-between">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-9 w-9 rounded-lg" />
        </div>
      </div>
    ))}
  </div>
);

export default ProductsLoading;
