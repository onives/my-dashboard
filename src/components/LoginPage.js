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
                    <Link to = '/dashboard'>
                        <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='submit'>Submit</Button>
                    </Link>
                </div>
            </form>
        </div>
    )

}
export default LoginPage