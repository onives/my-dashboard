import React, { useState } from "react";
import About from "./About";
import "../css/forms.css";
import DashboardNav from './DashboardNav'

const current_about = [ "I am having a good time. edit me anytime you want!"];

const BlogLayout = () => {
  const [about, setAbout] = useState(current_about);

  const handleAboutSave = (enteredAboutData) => {
    setAbout(enteredAboutData)
  };

  return (
    <div>
      <DashboardNav/>
      <About onAboutSave={handleAboutSave} />
      <div>
          <p>{about}</p>
      </div>
    </div>
  );
};

export default BlogLayout;
