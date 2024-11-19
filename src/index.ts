import { Elysia } from "elysia"
import { staticPlugin } from '@elysiajs/static'
import { servantController } from "./controllers/servantController"
import { views } from "./views"

const app = new Elysia()
  .use(staticPlugin())
  .use(servantController)
  .use(views)
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
