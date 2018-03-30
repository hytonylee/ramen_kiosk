import React, { Component } from 'react';
import { Menu } from '../lib/requests';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';
import "../css/style.scss";
import { Link } from "react-router-dom";


class MenuPicker extends Component {
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
      <main className="MenuPicker">
          <div className="menu-container">
            {
              menus && menus.map(
                menu =>
                  <Container key={menu.id} className="menu-card">
                    <Card>
                      <CardImg top width="30%" src={menu.image.large.url} alt="Card image cap" />

                      <CardBody>

                        <CardTitle>{menu.title}</CardTitle>
                        <CardText className="menu-description">{menu.description}</CardText>
                        <Link to={menu.id+"/items"}>
                          <Button id={menu.id} onClick={this.selectMenu}>Select Item</Button>
                        </Link>

                      </CardBody>
                    </Card>
                  </Container>
              )
            }
        </div>
      </main>
    )
  }
}

export default MenuPicker;
