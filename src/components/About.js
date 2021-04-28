import React from 'react';
import { Button } from './Button'


const About = () => {

    return (
        <div>
            <h2>Enter your about Section</h2>
            <div>
                <form>
                    <div>
                        <label htmlFor="about_section">Enter About: </label>
                        <input type='text' placeholder='type here' id='about_section' />
                    </div>
                    <div>
                        <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='submit'>Submit</Button>
                    </div>

                </form>
            </div>

        </div>

    )
}

export default About