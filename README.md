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

## Module federation issue

There is a function `getNextId` shared through the host API.
This function increments a and returns a "global" variable.
However, host and remote app receives each own unique instance of this variable.

The current output of host app is:

```
Next ID: 1
Next ID: 2
Remote component Next ID: 1
```

but should be:

```
Next ID: 1
Next ID: 2
Remote component Next ID: 3
```
