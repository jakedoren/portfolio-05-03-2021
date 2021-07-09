import React, {useState} from 'react'
import './Contactform.css'
import ThemeContext from '../../ThemeContext'
import axios from 'axios'


const Contactform = () => {
    const {dark} = React.useContext(ThemeContext);

    const [ formInfo, setFormInfo ] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [ formResponse, setFormResponse ] = useState('')
    const [ error, setError ] = useState(false)

    const handleChange = (e) => {
        setFormInfo({
            ...formInfo, [e.target.name] : e.target.value
        })
    }

    const  handleSubmit = async (e) => {
       e.preventDefault()

       axios.post('http://localhost:8080/', formInfo)
            .then((result) => {
                setFormResponse(result.data.success)
                setFormInfo({
                    name: '',
                    email: '',
                    message: ''
                })
            })
            .catch((err) => {
                setFormResponse(err.response.data.errorMessage)
                
            })
         
        
    
    }

    return (
        <div className={dark ? "contactform contactform-dark" : "contactform"}>
            <div className="contactform-wrapper">
                <form className={dark ? "form-dark form" : "form"} >
                    <div>
                        <h1 style={{color: dark ? "white" : null}}>Get In Touch</h1>
                        {formResponse && <p>{formResponse}</p>}
                    </div>
                    <div className="name">
                       <input type="text" name="name" id="name" placeholder="name" className={dark ? "input-dark" : "input-light"} onChange={ handleChange} value={formInfo.name} /> 
                    </div>
                    <div className="email">
                        <input type="email" name="email" id="email" placeholder="email" className={dark ? "input-dark" : "input-light"} onChange={ handleChange} value={formInfo.email} />
                    </div>
                    <div className="message">
                        <textarea name="message" id="message" placeholder="message" rows="7" className={dark ? "input-dark" : "input-light"} onChange={ handleChange} value={formInfo.message} />
                    </div>
                    <button className={dark ? "submit submit-dark" : "submit"} onClick={handleSubmit} >
                        <h1 style={{color: dark ? "white" : null}}>Submit</h1>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contactform
