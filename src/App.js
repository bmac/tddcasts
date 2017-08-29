import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Index from './routes/index'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>Header</header>
          <main>
            <Route path="/" component={Index} exact />
          </main>
          <footer>footer</footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
