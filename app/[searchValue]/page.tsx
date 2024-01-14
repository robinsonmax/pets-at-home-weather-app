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
      <p>Results:</p>
      {data?.forecast.forecastday.map((day) => (
        <p>
          Day: {day.date} Temp: {day.day.avgtemp_c}
        </p>
      ))}
    </>
  );
}
