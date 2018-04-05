import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import { Menu } from "../lib/requests";
import Order from "./Order";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Media,
  Row,
  Col
} from "reactstrap";
import "../css/style.scss";
import ReviewOrder from './ReviewOrder'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class ItemPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      order: []
    };
    this.addOrder = this.addOrder.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
  }

  addOrder(item) {
    this.setState(state => ({
      order: [
        ...this.state.order,
        {
          id: item.id,
          name: item.item_name,
          price: item.item_price
        }
      ]
    }));
  }

  removeOrder(index) {
    const order = this.state.order;
    for (let i = 0; i < order.length; i += 1) {
      order.splice(i, 1);
      }
    this.setState({order: order})
  }



  handleClick(e, data) {
    this.addOrder(data);
  }

  render() {
    const { items } = this.props;

    return (
      <main className="ItemPicker">
        <Row>
          <Col xs="2">
            <LeftMenu
              menus={this.props.menus}
              selectMenu={this.props.selectMenu}
            />
          </Col>
          <Col>
            <div className="item-container">
              {items &&
                items.map(item => (
                  <Container key={item.id} className="items-card">
                    <Card>
                      <CardHeader className="CardHeader">
                        <CardTitle className="CardTitle">
                          <Row>
                            <Col sm="3">{item.item_name}</Col>
                            <Col sm="9">$ {item.item_price}</Col>
                          </Row>
                        </CardTitle>
                      </CardHeader>
                      <a
                        id={item.id}
                        value={item.id}
                        onClick={e => this.handleClick(e, item)}
                      >
                        <Row className="item-content">
                          <Col sm="3">
                            <div className="image-placeholder">
                              <CardImg
                                className="card-image"
                                src={item.image.large.url}
                                alt="Card image cap"
                              />
                            </div>
                          </Col>
                          <Col sm="9">
                            <CardText className="items-description">
                              {item.item_description}
                            </CardText>
                          </Col>
                        </Row>
                        <div className="overlay">
                          <div className="text">Add Item to Order</div>
                        </div>
                      </a>
                    </Card>
                  </Container>
                ))}
            </div>
          </Col>
          <Col xs="3">
            <Switch>
              <Order
                className="order-list"
                items={this.state.items}
                order={this.state.order}
                removeOrder={this.removeOrder}
              />
              <ReviewOrder
                className="review-order"
                items={this.state.items}
                order={this.state.order}
              />
            </Switch>
          </Col>
        </Row>
      </main>
    );
  }
}

export default ItemPicker;
