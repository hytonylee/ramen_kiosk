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
      order:[]
    }
    this.addOrder = this.addOrder.bind(this);
  }


  addOrder = key =>{
    console.log('button is click',key)
    const order = { ...this.state.order};
    order[key] = order[key] +1 || 1;
    this.setState({
      order: order
    })
  }


  componentDidMount() {
    const menuId = this.props.match.params.menuId;
    Menu
     .one(menuId)
     .then(
       menus => {
         console.log("menus", menus.items)
         this.setState({
           items: menus.items
         })
       }
     )
  }



  render(){
    const { items } = this.state
    // console.log("items", items)

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

                                  <Button id={item.id} onClick={() => addOrder(key)}>Click here</Button>
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
