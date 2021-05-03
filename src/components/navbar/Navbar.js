import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-wrap">
                <div>
                    <h1>Jacob Doren</h1>
                </div>
                <div className="link-contain">
                    <ul>
                        <li>Home</li>
                        <li>Work</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
