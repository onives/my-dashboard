import React, {useState} from 'react';
import { Button } from './generics/Button'

const Projects = ({onProjectSave}) => {
    const [enteredImg, setEnteredImg] = useState('');
    const [enteredProjectTitle, setEnteredProjectTitle] = useState('');
    const [enteredProjectDescription, setEnteredProjectDescription] = useState('');
    const [enteredGithubLink, setEnteredGithubLink] = useState('');
    const [enteredSiteLink, setEnteredSiteLink] = useState('');
   

    const imgChangeHandler = (e)=>{
        setEnteredImg(e.target.value);
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

    const formSubmitHandler =(e)=>{
        e.preventDefault();

        const newProjectData = {
            image: enteredImg,
            title: enteredProjectTitle,
            description: enteredProjectDescription,
            githubLink: enteredGithubLink,
            siteLink: enteredSiteLink
        }
        
        onProjectSave(newProjectData);

        setEnteredImg('');
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
                        <input type='file' onChange={imgChangeHandler} value={enteredImg}/>
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