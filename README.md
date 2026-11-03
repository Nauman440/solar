# Solara

A responsive sample solar-business homepage built with Next.js App Router.

## Development

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

## Static production build

```sh
npm run build
```

Deploy the generated `out/` directory to a static host. Because this project uses static export, use a static file server for production rather than `next start`.

The homepage uses sample copy and a placeholder contact email (`hello@example.com`). Navigation links jump to homepage sections. Additional pages can be added under `app/`.
