import React from 'react';
import { Episode } from './episode';
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

  it('should call playEpisode when the play is clicked', function() {
    let playEpisode = jest.fn();
    let wrapper = shallow(<Episode
                          episode={episode}
                          playEpisode={playEpisode}/>);

    wrapper.find('.play-episode').simulate('click');

    expect(playEpisode).toHaveBeenCalledWith(episode);
  });
});
