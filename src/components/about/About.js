import React from 'react'
import './About.scss'
import fluffyPal from '../../assets/fluffyfriend.JPG'
import MongoDbImage from '../../assets/tech/mongo.png'
import ExpressImage from '../../assets/tech/express.png'
import ReactImage from '../../assets/tech/react.png'
import NodeImage from '../../assets/tech/node.png'
import ThemeContext from '../../ThemeContext'

const About = () => {
    const {dark} = React.useContext(ThemeContext);

    return (
        <div className={dark ? "about-dark" : "about"}>
            <div className="section-container">
                <div className={dark ? "about-wrap" : "about-wrap about-wrap-light"}>
                    <div className="message-container">
                        <div className="left-text"><span><img src={fluffyPal} alt="my furry friend" /></span></div>
                        <div className="right-text">
                            <div>
                                <h2>Hey there!</h2>
                            <h1 style={dark ? null : {color: "#2b2b2b"}}>I'm Jake.</h1>
                            </div>
                            
                        </div>
                    </div>
                    <div className="me-paragraph">
                        <h2><strong>The Tech Stuff</strong></h2>
                        <p style={dark ? null : {color: "#1f1f1f"}}>
                            I am a full stack developer from sunny Orlando, Florida with a passion for writing elegant code and building 
                            real-world software. Development is more than just a job for me, it's also one of my hobbies. I find learning new technologies, 
                            building, creating and solving problems to be very gratifying. I recognize these skills to be of up-most importance for businesses 
                            large and small alike and plan to leverage these skills from within businesses to provide value.
                        </p>
                        {/* <h2><strong>My Strongest Stack</strong></h2>
                        <div className="tech-images">
                            <img src={MongoDbImage} alt="mongodb" />
                            <img src={ExpressImage} alt="express" />
                            <img src={ReactImage} alt="react" />
                            <img src={NodeImage} alt="node" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
