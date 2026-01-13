# Zorgplanning

## Serve dev application

To run the dev server for the Zorgplanning app, use following command and navigate to `http://localhost:4200`

```sh
npx nx serve zorgplanning
```

## Run tasks

To create a production bundle:

```sh
npx nx build zorgplanning
```

To see all available targets to run for a project, run:

```sh
npx nx show project zorgplanning
```

## Testing

The testing setup is built with Jest in combination with Spectator.

Currently only the following features unit tests:

- `feature-personal-information-card`
- `feature-dashboard`
- `feature-client-detail`
- `ui-navbar`
- `data-access`
- `zorgplanning`

The following components need to be tested more thouroughly, but was not possible due to time constraints:

- `feature-appointment-table`
- `feature-client-overview`
- `feature-dashboard`
- `feature-shell`
- `ui-form-field`

Run the `nx test ${project/library}` to run the unit tests

```sh
npx nx test
```
