import { t } from 'elysia'
import { skill } from './skill'

const servant = t.Object({
    id: t.Number(),
    name: t.String(),
    classIcon: t.String(),
    icon: t.String(),
    portraits: t.Array(t.String()),
    skills: t.Array(skill),
    appends: t.Array(skill)
})

export { servant }
