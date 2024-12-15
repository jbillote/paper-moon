import { Elysia } from "elysia"
import { staticPlugin } from '@elysiajs/static'
import { swagger } from '@elysiajs/swagger'
import { servantController } from "./controllers/servantController"
import { views } from "./views/views"

const app = new Elysia()
  .use(staticPlugin())
  .use(swagger({
    path: '/v1/swagger',
    exclude: [ '/', '/home' ],
    documentation: {
      info: {
        title: 'Paper Moon Documentation',
        version: '1.0.0'
      },
      tags: [
        { name: 'Servant', description: 'Servant endpoints' }
      ]
    }
  }))
  .use(servantController)
  .use(views)
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
