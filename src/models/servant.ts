import { t } from 'elysia'

const servant = t.Object({
  id: t.Number(),
  name: t.String(),
  classIcon: t.String(),
  rarity: t.Number(),
  icon: t.String(),
})

type Servant = typeof servant.static

export { servant, Servant }
