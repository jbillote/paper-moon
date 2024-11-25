import { Html } from '@elysiajs/html'

const Base = ({ children }: JSX.ElementChildrenAttribute) => (
    <html lang="en" class="dark">
        <head>
            <meta charset="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, inital-scale=1.0"
            />
            <title>Paper Moon</title>
            <link href="/public/globals.css" rel="stylesheet" /> 
            <script src="/public/htmx.min.js" />
        </head>
        <body>{children}</body>
    </html>
)

export { Base }
