# Development

## Dependencies
- [Node.js](https://nodejs.org/) preferably installed with [NVM](https://github.com/creationix/nvm) to take advantage of `.nvmrc` version management.
- [Yarn](https://yarnpkg.com/)

## Setup
With the dependencies installed run the following commands in the project root directory to start the application in development mode:

```
$ yarn install
```
This installs the required node dependencies.
> If there is an error during the installation of an `eslint` package, see [Linting](#Linting)

```
$ yarn run dev
```
This starts a webpack development server with hot module reloading. This builds a `bundle.js` file containing all the transpiled ES6 from `/app` and serves it at `localhost:3000/dist/bundle.js`. Due to hot module reloading webpack will attempt to rebuild the bundle and apply changes made in the codebase. However, sometimes a full reload is required, this is displayed in the console.


## Testing
`$ yarn test`

COMING SOON

## Linting
`$ yarn run lint`

ESLint is using the default [AirBnB JavaScript config](https://github.com/airbnb/javascript) to lint all JavaScript files.
