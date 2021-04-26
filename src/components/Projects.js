import React from 'react';
import {Button} from './Button'

import '../css/forms.css';

const Projects = () => {

    return (
        <div>
            <h2>Enter new Project</h2>
            <form id='project_form'>
                <label>Upload project Image: </label>
                <input type='file'/>
                <label>Project Tile: </label>
                <input type='text' placeholder='type here' />
                <label>Project paragraph: </label>
                <input type='text' placeholder='type here' />
                <label>Github link: </label>
                <input type='text' placeholder='type here' />
                <label>Website link: </label>
                <input type='text' placeholder='type here' />
                <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='button'>Github</Button>
            </form>
        </div>

    )
}

export default Projects