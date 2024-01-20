import { type Component } from 'solid-js'
import { type WeekDay } from '../../libs/types'

interface Props {
  weekDay: WeekDay
}

const ForecastDaySkeleton: Component<Props> = (props) => {
  return (
    <div class='card h-min min-h-36 min-w-20 rounded-md border border-base-content/50 bg-base-100 p-3 pt-2 text-center text-base-content'>
      <span class='uppercase'>{props.weekDay}</span>
      <div class='skeleton my-3 size-10 rounded-full' />
      <div class='skeleton mt-1 h-5 w-full' />
    </div>
  )
}

export default ForecastDaySkeleton
