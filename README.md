# MeLi's Front End Challenge

A simple UI to search and view items from Mercado Libre. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). As the state of the app is pretty simple Redux is not being used.

## Installation

Install NPM dependencies

```sh
$ npm install
```

Create a .env file by copying the contents on .env-sample. Possible environment values:

| Variable       | Description                              | Default value                 |
| -------------- | ---------------------------------------- | ----------------------------- |
| PORT           | Port on which the API should run         | 80                            |
| LOG_LEVEL      | Log level for Bunyan                     | warn                          |
| MELI_API       | Host for the MeLi's API                  | https://api.mercadolibre.com/ |
| CORS_WHITELIST | Comma delimited hostnames to enable CORS | \*                            |

Start the app

```sh
$ npm start
```

## TODO

To improve SEO the architecture should be modified from CSR to SSR.
