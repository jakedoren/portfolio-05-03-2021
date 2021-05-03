import React from 'react'
import HeroImg from '../../assets/cyborg-cosmonaut.png'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-wrap">
                <div className="flex1">
                    <div className="herotext-contain">
                        <h1>Hi, I'm Jake</h1>
                        <p>A Full-Stack Engineer</p>
                        <ul>
                            <li><LinkedInIcon style={{fontSize: '2em'}} /></li>
                            <li><GitHubIcon style={{fontSize: '2em'}}/></li>
                        </ul>
                    </div>
                </div>
                <div className="flex2">
                    <div className="img-contain">
                        <img src={HeroImg} className="hero-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
