# Breeze E-Commerce

App bootstraped
with: [Vite](https://github.com/vitejs/vite), [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), [Eslint](https://eslint.org/), [Prettier](https://prettier.io/), [Husky](https://typicode.github.io/husky/), [Lint Staged](https://github.com/okonet/lint-staged), [Styled Components](https://styled-components.com/), [React Query](https://tanstack.com/query), [Zod](https://zod.dev/), [Docker](https://www.docker.com/).

## Quick start

Clone the repo and run:

```bash
yarn install
```

```bash
yarn dev
```

## Testing

The project feature test to individual components(snapshot, unit) and a sort of structural test to the responses of used
APIs:

```bash
yarn test
```

## Data

- The app is intended to work as client only, so all data fetching is done on the client side.
  For performance and extensibility reasons products list is rendered progressively, simulating infinite scroll.
  It does not seem to exist a way to fetch data paginated but with the current implementation adding the data fetching
  to
  the infinite scroll should be straightforward.

- For sanitizing the contents data we are using [dompurify](https://www.npmjs.com/package/dompurify).
