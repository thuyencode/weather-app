import { Icon } from '@iconify-icon/solid'
import { type Component } from 'solid-js'

const LocationSkeleton: Component = () => {
  return (
    <h2 class='flex items-center justify-start gap-2'>
      <Icon class='text-3xl' icon='circum:location-on' />
      <div class='skeleton h-6 w-40 dark:bg-base-200' />
    </h2>
  )
}

export default LocationSkeleton
