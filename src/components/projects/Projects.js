import React from 'react'
import easierchat from '../../assets/easierchat.jpg'
import GitHubIcon from '@material-ui/icons/GitHub';
import CharacterApiImg from '../../assets/characterapi.jpg'
import CharacterGeneratorImg from '../../assets/charactergenerator.jpg'
import './Projects.css'

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-wrap">
                <div><h1>Latest Projects</h1></div>
                <div className="projects-grid">
                    <div className="card">
                        <div className="top">
                            <img src={easierchat} className="card-img"/>
                        </div>
                        <div className="bottom">
                            <h1>Easychat</h1>
                            <p>Easychat is a web-based chat application allowing users to Join rooms and talk with all users of the room</p>
                            <ul>
                                <a href="https://github.com/jakedoren/react-socket-chatapp-client" target="_"><li><GitHubIcon /></li></a>
                                <a href="https://easierchat.netlify.app/" target="_"><li>Live</li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="top">
                            <img src={CharacterApiImg} className="card-img"/>
                        </div>
                        <div className="bottom">
                            <h1>Character API</h1>
                            <p>This is a small app that does this, that and this utilizing this that and also this frameworkv sdsfsfafdasfd This is a small app that does this, that and this utilizing this that and also this frameworkv sdsfsfafdasfd</p>
                            <ul>
                                <a href="https://github.com/jakedoren/ricknmorty-api" target="_"><li><GitHubIcon /></li></a>
                                <a href="https://compassionate-tesla-e7e979.netlify.app/" target="_"><li>Live</li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="top">
                            <img src={CharacterGeneratorImg} className="card-img"/>
                        </div>
                        <div className="bottom">
                            <h1>Character Gen</h1>
                            <p>This is a small app that does this, that and this utilizing this that and also this frameworkv sdsfsfafdasfd This is a small app that does this, that and this utilizing this that and also this frameworkv sdsfsfafdasfd</p>
                            <ul>
                                <a href="https://github.com/jakedoren/rickandmorty-gen" target="_"><li><GitHubIcon /></li></a>
                                <a href="https://sharp-blackwell-56aa0f.netlify.app/" target="_"><li>Live</li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
