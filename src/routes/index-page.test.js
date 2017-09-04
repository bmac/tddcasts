import React from 'react';
import IndexPage from './index';
import { shallow } from 'enzyme'

describe('Index Page Test', function() {
  it('should render a list of episodes', function() {
    let wrapper = shallow(<IndexPage />)

    expect(wrapper.find('.episode').length).toBe(4)
  })

  it('should group episodes by day', function() {
    let wrapper = shallow(<IndexPage />)

    expect(wrapper.find('.episode-group').length).toBe(2)
    expect(wrapper.find('.episode-group .group-title').first().text()).toBe('9/4/2017')
    expect(wrapper.find('.episode-group .group-title').last().text()).toBe('8/30/2017')
  })
})
