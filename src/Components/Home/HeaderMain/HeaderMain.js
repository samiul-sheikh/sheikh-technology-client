import React from 'react';
import headerImage from '../../../images/headerImage.jpg';

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Help Challenge<br /> Critical Activities</h1>
                <p className="text-secondary">We are experienced professionals who understand that IT service is changing, and are true partners who care about your success.</p>
                <button className="btn btn-primary">Our Services</button>
            </div>
            <div className="col-md-6">
                <img src={headerImage} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;