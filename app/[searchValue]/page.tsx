import { Display } from "@/components/features/display";
import { Search } from "@/components/features/search";
import { getWeatherData } from "@/lib/getWeatherData";

export default async function Results({
  params,
}: {
  params: { searchValue: string };
}) {
  const { data, errorMessage } = await getWeatherData(params.searchValue);

  return (
    <>
      <Search defaultValue={params.searchValue} />
      <p>Error Message: {errorMessage}</p>
      {data && <Display weatherData={data} />}
    </>
  );
}
