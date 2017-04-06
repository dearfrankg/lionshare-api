# Lionshare api

Lionshare is an open source project created by [Ben Jennings](https://twitter.com/benjennin_gs), [Jori Lallo](https://twitter.com/jorilallo) and [Maksim Stepanenko](https://twitter.com/maksim_s).

Lionshare is a simple macOS application that helps you track cryptocurrencies and
your portfolio.

The application consists of two parts, the api and the desktop app.

- Official [lionshare app](https://github.com/lionsharecapital)

- My Fork [lionshare-api](https://goo.gl/5SDuh5) and [lionshare-desktop](https://goo.gl/0QRnK9)


## Getting Started

### Requirements

mandatory

- `Redis` must me installed and running.

recommended

- install `pm2` globally `npm install -g pm2`


### Development

Provides live reaload while coding.

```shell
yarn
yarn run dev
```

### Production

Uses `pm2` for running production.

```shell
yarn
yarn start
```
