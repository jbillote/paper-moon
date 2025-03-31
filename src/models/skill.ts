import { t } from 'elysia'

const skill = t.Object({
  name: t.String(),
  icon: t.String(),
})

type Skill = typeof skill.static

export { skill, Skill }
