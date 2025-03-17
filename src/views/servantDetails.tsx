import { html, Html } from '@elysiajs/html'
import { Elysia, t } from 'elysia'
import { AppendPicker } from './components/appendPicker'
import { AscensionPicker } from './components/ascensionPicker'
import { SkillPicker } from './components/skillPicker'
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
            <div class="h-5/6 w-11/12 grid grid-cols-12 grid-rows-12 gap-4 ">
                <div class="col-span-4 row-span-12">
                    <img class="w-fit" src={servant.portraits[3]} />
                </div>
                <div class="col-span-8 row-span-12 grid grid-rows-12">
                    <div class="col-span-12 row-span-1 inline-flex">
                        <img
                            class="w-12 h-12"
                            src={servant.classIcon}
                        />
                        <span class="text-lg font-bold px-4 my-2">{servant.name}</span>
                    </div>
                    <div class="col-span-4 row-span-9 px-2 py-2">
                        <span class="text-lg font-bold">Ascension</span>
                        <AscensionPicker servantId={id} />
                    </div>
                    <div class="col-span-4 row-span-9 px-2 py-2">
                        <span class="text-lg font-bold">Skills</span>
                        <SkillPicker servant={servant} />
                    </div>
                    <div class="col-span-4 row-span-9 px-2 py-2">
                        <span class="text-lg font-bold">Appends</span>
                        <AppendPicker servant={servant} />
                    </div>
                    <div class="col-span-12 row-span-2">
                        <span class="text-lg font-bold">Materials</span>
                    </div>
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
