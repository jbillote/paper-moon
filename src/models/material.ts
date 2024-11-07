import { t } from 'elysia'

const material = t.Object({
    id: t.Numeric(),
    name: t.String(),
    icon: t.String(),
    amount: t.Numeric()
})

export { material }
