import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Belows are pages components
import Header from './Header';
import MenuPicker from './MenuPicker';
import ItemPicker from './ItemPicker';
import PageNotFound from './PageNotFound';
import LeftMenu from './LeftMenu';
import Item from './Item';



class App extends Component {
  state ={
    order: {}
  }

  // addOrder(item) {
  //   this.setState = state => ({
  //   item:
  //   [
  //     id: item.id,
  //     name: item_name,
  //     price: item_price
  //   ]
  //   })
  // }


  render() {
    return (
      <Router basename='/patrons'>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={MenuPicker} />
            <Route exact path="/:menuId/items" component={ItemPicker} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
