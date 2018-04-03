import React, { Component } from 'react'
import { Table, Card, CardHeader, CardTitle, Button } from 'reactstrap';
// import { formatPrice } from './helpers';

class Order extends Component {
  constructor(props){
    super(props)
  }

  render() {

    console.log(this.props.order);
  return (
      <main className="Order">
        <Card className="order-card">
          <CardHeader className="order-header">
            <CardTitle className="order-title">Order</CardTitle>
          </CardHeader>
            <div className="order-data">
              {/* {this.props.order} */}
              <hr />
            <div>
              <Button>Checkout</Button>
            </div>
          </div>

        </Card>
      </main>
    )
  }
}



export default Order;
