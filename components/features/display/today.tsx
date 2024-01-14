import { WeatherDataToday } from "@/lib/getWeatherData";
import { WindArrow } from "./wind-arrow";

const Today = ({ weatherData }: { weatherData: WeatherDataToday }) => (
  <div className="h-36 flex flex-col items-center mx-auto bg-background max-w-[240px]">
    <p>Currently</p>
    <p className="text-4xl">{weatherData.temp_c}°C</p>
    <p>{weatherData.condition.text}</p>
    <p>Humidity: {weatherData.humidity}%</p>
    <p>
      Wind: {weatherData.wind_mph}mph{" "}
      <WindArrow
        direction={weatherData.wind_dir}
        className="inline-block w-4 h-4"
      />
    </p>
  </div>
);

export { Today };
