import React from 'react';
import '../css/dashboardCss.css';

const Projects = () => {

    return (
        <div>
            <h2>Enter new Project</h2>
            <form id='project_form'>
                <label>Upload Image </label>
                <input type='file'/>
                <label>Project Tile </label>
                <input type='text' placeholder='type here' />
                <label>Project paragraph </label>
                <input type='text' placeholder='type here' />
                <label>Github link </label>
                <input type='text' placeholder='type here' />
                <label>Website link </label>
                <input type='text' placeholder='type here' />
            </form>
        </div>

    )
}

export default Projects