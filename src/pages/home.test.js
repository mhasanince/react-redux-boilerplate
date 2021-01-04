import React from 'react'
import { shallow } from 'enzyme'
import HomePage from './home.page'

describe('HomePage Render Test', () => {
  it('renders without crashing', () => {
    shallow(<HomePage />)
  })

  it('renders Home Page header', () => {
    const wrapper = shallow(<HomePage />)
    const header = <h1>Home Page</h1>
    expect(wrapper.contains(header)).toEqual(true)
  })
})
