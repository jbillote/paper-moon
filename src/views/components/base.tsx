import * as elements from 'typed-html'

const Base = ({ children }: elements.Children) => (
    <html lang="en" class="dark">
        <head>
            <meta charset="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, inital-scale=1.0"
            />
            <title>Paper Moon</title>
            <link href="/public/globals.css" rel="stylesheet" /> 
        </head>
        <body>{children}</body>
    </html>
)

export { Base }
