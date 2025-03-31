import { html, Html } from '@elysiajs/html'
import { Elysia, t } from 'elysia'
import { type Material } from '../models/material'
import { ServantService } from '../services/servantService'
import { Logger } from '../utils/logger'
import { AppendPicker } from './components/appendPicker'
import { AscensionPicker } from './components/ascensionPicker'
import { SkillPicker } from './components/skillPicker'

const servantDetailsPage = new Elysia()
  .use(Logger)
  .use(html())
  .get(
    '/servant/:id',
    async ({ params: { id } }) => {
      const servant = await ServantService.servantDetails(id)

      return (
        <div class="grid w-11/12 grid-cols-12 grid-rows-12 gap-4">
          <div class="col-span-4 row-span-10">
            <img class="w-fit" src={servant.portraits[3]} />
          </div>
          <div class="col-span-8 row-span-10 grid h-fit grid-rows-12">
            <div class="col-span-12 row-span-1 inline-flex">
              <img class="h-12 w-12" src={servant.classIcon} />
              <span class="my-2 px-4 text-lg font-bold">{servant.name}</span>
            </div>
            <div class="col-span-4 row-span-12 px-2 py-2">
              <span class="text-lg font-bold">Ascension</span>
              <AscensionPicker servant={servant} />
            </div>
            <div class="col-span-4 row-span-12 px-2 py-2">
              <span class="text-lg font-bold">Skills</span>
              <SkillPicker servant={servant} />
            </div>
            <div class="col-span-4 row-span-12 px-2 py-2">
              <span class="text-lg font-bold">Appends</span>
              <AppendPicker servant={servant} />
            </div>
          </div>
          <div class="col-span-12 row-span-2 h-fit text-center">
            <div>
              <span class="text-2xl font-bold">Materials</span>
            </div>
            <div id="materials" class="text-center"></div>
          </div>
        </div>
      )
    },
    {
      params: t.Object({
        id: t.Number(),
      }),
    },
  )
  .get(
    '/servant/:id/materials',
    async ({ params: { id }, query, log }) => {
      log.info(`Fetching materials for servant with ID ${id}`)
      const materials: Material[] = []
      const qp = await ServantService.servantMaterials(
        id,
        materials,
        query.ascensionStart,
        query.ascensionEnd,
        query.skill1Start,
        query.skill1End,
        query.skill2Start,
        query.skill2End,
        query.skill3Start,
        query.skill3End,
        query.append1Start,
        query.append1End,
        query.append2Start,
        query.append2End,
        query.append3Start,
        query.append3End,
        query.append4Start,
        query.append4End,
        query.append5Start,
        query.append5End,
      )

      if (qp > 0) {
        materials.unshift({
          id: -1,
          name: 'QP',
          icon: 'https://static.atlasacademy.io/JP/Items/5.png',
          amount: qp,
        })
      }

      return (
        <div class="flex flex-wrap justify-center gap-4">
          {materials.map((material) => (
            <div class="text-center">
              <img src={material.icon} alt={material.name} class="w-12" />
              <div>{material.amount}</div>
            </div>
          ))}
        </div>
      )
    },
    {
      params: t.Object({
        id: t.Number(),
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
        append3End: t.Number(),
        append4Start: t.Number(),
        append4End: t.Number(),
        append5Start: t.Number(),
        append5End: t.Number(),
      }),
    },
  )

export { servantDetailsPage }
