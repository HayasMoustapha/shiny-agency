import { render, screen } from '@testing-library/react'
import Home from './'
import { ThemeProvider } from '../../utils/context'
import { MemoryRouter } from 'react-router'

describe('Home', () => {
  it('Should render without crash', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    )

    const title = screen.getByRole('heading', { name: /Recupérer vos besoins, on s'occupe du reste, avec les meilleurs talents/i })
    expect(title).toBeInTheDocument()
  })
})
