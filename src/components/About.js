import React from 'react';
import { Button } from './Button'


const About = () => {

    return (
        <div>
            <h2>Enter your about Section</h2>
            <form>
                <label htmlFor="about_section">Enter About: </label>
                <input type='text' placeholder='type here' id='about_section' />
                <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='button'>Github</Button>
            </form>
        </div>

    )
}

export default About