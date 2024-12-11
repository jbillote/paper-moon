import { html, Html } from '@elysiajs/html'
import { Elysia } from 'elysia'
import { Base } from './components/base'
import { ServantListSkeleton } from './components/servantListSkeleton'
import { ServantService } from '../services/servantService'

const views = new Elysia()
    .use(html())
    .get('/', () => (
        <Base>
            <div
                hx-get="/home"
                hx-trigger="load"
                hx-swap="innerHTML"
                class='flex w-full justify-center items-center'
            >
                <ServantListSkeleton />
            </div>
        </Base>
    ))
    .get('/home', async () => {
        await ServantService.allServants()
        return (
            <h1 class='text-4xl font-bold animate-fade-in my-5'>
                P A P E R&nbsp;&nbsp;&nbsp;M O O N
            </h1>
        )
    })

export { views }
