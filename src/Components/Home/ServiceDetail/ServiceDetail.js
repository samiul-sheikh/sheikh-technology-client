import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div classNameNameName="col-md-4">
            <div className="card" style={{width: '18rem'}}>
                <img src={service.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;