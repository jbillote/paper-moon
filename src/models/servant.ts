import { t } from 'elysia'
import { skill } from './skill'
import { material } from './material'

const servant = t.Object({
    id: t.Number(),
    name: t.String(),
    classIcon: t.String(),
    icon: t.String(),
    portraits: t.Array(t.String()),
    skills: t.Array(skill),
    appends: t.Array(skill),
    ascensionMaterials: t.Array(t.Object({
        materials: t.Array(material),
        qp: t.Numeric()
    })),
    skillMaterials: t.Array(t.Object({
        materials: t.Array(material),
        qp: t.Numeric()
    })),
    appendMaterials: t.Array(t.Object({
        materials: t.Array(material),
        qp: t.Numeric()
    }))
})

export { servant }
