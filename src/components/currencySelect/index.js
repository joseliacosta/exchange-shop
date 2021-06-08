import * as S from './styles'
import PropTypes from 'prop-types'
const CurrencySelect = ({ name, currencies, onChange }) => {
  return (
    <S.Label htmlFor={name}>
      {name}
      <S.Select id={name} onChange={onChange}>
        <option>Select a currency option</option>
        {currencies.map(currency => (
          <option value={currency.code} key={currency.code}>
            {currency.description}
          </option>
        ))}
      </S.Select>
    </S.Label>
  )
}

export default CurrencySelect
CurrencySelect.propTypes = {
  name: PropTypes.string.isRequired,
  currencies: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}
