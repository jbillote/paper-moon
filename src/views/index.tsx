import { html, Html } from '@elysiajs/html'
import { Elysia, t } from 'elysia'
import { Base } from './components/base'
import { ServantListSkeleton } from './components/servantListSkeleton'
import { ServantSearchResult } from './components/servantSearchResult'
import { ServantService } from '../services/servantService'
import { PaginatedServantList } from '../models/paginatedServantList'

const index = new Elysia()
    .use(html())
    .get('/', () => (
        <Base>
            <div
                hx-get="/home"
                hx-trigger="load"
                hx-swap="innerHTML"
            >
                <ServantListSkeleton showSearch={true} />
            </div>
        </Base>
    ))
    .get('/home', async () => {
        let servants: PaginatedServantList = await ServantService.allServants()
        return (
            <div class='flex h-5/6 flex-col gap-4 items-center my-5'>
                <input class='form-control input w-11/12'
                    type='search'
                    name='query' placeholder='Search'
                    hx-get='/search'
                    hx-trigger='input changed delay:500ms, search'
                    hx-target='#search-results'
                    hx-swap='outerHTML'
                />
                <div id='search-results'
                    class='flex flex-col items-start w-11/12 mb-5'
                >
                    {servants.servants.map((servant) => (
                        <ServantSearchResult servant={servant} />
                    ))}
                </div>
            </div>
        )
    })

export { index }
