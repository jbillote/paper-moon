import { Elysia } from 'elysia'
import { index } from './index'
import { searchPage } from './search'
import { servantDetailsPage } from './servantDetails'

const views = new Elysia()
    .use(index)
    .use(searchPage)
    .use(servantDetailsPage)

export { views }
