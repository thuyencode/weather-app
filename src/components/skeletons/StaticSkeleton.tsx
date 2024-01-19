import { type Component } from 'solid-js'

const StaticSkeleton: Component = () => {
  return (
    <div class='flex w-full items-center justify-between'>
      <div class='flex flex-col items-center capitalize'>
        <div class='skeleton mb-3 h-16 w-16 rounded-full dark:bg-base-200' />
        <div class='skeleton h-6 w-20 dark:bg-base-200' />
      </div>
      <h1>
        <div class='skeleton h-7 w-14 dark:bg-base-200' />
      </h1>
      <div class='flex flex-col'>
        <span class='inline-flex gap-1'>
          Wind: <span class='skeleton inline-block h-5 w-12 dark:bg-base-200' />
        </span>
        <span class='inline-flex gap-1'>
          Precip:{' '}
          <span class='skeleton inline-block h-5 w-12 dark:bg-base-200' />
        </span>
        <span class='inline-flex gap-1'>
          Pressure:{' '}
          <span class='skeleton inline-block h-5 w-12 dark:bg-base-200' />
        </span>
      </div>
    </div>
  )
}

export default StaticSkeleton
