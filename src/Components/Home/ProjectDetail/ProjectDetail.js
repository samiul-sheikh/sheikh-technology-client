import React from 'react';
import'./ProjectDetail.css';

const ProjectDetail = ({ project }) => {
    return (
        <div className="col-md-4 text-center py-3">
            <div className="card shadow">
                <div className="overflow">
                    <img src={project.image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-dark">{project.name}</h5>
                    <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;