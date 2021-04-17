import React from 'react';

const ClientReview = ({ review }) => {

    const { name, information, description,  image } = review;

    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={image} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{information}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{description}</p>
            </div>
        </div>
    );
};

export default ClientReview;