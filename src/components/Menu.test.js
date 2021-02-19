import { fireEvent, render } from '@testing-library/react'
import Menu from 'components/Menu'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'

const renderWithRouter = (component) => {
    const history = createMemoryHistory()
    return {
        ...render(
            <Router history={history}>
                {component}
            </Router>)
    }
}

it('should render counter page', () => {
    const { container, getByTestId } = renderWithRouter(<Menu />)
    const navbar = getByTestId('navbar')
    const link = getByTestId('counter-page-link')

    expect(container.innerHTML).toMatch('Counter page')
    expect(navbar).toContainElement(link)
})

it('should navigate to page two', () => {
    const { container, getByTestId } = renderWithRouter(<Menu />)

    const navbar = getByTestId('navbar')
    const link = getByTestId('page-two-link')
    fireEvent.click(getByTestId('page-two-link'))

    expect(container.innerHTML).toMatch('Page two')
    expect(navbar).toContainElement(link)
})