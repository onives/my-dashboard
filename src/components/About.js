import React, {useState} from 'react';
import { Button } from './generics/Button'


const About = ({onAboutSave}) => {
    const [enteredAbout, setEnteredAbout] = useState('');

    const aboutChangeHandler = (e)=>{
        setEnteredAbout(e.target.value)
    }
    const formSubmitHandler = (e)=>{
        e.preventDefault();
        onAboutSave(enteredAbout);
        setEnteredAbout('')
    }
    return (
        <div className='layout_div'>
            <h2 className='layout_title'>Enter your about Section</h2>
            <div className='form_div'>
                <form onSubmit={formSubmitHandler}>
                    <div className='input-div'>
                        <label htmlFor="about_section">Enter About: </label>
                        <input type='text' placeholder='type here' id='about_section' value={enteredAbout} onChange={aboutChangeHandler} />
                    </div>
                    <div className='btn-div'>
                        <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='submit'>Submit</Button>
                    </div>

                </form>
            </div>

        </div>

    )
}

export default About