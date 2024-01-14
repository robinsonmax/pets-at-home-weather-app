import {
  WeatherData,
  WeatherDataToday,
  WindDirection,
  windDirections,
} from "@/lib/getWeatherData";
import { MousePointer2 } from "lucide-react";

const Display = ({ weatherData }: { weatherData: WeatherData }) => {
  return (
    <section className="max-w-full overflow-x-auto">
      <Today weatherData={weatherData.current} />
      <hr />
      <div className="flex gap-4 min-w-0">
        {weatherData.forecast.forecastday.map((day, i) => (
          <div className="border rounded w-36 h-48" key={i}>
            <p>Date: {day.date}</p>
            <p>Temperature: {day.day.avgtemp_c}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Today = ({ weatherData }: { weatherData: WeatherDataToday }) => {
  return (
    <div className="border rounded">
      <p>Today</p>
      <p>Temperature: {weatherData.temp_c}</p>
      <p>Humidity: {weatherData.humidity}</p>
      <p>Wind Speed: {weatherData.wind_mph}mph</p>
      <p>Wind Direction: {weatherData.wind_dir}</p>
      <WindDirectionArrow direction={weatherData.wind_dir} />
    </div>
  );
};

const WindDirectionArrow = ({ direction }: { direction: WindDirection }) => {
  const windDirectionIndex = windDirections.findIndex((d) => d === direction);

  const windDirection = 0.125 + windDirectionIndex / windDirections.length;

  return (
    <MousePointer2 style={{ transform: `rotate(${windDirection}turn)` }} />
  );
};

export { Display };
