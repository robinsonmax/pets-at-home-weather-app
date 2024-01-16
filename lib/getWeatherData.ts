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

export type WindDirection = (typeof windDirections)[number];

type WeatherCondition = {
  text: string;
  icon: string;
};

export type WeatherDataToday = {
  temp_c: number;
  humidity: number;
  wind_mph: number;
  wind_dir: WindDirection;
  condition: WeatherCondition;
};

export type WeatherDataForecastDay = {
  date: string;
  day: {
    avgtemp_c: number;
    condition: WeatherCondition;
  };
};

export type WeatherData = {
  current: WeatherDataToday;
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
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchValue}&days=7&aqi=no&alerts=no`,
    { next: { revalidate: 3600 } }
  );

  const resp = await req.json();

  if (!req.ok) {
    return {
      errorMessage:
        resp.error.message || "Failed to call the API. Bad Request.",
    };
  }

  return { data: resp as WeatherData };
}
