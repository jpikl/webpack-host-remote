# webpack-host-remote

A simple module federation demo with host/remote app.

## Structure

`host`

- Renders React component provided by `remote`.
- Exposes API for `remote`.

`remote`

- Uses API provided by `host`.
- Exposes React component for `host`.

## How to run

Start `host` at http://localhost:3000

```shell
cd host
npm install
npm start
```

Start `remote` at http://localhost:3001

```shell
cd remote
npm install
npm start
```
