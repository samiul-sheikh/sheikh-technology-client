import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {

    const webDesign = [
        { name: "Portfolio Design", link: "/design" },
        { name: "E-commerce Design", link: "/design" },
        { name: "Blog Website Design", link: "/design" },
        { name: "Newspaper Design", link: "/design" }
    ]
    const ourAddress = [
        { name: "Dhaka - Bangladesh", link: "//google.com/map" },
        { name: "Location", link: "//google.com/map" },

    ]
    const mobileApplication = [
        { name: "E-commerce Application", link: "/application" },
        { name: "Portfolio Application", link: "/application" },
        { name: "Blog Website Application", link: "/application" },
        { name: "Social Media Application", link: "/application" }
    ]
    const webDevelopment = [
        { name: "E-commerce Development", link: "/development" },
        { name: "Portfolio Development", link: "/development" },
        { name: "Social Website Development", link: "/development" },
        { name: "Blog Website Development", link: "/development" }
    ]

    return (
        <footer className="mt-5" style={{border: "1px solid blue"}}>
            <div className="container pt-1">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Web Design"} menuItems={webDesign} />
                    <FooterCol key={2} menuTitle="Web Development" menuItems={webDevelopment} />
                    <FooterCol key={3} menuTitle="Mobile Application" menuItems={mobileApplication} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-2">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">01784097404</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;