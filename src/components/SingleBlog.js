import React, { useState, useEffect, useContext } from 'react';
import { Button } from './generics/Button';
import firebaseApp from '../firebaseSetup';
import axios from 'axios';
import "../css/forms.css";
import Card from './generics/Card';
import AuthContext from './auth/auth-context';
import env from 'react-dotenv';
import DashboardNav from './DashboardNav';

const SingleBlog = ({match, history}) => {
    const [enteredImage, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [imageValue, setImageValue] = useState('');
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const authCtx = useContext(AuthContext);
    const token = authCtx.token;

    const blogId = match.params.id;

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
            setImage(imageUrl)
        } catch (error) {
            console.log(error)
        }
       
    };

    useEffect(() => {
        const getBlog = async () => {
            try {
                const response = await axios.get(`${env.remoteApi}blogs/${blogId}`, {headers: { 'Authorization': `Bearer ${token}`}});
                setImage(response.data.image);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setLink(response.data.link);
            } catch (error) {
                console.log('error', error);
            }
        }
        getBlog();
    }, [blogId, token]);

    const formSubmitHandler = async (e)=>{
        e.preventDefault();
        setLoading(true)

        if (!title || !description || !link ) return

        const data = { image: await enteredImage, title, description, link }

        try {
            const response = await axios.patch(`${env.remoteApi}blogs/${blogId}`, data, {headers: { 'Authorization': `Bearer ${token}`}});
            console.log("Updated Data ===>", response)

            setLoading(false)
            setTimeout(()=>{
                setSuccess(false)
                history.push('/blogs')
            }, 3000)
            setSuccess(true)

        } catch (error) {
            setLoading(false)
            console.log('error', error);
            setTimeout(()=>{
                 setFailure(false)
             }, 5000)
            setFailure(true)
           
        }
       
    }

    const handleCancel = () => {
        history.push("/blogs");
    }
    const handleBlogDelete = async()=>{
        try {
          await axios.delete(`${env.remoteApi}blogs/${blogId}`, {headers: { 'Authorization': `Bearer ${token}`}});
          history.push("/blogs");
        } catch (error) {
          console.error(error);
        }
    }
    
    return (
        <>
        <DashboardNav />
        <Card className='insideForm'>
        <div className='layout_div'>
            <h2 className='layout_title'>Edit Blog</h2>
            <div className='form_div'>
                { failure && <p className='unsuccessful-alert'>Sorry, Blog Update Filed </p>}
                { success && <p className='successful-alert'>Your Blog has been updated successfullly</p>}
                <form id='blog_form' onSubmit={formSubmitHandler}>
                    <div className='input-div'>
                        <label>Upload blog Image: </label>
                        <input type='file' value={imageValue} onChange={imgChangeHandler}/>
                    </div>
                    <div className='input-div'>
                        <label>Blog Tile: </label>
                        <input type='text' value={title} placeholder='type here' onChange={(e)=>{setTitle(e.target.value)}} />
                    </div>
                    <div className='input-div'>
                        <label>Blog Description: </label>
                        <input type='text' value={description} placeholder='type here' onChange={(e)=>{setDescription(e.target.value)}} />
                    </div>
                    <div className='input-div'>
                        <label>Blog link: </label>
                        <input type='text' value={link} placeholder='type here' onChange={(e)=>{setLink(e.target.value)}} />
                    </div>
                    <div className='btn-div'>
                    {!isLoading && <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='submit'>Edit</Button>}
                        <Button buttonStyle='btn--danger' buttonSize='btn--medium' onClick={handleBlogDelete} >Delete</Button>
                        <Button buttonStyle='btn--outline' buttonSize='btn--medium' onClick={handleCancel}>Close</Button>
                        {isLoading && <p className="isLoading">Sending request... </p>}
                    </div>

                </form>
            </div>
            
        </div>
        </Card>
        </>

    )
}

export default SingleBlog
