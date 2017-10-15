import React from 'react';
import { AudioPlayer } from './audio-player';
import { shallow } from 'enzyme'
import td from 'testdouble'

describe('<AudioPlayer>', function() {
  let fakeAudio, episode;

  beforeEach(function() {
    episode = {
      title: 'Episode Title',
      podcastTitle: 'Revolutions',
      url: 'https://www.s3.com/podcast-episode-download.mp3'
    }

    fakeAudio = {
      play: jest.fn(),
      pause: td.function(),
      currentTime: 100
    }
  })

  it('should not render if there is no episode', function() {
    let wrapper = shallow(<AudioPlayer />)

    expect(wrapper.html()).toBe(null)
  })

  it('should render if there is an episode', function() {
    let wrapper = shallow(<AudioPlayer episode={episode} />)

    expect(wrapper.find('.episode-title').text()).toBe('Episode Title')
    expect(wrapper.find('.podcast-title').text()).toBe('Revolutions')
  })

  it('should display a pause button after play is clicked', function() {
    let wrapper = shallow(<AudioPlayer episode={episode} />)

    wrapper.find('.play-button').simulate('click')

    expect(wrapper.find('.pause-button').length).toBe(1)
  })

  it('should play the audio element when played', function() {
    let fakeAudio = {
      play: jest.fn()
    }
    let wrapper = shallow(<AudioPlayer episode={episode} audio={fakeAudio}/>)

    wrapper.find('.play-button').simulate('click')

    expect(fakeAudio.play).toHaveBeenCalled()
  })
})


var lastTime = 0;
window.requestAnimationFrame = window.requestAnimationFrame || function(callback, element) {
  var currTime = new Date().getTime();
  var timeToCall = Math.max(0, 16 - (currTime - lastTime));
  var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                             timeToCall);
  lastTime = currTime + timeToCall;
  return id;
};
