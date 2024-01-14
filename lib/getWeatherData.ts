export const windDirections = [
  "N",
  "NNE",
  "NE",
  "ENE",
  "E",
  "ESE",
  "SE",
  "SSE",
  "S",
  "SSW",
  "SW",
  "WSW",
  "W",
  "WNW",
  "NW",
  "NNW",
] as const;

type WindDirection = (typeof windDirections)[number];

type WeatherCondition = {
  text: string;
  icon: string;
};

type WeatherDataCurrent = {
  temp_c: number;
  humidity: number;
  wind_mph: number;
  wind_dir: WindDirection;
  condition: WeatherCondition;
};

type WeatherDataForecastDay = {
  date: string;
  day: {
    avgtemp_c: number;
    condition: WeatherCondition;
  };
};

type WeatherData = {
  current: WeatherDataCurrent;
  forecast: {
    forecastday: WeatherDataForecastDay[];
  };
};

export async function getWeatherData(searchValue: string) {
  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    return {
      errorMessage:
        "Missing API Key. Please add a 'WEATHER_API_KEY' environment variable.",
    };
  }

  const req = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchValue}&days=7&aqi=no&alerts=no`
  );

  if (!req.ok) {
    return { errorMessage: "Failed to call API. Bad Request." };
  }

  const data = (await req.json()) as WeatherData;

  return { data };
}
