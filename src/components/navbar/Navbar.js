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
                        <Link to="/" className={dark ? "icons-dark" : null}><li className={dark ? "icons-dark" : null}>Home</li></Link>
                        <Link to="/work" ><li className={dark ? "icons-dark" : null}>Work</li></Link>
                        <Link to="/contact" ><li className={dark ? "icons-dark" : null}>Contact</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
