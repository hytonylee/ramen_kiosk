import React, { Component } from 'react'
import { Table, Card, CardHeader, CardTitle } from 'reactstrap'

class Order extends Component {

render(){
  return (
      <main className="Order">
        <Card className="order-card">
          <CardHeader className="order-header">
            <CardTitle className="order-title">Order</CardTitle>
          </CardHeader>
            <Table>
            </Table>
        </Card>
      </main>
    )
  }
}



export default Order;
