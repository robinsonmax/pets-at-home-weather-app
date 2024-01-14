import { WeatherDataForecastDay } from "@/lib/getWeatherData";
import { ForecastDay } from "./forecast-day";

const Forecast = ({
  weatherData,
}: {
  weatherData: WeatherDataForecastDay[];
}) => {
  return (
    <div className="overflow-x-auto w-full">
      <div className="grid md:grid-cols-7 gap-4 py-4 md:min-w-[750px]">
        {weatherData.map((day, i) => (
          <ForecastDay weatherData={day} key={i} />
        ))}
      </div>
    </div>
  );
};

export { Forecast };
