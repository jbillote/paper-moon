import { html, Html } from '@elysiajs/html'
import { Elysia, t } from 'elysia'
import { ServantSearchResult } from './components/servantSearchResult'
import { PaginatedServantList } from '../models/paginatedServantList'
import { ServantService } from '../services/servantService'

const searchPage = new Elysia()
    .use(html())
    .get('/search', async ({ query: { query, page, limit } }) => {
        var servants: PaginatedServantList
        if (query === '') {
            servants = await ServantService.allServants(page, limit)
        } else {
            servants = await ServantService.searchServants(query, page, limit)
        }

        return (
            <div id="search-results"
                 class="flex flex-col items-start w-11/12 mb-5"
            >
                {servants.servants.map((servant) => (
                    <ServantSearchResult servant={servant} />
                ))}
            </div>
        )
    }, {
        query: t.Object({
            query: t.String(),
            page: t.Optional(t.Number({ default: 0 })),
            limit: t.Optional(t.Number({ default: 10 }))
        })
    })

export { searchPage }
