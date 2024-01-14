import { Search } from "@/components/features/search";

export default function Results({
  params,
}: {
  params: { searchValue: string };
}) {
  return (
    <>
      <Search defaultValue={params.searchValue} />
      <p>RESULTS PLACEHOLDER</p>
    </>
  );
}
