import React from 'react';
import {Button} from './Button'
import '../css/forms.css';

const Blogs = () => {

    return (
        <div>
            <h2>Enter new Blog</h2>
            <form id='blog_form'>
                <label>Blog Tile: </label>
                <input type='text' placeholder='type here' />
                <label>Blog paragraph: </label>
                <input type='text' placeholder='type here' />
                <label>Blog link: </label>
                <input type='text' placeholder='type here' />
                <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='button'>Github</Button>
            </form>
        </div>
        
    )
}

export default Blogs