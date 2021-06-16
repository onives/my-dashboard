import React, { useState } from "react";
import About from "./About";
import "../css/forms.css";
import DashboardNav from './DashboardNav'
import Card from './generics/Card'

const current_about = [ "I am having a good time. edit me anytime you want!"];

const BlogLayout = () => {
  const [about, setAbout] = useState(current_about);

  const handleAboutSave = (enteredAboutData) => {
    setAbout(enteredAboutData)
  };

  return (
    <div>
      <DashboardNav/>
      <Card className='insideForm'>
        <About onAboutSave={handleAboutSave} />
      </Card>
      <div>
          <p>{about}</p>
      </div>
    </div>
  );
};

export default BlogLayout;
