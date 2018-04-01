import React, { Component } from 'react';
import { Menu } from '../lib/requests';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Media, Table } from 'reactstrap';
import "../css/style.scss";
import { Link } from "react-router-dom";


class ItemPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[],
    }
  }

  componentDidMount() {
    const menuId = this.props.match.params.menuId;

    Menu
     .one(menuId)
     .then(
       menus => {
         console.log("menus", menus)
         this.setState({
           items: menus.items
         })
       }
     )
  }


  render(){
    const { items } = this.state
    return (
      <main className="ItemPicker">
          <div className="menu-container">
            {
              items && items.map(
                item =>
                  <Container key={item.id} className="items-card">
                    <Card>
                      <CardImg top width="30%" src={item.image.large.url} alt="Card image cap" />

                      <CardBody>

                        <CardTitle>{item.item_name}</CardTitle>
                        <CardText className="items-description">{item.item_description}</CardText>
                        <CardText className="items-description">{item.item_price}</CardText>
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

export default ItemPicker;
