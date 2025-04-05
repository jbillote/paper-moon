import { html, Html } from '@elysiajs/html'
import { Elysia, t } from 'elysia'
import { type PaginatedServantList } from '../models/paginatedServantList'
import { ServantService } from '../services/servantService'
import { Logger } from '../utils/logger'
import { ServantSearchResult } from './components/servantSearchResult'

const searchPage = new Elysia()
  .use(Logger)
  .derive({ as: 'scoped' }, ({ log }) => {
    return {
      servantService: new ServantService(log),
      log: log.child({ component: 'searchPage' }),
    }
  })
  .use(html())
  .get(
    '/search',
    async ({ query: { query, page, limit }, log, servantService }) => {
      let servants: PaginatedServantList
      if (query === '') {
        log.info('Blank text field, reset the search result list')
        servants = await servantService.allServants(page, limit)
      } else {
        servants = await servantService.searchServants(query, page, limit)
      }

      return (
        <div id="search-results" class="mb-5 flex w-11/12 flex-col items-start">
          {servants.servants.map((servant) => (
            <ServantSearchResult servant={servant} />
          ))}
        </div>
      )
    },
    {
      query: t.Object({
        query: t.String(),
        page: t.Optional(t.Number({ default: 0 })),
        limit: t.Optional(t.Number({ default: 10 })),
      }),
    },
  )

export { searchPage }
