import { For, type Component } from 'solid-js'
import ForecastOfHour from './components/cards/ForecastOfHour'
import Static from './components/cards/Static'
import { WEEK_DAYS } from './libs/constants'

const App: Component = () => {
  return (
    <>
      <Static />
      <div class='flex gap-2'>
        <For each={WEEK_DAYS}>
          {(weekDay) => <ForecastOfHour weekDay={weekDay} />}
        </For>
      </div>
    </>
  )
}

export default App
