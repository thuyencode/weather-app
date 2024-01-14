import { Icon } from '@iconify-icon/solid'
import { type Component } from 'solid-js'

const Static: Component = () => {
  return (
    <div class='flex w-full items-center justify-between'>
      <div class='flex flex-col items-center capitalize'>
        <Icon class='w-min text-7xl' icon='circum:dark' />
        <p class='font-medium'>Clear sky</p>
      </div>
      <h1>
        <span>18</span>℃
      </h1>
      <div class='flex flex-col'>
        <span>
          Wind: <span class='font-medium'>9 kmph</span>
        </span>
        <span>
          Precip: <span class='font-medium'>0.2 mm</span>
        </span>
        <span>
          Pressure: <span class='font-medium'>1019 mb</span>
        </span>
      </div>
    </div>
  )
}

export default Static
