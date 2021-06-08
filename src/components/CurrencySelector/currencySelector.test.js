import { fireEvent, render, screen } from '@testing-library/react'
import CurrencySelector from '.'

describe('CurrencySelector Component', () => {
  it('calls onChange function from parent', () => {
    const onChangeMock = jest.fn()
    const currenciesMock = [
      {
        description: 'Brazilian Real',
        code: 'BRL',
      },
      {
        description: 'Euro',
        code: 'EUR',
      },
      {
        description: 'United States Dollar',
        code: 'USD',
      },
    ]
    render(
      <CurrencySelector
        name="Currency Base"
        currencies={currenciesMock}
        onChange={onChangeMock}
      />,
    )
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'USD' },
    })
    expect(onChangeMock).toHaveBeenCalled()
  })
})
