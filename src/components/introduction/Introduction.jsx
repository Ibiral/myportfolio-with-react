import React from 'react'
import "./introduction.css"
import Moi from "../../images/moi.png"

const Introduction = () => {
    return (
    <div className="intro">
    <div className="intro-left">
      <div className="intro-left-wrapper">
        <h2 className="intro-introduction">Bonjour, je suis</h2>
        <h1 className="intro-firstName">Sofiane</h1>
        <div className="intro-title">
          <div className="intro-title-wrapper">
          <div className="intro-title-item">Développeur Web</div>
              <div className="intro-title-item">Créateur de contenu</div>
                <div className="intro-title-item">Youtubeur</div>
                 <div className="intro-title-item">Copywriter</div>
                    <div className="intro-title-item">Formateur en ligne</div>
          </div>
        </div>
        <p className="intro-desc">
          Je suis développeur web frontend: HTML/CSS/JavaScript/Reactjs/Vuejs/Nextjs/Nodejs.
        </p>
      </div>
    </div>
    <div className="intro-right">
      <div className="intro-bg"></div>
      <img src={Moi} alt="" className="intro-img" />
    </div>
  </div>
    )
}

export default Introduction
