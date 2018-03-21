import React, { Component } from 'react';
import { Menu } from '../lib/requests';
import "../css/style.css";


class MenuPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus:[],
    }
  }

  componentDidMount() {
    Menu
     .all()
     .then(
       menus => {
         this.setState({
           menus: menus
         })
       }
     )
  }


  render(){
    const { menus } = this.state
    return (
      <main className="MenuPicker">
        <div className="container">
          <h2>Menu</h2>
          <div>
            {
              menus.map(
                menu =>
                <div key={menu.id}>{menu.title}</div>
              )
            }
          </div>
        </div>
      </main>
    )
  }
}

export default MenuPicker;
