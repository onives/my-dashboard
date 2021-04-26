import React from 'react';
import {Button} from './Button'


const About = () => {

    return (
        <div>
            <h2>Enter your about Section</h2>
            <form>
                <input type='text' placeholder='type here'/>
                <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='button'>Github</Button>
            </form>
        </div>
        
    )
}

export default About