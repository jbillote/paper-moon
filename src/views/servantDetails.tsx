import { html, Html } from '@elysiajs/html'
import { Elysia, t } from 'elysia'
import { AppendPicker } from './components/appendPicker'
import { AscensionPicker } from './components/ascensionPicker'
import { SkillPicker } from './components/skillPicker'
import { ServantService } from '../services/servantService'
import { Logger } from '../utils/logger'

const skill = t.Object({
    startingLevel: t.Number(),
    endingLevel: t.Number()
})

const servantDetailsPage = new Elysia()
    .use(Logger)
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
                        <AscensionPicker servant={servant} />
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
                        <div id="materials"></div>
                    </div>
                </div>
            </div>
        )
    }, {
        params: t.Object({
            id: t.Number()
        })
    })
    .get('/servant/:id/materials', async ({ params: { id }, query, log}) => {
        log.info(query)
        log.info(`Fetching details for servant with ID ${id}`)
        let servant = await ServantService.servantDetails(id)

        log.info('Calculating materials required')

        log.info(`Calculating materials for ascension ${query.ascensionStart} to ${query.ascensionEnd}`)
        for (let ndx = query.ascensionStart; ndx < query.ascensionEnd; ndx++) {

        }

        return (
            <h1 class="w-full items-center text-4xl font-bold">MATERIALS</h1>
        )
    }, {
        params: t.Object({
            id: t.Number()
        }),
        query: t.Object({
            ascensionStart: t.Number(),
	        ascensionEnd: t.Number(),
	        skill1Start: t.Number(),
            skill1End: t.Number(),
            skill2Start: t.Number(),
            skill2End: t.Number(),
            skill3Start: t.Number(),
            skill3End: t.Number(),
            append1Start: t.Number(),
            append1End: t.Number(),
            append2Start: t.Number(),
            append2End: t.Number(),
            append3Start: t.Number(),
            append3End: t.Number()
        })
        // body: t.Object({
        //     // ascensionStart: t.Number()
        //     // ascension: t.Object({
        //     //     start: t.Number(),
        //     //     // end: t.Number()
        //     // }),
        //     // skills: t.Array(skill),
        //     // appends: t.Array(skill)
        // })
    })

export { servantDetailsPage }
