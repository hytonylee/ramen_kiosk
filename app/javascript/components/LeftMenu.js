import React, { Component } from 'react';
import { Menu } from '../lib/requests';
import { Card, CardHeader, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';
import "../css/style.scss";
import { Link } from "react-router-dom";


class LeftMenu extends Component {
  render(){
    const { menus } = this.props;

    return (
      <main className="LeftMenu">
            {
              menus && menus.map(
                menu =>
                  <Link key={menu.id} to={{pathname:`/${menu.id}/items`, menu: menu}}>
                  {/* <Link to={menu.id+"/items"} > */}
                    <div index={menu.id}>
                      <Card className="left-menu">
                        <CardHeader className="CardHeader">
                          <CardTitle className="CardTitle">{menu.title}</CardTitle>
                        </CardHeader>
                        <div className="image-placeholder">
                          <CardImg className="card-image" top width="100%" src={menu.image.large.url} alt="Card image cap" />
                        </div>

                      </Card>
                    </div>
                  </Link>
              )
            }
      </main>
    )
  }
}

export default LeftMenu;
