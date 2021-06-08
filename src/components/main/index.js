import * as S from './styles'
import PropTypes from 'prop-types'

const Main = ({ children }) => {
  return (
    <S.Container>
      <S.Header>
        <h1>🏦 Welcome to Exchange shop!</h1>
      </S.Header>
      {children}
    </S.Container>
  )
}

export default Main
Main.propTypes = {
  children: PropTypes.element.optional,
}
