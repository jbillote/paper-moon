import { t } from 'elysia'

const page = t.Object({
  totalServants: t.Number(),
  currentPage: t.Number(),
  pageSize: t.Number(),
  start: t.Number(),
  end: t.Number(),
})

type Page = typeof page.static

export { page, Page }
