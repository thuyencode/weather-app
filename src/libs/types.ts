import { type WEEK_DAYS } from './constants'

export type WeekDay = (typeof WEEK_DAYS)[number]

export interface Location {
  name: string | undefined
  region: string
  country: string | undefined
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

export interface CurrentWeather {
  temp_c: number
  is_day: 0 | 1
  condition: {
    text: string
    icon: string
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
      icon: string
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
