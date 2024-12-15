import { Elysia } from 'elysia'
import { index } from './index'
import { searchPage } from './search'

const views = new Elysia()
    .use(index)
    .use(searchPage)

export { views }
