import { type Component } from 'solid-js'
import ForecastOfHour from './components/cards/ForecastOfHour'
import ForecastOfHourSkeleton from './components/cards/ForecastOfHourSkeleton'

const App: Component = () => {
  return (
    <>
      <div class='flex gap-2'>
        <ForecastOfHour />
        <ForecastOfHourSkeleton />
      </div>
    </>
  )
}

export default App
