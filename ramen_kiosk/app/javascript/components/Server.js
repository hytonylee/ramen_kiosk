import React, { Component } from 'react';
import { Menu } from '../lib/requests';
import {
  Container, Row, Col
  } from 'reactstrap';
import "../css/style.scss";
import MenuIndex from './MenuIndex';
import { NavLink } from 'react-router-dom';
import NavMenu from './NavMenu';


class Server extends Component {
  render(){
    return (
      <main className="Server">

          <Row>
            <Col xs="10" className="Menu-Wrapper">

              <MenuIndex />

            </Col>
            <Col xs="2" className="Nav-Selection">
                <NavMenu />
            </Col>
          </Row>

      </main>
    )
  }
}

export default Server;
