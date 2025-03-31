import { t } from 'elysia'

const material = t.Object({
  id: t.Number(),
  name: t.String(),
  icon: t.String(),
  amount: t.Number(),
})

type Material = typeof material.static

export { material, Material }
