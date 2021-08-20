import React, { useState, useContext, useEffect} from "react";
import About from "./About";
import "../css/forms.css";
import DashboardNav from './DashboardNav';
import Card from './generics/Card';
import axios from 'axios';
import AuthContext from './auth/auth-context';
import env from 'react-dotenv';

const AboutLayout = () => {
  const [bio, setBio] = useState('');
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  const handleAboutSave = (enteredAboutData) => {
    const bio = enteredAboutData
   
    axios.patch(`${env.remoteApi}user/me`, {bio}, {headers: { 'Authorization': `Bearer ${token}`}})
    .then(res=>{
    })
    .catch(err=>{
      console.log(err)
    })
    
  };

  useEffect(()=>{
    axios.get(`${env.remoteApi}user/me`, {headers: { 'Authorization': `Bearer ${token}`}})
    .then(res=>{
      setBio(res.data.bio)
    })
    .catch(error=>{
      console.log(error)
    })
  }, [token])
  
  return (
    <>
      <DashboardNav/>
      <Card className='insideForm'>
        <About onAboutSave={handleAboutSave} />
      </Card>
      <div>
          <p>{bio}</p>
      </div>
    </>
  );
};

export default AboutLayout;
