import { t } from 'elysia'

const material = t.Object({
    id: t.Numeric(),
    name: t.String(),
    icon: t.String(),
    amount: t.Numeric()
})

type Material = typeof material.static

export { material, Material }
