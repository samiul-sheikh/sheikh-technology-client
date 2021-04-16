import React from 'react';
import teamwork from '../../../images/teamwork.jpg';
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={teamwork} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Deliver Only Exceptional Quality, And Improve!</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus dolorum ut in. Beatae culpa, necessitatibus numquam eum unde doloremque. Molestias, magnam nobis autem quaerat quos amet ipsam eius eveniet excepturi?
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;