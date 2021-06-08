import React from 'react'
import exchange from './services/exchange/exchange'
import { getSymbols, getRates } from './services/fetchApi/fetchAPI'
import Main from './components/main'
import CurrencySelector from './components/currencySelector'
import Input from './components/input'
import Form from './components/form'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currencies: [],
      rates: {},
      base: '',
      target: '',
      amount: '',
      conversion: '',
      error: '',
    }
    this.handleBaseCurrency = this.handleBaseCurrency.bind(this)
    this.handleTargetCurrency = this.handleTargetCurrency.bind(this)
    this.handleAmount = this.handleAmount.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    getSymbols().then(data => this.setState({ currencies: data }))
  }

  handleBaseCurrency(event) {
    const selectedOption = event.target.value

    this.setState({ base: selectedOption, conversion: '' })
    getRates(selectedOption)
      .then(data => this.setState({ rates: data }))
      .catch(error => {
        console.warn('Error fetching rates: ', error)
        this.setState({
          error: `There was an error fetching the repositories.`,
        })
      })
  }

  handleTargetCurrency(event) {
    const selectedOption = event.target.value
    this.setState({ target: selectedOption, conversion: '' })
  }

  handleAmount(event) {
    this.setState({ amount: event.target.value.replace(/\D/g, '') })
  }
  handleSubmit(event) {
    event.preventDefault()

    this.setState({
      conversion: exchange(
        this.state.rates[this.state.target],
        this.state.amount,
      ),
    })
  }

  render() {
    const { currencies, rates, base, target, amount, conversion } = this.state
    return (
      <Main>
        <Form onSubmit={this.handleSubmit}>
          <Input
            name={'Amount'}
            placeholder={'Type the amount'}
            amount={amount}
            onChange={this.handleAmount}
          />

          <CurrencySelector
            name={'Select a currency base'}
            onChange={this.handleBaseCurrency}
            currencies={currencies}
          />

          <CurrencySelector
            name={'Select a currency destiny'}
            onChange={this.handleTargetCurrency}
            currencies={currencies}
          />
          <button disabled={!amount || !base || !target}>Lets Convert!</button>
        </Form>
        {conversion && (
          <div>
            <h3>
              {`The rate of this transaction is: ${rates[target].toFixed(
                2,
              )} ${base}`}
            </h3>
            <h3>{`${amount} ${base} is ${conversion} ${target}`}</h3>
          </div>
        )}
      </Main>
    )
  }
}
