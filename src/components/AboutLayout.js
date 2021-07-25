import React, { useState, useContext} from "react";
import About from "./About";
import "../css/forms.css";
import DashboardNav from './DashboardNav'
import Card from './generics/Card';
import axios from 'axios';
import AuthContext from './auth/auth-context';

const current_bio = [ "I am having a good time. edit me anytime you want!"];

const AboutLayout = () => {
  const [bio, setBio] = useState(current_bio);
  const authCtx = useContext(AuthContext);

  const handleAboutSave = (enteredAboutData) => {
    setBio(enteredAboutData)
  };
  const token = authCtx.token
  // console.log(token)
  axios.patch("http://localhost:4000/user/me", {bio}, {headers: { 'Authorization': `Bearer ${token}`}})
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
