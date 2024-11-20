import { html } from '@elysiajs/html'
import { Elysia } from 'elysia'
import { Base } from './components/base'
import * as elements from 'typed-html'

const views = new Elysia()
    .use(html())
    .get('/', () => (
        <Base>
            <h1 class='h-screen flex w-full items-center justify-center'>
                P A P E R&nbsp;&nbsp;&nbsp;M O O N
            </h1>
        </Base>
    ))

export { views }
