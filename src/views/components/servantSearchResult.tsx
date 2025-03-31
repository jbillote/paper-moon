import { Html } from '@elysiajs/html'
import { type Servant } from '../../models/servant'

function ServantSearchResult({ servant }: { servant: Servant }): JSX.Element {
  return (
    <button
      class="btn btn-ghost no-animation btn-block h-14 justify-normal rounded-none"
      hx-get={`/servant/${servant.id}`}
      hx-target="#search-results"
      hx-swap="outerHTML"
      hx-push-url="true"
    >
      <img src={servant.icon} class="h-12 w-12 rounded-full" />
      <img src={servant.classIcon} class="h-12 w-12" />
      {servant.name}
    </button>
  )
}

export { ServantSearchResult }
