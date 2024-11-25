import { html, Html } from '@elysiajs/html'
import { Elysia } from 'elysia'
import { Base } from './components/base'

const views = new Elysia()
    .use(html())
    .get('/', () => (
        <Base>
            <div
                hx-get="/home"
                hx-trigger="load"
                hx-swap="innerHTML"
                class='flex w-full h-screen justify-center items-center'
            >
            </div>
        </Base>
    ))
    .get('/home', () => (
        <h1 class='text-4xl font-bold animate-fade-in'>
            P A P E R&nbsp;&nbsp;&nbsp;M O O N
        </h1>
    ))

export { views }
