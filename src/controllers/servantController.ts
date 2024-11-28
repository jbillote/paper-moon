import { Elysia, t } from 'elysia'
import { servant } from '../models/servant'
import { servantDetails } from '../models/servantDetails'
import { ServantService } from '../services/servantService'

const ServantModel = new Elysia()
    .model({
        'servant.list': t.Array(servant),
        'servant.details': servantDetails
    })

const servantController = new Elysia({ prefix: '/api/v1' })
    .use(ServantModel)
    .get('/servants', ({ query: { page, limit }}) => {
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
    .get('/servants/search', ({ query: { query }}) => {
        return ServantService.searchServants(query)
    }, {
        query: t.Object({
            query: t.String()
        }),
        response: 'servant.list',
        detail: {
            tags: [ 'Servant' ]
        }
    })
    .get('/servant/:id', ({ params: { id }}) => {
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
