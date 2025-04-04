import { html, Html } from '@elysiajs/html'
import { Elysia } from 'elysia'
import { type PaginatedServantList } from '../models/paginatedServantList'
import { ServantService } from '../services/servantService'
import { Logger } from '../utils/logger'
import { Base } from './components/base'
import { ServantListSkeleton } from './components/servantListSkeleton'
import { ServantSearchResult } from './components/servantSearchResult'

const index = new Elysia()
  .use(Logger)
  .use(html())
  .get('/', () => (
    <Base>
      <div hx-get="/home" hx-trigger="load" hx-swap="innerHTML">
        <ServantListSkeleton showSearch={true} />
      </div>
    </Base>
  ))
  .get('/home', async ({ log }) => {
    const servants: PaginatedServantList = await new ServantService(log).allServants()
    return (
      <div class="my-5 flex h-5/6 flex-col items-center gap-4">
        <input
          class="form-control input w-11/12"
          type="search"
          name="query"
          placeholder="Search"
          hx-get="/search"
          hx-trigger="input changed delay:500ms, search"
          hx-target="#search-results"
          hx-swap="outerHTML"
        />
        <div id="search-results" class="mb-5 flex w-11/12 flex-col items-start">
          {servants.servants.map((servant) => (
            <ServantSearchResult servant={servant} />
          ))}
        </div>
      </div>
    )
  })

export { index }
