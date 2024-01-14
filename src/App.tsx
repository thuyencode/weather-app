import { For, type Component } from 'solid-js'
import ForecastOfHourSkeleton from './components/skeletons/ForecastOfHourSkeleton'
import StaticSkeleton from './components/skeletons/StaticSkeleton'
import { WEEK_DAYS } from './libs/constants'

const App: Component = () => {
  return (
    <>
      <StaticSkeleton />
      <div class='flex gap-2'>
        <For each={WEEK_DAYS}>
          {(weekDay) => <ForecastOfHourSkeleton weekDay={weekDay} />}
        </For>
      </div>
    </>
  )
}

export default App
