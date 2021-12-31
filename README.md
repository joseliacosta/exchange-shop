<div align="center">
  <h1> 🏦 Exchange shop <h1>
</div>

[![Netlify Status](https://api.netlify.com/api/v1/badges/745f3515-ec5f-42a9-b0fa-333039e4612b/deploy-status)](https://app.netlify.com/sites/exchange-shop-poc/deploys)

### The Problem

Exchange money could be overwhelming. A lot of countries, currencies and also
too many services on the web, omg, how can we choose one?

### The solution

So, welcome to **_Exchange Shop_**! You can convert any currency and check the
rate with this humble website!

Consuming [Exchange Rate API](https://exchangerate.host/), **_Exchange Shop_**
calculate for you an amount value based on daily rates! But attention: this
_MVP(minimum viable product)_ version receive only integer numbers.

### Requirements

To run in your machine:

- NodeJS > v12

### Instalation

```
git clone https://github.com/joseliacosta/exchange-shop.git

cd exchange-shop

```

You can install project dependencies using [Yarn](https://classic.yarnpkg.com/)

```
yarn install
```

Or, if you prefer, [npm](https://www.npmjs.com/)

```
npm install
```

### Running the project locally

To serve the project locally:

```
yarn start
```

OR

```
npm start
```

### Running the tests:

Run:

```
yarn test
```

### Building the project

Run:

```
yarn build
```

OR

```
npm build
```

The builded content will be available on `build/` directory

### Future of this project

As you notice, it is a MVP version. There is a lot of working to do, for
example:

#### Features:

-[] Ability to perform multiple conversions at the same time
-[] Option to select a different date for the conversion rate
-[] Bidirectional conversion (user can input either source or target amount)
-[] Show historical rates evolution (e.g. with chart) Tech debts:

#### Tech Debts:

- [ ] Raise test coverage
- [ ] Replace class component to React Hooks
- [ ] Mask to format amount input as currency
- [ ] Show symbols of currencies on converted value format (e.g. €, £)

### Issues
Looking to contribute? I will be very happy to see the [First Issue](https://github.com/joseliacosta/exchange-shop/issues)

