import React from 'react'
import "./about.css"
import Devweb from "../../images/devweb.jpg"

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img 
                    src={Devweb}
                    alt=""
                    className="about-img"
                    />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">À propos de moi</h1>
                <p className="about-subtitle">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste et autem repudiandae excepturi eaque corrupti nostrum commodi cupiditate neque quis.
                </p>
                <p className="about-me">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus eaque doloremque rerum cum velit veniam quae asperiores et sit, tempora aut omnis maxime expedita illo beatae optio explicabo sequi possimus totam suscipit. Praesentium soluta odio modi harum unde perspiciatis, iusto, necessitatibus quis molestiae, dicta reprehenderit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloremque non at nesciunt dolorem, voluptates, excepturi culpa perferendis magnam vel exercitationem quibusdam temporibus, alias commodi quo cupiditate? Saepe, quaerat explicabo!
                </p>
            </div>
        </div>
    )
}

export default About
