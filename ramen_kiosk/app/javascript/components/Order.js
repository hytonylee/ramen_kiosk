import React, { Component } from 'react'
import { Table, Card, CardHeader, CardTitle, Button } from 'reactstrap';
// import { formatPrice } from './helpers';
import "../css/style.scss";

class Order extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const orders = this.props.order

    return (
      <main className="Order">
        <Card className="order-card">
          <CardHeader className="order-header">
            <CardTitle className="order-title">Order</CardTitle>
          </CardHeader>
            <div className="order-data">
              <ul>
              {orders.map((order,index) => (
                  <li key={order.id} value={index}>
                    order:  {order.name}
                    <br />
                    value: {order.price}
                  </li>

                  )
                )}
              </ul>
              <hr />
              <strong>Total</strong>
            <div>
              <Button className="btn btn-secondary btn-lg btn-block">Checkout</Button>
            </div>
          </div>
        </Card>
      </main>
    )
  }
}



export default Order;
