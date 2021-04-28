import React from 'react';
import { Button } from './Button'

import '../css/forms.css';

const Projects = () => {

    return (
        <div>
            <h2>Enter new Project</h2>
            <div>
                <form id='project_form'>
                    <div>
                        <label>Upload project Image: </label>
                        <input type='file' />
                    </div>
                    <div>
                        <label>Project Tile: </label>
                        <input type='text' placeholder='type here' />
                    </div>
                    <div>
                        <label>Project paragraph: </label>
                        <input type='text' placeholder='type here' />
                    </div>
                    <div>
                        <label>Github link: </label>
                        <input type='text' placeholder='type here' />
                    </div>
                    <div>
                        <label>Website link: </label>
                        <input type='text' placeholder='type here' />
                    </div>
                    <div>
                        <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='submit'>Submit</Button>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default Projects