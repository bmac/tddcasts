import React from 'react';
import { IndexPage } from './home';
import { shallow } from 'enzyme'

const episodes = [
  {
    id: 1,
    title: '7.08- The Political Question',
    duration: '41 mins',
    published_date: 1504527073690,
    image: 'http://localhost:3000/images/b1ccb690-fd97-0130-c6ee-723c91aeae46.jpg',
    url: 'http://traffic.libsyn.com/revolutionspodcast/7.08-_The_Political_Question_Master.mp3',
    podcast: {
      title: 'Revolutions'
    },
    listeningProgress: {
      lastUpdated: 1,
      duration: 1,
      complete: false
    },
  },
  {
    id: 2,
    title: 'Episode 73: A Rampant Rewriter and Overexplainers',
    duration: '39 mins',
    published_date: 1504137600000,
    image: '/images/9b506b20-c78c-0133-2e8b-6dc413d6d41d.jpg',
    podcast: {
      title: 'Soft Skills Engineering'
    }
  },
  {
    id: 3,
    title: '081: Knocki with John Boyd',
    duration: '44 mins',
    published_date: 1504137620000,
    image: '/images/370cca60-819b-0131-8551-723c91aeae46.jpg',
    podcast: {
      title: 'The Frontside Podcast'
    }
  },
  {
    id: 4,
    title: 'Episode 68: The Tainted Well',
    duration: '33 mins',
    published_date: 1504527073690,
    image: '/images/5c0a2540-afba-0132-32cb-0b39892d38e0.jpg',
    podcast: {
      title: 'Lore'
    }
  },
]


describe('Index Page Test', function() {
  it('should render a list of episodes', function() {
    let wrapper = shallow(<IndexPage episodes={episodes} />)

    expect(wrapper.find('Episode').length).toBe(4)
  })

  it('should group episodes by day', function() {
    let wrapper = shallow(<IndexPage episodes={episodes} />)

    expect(wrapper.find('.episode-group').length).toBe(2)
    expect(wrapper.find('.episode-group .group-title').first().text()).toBe('2017-9-4')
    expect(wrapper.find('.episode-group .group-title').last().text()).toBe('2017-8-30')
  })
})
