# Vite+ Monorepo Starter

A starter for creating a Vite+ monorepo.

## Development

- Check everything is ready:

```bash
vp run ready
```

- Run the tests:

```bash
vp run -r test
```

- Build the monorepo:

```bash
vp run -r build
```

- Run the development server:

```bash
vp run dev
```

# docker commands

```bash
docker compose up -d
```

```bash
docker compose exec frontend bash -lc "vp run dev"
docker compose exec frontend bash -lc "vp run react#dev"
docker compose exec frontend bash -lc "vp run vue#dev"
# ...
```
