import React, {useState} from 'react'

export const OrderButton = ({ currentView, name, type, orders, changeView }) => {


    const handleClick = (e) => {
        changeView();
        
    }

    return (
        <button onClick={handleClick} className={(currentView == name ? "button-active" : null) + " orders-btn"}> {name} <br /> {orders.filter((order) => (order.type == type)).length} </button>
    )
}
