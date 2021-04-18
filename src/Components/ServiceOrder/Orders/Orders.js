import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';


const Orders = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    // display ordered services for all user
    useEffect(() => {
        fetch('https://sb-technologies.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <div>
            <h2>This is order page</h2>
            <h3>You place: {orders.length} orders</h3>
            {
                orders.map(order => <li>{order.name} {order.email} service : {order.title} price: {order.price} </li>)
            }
        </div>
    );
};

export default Orders;