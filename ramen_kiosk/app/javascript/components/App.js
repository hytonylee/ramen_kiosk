import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Menu } from '../lib/requests';

// Belows are pages components
import Header from './Header';
import MenuPicker from './MenuPicker';
import ItemPicker from './ItemPicker';
import PageNotFound from './PageNotFound';
import LeftMenu from './LeftMenu';


class App extends Component {

  constructor (props){
    super(props);
    this.state = {
      order: {},
      menus: [],
      items: [],
    }
    this.selectMenu = this.selectMenu.bind(this);
  }

  componentDidMount() {
    const menuId = 21; //need to get params from address bar on load
    Menu
     .all()
     .then(
       menus => {
         this.setState({
           menus: menus.filter(menu => menu.display)
         })
       }
     )

     Menu
      .one(menuId)
      .then(
        menus => {
          this.setState({
            items: menus.items
          })
        }
      )
  }



  selectMenu(event) {
    const menuId = event.currentTarget.getAttribute('index');
    console.log(menuId);
    Menu
     .all()
     .then(
       menus => {
         this.setState({
           menus: menus.filter(menu => menu.display)
         })
       }
     )

     Menu
      .one(menuId)
      .then(
        menus => {
          this.setState({
            items: menus.items
          })
        }
      )
  }

  render() {
    return (
      <Router basename='/patrons'>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" render={(props) => <MenuPicker {...props} menus={this.state.menus} selectMenu={this.selectMenu}/>}/>
            <Route exact path="/:menuId/items" render={(props) => <ItemPicker {...props} items={this.state.items} selectMenu={this.selectMenu} menus={this.state.menus}/>}/>
            {/* <Route exact path="/:menuId/items" component={LeftMenu} /> */}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
