import React, {useState} from 'react';
import { Button } from './generics/Button';
// import firebase from 'firebase';
import firebaseApp from '../firebaseSetup';



const Projects = ({onProjectSave}) => {
    const [enteredImg, setEnteredImg] = useState(null);
    const [enteredProjectTitle, setEnteredProjectTitle] = useState('');
    const [enteredProjectDescription, setEnteredProjectDescription] = useState('');
    const [enteredGithubLink, setEnteredGithubLink] = useState('');
    const [enteredSiteLink, setEnteredSiteLink] = useState('');
    const [imageValue, setImageValue] = useState('');

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
            setEnteredImg(imageUrl)
        } catch (error) {
            console.log(error)
        }
        
    };
    const titleChangeHandler = (e)=>{
        setEnteredProjectTitle(e.target.value)
    };
    const descriptionChangeHandler = (e)=>{
        setEnteredProjectDescription(e.target.value)
    };
    const githubLinkChangeHandler = (e)=>{
        setEnteredGithubLink(e.target.value)
    };
    const siteLinkChangeHandler = (e)=>{
        setEnteredSiteLink(e.target.value)
    };

    const formSubmitHandler = async (e)=>{
        e.preventDefault();

        const image = await enteredImg
        const title =  enteredProjectTitle
        const description = enteredProjectDescription
        const githubLink =enteredGithubLink
        const siteLink = enteredSiteLink
        
        onProjectSave({image, title, description, githubLink, siteLink});
        setEnteredImg('');
        setImageValue('')
        setEnteredProjectTitle('');
        setEnteredProjectDescription('');
        setEnteredGithubLink('');
        setEnteredSiteLink('')
       
    }

    return (
        <div className='layout_div'>
            <h2 className='layout_title'>Enter new Project</h2>
            <div className='form_div'>
                <form id='project_form' onSubmit={formSubmitHandler}>
                    <div className='input-div'>
                        <label>Upload project Image: </label>
                        <input type='file' onChange={imgChangeHandler} value={imageValue}/>
                    </div>
                    <div className='input-div'>
                        <label>Project Tile: </label>
                        <input type='text' placeholder='type here' onChange={titleChangeHandler} value={enteredProjectTitle}/>
                    </div>
                    <div className='input-div'>
                        <label>Project description: </label>
                        <input type='text' placeholder='type here' onChange={descriptionChangeHandler} value={enteredProjectDescription} />
                    </div>
                    <div className='input-div'>
                        <label>Github link: </label>
                        <input type='text' placeholder='type here' onChange={githubLinkChangeHandler} value={enteredGithubLink} />
                    </div>
                    <div className='input-div'>
                        <label>Website link: </label>
                        <input type='text' placeholder='type here' onChange={siteLinkChangeHandler} value={enteredSiteLink} />
                    </div>
                    <div className='btn-div'>
                        <Button buttonStyle='btn--solid' buttonSize='btn--medium' type='submit'>Submit</Button>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default Projects