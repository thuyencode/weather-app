import { Icon } from '@iconify-icon/solid'
import { type Component } from 'solid-js'
import { type WeekDay } from '../../libs/types'

interface Props {
  weekDay: WeekDay
}

const ForecastOfHour: Component<Props> = (props) => {
  return (
    <div class='card h-min max-w-32 rounded-md border border-base-content/50 bg-base-100 px-3 py-2 text-center text-base-content'>
      <span class='uppercase'>{props.weekDay}</span>
      <Icon class='my-2 flex justify-center text-5xl' icon='circum:dark' />
      <h3 class='font-semibold'>
        <span>18</span>℃
      </h3>
    </div>
  )
}

export default ForecastOfHour
