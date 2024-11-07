import { Elysia, t } from 'elysia'
import { servant } from '../models/servant'
import { ServantService } from '../services/servantService'

const servantController = new Elysia()
    .get('/servants', () => {
        return ServantService.allServants()
    }, {
        response: t.Array(servant)
    })
    .get('/servant/:id', ({ params: { id }}) => {
        return ServantService.servant(id)
    }, {
        params: t.Object({
            id: t.Numeric()
        }),
        response: servant
    })

export { servantController }
