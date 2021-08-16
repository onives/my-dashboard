import React, { useState } from 'react';
import { Button } from './generics/Button';
import firebaseApp from '../firebaseSetup';

const Blogs = ({onBlogSave}) => {
    const [enteredImg, setEnteredImg] = useState('');
    const [enteredBlogTitle, setEnteredBlogTitle] = useState('');
    const [enteredBlogDescription, setEnteredBlogDescription] = useState('');
    const [enteredBlogLink, setEnteredBlogLink] = useState('');
    const [imageValue, setImageValue] = useState('');

     // integrate firebase cloud storage
     let storage = firebaseApp.storage();
     let storageReference = storage.ref()
     let imageUrl;

    const imgChangeHandler = async (e)=>{

        //upload and set image value
        setImageValue(e.target.value);
        let image = e.target.files[0]
        let fileRef = storageReference.child(`blogs/${image.name}`)
        try {
            const snapshot = await fileRef.put(image)
            imageUrl = await snapshot.ref.getDownloadURL();
            setEnteredImg(imageUrl)
        } catch (error) {
            console.log(error)
        }
       
    };
    const titleChangeHandler = (e)=>{
        setEnteredBlogTitle(e.target.value)
    };
    const descriptionChangeHandler = (e)=>{
        setEnteredBlogDescription(e.target.value)
    };
    const linkChangeHandler = (e)=>{
        setEnteredBlogLink(e.target.value)
    };

    const formSubmitHandler = async (e)=>{
        e.preventDefault();

        const image = await enteredImg
        const title =  enteredBlogTitle
        const description = enteredBlogDescription
        const link = enteredBlogLink
        
        onBlogSave({image, title, description, link});

        setEnteredImg('');
        setImageValue('')
        setEnteredBlogTitle('');
        setEnteredBlogDescription('');
        setEnteredBlogLink('')
       
    }
    


    return (
        <div className='layout_div'>
            <h2 className='layout_title'>Enter new Blog</h2>
            <div className='form_div'>
                <form id='blog_form' onSubmit={formSubmitHandler}>
                    <div className='input-div'>
                        <label>Upload blog Image: </label>
                        <input type='file' value={imageValue} onChange={imgChangeHandler}/>
                    </div>
                    <div className='input-div'>
                        <label>Blog Tile: </label>
                        <input type='text' value={enteredBlogTitle} placeholder='type here' onChange={titleChangeHandler} />
                    </div>
                    <div className='input-div'>
                        <label>Blog Description: </label>
                        <input type='text' value={enteredBlogDescription} placeholder='type here' onChange={descriptionChangeHandler} />
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
