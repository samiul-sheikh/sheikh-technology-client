import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ManageService = () => {

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('http://sb-technologies.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])

    const serviceList = () => {
        return (
            allServices.map(service => {
                return (
                    <React.Fragment>
                        <tbody>
                            <td>{service.title} </td>
                            <td>{service.description}</td>
                            <td>{service.price}</td>
                            <td>
                                <button type="button" className="shadow-none mx-1" variant="success" size="sm">
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button type="button" className="shadow-none mx-1" variant="danger" size="sm">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </td>
                        </tbody>
                    </React.Fragment>
                )
            })
        )
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <table className="table w-100">
                    <thead>
                        <th>Service Name</th>
                        <th>Service Description</th>
                        <th>Service Cost</th>
                        <th>Action</th>
                    </thead>
                    {
                        serviceList()
                    }
                </table>
            </div>
        </section>
    );
};

export default ManageService;