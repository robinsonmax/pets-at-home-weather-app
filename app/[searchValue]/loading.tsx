import { DisplaySkeleton } from "@/components/features/display/display-skeleton";
import { Search } from "@/components/features/search";

export default function LoadingResults() {
  return (
    <>
      <Search />
      <DisplaySkeleton />
    </>
  );
}
