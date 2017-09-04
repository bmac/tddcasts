import React from 'react';
import AudioPlayer from './audio-player';
import { shallow } from 'enzyme'
import td from 'testdouble'

describe('<AudioPlayer>', function() {
  it('should not render if there is no episode', function() {
    let wrapper = shallow(<AudioPlayer />)

    expect(wrapper.html()).toBe(null)
  })

  it('should render if there is an episode', function() {
    let episode = {
      title: 'Episode Title',
      podcast: {
        title: 'Revolutions'
      }
    }
    let wrapper = shallow(<AudioPlayer episode={episode} />)

    expect(wrapper.find('.episode-title').text()).toBe('Episode Title')
    expect(wrapper.find('.podcast-title').text()).toBe('Revolutions')
  })

  it('should render a play button', function() {
    let episode = {
      title: 'Episode Title',
      podcast: {
        title: 'Revolutions'
      }
    }
    let wrapper = shallow(<AudioPlayer episode={episode} />)

    expect(wrapper.find('.play-button').length).toBe(1)
  })

  it('should display a pause button after play is clicked', function() {
    let episode = {
      title: 'Episode Title',
      podcast: {
        title: 'Revolutions'
      }
    }
    let wrapper = shallow(<AudioPlayer episode={episode} />)

    wrapper.find('.play-button').simulate('click')
    
    expect(wrapper.find('.pause-button').length).toBe(1)
  })

  it('should toggle the play pause state', function() {
    let episode = {
      title: 'Episode Title',
      podcast: {
        title: 'Revolutions'
      }
    }
    let wrapper = shallow(<AudioPlayer episode={episode} />)

    wrapper.find('.play-button').simulate('click')
    
    expect(wrapper.find('.play-button').length).toBe(0)
    expect(wrapper.find('.pause-button').length).toBe(1)

    wrapper.find('.pause-button').simulate('click')
    
    expect(wrapper.find('.play-button').length).toBe(1)
    expect(wrapper.find('.pause-button').length).toBe(0)
  })

  it('should update the episode progress when paused', function() {
    let episode = {
      title: 'Episode Title',
      podcast: {
        title: 'Revolutions'
      }
    }
    let updateProgress = td.function()
    let wrapper = shallow(<AudioPlayer episode={episode} updateProgress={updateProgress} defaultStartTime={100}/>)

    wrapper.find('.play-button').simulate('click')
    wrapper.find('.pause-button').simulate('click')

    td.verify(updateProgress(100))
  })
})
