import React from 'react';
import Footer from '../../ReUse/Footer/Footer';
import ClientReviews from '../ClientReviews/ClientReviews';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <ClientReviews></ClientReviews>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;