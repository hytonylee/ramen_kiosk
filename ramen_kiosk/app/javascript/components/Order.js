import React, { Component } from 'react'
import { Table, Card, CardHeader, CardTitle, Button } from 'reactstrap';
// import { formatPrice } from './helpers';
import "../css/style.scss";

class Order extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const orders = this.props.order;
    console.log(orders);

    const total = orders.reduce( function(cnt,order){ return cnt + parseFloat(order.price); }, 0);




    return (
      <main className="Order">
        <Card className="order-card">
          <CardHeader className="order-header">
            <CardTitle className="order-title">Order</CardTitle>
          </CardHeader>
            <div className="order-data">

              {orders.map((order,index) => (
                  <div key={order.index} value={index}>
                    <strong>{order.name}</strong>${order.price}
                    <hr />
                  </div>
                  )
                )}

              <hr />
              <strong>Total: ${total}</strong>
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
