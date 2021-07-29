import React, {useState, useEffect, useContext} from 'react';
import firebaseApp from '../firebaseSetup';
import { Button } from './generics/Button';
import DashboardNav from './DashboardNav';
import "../css/forms.css"
import Card from './generics/Card';
import axios from 'axios';
import AuthContext from './auth/auth-context';


const SingleProject = ({match, history})=>{
    const [enteredImage, setImage] = useState('');
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [githubLink, setGithubLink] = useState('');
    const [siteLink, setSiteLink] = useState('');
    const [imageValue, setImageValue] = useState('');
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const authCtx = useContext(AuthContext);
    const token = authCtx.token;

    const projectId = match.params.id;

    // integrate firebase cloud storage
    let storage = firebaseApp.storage();
    let storageReference = storage.ref()
    let imageUrl;

    const imgChangeHandler = async (e)=>{

       //upload and set image value
       setImageValue(e.target.value);
       let image = e.target.files[0]
       let fileRef = storageReference.child(`projects/${image.name}`)

       try {
           const snapshot = await fileRef.put(image)
           imageUrl = await snapshot.ref.getDownloadURL();
           setImage(imageUrl)
        } catch (error) {
            console.log(error)
        }
       
    };
    const getProject = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/projects/${projectId}`, {headers: { 'Authorization': `Bearer ${token}`}});
            setImage(response.data.image);
            setTitle(response.data.title);
            setDescription(response.data.description);
            setGithubLink(response.data.githubLink);
            setSiteLink(response.data.siteLink);
        } catch (error) {
            console.log('error', error);
        }
    }

    useEffect(() => {
        getProject();
    }, [projectId]);

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true)

        if (!title || !description || !githubLink || !siteLink ) return

        const data = { image: await enteredImage, title, description, githubLink, siteLink }

        try {
            const response = await axios.patch(`http://localhost:4000/projects/${projectId}`, data, {headers: { 'Authorization': `Bearer ${token}`}});
            console.log("Updated Data ===>", response)

            setLoading(false)
            setTimeout(()=>{
                setSuccess(false)
                history.push('/projects')
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
        history.push("/projects");
    }
    const handleProjectDelete = async()=>{
        try {
          await axios.delete(`http://localhost:4000/projects/${projectId}`, {headers: { 'Authorization': `Bearer ${token}`}});
          history.push("/projects");
        } catch (error) {
          console.error(error);
        }
    }

    return(
        <>
        <DashboardNav />
        <Card className='insideForm'>
        <div className='layout_div'>
            <h2 className='layout_title'>Edit Project</h2>
            <div className='form_div'>
                    { failure && <p className='unsuccessful-alert'>Sorry, Project Update Filed </p>}
                    { success && <p className='successful-alert'>Your project has been updated successfullly</p>}
                <form id='project_form' onSubmit={formSubmitHandler}>
                    <div className='input-div'>
                        <label>Upload project Image: </label>
                        <input type='file' value={imageValue} onChange={imgChangeHandler}/>
                    </div>
                    <div className='input-div'>
                        <label>Project Tile: </label>
                        <input type='text' placeholder='type here' onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
                    </div>
                    <div className='input-div'>
                        <label>Project description: </label>
                        <input type='text' placeholder='type here' onChange={(e)=>{setDescription(e.target.value)}} value={description} />
                    </div>
                    <div className='input-div'>
                        <label>Github link: </label>
                        <input type='text' placeholder='type here' onChange={(e)=>{setGithubLink(e.target.value)}} value={githubLink} />
                    </div>
                    <div className='input-div'>
                        <label>Website link: </label>
                        <input type='text' placeholder='type here' onChange={(e)=>{setSiteLink(e.target.value)}} value={siteLink} />
                    </div>
                   <div className='btn-div'>
                        {!isLoading && <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='submit'>Edit</Button>}
                        <Button buttonStyle='btn--danger' buttonSize='btn--medium' onClick={handleProjectDelete} >Delete</Button>
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

export default SingleProject