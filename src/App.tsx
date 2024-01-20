import { createQuery } from '@tanstack/solid-query'
import { For, Match, Switch, type Component } from 'solid-js'
import CurrentWeather from './components/cards/CurrentWeather'
import ForecastDay from './components/cards/ForecastDay'
import Location from './components/cards/Location'
import CurrentWeatherSkeleton from './components/skeletons/CurrentWeatherSkeleton'
import ForecastDaySkeleton from './components/skeletons/ForecastDaySkeleton'
import LocationSkeleton from './components/skeletons/LocationSkeletion'
import { WEEK_DAYS } from './libs/constants'
import { fetchWeather } from './libs/utils'

const App: Component = () => {
  const query = createQuery(() => ({
    queryKey: ['weather'],
    queryFn: fetchWeather
  }))

  return (
    <Switch>
      <Match when={query.isLoading}>
        <LocationSkeleton />
        <CurrentWeatherSkeleton />
        <div class='flex gap-2'>
          <For each={WEEK_DAYS}>
            {(weekDay) => <ForecastDaySkeleton weekDay={weekDay} />}
          </For>
        </div>
      </Match>

      <Match when={query.isSuccess}>
        <Location
          name={query.data?.location.name}
          country={query.data?.location.country}
        />
        <CurrentWeather {...query.data?.current} />
        <div class='flex gap-2'>
          <For each={query.data?.forecast.forecastday}>
            {(forcastday) => <ForecastDay {...forcastday} />}
          </For>
        </div>
      </Match>
    </Switch>
  )
}

export default App
