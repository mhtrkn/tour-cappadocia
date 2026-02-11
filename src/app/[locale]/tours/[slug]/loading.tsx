import { Skeleton } from '@/components/ui/skeleton';

export default function TourDetailLoading() {
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="w-full h-125 rounded-xl" />
            <Skeleton className="h-32 w-full" />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <Skeleton className="h-64 w-full rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
