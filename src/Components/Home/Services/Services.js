import React from 'react';
import design from '../../../images/design.jpg';
import development from '../../../images/development.jpg';
import mobile from '../../../images/mobile.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Web Design',
        image: design
    },
    {
        name: 'Web Development',
        image: development
    },
    {
        name: 'Mobile Application',
        image: mobile
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2>Our Services</h2>
                <h5>services we provide</h5>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row" style={{border: "1px solid green"}}>
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;