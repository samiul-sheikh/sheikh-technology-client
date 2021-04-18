import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (

        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Sheikh Technology</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link me-5" as={Link}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/service" className="nav-link me-5" as={Link}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/review" className="nav-link me-5" as={Link}>Reviews</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link me-5" as={Link}>Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link me-5" as={Link}>Contact us</Link>
                        </li>
                        {loggedInUser.email ?
                            <li className="nav-item">
                                <Link to="/login" className="nav-link me-5" as={Link}>{loggedInUser.email}</Link>
                            </li> :
                            <li className="nav-item">
                                <Link to="/login" className="nav-link me-5" as={Link}>Login</Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;