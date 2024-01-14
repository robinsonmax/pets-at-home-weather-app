import { WeatherData } from "@/lib/getWeatherData";
import { Today } from "./today";
import { Forecast } from "./forecast";

const Display = ({ weatherData }: { weatherData: WeatherData }) => {
  return (
    <section className="w-full overflow-x-auto px-4 max-w-[900px] mt-8">
      <Today weatherData={weatherData.current} />
      <p className="text-center mt-8">7 Day Forecast</p>
      <Forecast weatherData={weatherData.forecast.forecastday} />
    </section>
  );
};

export { Display };
