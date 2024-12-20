import { html, Html } from '@elysiajs/html'
import { Elysia, t } from 'elysia'
import { ServantService } from '../services/servantService'

const skill = t.Object({
    startingLevel: t.Number(),
    endingLevel: t.Number()
})

const servantDetailsPage = new Elysia()
    .use(html())
    .get('/servant/:id', async ({ params: { id }}) => {
        let servant = await ServantService.servantDetails(id)

        return (
            <div class="h-5/6 w-11/12 grid grid-cols-10 grid-rows-5 gap-4 my-5">
                <div class="row-span-5 col-span-4">
                    <img class="w-full" src={servant.portraits[3]} />
                </div>
                <div class="col-span-6 row-span-1">
                    <img
                        class="w-12 h-12"
                        src={servant.classIcon}
                    />
                    <span class="text-lg font-bold">{servant.name}</span>
                </div>
                <div class="col-span-2">
                    <span class="font-bold">Ascension</span>
                </div>
                <div class="col-span-2">
                    <span class="font-bold">Skills</span>
                </div>
                <div class="col-span-2">
                    <span class="font-bold">Appends</span>
                </div>
                <div class="col-span-10 row-span-1">
                    <span class="text-lg font-bold">Materials</span>
                </div>
            </div>
        )
    }, {
        params: t.Object({
            id: t.Number()
        })
    })
    .post('/servant:/id/materials', async ({ params: { id }, body }) => {
        console.log(body)
        return (
            <h1 class="w-full items-center text-4xl font-bold">MATERIALS</h1>
        )
    }, {
        params: t.Object({
            id: t.Number()
        }),
        body: t.Object({
            ascension: t.Object({
                start: t.Number(),
                end: t.Number()
            }),
            skills: t.Array(skill),
            appends: t.Array(skill)
        })
    })

export { servantDetailsPage }
