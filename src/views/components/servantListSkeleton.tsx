import { Html } from '@elysiajs/html'

function ServantListSkeleton({ showSearch }: { showSearch: boolean }): JSX.Element {
  return (
    <div class="my-5 flex h-5/6 w-full flex-col items-center gap-4">
      {showSearch && <div class="skeleton h-8 w-11/12" />}
      <div class="skeleton h-12 w-10/12" />
      <div class="skeleton h-12 w-10/12" />
      <div class="skeleton h-12 w-10/12" />
      <div class="skeleton h-12 w-10/12" />
      <div class="skeleton h-12 w-10/12" />
      <div class="skeleton h-12 w-10/12" />
      <div class="skeleton h-12 w-10/12" />
      <div class="skeleton h-12 w-10/12" />
      <div class="skeleton h-12 w-10/12" />
    </div>
  )
}

export { ServantListSkeleton }
