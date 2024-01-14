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

  const data = await req.json();

  return { data };
}
