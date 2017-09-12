import React from 'react';
import Episode from './episode';
import { shallow } from 'enzyme'
import td from 'testdouble'

describe('<Episode>', function() {
  let episode = {
    id: 1,
    title: 'Episode Title',
    duration: 2450,
    publishedDate: 1504527073690,
    image: '/images/b1ccb690-fd97-0130-c6ee-723c91aeae46.jpg',
    podcastTitle: 'Revolutions',
  };

  it('should render an episode', function() {
    let wrapper = shallow(<Episode episode={episode}/>)
    expect(wrapper.find('.episode-title').text()).toBe('Episode Title')
    expect(wrapper.find('.episode-duration').text()).toBe('41 mins')
    expect(wrapper.find('.podcast-title').text()).toBe('Revolutions')
  })

  it('should call playEpisode when the play button is clicked', function() {
    const playEpisode = td.function()
    let wrapper = shallow(<Episode episode={episode} playEpisode={playEpisode}/>)

    wrapper.find('.play-episode').simulate('click')

    td.verify(playEpisode(episode))
    })
})
