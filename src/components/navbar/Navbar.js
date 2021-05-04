import React, { useContext, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import ThemeContext from '../../ThemeContext'
import Brightness2Icon from '@material-ui/icons/Brightness2';

const Navbar = () => {
    const { dark, toggleDark} = React.useContext(ThemeContext);
    
    return (
        <div className={dark ? "navbar nav-dark" : "navbar"} >
            <div className="nav-wrap">
                <div onClick={e => toggleDark(e,dark)} className="sun">
                    {dark ? <Brightness2Icon style={{color: "white", fontSize: "2.5em"}} /> : <WbSunnyIcon style={{color: '#EEC807', fontSize: '2.5em'}} />}
                </div>
                <div className="link-contain">
                    <ul>
                        <Link to="/" style={{color: dark ? "#00e6b3" : null}}><li>Home</li></Link>
                        <Link to="/work" style={{color: dark ? "#00e6b3" : null}}><li>Work</li></Link>
                        <Link to="/contact" style={{color: dark ? "#00e6b3" : null}}><li>Contact</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
