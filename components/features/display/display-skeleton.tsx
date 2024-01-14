import { Skeleton } from "@/components/ui/skeleton";
import { Forecast } from "./forecast";

const DisplaySkeleton = () => {
  return (
    <div className="w-full overflow-x-auto px-4 max-w-[900px] mt-8">
      <div className="h-36 flex flex-col items-center gap-2">
        <Skeleton className="h-20 w-24" />
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-24" />
      </div>
      <div className="flex justify-center">
        <Skeleton className="h-6 w-32 mt-8" />
      </div>
      <Forecast />
    </div>
  );
};

export { DisplaySkeleton };
