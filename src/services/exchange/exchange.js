const exchange = (base, amount) => {
  return Number((base * amount).toFixed(2))
}

export default exchange
