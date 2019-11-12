import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  test('Renders without error', () => {
    render(<App />)
  })

  test('Click on "+" button should increment the count', () => {
    const { getByText, debug, getByTestId } = render(<App />)
    const plusButton = getByText('+')
    const count = getByTestId('count')
    expect(count.textContent).toEqual('0')
    fireEvent.click(plusButton)
    expect(count.textContent).toEqual('1')
  })

  test('Click on "-" button should decrement the count', () => {
    const { getByText, debug, getByTestId } = render(<App />)
    const minusButton = getByText('-')
    const count = getByTestId('count')
    expect(count.textContent).toEqual('0')
    fireEvent.click(minusButton)
    expect(count.textContent).toEqual('-1')
  })
})
