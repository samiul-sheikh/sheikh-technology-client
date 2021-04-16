import React from 'react';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import ClientReview from '../ClientReview/ClientReview';

const ReviewsData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    }
]

const ClientReviews = () => {
    return (
        <section className="container" style={{border: '1px solid red'}}>
            <div className="">
                <div className="text-primary text-center">
                    <h1>Client Reviews</h1>
                </div>
                <div className="card-deck mt-3">
                    {
                        ReviewsData.map(review => <ClientReview review={review}></ClientReview>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;