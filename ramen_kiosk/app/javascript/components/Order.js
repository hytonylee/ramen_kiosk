import React, { Component } from "react";
import { Table, Card, CardHeader, CardTitle, Button } from "reactstrap";
// import { formatPrice } from './helpers';
import "../css/style.scss";

class Order extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const orders = this.props.order;
    console.log(orders)
    const subTotal = orders
      .reduce(function(cnt, order) {
        return cnt + parseFloat(order.price);
      }, 0)
      .toFixed(2);
    const tax = parseFloat(subTotal * 0.05).toFixed(2);
    const total = +subTotal + +tax;

    return (
      <main className="Order">
        <Card className="order-card">
          <CardHeader className="order-header">
            <CardTitle className="order-title">Order</CardTitle>
          </CardHeader>

          <Table striped className="order-data">
            {orders.map((order, index) => (
              <tbody>
              <tr key={order.index} value={index}>
                <td className="order-dot"> -</td>
                <td>
                  <strong>{order.name}</strong>
                </td>
                <td>${order.price}</td>
                <td className="order-dot"><button className="btn btn--danger btn-sm" onClick={() => this.props.removeOrder(index, order)}>Remove
                  </button></td>
              </tr>
              </tbody>
            ))}
            <tr>
              <td />
              <td>
                <strong>Sub Total</strong>
                <br />
                <strong>Tax</strong>
                <br />
                <strong>Total</strong>
              </td>
              <td>
              </td>
              <td>
                {subTotal}
                <br />
                {tax}
                <br />
                {total}
              </td>
            </tr>

          </Table>
          <div className="order-button">
            <Button className="btn btn-secondary btn-lg btn-block">
              Checkout
            </Button>
          </div>
        </Card>
      </main>
    );
  }
}

export default Order;
