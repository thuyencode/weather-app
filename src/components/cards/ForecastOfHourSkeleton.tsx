import { type Component } from 'solid-js'

const ForecastOfHourSkeleton: Component = () => {
  return (
    <div class='card max-w-32 rounded-md border border-base-content/50 bg-base-100 p-2 text-center text-base-content'>
      <span>10:00 PM</span>

      <div class='skeleton m-5 h-9 w-9 rounded-full' />

      <div class='space-y-2'>
        <div class='skeleton h-4 w-full' />
        <div class='skeleton h-4 w-full' />
      </div>

      <div class='skeleton mt-6 h-5 w-full' />
    </div>
  )
}

export default ForecastOfHourSkeleton
