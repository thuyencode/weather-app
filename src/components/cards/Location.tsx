import { Icon } from '@iconify-icon/solid'
import { type Component } from 'solid-js'

const Location: Component = () => {
  return (
    <h2 class='flex items-center justify-start gap-2'>
      <Icon class='text-3xl' icon='circum:location-on' />
      <span>Dien Bien Phu</span>
      <Icon class='text-3xl' icon='emojione-v1:flag-for-vietnam' />
    </h2>
  )
}

export default Location
