import React, { Component } from 'react';
import { Menu } from '../lib/requests';
import { Card, CardHeader, CardTitle, CardImg, CardText, CardBody,
        Button, Container } from 'reactstrap';
import "../css/style.scss";
import { Link } from "react-router-dom";


class MenuPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus:[],
    }
    // console.log("MenuPicker", this.state);
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
    console.log({menus})
    return (
      <main className="MenuPicker">
          <div className="menu-container">
            {
              menus && menus.map(
                menu =>
                  <Container key={menu.id} className="menu-card">
                    <Link to={menu.id+"/items"} id={menu.id} onClick={this.props.selectMenu}>

                        <Card>
                          <CardHeader className="CardHeader">
                              <CardTitle className="CardTitle">{menu.title}</CardTitle>
                          </CardHeader>
                          <div className="image-placeholder">
                            <CardImg className="card-image" top width="30%" src={menu.image.large.url} alt="Card image cap" />
                          </div>
                          <div className="overlay">
                            <div className="text">Select Menu</div>
                          </div>
                          <CardBody>
                            <CardText className="menu-description">{menu.description}</CardText>
                          </CardBody>
                        </Card>
                  
                    </Link>
                  </Container>
              )
            }
        </div>
      </main>
    )
  }
}

export default MenuPicker;
