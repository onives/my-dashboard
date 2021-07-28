import React, { useState, useContext, useEffect} from "react";
import About from "./About";
import "../css/forms.css";
import DashboardNav from './DashboardNav'
import Card from './generics/Card';
import axios from 'axios';
import AuthContext from './auth/auth-context';

const AboutLayout = () => {
  const [bio, setBio] = useState('');
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  const handleAboutSave = (enteredAboutData) => {
    const bio = enteredAboutData
   
    axios.patch("http://localhost:4000/user/me", {bio}, {headers: { 'Authorization': `Bearer ${token}`}})
    .then(res=>{
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
    
  };

  useEffect(()=>{
    axios.get("http://localhost:4000/user/me", {headers: { 'Authorization': `Bearer ${token}`}})
    .then(res=>{
      console.log(res)
      setBio(res.data.bio)
    })
    .catch(error=>{
      console.log(error)
    })
  }, [token])
  
  return (
    <div>
      <DashboardNav/>
      <Card className='insideForm'>
        <About onAboutSave={handleAboutSave} />
      </Card>
      <div>
          <p>{bio}</p>
      </div>
    </div>
  );
};

export default AboutLayout;
