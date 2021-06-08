const getRates = baseCurrency => {
  return fetch(`https://api.exchangerate.host/latest?base=${baseCurrency}`)
    .then(response => response.json())
    .then(data => {
      if (!data) {
        throw new Error(data.message)
      }
      return data.rates
    })
}

const getSymbols = () => {
  return fetch(`https://api.exchangerate.host/symbols`)
    .then(response => response.json())
    .then(data => {
      if (!data) {
        throw new Error(data.message)
      }
      return Object.values(data.symbols).sort(compare)
    })
}
const compare = (currencyA, currencyB) => {
  if (currencyA.description < currencyB.description) {
    return -1
  }
  if (currencyA.description > currencyB.description) {
    return 1
  }
  return 0
}

export {getSymbols, getRates}
