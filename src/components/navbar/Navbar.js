import React, { useContext, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import ThemeContext from '../../ThemeContext'
import Brightness2Icon from '@material-ui/icons/Brightness2';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Navbar = () => {
    const { dark, toggleDark} = React.useContext(ThemeContext);
    const [modal, setModal] = useState(false)

    const handleModal = () => {
        setModal(!modal)
    }
    
    return (
        <div className={dark ? "navbar nav-dark" : "navbar"} >
            <div className="nav-wrap">
                <div onClick={e => toggleDark(e,dark)} className="sun">
                    {dark ? <Brightness2Icon style={{color: "white", fontSize: "3.5em"}} /> : <WbSunnyIcon style={{color: '#EEC807', fontSize: '3.5em'}} />}
                </div>
                <div className="link-contain">
                    <div className="burger">
                        {modal ? <CloseIcon style={{fontSize: "2em", cursor: "pointer", color: dark ? "white" : "black"}} onClick={handleModal} /> :<MenuIcon style={{fontSize: "2em", cursor: "pointer", color: dark ? "white" : "black"}} onClick={handleModal} /> }
                        {modal ? 
                        <div className="dd-list">
                            <Link to="/" className={dark ? "icons-dark" : null}><li className={dark ? "icons-dark" : null}>Home</li></Link>
                            <Link to="/work" ><li className={dark ? "icons-dark" : null}>Work</li></Link>
                            <Link to="/contact" ><li className={dark ? "icons-dark" : null}>Contact</li></Link>
                            <Link to="/about" ><li className={dark ? "icons-dark" : null}>About</li></Link>
                        </div> :
                        null
                        }
                    </div>
                    <ul>
                        <Link to="/" className={dark ? "icons-dark" : null}><li className={dark ? "icons-dark" : null}>Home</li></Link>
                        <Link to="/work" ><li className={dark ? "icons-dark" : null}>Work</li></Link>
                        <Link to="/contact" ><li className={dark ? "icons-dark" : null}>Contact</li></Link>
                        <Link to="/about" ><li className={dark ? "icons-dark" : null}>About</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
