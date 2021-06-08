import * as S from './styles'

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
