import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faGripHorizontal, faUserPlus, faShoppingBag, faPlusCircle, faBorderAll } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-auto py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/orders" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faShoppingBag} /> <span>Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/service" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faPlusCircle} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/services" className="text-white text-decoration-none">
                      <FontAwesomeIcon icon={faBorderAll} /> <span>Manage Services</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white text-decoration-none"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;