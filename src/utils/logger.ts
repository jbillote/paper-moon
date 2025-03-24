import { Elysia } from 'elysia'
import { pino } from 'pino'
import { RequestID } from './requestId'

// TODO: Figure out how to integrate request ID
const ElysiaLogger = pino(pino.transport({
    target: 'pino-pretty'
}))

const Logger = new Elysia({ name: 'logger' })
    .use(RequestID)
    .decorate('log', ElysiaLogger)

export { Logger }
