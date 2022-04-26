import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import App from './App'

const renderComponent = (Component) =>
  render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
  )

describe('App', () => {
  test('full app rendering/page elements', async () => {
    renderComponent(App)

    expect(screen.getByText(/MyApp/)).toBeInTheDocument()
    expect(screen.getAllByText(/Home/)).toHaveLength(2)
    expect(screen.getAllByText(/Teams/)).toHaveLength(1)
    expect(screen.getAllByText(/About/)).toHaveLength(1)
  })

  test('teams navigation clicks', async () => {
    renderComponent(App)

    const teamsLink = screen.getByText('Teams').closest('a')
    expect(teamsLink).toHaveAttribute('href', '/teams/new')
    fireEvent.click(teamsLink)
    expect(window.location.pathname).toEqual('/teams/new')
    const teamIDInput = screen.getByLabelText(/Team ID/)
    const submitButton = screen.getByText(/Submit/)
    fireEvent.change(teamIDInput, { target: { value: 123 } })
    expect(teamIDInput).toHaveValue(123)
    fireEvent.click(submitButton)
    expect(window.location.pathname).toEqual('/teams/123')
    expect(screen.getByText(/Team 123/)).toBeInTheDocument()
  })
})
