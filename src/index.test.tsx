import React from 'react'
import renderer from 'react-test-renderer'
import IconsPNG from './IconsPNG'
import { SocialButtons } from './index'

describe('SocialButtons', () => {
  it('is truthy', () => {
    expect(SocialButtons).toBeTruthy()
  })
})

it('IconsPNG renders correctly', () => {
  const tree = renderer
    .create(
      <IconsPNG
        name='facebook'
        height='50'
        padding='10'
        link='http://facebook.com'
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
