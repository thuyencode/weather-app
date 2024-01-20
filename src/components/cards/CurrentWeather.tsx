import { type Component } from 'solid-js'
import { type CurrentWeather as ICurrentWeather } from '../../libs/types'

const CurrentWeather: Component<ICurrentWeather> = (props) => {
  return (
    <div class='flex w-full items-center justify-between'>
      <div class='flex flex-col items-center capitalize'>
        <img
          class='aspect-auto h-auto min-w-20'
          src={`https:${props.condition?.icon}`}
          alt={`${props.condition?.text} Icon`}
        />
        <p class='font-medium capitalize'>{props.condition?.text}</p>
      </div>
      <h1>
        <span>{props.temp_c}</span>℃
      </h1>
      <div class='flex flex-col'>
        <span>
          Wind: <span class='font-semibold'>{props.wind_mph} kmph</span>
        </span>
        <span>
          Precip: <span class='font-semibold'>{props.precip_mm} mm</span>
        </span>
        <span>
          Pressure: <span class='font-semibold'>{props.pressure_mb} mb</span>
        </span>
      </div>
    </div>
  )
}

export default CurrentWeather
