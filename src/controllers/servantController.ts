import { Elysia, t } from 'elysia'
import { paginatedServantList } from '../models/paginatedServantList'
import { servantDetails } from '../models/servantDetails'
import { ServantService } from '../services/servantService'
import { Logger } from '../utils/logger'

const ServantModel = new Elysia()
    .model({
        'servant.list': paginatedServantList,
        'servant.details': servantDetails
    })

const servantController = new Elysia({ prefix: '/api/v1' })
    .use(Logger)
    .use(ServantModel)
    .get('/servants', ({ query: { page, limit }, log}) => {
        log.info(`Call to GET /servants, page=${page}, limit=${limit}`)
        return ServantService.allServants(page, limit)
    }, {
        query: t.Object({
            page: t.Optional(t.Number({ default: 0 })),
            limit: t.Optional(t.Number({ default: 20 }))
        }),
        response: 'servant.list',
        detail: {
            tags: [ 'Servant' ]
        }
    })
    .get('/servants/search', ({ query: { query, page, limit }, log}) => {
        log.info(`Call to GET /servants/search, query=${query}, page=${page}, limit=${limit}`)
        return ServantService.searchServants(query, page, limit)
    }, {
        query: t.Object({
            query: t.String(),
            page: t.Optional(t.Number({ default: 0 })),
            limit: t.Optional(t.Number({ default: 20 }))
        }),
        response: 'servant.list',
        detail: {
            tags: [ 'Servant' ]
        }
    })
    .get('/servant/:id', ({ params: { id }, log}) => {
        log.info(`Call to GET /servant/, id=${id}`)
        return ServantService.servantDetails(id)
    }, {
        params: t.Object({
            id: t.Number()
        }),
        response: 'servant.details',
        detail: {
            tags: [ 'Servant' ]
        }
    })

export { servantController }
