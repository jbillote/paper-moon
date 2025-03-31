import { t } from 'elysia'
import { page } from './page'
import { servant } from './servant'

const paginatedServantList = t.Object({
  servants: t.Array(servant),
  page: page,
})

type PaginatedServantList = typeof paginatedServantList.static

export { paginatedServantList, PaginatedServantList }
