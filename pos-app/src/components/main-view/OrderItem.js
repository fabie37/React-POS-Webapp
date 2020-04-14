import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';

const OrderItem = ({ order }) => {

    const { deleteOrder } = useContext(GlobalContext);

    return (
        <div className="orders-item">
            <p className="orders-item-time"> {order.time} </p>
            <div className="orders-item-infoContainer">
                <p className="orders-item-infoContainer-primary"> {order.first + " " + order.last} </p>
                <p className="orders-item-infoContainer-secondary"> {order.addrNumb + " " + order.addrStreet } </p>
            </div>
            <p className="orders-item-total"> £{order.total} </p>
            <button onClick={() => deleteOrder(order.id)} className="orders-item-done"> Done </button>
        </div>
    )
}


export default OrderItem
