import React, { useState } from 'react';
import { Button } from './Button'
import '../css/forms.css';


const Blogs = () => {
    const [enteredImg, setEnteredImg] = useState('');
    const [enteredBlogTitle, setEnteredBlogTitle] = useState('');
    const [enteredBlogParagraph, setEnteredBlogParagraph] = useState('');
    const [enteredBlogLink, setEnteredBlogLink] = useState('');
    const [blogs, setBlogs] = useState([]);

    const imgChangeHandler = (e)=>{
        setEnteredImg(e.target.value);
    };
    const titleChangeHandler = (e)=>{
        setEnteredBlogTitle(e.target.value)
    };
    const paragraphChangeHandler = (e)=>{
        setEnteredBlogParagraph(e.target.value)
    };
    const linkChangeHandler = (e)=>{
        setEnteredBlogLink(e.target.value)
    };

    const formSubmitHandler =(e)=>{
        e.preventDefault();

        const newBlogData = {
            image: enteredImg,
            title: enteredBlogTitle,
            paragraph: enteredBlogParagraph,
            link: enteredBlogLink,
        }
        setBlogs([...blogs, newBlogData])
        console.log(blogs);
        setEnteredImg('');
        setEnteredBlogTitle('');
        setEnteredBlogParagraph('');
        setEnteredBlogLink('')
       
    }
    


    return (
        <div className='layout_div'>
            <h2 className='layout_title'>Enter new Blog</h2>
            <div className='form_div'>
                <form id='blog_form' onSubmit={formSubmitHandler}>
                    <div className='input-div'>
                        <label>Upload blog Image: </label>
                        <input type='file' value={enteredImg} onChange={imgChangeHandler}/>
                    </div>
                    <div className='input-div'>
                        <label>Blog Tile: </label>
                        <input type='text' value={enteredBlogTitle} placeholder='type here' onChange={titleChangeHandler} />
                    </div>
                    <div className='input-div'>
                        <label>Blog paragraph: </label>
                        <input type='text' value={enteredBlogParagraph} placeholder='type here' onChange={paragraphChangeHandler} />
                    </div>
                    <div className='input-div'>
                        <label>Blog link: </label>
                        <input type='text' value={enteredBlogLink} placeholder='type here' onChange={linkChangeHandler}/>
                    </div>
                    <div className='btn-div'>
                        <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='submit'>Submit</Button>
                    </div>

                </form>
            </div>
            
        </div>

    )
}

export default Blogs