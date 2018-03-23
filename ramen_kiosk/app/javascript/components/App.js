import React from 'react';

// Belows are pages components
import Header from './Header';
import Patron from './Patron';
// import Server from './Server';



class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Patron />
          {/* <Server /> */}

        </div>
    )
  }
}

export default App;
