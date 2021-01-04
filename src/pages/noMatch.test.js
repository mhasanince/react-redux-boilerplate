import React from 'react'
import { shallow } from 'enzyme'
import NoMatchPage from './noMatch.page'

describe('HomePage Render Test', () => {
  it('renders without crashing', () => {
    shallow(<NoMatchPage />)
  })

  it('renders No Match text', () => {
    const wrapper = shallow(<NoMatchPage />)
    const header = <h1>No Match</h1>
    expect(wrapper.contains(header)).toEqual(true)
  })
})
