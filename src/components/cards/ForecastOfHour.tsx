import { Icon } from '@iconify-icon/solid'
import { type Component } from 'solid-js'

const ForecastOfHour: Component = () => {
  return (
    <div class='card max-w-32 rounded-md border border-base-content/50 bg-base-100 p-2 text-center text-base-content'>
      <span>10:00 PM</span>
      <Icon class='flex justify-center text-7xl' icon='wi:night-clear' />

      <div class='grid grid-cols-[auto_auto] grid-rows-2 gap-x-1'>
        <span class='col-start-1 row-start-1 self-center justify-self-end'>
          <Icon
            icon='wi:humidity'
            style={{ display: 'inline' }}
            width={25}
            height={25}
          />
        </span>
        <span class='col-start-1 row-start-2 self-center justify-self-end'>
          <Icon
            icon='wi:windy'
            style={{ display: 'inline' }}
            width={25}
            height={25}
          />
        </span>
        <small class='col-start-2 row-start-1 self-center	justify-self-start'>
          23%
        </small>
        <small class='col-start-2 row-start-2 self-center	justify-self-start'>
          3.8 km/h
        </small>
      </div>
      <h3 class='mt-4 font-semibold'>18℃</h3>
    </div>
  )
}

export default ForecastOfHour
