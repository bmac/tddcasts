import React from 'react';
import App from '../App';
import { mount } from 'enzyme'

const visit = (location = '/') => {
  let wrapper = mount(<App />)
  return Promise.resolve(wrapper)
}

describe('Acceptance Test Home page', function() {
  it('should render a list of recent episodes', async function() {

    let wrapper = await visit('/')
    expect(wrapper.find('.episode').length).toBe(4)

    let episode = wrapper.find('.episode').first()

    expect(episode.find('.episode-title').text()).toBe('7.08- The Political Question')
    expect(episode.find('.podcast-title').text()).toBe('Revolutions')
    expect(episode.find('.episode-duration').text()).toBe('41 mins')
  })
})
