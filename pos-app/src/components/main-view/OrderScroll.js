import React, { Component } from 'react'
import OrderItem from './OrderItem';

export class OrderScroll extends Component {
    render() {
        return (
            <div id={this.props.type} className="orders-load-scrollable" >
                    {this.props.orders.map((order) => (order.type === this.props.type ? <OrderItem key={order.id} order={order}/> : null))}
            </div>
        )
    }
}
export default OrderScroll
