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


  // addOrder = key => {
  //   console.log('button is click',key)
  //   const order = { ...this.state.order};
  //   order[key] = order[key] +1 || 1;
  //   this.setState({
  //     order: order
  //   })
  // }

  addOrder(item) {
    this.setState(state => ({
      order: [
        ...this.state.order,
        {
          id: item.id,
          name: item.item_name,
          price: item.item_price
        }
      ],
    }))


    console.log('button is click',item)
    // const order = { ...this.state.order};
    // order[item] = order[item] +1 || 1;
    // console.log(order);
    // this.setState({
    //   order: order
    // })
  }

  // nextId() {
	// 	this.uniqueId = this.uniqueId || 0
	// 	return this.uniqueId++
	// }

  // addOrder(item) {
  //   console.log('button is click',item)
  //   const order = { ...this.state.order};
  //   order[item] = order[item] +1 || 1;
  //   console.log(order);
  //   this.setState({
  //     order: order
  //   })
  // }

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

  handleClick(e, data) {
    this.addOrder(data);
    console.log(data.id)
    console.log(data.item_name)
    console.log(data.item_price)
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
                          <CardTitle className="CardTitle">
                            <Row>
                            <Col sm="3">{item.item_name}</Col>
                            <Col sm="9">$ {item.item_price}</Col>
                            </Row>
                         </CardTitle>
                        </CardHeader>
                        <a id={item.id} value={item.id} onClick={((e) => this.handleClick(e, item))}>
                          <Row className="item-content">
                            <Col sm="3">
                              <div className="image-placeholder">
                                <CardImg className="card-image" src={item.image.large.url} alt="Card image cap" />
                              </div>
                            </Col>
                            <Col sm="9">

                              <CardText className="items-description">{item.item_description}</CardText>
                            </Col>
                          </Row>
                          <div className="overlay">
                            <div className="text">Add Item to Order</div>
                          </div>
                        </a>
                      </Card>
                    </Container>
                )
              }
            </div>
          </Col>
          <Col xs="3">
            <Order
              className="order-list"
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
