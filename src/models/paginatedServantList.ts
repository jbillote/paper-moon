import { t } from 'elysia'
import { servant } from './servant'
import { page } from './page'

const paginatedServantList = t.Object({
    servants: t.Array(servant),
    page: page
})

type PaginatedServantList = typeof paginatedServantList.static

export { paginatedServantList, PaginatedServantList }
