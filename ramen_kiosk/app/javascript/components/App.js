import React from 'react';
import Header from './Header'
import MenuPicker from './MenuPicker';



class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Header />
          <MenuPicker />
        </div>
    )
  }
}

export default App;
