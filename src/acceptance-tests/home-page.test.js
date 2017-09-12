import React from 'react';
import App from '../App';
import { mount } from 'enzyme'
import fetch from 'fetch-vcr'
window.fetch = fetch

// reset()
// setup()
// visit()
// pauseForPromise()

const visit = (location = '/') => {
  let wrapper = mount(<App />)
  return new Promise(resolve => {
    setTimeout(resolve, 10)
  }).then(() => wrapper)
}

describe('Acceptance Test Home page', function() {

  it('should render a list of recent episodes', async function() {

    let page = await visit('/')
    expect(page.find('.episode').length).toBe(4)

    let episode = page.find('.episode').first()

    expect(episode.find('.episode-title').text()).toBe('7.08- The Political Question')
    expect(episode.find('.podcast-title').text()).toBe('Revolutions')
    expect(episode.find('.episode-duration').text()).toBe('41 mins')
  })

  it('should play an episode when clicked', async function() {

    let page = await visit('/')
    page.find('.play-episode').first().simulate('click')

    let audioPlayer = page.find('.audio-player').first()

    expect(audioPlayer.find('.episode-title').text()).toBe('7.08- The Political Question')
    expect(audioPlayer.find('.pause-button').text()).toBe('Pause')
  })
})
