import React from 'react'
import "./projectsList.css"
import ProjectCard from "../projectCard/ProjectCard.jsx"
import {projects} from "../../data"

const ProjectsList = () => {
    return (
        <div className="p-list">
            <div className="p-list-presentation">
                <h1 className="p-list-title">Portfolio</h1>
                <p className="p-list-description">
                    Ce portfolio contient quelques exemples de mes projets durant ma formation chez OpenClassrooms ainsi que des projets que j'ai fait à titre personnel afin de consolider mes compétences et d'apprendre de nouvelles technologies.
                </p>
            </div>
            <div className="portfolio">
                {projects.map((item) => (
                    <ProjectCard ley={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
            
        </div>
    )
}

export default ProjectsList
