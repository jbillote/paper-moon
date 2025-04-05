import { Elysia } from 'elysia'
import { pino } from 'pino'
import { RequestID } from './requestId'

const Logger = new Elysia({ name: 'logger' }).use(RequestID).derive({ as: 'global' }, (ctx) => {
  const log = pino(
    pino.transport({
      target: 'pino-pretty',
    }),
  ).child({ requestID: ctx.requestID })

  return {
    log: log,
  }
})

export { Logger }
