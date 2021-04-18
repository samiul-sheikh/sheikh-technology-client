import React, { useEffect, useState } from 'react';
import ClientReview from '../ClientReview/ClientReview';

const ClientReviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://sb-technologies.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="container">
            <div className="shadow-lg p-3 mb-5 bg-body rounded">
                <div className="text-primary text-center">
                    <h1>Client Reviews</h1>
                </div>
                <div className="card-deck mt-3">
                    {
                        reviews.map(review => <ClientReview review={review}></ClientReview>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;