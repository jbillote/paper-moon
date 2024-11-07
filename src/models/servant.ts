import { t } from 'elysia'

const servant = t.Object({
    id: t.Number(),
    name: t.String(),
    classIcon: t.String(),
    icon: t.String(),
    portraits: t.Array(t.String())
})

export { servant }
