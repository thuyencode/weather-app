import { type WEEK_DAYS } from './constants'

export type WeekDay = (typeof WEEK_DAYS)[number]

interface Location {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

interface CurrentWeather {
  temp_c: number
  is_day: 0 | 1
  condition: {
    text: string
    code: number
  }
  wind_mph: number
  pressure_mb: number
  precip_mm: number
}

interface ForecastHour {
  condition: undefined
  short_rad: 0
  diff_rad: 0
}

interface ForecastDay {
  date: Date
  date_epoch: number
  day: {
    avgtemp_c: 0.5
    condition: {
      text: string
    }
  }
  astro: undefined
  hour: Record<number, ForecastHour>
}

interface ForecastWeather {
  forecastday: Record<number, ForecastDay>
}

export interface Weather {
  location: Location
  current: CurrentWeather
  forecast: ForecastWeather
}
