import { cleanup, fireEvent, render } from '@testing-library/react'
import PageCounter from 'pages/PageCounter'
import React from 'react'

afterEach(cleanup)

it('counter state should be equal to 0', () => {
    const { getByTestId } = render(<PageCounter />)

    expect(getByTestId('counter')).toHaveTextContent(0)
})

it('add button should be enable', () => {
    const { getByTestId } = render(<PageCounter />)

    expect(getByTestId('add-button')).not.toHaveAttribute('disable')
})

it('subtract button should be disable', () => {
    const { getByTestId } = render(<PageCounter />)

    expect(getByTestId('subtract-button')).toBeDisabled()
})

it('add button should increments 1', () => {
    const { getByTestId } = render(<PageCounter />)

    fireEvent.click(getByTestId('add-button'))

    expect(getByTestId('counter')).toHaveTextContent('1')
})

it('subtract button should be enable when counter > 0', () => {
    const { getByTestId } = render(<PageCounter />)

    fireEvent.click(getByTestId('add-button'))

    expect(getByTestId('subtract-button')).toBeEnabled()
})

it('subtrac button should be disbale when counter = 0', () => {
    const { getByTestId } = render(<PageCounter />)

    fireEvent.click(getByTestId('add-button'))
    fireEvent.click(getByTestId('subtract-button'))

    expect(getByTestId('subtract-button')).toBeDisabled()
})