import { html, Html } from '@elysiajs/html'
import { Elysia, t } from 'elysia'
import { PaginatedServantList } from '../models/paginatedServantList'
import { ServantService } from '../services/servantService'
import { ServantSearchResult } from './components/servantSearchResult'

const searchPage = new Elysia().use(html()).get(
  '/search',
  async ({ query: { query, page, limit } }) => {
    let servants: PaginatedServantList
    if (query === '') {
      servants = await ServantService.allServants(page, limit)
    } else {
      servants = await ServantService.searchServants(query, page, limit)
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
