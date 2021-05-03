import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-wrap">
                <div>
                    <WbSunnyIcon style={{color: '#EEC807', fontSize: '2.5em'}} />
                </div>
                <div className="link-contain">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/work"><li>Work</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
