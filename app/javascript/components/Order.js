import React, { Component } from "react";
import { Table, Card, CardHeader, CardTitle, Button } from "reactstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ReviewOrder from "./ReviewOrder";

class Order extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const orders = this.props.order;
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

          <table striped="true" className="order-data">
            {orders.map((order, index) => (
              <tbody key={order.index}>
                <tr value={index}>
                  <td className="pl-2"><span className="order-dot" >- </span><strong>{order.name}</strong></td>
                  <td />
                  <td>${order.price}</td>
                  <td className="order-dot">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.props.removeOrder(index, order)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
            <tbody>
              <tr>
                <td><hr /></td>
                <td><hr /></td>
                <td><hr /></td>
                <td><hr /></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="order-dot pl-2">
                  <small>
                    <strong>Sub Total</strong>
                  </small>
                  <br />
                  <small>
                    <strong>Tax</strong>
                  </small>
                  <br />
                  <strong>Total</strong>
                </td>
                <td />
                <td>
                  <small>$ {subTotal}</small>
                  <br />
                  <small>$ {tax}</small>
                  <br />
                  $ {total}
                </td>

                <td />
              </tr>
            </tbody>
          </table>

          <div className="order-button">

            <Button className="btn btn-secondary btn-lg btn-block" onClick={() => this.props.checkOut(this.props.order)}>
              <Link to="/review-order">
                Checkout
              </Link>
            </Button>

          </div>
        </Card>
      </main>
    );
  }
}

export default Order;
