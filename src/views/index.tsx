import { html, Html } from '@elysiajs/html'
import { Elysia } from 'elysia'
import { Base } from './components/base'

const views = new Elysia()
    .use(html())
    .get('/', () => (
        <Base>
            <h1 class='flex w-full h-screen justify-center items-center text-4xl font-bold'>
                P A P E R&nbsp;&nbsp;&nbsp;M O O N
            </h1>
        </Base>
    ))

export { views }
