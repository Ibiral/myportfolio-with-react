import React from 'react'
import "./projectCard.css"

const ProjectCard = ({img, link}) => {
    return (
        <div className="p-card">
            <div className="p-card-page">
            <div className="p-card-point"></div>
            <div className="p-card-point"></div>
            <div className="p-card-point"></div>
            </div>
            <a href= {link} target="_blank" rel="noopener noreferrer">
                <img src={img} alt="projet github" className="p-card-img" />
            </a>

        </div>
    )
}

export default ProjectCard
