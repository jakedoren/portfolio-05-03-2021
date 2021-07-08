import React, {useContext} from 'react'
import HeroImg from '../../assets/cosmonaut.svg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ThemeContext from '../../ThemeContext'

import "./Hero.css"

const Hero = () => {
    const {dark} = React.useContext(ThemeContext);

    return (
          <div className={dark ? "hero-dark" : "hero"}>
            <div className="hero-wrap">
                <div className="flex1">
                    <div className="herotext-contain" >
                        <h1 className={dark ? "herotext-dark" : "herotext-light"}>Hi, I'm Jake</h1>
                        <p className={dark ? "herotext-dark" : null}>A Full-Stack Engineer</p>
                        <ul>
                            <a href="https://www.linkedin.com/in/jacobdoren/" target="_" className={dark ? "icons-dark" : "null"}><li><LinkedInIcon style={{fontSize: '2.5em'}} /></li></a>
                            <a href="https://github.com/jakedoren" target="_" className={dark ? "icons-dark" : null} ><li><GitHubIcon style={{fontSize: '2.5em'}}/></li></a>
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
