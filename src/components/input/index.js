import PropTypes from 'prop-types'
import * as S from './styles'
const Input = ({ name, placeholder, amount, onChange }) => {
  return (
    <S.Label htmlFor={name}>
      {name}
      <S.InputText
        placeholder={placeholder}
        value={amount}
        onChange={onChange}
        id={name}
      />
    </S.Label>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  amount: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input
