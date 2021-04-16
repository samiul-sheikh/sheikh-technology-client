import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <div className="card" style={{width: '18rem'}}>
                <img src={service.image} className="card-img-top" style={{height: '200px'}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-info">Take Service</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;