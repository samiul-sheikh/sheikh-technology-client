import React from 'react';
import { useHistory } from 'react-router-dom';

const ServiceDetail = ({ service }) => {

    const {title, description, price, image} = service;

    const history = useHistory();

    const handleService = id => {
        const url = `/service/${id}`;
        history.push(url);
    }

    return (
        <div className="col-md-4 text-center">
            <div className="card" style={{width: '18rem'}}>
                <img src={image} className="card-img-top" style={{height: '200px'}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p>{price}</p>
                    <button onClick={() => handleService(service._id)} type="button" className="btn btn-info">Take Service</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;