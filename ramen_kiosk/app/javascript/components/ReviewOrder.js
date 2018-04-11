import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardText,
  CardBody,
  Button,
  Container
} from "reactstrap";
import "../css/style.scss";

class ReviewOrder extends Component {
  constructor(props) {
    super(props);
    console.log(`reviewOrder props: ${Object.keys(this.props)}`);
  }
  render() {
    const min = 1;
    const max = 200;
    let random = "";
    let constRandom = "";
    let lastRandom = "";
    if (lastRandom === undefined) {
      random = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      random = Math.floor(Math.random() * (max - min)) + min;
      if (random >= lastRandom) random += 1;
    }
    lastRandom = random;


    const order = this.props.order;
    console.log("this is reviewOrder: ", order[0].name);

    return (
      <main className="ReviewOrder">
        <Container className="menu-card">
          <Card>
            <CardHeader className="CardHeader">
              <CardTitle className="CardTitle">
                Thank Your for the Order
              </CardTitle>
            </CardHeader>
            <CardBody>
              <CardText className="menu-description">
                <strong>Your order number is</strong>
                <br />
              </CardText>
                <h1>
                  <strong>{lastRandom}</strong>
                </h1>
            </CardBody>
                <hr />
            <CardBody>
              <CardText>
                Yor order is
                  {/* {order.map((order, index) => (
                    order.name
                  ))} */}
              </CardText>
            </CardBody>
              <CardText className="menu-description">
                  Please pick up your food and pay at the counter.
              </CardText>
              <hr />
          </Card>
        </Container>
      </main>
    );
  }
}

export default ReviewOrder;
