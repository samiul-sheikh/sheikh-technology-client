import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const ServiceOrder = () => {

    const { id } = useParams();
    console.log(id);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch('http://localhost:8000/service/' + id)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [id])

    // send order services information in server
    const handleOrder = () => {
        const newOrder = { ...loggedInUser, ...orderService }
        fetch('http://localhost:8000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="text-center">
            <h2>Order Service</h2>
            <h3> Hello {loggedInUser.name} ! </h3>
            <p>{loggedInUser.email}</p>
            <img src={orderService.image} alt="" />
            <h5>{orderService.title}</h5>
            <p>{orderService.price}</p>
            <button onClick={handleOrder} type="button" class="btn btn-primary">Place Order</button>
        </div>
    );
};

export default ServiceOrder;