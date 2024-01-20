import { type Component } from 'solid-js'
import { WEEK_DAYS } from '../../libs/constants'
import { type ForecastDay as IForecastDay } from '../../libs/types'

const ForecastDay: Component<IForecastDay> = (props) => {
  return (
    <div class='card flex min-h-36 min-w-20 flex-col justify-between rounded-md border border-base-content/50 bg-base-100 px-3 py-2 text-center text-base-content'>
      <span class='uppercase'>{WEEK_DAYS[new Date(props.date).getDay()]}</span>
      <img
        class='aspect-auto h-auto min-w-14'
        src={`https:${props.day.condition.icon}`}
        alt={`${props.day.condition.icon} Icon`}
      />
      <h3 class='font-medium'>
        <span>{props.day.avgtemp_c}</span>℃
      </h3>
    </div>
  )
}

export default ForecastDay
