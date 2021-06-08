import { render, screen } from '@testing-library/react'
import Main from '.'

describe('Main Component', () => {
  it('should render a main title', () => {
    render(<Main />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
