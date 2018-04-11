import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Menu } from "../lib/requests";

// Belows are pages components
import Header from "./Header";
import MenuPicker from "./MenuPicker";
import ItemPicker from "./ItemPicker";
import PageNotFound from "./PageNotFound";
import LeftMenu from "./LeftMenu";
import ReviewOrder from "./ReviewOrder";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {},
      menus: [],
      items: []
    };
    // this.selectMenu = this.selectMenu.bind(this);
    this.checkOut = this.checkOut.bind(this);
  }

  checkOut(order) {
    this.setState({ order: order });
  }

  // componentDidMount() {
  // const menuId = 21; //need to get params from address bar on load
  // Menu.all().then(menus => {
  //   this.setState({
  //     menus: menus.filter(menu => menu.display)
  //   });
  // });

  // Menu.one(menuId).then(menus => {
  //   this.setState({
  //     items: menus.items
  //   });
  // });
  // }

  // selectMenu(event) {
  //   const menuId = event.currentTarget.getAttribute("index");
  //   // Menu.all().then(menus => {
  //   //   this.setState({
  //   //     menus: menus.filter(menu => menu.display)
  //   //   });
  //   // });
  //
  //   Menu.one(menuId).then(menus => {
  //     this.setState({
  //       items: menus.items
  //     });
  //   });
  // }

  render() {
    return (
      <Router basename="/patrons">
        <div className="App">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <MenuPicker
                  {...props}
                  menus={this.state.menus}
                  selectMenu={this.selectMenu}
                />
              )}
            />
            <Route
              exact
              path="/:menuId/items"
              render={props => (
                <ItemPicker key={props.match.params.menuId}
                  checkOut={this.checkOut}
                   {...props} />
              )}
            />
            <Route
              path="/review-order"
              className="review-order"
              render={props => (
                <ReviewOrder key={this.props.id}
                  items={this.state.items}
                  order={this.state.order}
                  {...this.props}
/>
              )}
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
