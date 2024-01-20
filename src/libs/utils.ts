import { type Weather } from './types'

export async function fetchWeather(): Promise<Weather> {
  const response = await fetch(import.meta.env.VITE_WEATHER_BASE_URL as string)

  return await response.json()
}
