import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './routes/home/home'
import AudioPlayer from './audio-player'
import { Provider } from 'react-redux'
import createStore from './create-store'

let episode = {
  id: 1,
  title: '7.08- The Political Question',
  duration: '41 mins',
  publishedDate: 1504527073690,
  image: '/images/b1ccb690-fd97-0130-c6ee-723c91aeae46.jpg',
  url: 'http://traffic.libsyn.com/revolutionspodcast/7.08-_The_Political_Question_Master.mp3',
  podcast: {
    title: 'Revolutions'
  },
  listeningProgress: {
    lastUpdated: 1,
    duration: 1,
    complete: false
  },
}

const store = createStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header>Header</header>
            <main>
              <Route path="/" component={Home} exact />
            </main>
            <AudioPlayer episode={episode} />
            <footer>footer</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
