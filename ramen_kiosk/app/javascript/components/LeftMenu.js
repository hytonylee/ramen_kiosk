import React, { Component } from 'react';
import { Menu } from '../lib/requests';
import { Card, CardHeader, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';
import "../css/style.scss";
import { Link } from "react-router-dom";


class LeftMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus:[],
    }
  }

  selectMenu(event) {
    const menuId = event.currentTarget.id;
  }

  componentDidMount() {
    Menu
     .all()
     .then(
       menus => {
         this.setState({
           menus: menus.filter(menu => menu.display)
         })
       }
     )
  }


  render(){
    const { menus } = this.state
    return (
      <main className="LeftMenu">
            {
              menus && menus.map(
                menu =>
                    <Card key={menu.id} className="left-menu">
                      <CardHeader>{menu.title}</CardHeader>
                      <CardImg top width="100%" src={menu.image.large.url} alt="Card image cap" />
                    </Card>
              )
            }
      </main>
    )
  }
}

export default LeftMenu;
