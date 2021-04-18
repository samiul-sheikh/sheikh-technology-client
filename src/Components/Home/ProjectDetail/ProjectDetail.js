import React from 'react';

const ProjectDetail = ({ project }) => {
    return (
        <div className="col-md-4 text-center py-3">
            <div className="card" style={{ width: '18rem' }}>
                <img src={project.image} className="card-img-top" style={{ height: '200px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;