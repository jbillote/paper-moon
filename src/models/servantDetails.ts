import { t } from 'elysia'
import { skill } from './skill'
import { material } from './material'

const servantDetails = t.Object({
    id: t.Number(),
    name: t.String(),
    classIcon: t.String(),
    icon: t.String(),
    portraits: t.Array(t.String()),
    skills: t.Array(skill),
    appends: t.Array(skill),
    ascensionMaterials: t.Array(t.Object({
        materials: t.Array(material),
        qp: t.Number()
    })),
    skillMaterials: t.Array(t.Object({
        materials: t.Array(material),
        qp: t.Number()
    })),
    appendMaterials: t.Array(t.Object({
        materials: t.Array(material),
        qp: t.Number()
    }))
})

type ServantDetails = typeof servantDetails.static

export { servantDetails, ServantDetails }
