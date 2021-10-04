import React from 'react'
import './About.scss'
import fluffyPal from '../../assets/fluffyfriend.JPG'

const About = () => {
    return (
        <div className="about">
            <div className="about-wrap">
                <div className="message-container">
                    <div className="left-text"><span><img src={fluffyPal} alt="my furry friend" /></span></div>
                    <div className="right-text">
                        <h2>Hey there!</h2>
                        <h1>I'm Jake.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
