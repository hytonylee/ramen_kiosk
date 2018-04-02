import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import { Menu } from '../lib/requests';
import Order from './Order';
import { Card, CardImg, CardText, CardBody,CardHeader,
  CardTitle, CardSubtitle, Button, Container, Media, Row, Col} from 'reactstrap';
import "../css/style.scss";
import { Link } from "react-router-dom";


class ItemPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[],
      orders: []
    }
    this.addOrder = this.addOrder.bind(this);
  }


  addOrder= (key) =>{
    event.preventDefault();
    console.log(this.props.data);

    console.log('button is click',key)

    const order = { ...this.state.order};
    const itemId = event.currentTarget.id;
    // console.log(event)
    // console.log(itemId)

    order.event = order.event +1 || 1;



  }


  componentDidMount() {
    const menuId = this.props.match.params.menuId;
    Menu
     .one(menuId)
     .then(
       menus => {
         // console.log("menus", menus.items)
         this.setState({
           items: menus.items
         })
       }
     )
  }



  render(){
    const { items } = this.state
    console.log("items", items)
    // console.log(items)
    return (
      <main className="ItemPicker">
        <Row>
          <Col xs="2">
            <LeftMenu />
          </Col>
          <Col>
            <div className="item-container">
              {
                items && items.map(
                  item =>
                    <Container key={item.id} className="items-card" >
                      <Card>
                        <CardHeader className="CardHeader">
                          <CardTitle className="CardTitle">{item.item_name}</CardTitle>
                        </CardHeader>
                        <Row>

                            <Col sm="3">
                              <CardImg src={item.image.large.url} alt="Card image cap" />
                            </Col>
                            <Col sm="9">

                                <CardText className="items-description">{item.item_description}</CardText>
                                <CardText className="items-description">$ {item.item_price}

                                  <Button id={item.id} onClick={this.addOrder}>Click here</Button>
                                </CardText>
                            </Col>
                        </Row>
                      </Card>
                    </Container>
                )
              }
            </div>
          </Col>
          <Col xs="3">
            <Order
              items={this.state.items}
              order={this.state.order}
              />
          </Col>
        </Row>
      </main>
    )
  }
}

export default ItemPicker;
