import { Elysia } from 'elysia'
import { pino } from 'pino'
import { RequestID } from './requestId'

const Logger = new Elysia({ name: 'logger' }).use(RequestID).derive({ as: 'global' }, (ctx) => {
  // Skip the pretty transport under test so test output isn't flooded with logs
  const log = (
    process.env.NODE_ENV === 'test'
      ? pino({ level: 'silent' })
      : pino(
          pino.transport({
            target: 'pino-pretty',
          }),
        )
  ).child({ requestID: ctx.requestID })

  return {
    log: log,
  }
})

export { Logger }
