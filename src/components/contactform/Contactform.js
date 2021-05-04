import React from 'react'
import './Contactform.css'

const Contactform = () => {
    return (
        <div className="contactform">
            <div className="contactform-wrapper">
                <form action="POST" data-netlify="true" >
                    <div>
                        <h1>Get In Touch</h1>
                    </div>
                    <div className="name">
                       <input type="text" name="name" id="name" placeholder="name" /> 
                    </div>
                    <div className="email">
                        <input type="email" name="email" id="email" placeholder="email" />
                    </div>
                    <div className="message">
                        <textarea name="message" id="message" placeholder="message" rows="7"/>
                    </div>
                    <button className="submit" type="submit">
                        <h1>Submit</h1>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contactform
