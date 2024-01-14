import { WeatherDataForecastDay } from "@/lib/getWeatherData";

const ForecastDay = ({
  weatherData,
}: {
  weatherData: WeatherDataForecastDay;
}) => {
  const date = new Date(Date.parse(weatherData.date));
  const dayOfWeek = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
  }).format(date);

  return (
    <div className="border rounded hover:shadow hover:-translate-y-px transition-all flex flex-col justify-center items-center h-32">
      <img
        width={32}
        height={32}
        src={`https:${weatherData.day.condition.icon}`}
        alt={`${weatherData.day.condition.text} Icon`}
        className="inline-block"
      />
      <p className="text-2xl my-2">{weatherData.day.avgtemp_c}°C</p>
      <p>{dayOfWeek}</p>
    </div>
  );
};

export { ForecastDay };
