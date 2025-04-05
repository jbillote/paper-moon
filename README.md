# Paper Moon

<h1 align="center">
    <img src="https://raw.githubusercontent.com/jbillote/paper-moon/refs/heads/main/.github/images/screenshot.png" alt="PaperMoon">
</h1>

Paper Moon is an application for planning what materials are needed for
ascension and leveling up skills in the mobile game Fate/Grand Order.

Paper Moon uses the BETH stack:
- [Bun](https://bun.sh/) JavaScript Runtime
- [Elysia](https://elysiajs.com/) Server Framework
- [Turso](https://turso.tech/) for caching and any database requirements
- [HTMX](https://htmx.org/) for building a dynamic UI

And featuring JSX for templating.

## Development

Install dependencies via:
```bash
bun install
```

To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

The development server features hot swapping, so any change made to `ts`, `tsx`, 
or Tailwind configurations will immediately reload the server without having to 
kill and restart the server.

## Deployment

This branch is currently not configured for deployment to any particular service. 
Instead, this branch just contains everything needed to run the application, so 
any configuration can be added to alloy for deployment to any cloud provider.

For an example, the [zerops](https://github.com/jbillote/paper-moon/tree/zerops) 
branch contains the configuration to deploy on [Zerops](https://zerops.io/).

## Known Issues and Todos
- Implement unit tests
- Implement caching using sqlite, including Turso for live access
- Allow switching of portrait on details page
- Implement proper page history navigation
- Look into relatively high memory usage as HTML is swapped in and out
