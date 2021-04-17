import React from 'react';

const ServiceDetail = ({ service }) => {

    const {title, description, price, image} = service;

    return (
        <div className="col-md-4 text-center">
            <div className="card" style={{width: '18rem'}}>
                <img src={image} className="card-img-top" style={{height: '200px'}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p>{price}</p>
                    <button type="button" class="btn btn-info">Take Service</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;