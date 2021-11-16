# pd-sa-devops-web

PD Skills Assessment: DevOps | Web

## Running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

## Building for production and development

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

The build artifact can be found at `./build`

## Building static assets

All static assets in the `public` directory will be built included in the build artifact.

## Considerations

The application requires an environment variable bet set at build time:

- `DYNAMIC_NAME`.
