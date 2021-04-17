import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceOrder = () => {

    const { id } = useParams();
    console.log(id);

    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch('http://localhost:8000/service/' + id)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [id])

    return (
        <div className="text-center">
            <h2>Order Service</h2>
            <img src={orderService.image} alt=""/>
            <h5>{orderService.title}</h5>
            <p>{orderService.price}</p>
        </div>
    );
};

export default ServiceOrder;