import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './routes/home/home'
import AudioPlayer from './audio-player'
import { Provider } from 'react-redux'
import createStore from './create-store'

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
            <AudioPlayer />
            <footer>footer</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
