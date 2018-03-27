import React, { Component } from 'react';

// Belows are pages components
import Header from './Header';
import Patron from './Patron';





class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Patron />

        </div>
    )
  }
}

export default App;
