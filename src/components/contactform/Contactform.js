import React from 'react'
import './Contactform.css'
import ThemeContext from '../../ThemeContext'


const Contactform = () => {
    const {dark} = React.useContext(ThemeContext);

    const handleSubmit = () => {
        alert('Message recieved, I will get back to you shortly!')
    }

    return (
        <div className={dark ? "contactform contactform-dark" : "contactform"}>
            <div className="contactform-wrapper">
                <form method="POST" data-netlify="true" className={dark ? "form-dark form" : "form"} name="contact" onSubmit={handleSubmit}>
                    <div>
                        <h1 style={{color: dark ? "white" : null}}>Get In Touch</h1>
                    </div>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="name">
                       <input type="text" name="name" id="name" placeholder="name" className={dark ? "input-dark" : "input-light"} /> 
                    </div>
                    <div className="email">
                        <input type="email" name="email" id="email" placeholder="email" className={dark ? "input-dark" : "input-light"} />
                    </div>
                    <div className="message">
                        <textarea name="message" id="message" placeholder="message" rows="7" className={dark ? "input-dark" : "input-light"}/>
                    </div>
                    <button className={dark ? "submit submit-dark" : "submit"} type="submit">
                        <h1 style={{color: dark ? "white" : null}}>Submit</h1>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contactform
