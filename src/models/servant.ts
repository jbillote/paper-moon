import { t } from 'elysia'

const servant = t.Object({
    id: t.Number(),
    name: t.String(),
    classIcon: t.String(),
    icon: t.String()
})

export { servant }
