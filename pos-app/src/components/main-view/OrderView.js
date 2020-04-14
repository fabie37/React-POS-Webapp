import './OrderView.css';
import React, { useContext, useState } from 'react'
import OrderScroll from './OrderScroll';
import { GlobalContext } from '../../context/GlobalState';
import { OrderButton } from './OrderButton';

export const OrderView = () => {

    const [activeView, setView] = useState("None");
    const {orders} = useContext(GlobalContext);

    return (
        <div className="orders">
            <div className="orders-selection">
                <OrderButton currentView={activeView} changeView={() => setView("Deliveries")} name="Deliveries" type="Delivery" orders={orders} />
                <div class="vl"></div>
                <OrderButton currentView={activeView} changeView={() => setView("Collections")} name="Collections" type="Collection" orders={orders} />
                <div class="vl"></div>
                <OrderButton currentView={activeView} changeView={() => setView("Shop")} name="Shop" type="Shop" orders={orders} />
            </div>
            <div className="orders-load">
                {activeView === "Deliveries" ? <OrderScroll orders={orders} type="Delivery" /> : null}
                {activeView === "Collections" ? <OrderScroll orders={orders} type="Collection" /> : null}
                {activeView === "Shop" ? <OrderScroll orders={orders} type="Shop" /> : null}
            </div>
            <div class="orders-footer">
                <h3> Ivano's Italiano </h3>
            </div>
        </div>
    )
}


