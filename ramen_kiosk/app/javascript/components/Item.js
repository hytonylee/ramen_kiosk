import React, { Component } from 'react';
import { Menu } from '../lib/requests';
import { Card, CardImg, CardText, CardBody,CardHeader,
  CardTitle, CardSubtitle, Button, Container, Media, Row, Col} from 'reactstrap';
import "../css/style.scss";
import { Link } from "react-router-dom";


class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[],
      order:[]
    }
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
    console.log("items", items)
    console.log("obj key", )

    return (
      <main className="Item">
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

                                  <Button id={item.id} onClick={this.addOrder}> Click here</Button>
                                </CardText>
                            </Col>
                        </Row>
                      </Card>
                    </Container>
                )
              }

      </main>
    )
  }
}

export default Item;
