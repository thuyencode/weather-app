import { Icon } from '@iconify-icon/solid'
import { type Component } from 'solid-js'
import { type Location as ILocation } from '../../libs/types'

const Location: Component<Pick<ILocation, 'name' | 'country'>> = (props) => {
  return (
    <h2 class='flex items-center justify-start gap-2'>
      <Icon class='text-3xl' icon='circum:location-on' />
      <span>{props.name ?? 'Unknown'}</span>
      <Icon
        class='text-3xl'
        icon={
          props.country !== undefined
            ? `emojione-v1:flag-for-${props.country.toLowerCase()}`
            : 'twemoji:flag-united-nations'
        }
      />
    </h2>
  )
}

export default Location
