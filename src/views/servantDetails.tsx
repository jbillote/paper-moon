import { html, Html } from '@elysiajs/html'
import { Elysia, t } from 'elysia'
import { ServantService } from '../services/servantService'

const servantDetailsPage = new Elysia()
    .use(html())
    .get('/servant/:id', async({ params: { id }}) => {
        let servant = await ServantService.servantDetails(id)

        return (
            <h1 class="flex w-full h-screen justify-center items-center text-4xl font-bold">
                {servant.name}
            </h1>
        )
    }, {
        params: t.Object({
            id: t.Number()
        })
    })

export { servantDetailsPage }
