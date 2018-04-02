import React, { Component } from 'react'
import { Table } from 'reactstrap'

class Order extends Component {
render(){
  return (
      <main className="Order">
          <Table>
          <thead>
            <tr>
              <th>Order</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>item name</td>
              <td>item price  </td>
            </tr>
          </tbody>
        </Table>
      </main>
    )
  }
}



export default Order;
