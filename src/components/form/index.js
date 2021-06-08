import * as S from './styles'
import PropTypes from 'prop-types'

const Form = ({ onSubmit, children }) => {
  return <S.Form onSubmit={onSubmit}>{children}</S.Form>
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Form
