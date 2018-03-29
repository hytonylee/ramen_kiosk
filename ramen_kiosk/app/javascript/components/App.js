import React, { Component } from 'react';

// Belows are pages components
import Header from './Header';
import MenuPicker from './MenuPicker';
import ItemPicker from './ItemPicker';





class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <MenuPicker />
          <ItemPicker />

        </div>
    )
  }
}

export default App;
