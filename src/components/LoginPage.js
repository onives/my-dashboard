import React from 'react';
import { Button } from './generics/Button'
import { Link } from 'react-router-dom';
import "../css/forms.css";

const LoginPage = ()=>{

    return(
        <div className='login_form_div'>
            <form>
                <div>
                    <h3>Welcome back Admin. Login to continue</h3>
                </div>
                <div className='input-div'>
                    <label htmlFor="about_section">Enter Email: </label>
                    <input type='text' placeholder='Enter your Email' id='email_section'/>
                </div>
                <div className='input-div'>
                    <label htmlFor="about_section">Enter Password: </label>
                    <input type='text' placeholder='Enter your password' id='password_section'/>
                </div>
                <div className='btn-div'>
                    <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='submit'><Link to = '/dashboard'>Submit</Link></Button>
                </div>
            </form>
        </div>
    )

}
export default LoginPage