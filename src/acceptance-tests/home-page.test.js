import React from 'react';
import App from '../App';
import { mount } from 'enzyme'

const visit = (location = '/') => {
  let wrapper = mount(<App />)
  return Promise.resolve(wrapper)
}

describe('Acceptance Test Home page', function() {
  it('it should render a list of podcast', () => {

    return visit('/').then(wrapper => {
      expect(wrapper.find('main').text()).toBe('list all of the podcasts')
    })
  });
})
