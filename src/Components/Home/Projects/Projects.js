import React from 'react';
import hotel from '../../../images/hotel.png';
import emaJohn from '../../../images/emaJohn.png';
import food from '../../../images/food.png';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const projectData = [
    {
        name: 'Hotel Management',
        image: hotel
    },
    {
        name: 'E-commerce Website',
        image: emaJohn
    },
    {
        name: 'Restaurant System',
        image: food
    }
]

const Projects = () => {
    return (
        <section className="container mt-5">
            <div className="text-center text-primary">
                <h2>Our Project</h2>
                <h5>Here some of our successful projects</h5>
            </div>
            <div className="row mt-3">
                {
                    projectData.map(project => <ProjectDetail project={project}></ProjectDetail>)
                }
            </div>
        </section>
    );
};

export default Projects;