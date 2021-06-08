import styled from 'styled-components'

const Form = styled.form`
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  justify-content: space-between;
  input {
    &:last-child {
      margin-right: 0;
    }
  }
  @media screen and (min-width: 667px) {
    flex-direction: column;
    justify-content: space-between;
    button {
      margin-right: 6px;
    }
  }
`

const SubmitButton = styled.button`
  color: #ffffff;
  background: #0abf53;
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  height: 32px;
  padding: 4px 12px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background: #078f3e;
  }
`

export { Form, SubmitButton }
