import React, {useContext} from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'

const Home = (props) => {

    return (
        <div>
            <Navbar setDarkMode={props.setDarkMode} darkMode={props.darkMode}/>
            <Hero darkMode={props.darkMode}/>
        </div>
    )
}

export default Home
