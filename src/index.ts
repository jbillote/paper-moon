import { Elysia } from "elysia";
import { servantController } from "./controllers/servantController";

const app = new Elysia()
  .use(servantController)
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
