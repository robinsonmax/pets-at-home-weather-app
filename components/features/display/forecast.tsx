import { WeatherDataForecastDay } from "@/lib/getWeatherData";
import { ForecastDay } from "./forecast-day";
import { Skeleton } from "@/components/ui/skeleton";

const Forecast = ({
  weatherData,
}: {
  weatherData?: WeatherDataForecastDay[];
}) => {
  return (
    <div className="overflow-x-auto w-full">
      <div className="grid md:grid-cols-7 gap-4 py-4 md:min-w-[750px]">
        {weatherData ? (
          <ForecastDayItems weatherData={weatherData} />
        ) : (
          <SkeletonItems />
        )}
      </div>
    </div>
  );
};

const ForecastDayItems = ({
  weatherData,
}: {
  weatherData: WeatherDataForecastDay[];
}) => weatherData.map((day, i) => <ForecastDay weatherData={day} key={i} />);

const SkeletonItems = () => (
  <>
    {[...Array(7)].map((_, i) => (
      <Skeleton key={i} className="w-24 h-32" />
    ))}
  </>
);

export { Forecast };
