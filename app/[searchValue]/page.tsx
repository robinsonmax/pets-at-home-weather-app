import { Display } from "@/components/features/display";
import { DisplayToastOnLoad } from "@/components/features/display-toast-on-load";
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
      {errorMessage && <DisplayToastOnLoad message={errorMessage} />}
      {data && <Display weatherData={data} />}
    </>
  );
}
