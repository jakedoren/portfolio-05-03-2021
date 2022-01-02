import React, {useState, useEffect} from 'react'
import './Contactform.css'
import ThemeContext from '../../ThemeContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { validateEmailInfo } from '../../helper/helper'


const Contactform = () => {
    const {dark} = React.useContext(ThemeContext);
    const emailService = process.env.REACT_APP_CONTACT_SERVICE;

    const [ formInfo, setFormInfo ] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormInfo({
            ...formInfo, [e.target.name] : e.target.value
        })
    }

    useEffect(() => {
        // Wake up those dynos!
        axios.get(emailService)
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = async (e) => {
       e.preventDefault()
       const responseObj = await validateEmailInfo(formInfo)
       if(responseObj.error) {
           toast.error(responseObj.message)
       }
       !responseObj.error && axios.post(emailService, formInfo)
        .then((result) => {
            console.log(result)
            toast.success(result.data.success)
            setFormInfo({name: '', email: '', message: ''})
        })
        .catch((err) => {
            toast.error(err.response.data.errorMessage)
        })
    }

    toast.configure()

    return (
        <div className={dark ? "contactform contactform-dark" : "contactform"}>
            <div className="contactform-wrapper">
                <form className={dark ? "form-dark form" : "form"} >
                    <div>
                        <h1 style={{color: dark ? "white" : null}}>Get In Touch</h1>
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
