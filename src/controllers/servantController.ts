import { Elysia, t } from 'elysia'
import { servant } from '../models/servant'
import { servantDetails } from '../models/servantDetails'
import { ServantService } from '../services/servantService'

const servantController = new Elysia()
    .get('/servants', ({ query: { page, limit }}) => {
        return ServantService.allServants(page, limit)
    }, {
        query: t.Object({
            page: t.Optional(t.Number({ default: 0 })),
            limit: t.Optional(t.Number({ default: 20 }))
        }),
        response: t.Array(servant)
    })
    .get('/servant/:id', ({ params: { id }}) => {
        return ServantService.servantDetails(id)
    }, {
        params: t.Object({
            id: t.Number()
        }),
        response: servantDetails
    })

export { servantController }
