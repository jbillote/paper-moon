import { html, Html } from '@elysiajs/html'
import { Elysia } from 'elysia'
import { Base } from './components/base'

const views = new Elysia()
    .use(html())
    .get('/', () => (
        <Base>
            <h1 class="h-screen flex items-center justify-center">
                P A P E R&nbsp;&nbsp;&nbsp;M O O N
            </h1>
        </Base>
    ))

export { views }