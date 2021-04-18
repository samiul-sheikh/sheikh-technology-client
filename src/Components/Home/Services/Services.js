import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://sb-technologies.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="services-container mt-5">
            <div className="text-center text-primary">
                <h2>Our Services</h2>
                <h5>services we provide</h5>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-3" style={{ border: "1px solid green" }}>
                    {
                        services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;