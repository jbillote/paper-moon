import { Elysia, t } from 'elysia'
import { servant } from '../models/servant'
import { servantDetails } from '../models/servantDetails'
import { ServantService } from '../services/servantService'

const servantController = new Elysia()
    .get('/servants', () => {
        return ServantService.allServants()
    }, {
        response: t.Array(servant)
    })
    .get('/servant/:id', ({ params: { id }}) => {
        return ServantService.servantDetails(id)
    }, {
        params: t.Object({
            id: t.Numeric()
        }),
        response: servantDetails
    })

export { servantController }
