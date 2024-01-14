import { Search } from "@/components/features/search";

export default function LoadingResults() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Search />
      <p>Loading Placeholder</p>
    </main>
  );
}
