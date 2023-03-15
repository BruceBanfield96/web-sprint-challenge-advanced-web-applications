import React from 'react';
import Spinner from './Spinner'
import { render } from '@testing-library/react'

// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
test('sanity', () => {
  expect(true).toBe(true)
})

test('To check to see if spinner does not render', () => {
  render(<Spinner on={false} />)
})

test('To check to see if the spinner renders to the screen', () => {
  render(<Spinner on={true} />)
})
