import { Html } from "@elysiajs/html"
import { Servant } from "../../models/servant"

function ServantSearchResult({ servant }: { servant: Servant }): JSX.Element {
    return (
        <button
            class="btn btn-ghost btn-block rounded-none no-animation h-14 justify-normal"
            hx-get={`/servant/${servant.id}`}
            hx-target="#search-results"
            hx-swap="outerHTML"
            hx-push-url="true"
        >
            <img
                src={servant.icon}
                class="rounded-full w-12 h-12"
            />
            <img
                src={servant.classIcon}
                class="w-12 h-12"
            />
            {servant.name}
        </button>
    )
}

export { ServantSearchResult }
