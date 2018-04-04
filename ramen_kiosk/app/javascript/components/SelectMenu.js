import React, { Component } from 'react';
import ItemPicker from './ItemPicker';
import LeftMenu from './LeftMenu';
import Order from './Order';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,CardHeader,
  CardTitle, CardSubtitle, Button, Container, Media, Row, Col} from 'reactstrap';
import "../css/style.scss";
import { Link } from "react-router-dom";


class SelectMenu extends Component{
  render() {
    return (
      <main className="SelectMenu">
        <Row>
          <Col xs="2">
            <LeftMenu />

          </Col>
          <Col>
            <ItemPicker />
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


export default SelectMenu;
