import { Search } from "@/components/features/search";

export default function Results({
  params,
}: {
  params: { searchValue: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Search defaultValue={params.searchValue} />
      <p>RESULTS PLACEHOLDER</p>
    </main>
  );
}
