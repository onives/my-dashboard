import React, { useState, useContext, useEffect} from "react";
import Projects from "./Projects";
import TableData from "./generics/TableData";
import DashboardNav from './DashboardNav';
import Card from './generics/Card';
import "../css/forms.css";
import "../css/table.css";
import axios from 'axios';
import AuthContext from './auth/auth-context';
import env from 'react-dotenv';


const ProjectsLayout = () => {
  const [projects, setProjects] = useState([]);
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;


  const handleProjectSave = ({image, title, description, githubLink, siteLink}) => {

    axios.post(`${env.remoteApi}projects`, {image, title, description, githubLink, siteLink}, {headers: { 'Authorization': `Bearer ${token}`}})
    .then(res=>{

    })
    .catch(error=>{
      console.log(error)
    })
  };

  useEffect(()=>{

    axios.get(`${env.remoteApi}projects`, {headers: { 'Authorization': `Bearer ${token}`}})
    .then(res=>{
      setProjects(res.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }, [token]);
  

  

  return (
    <div>
      <DashboardNav />
      <Card className='insideForm'>
        <Projects onProjectSave={handleProjectSave} />
      </Card>
      <h2>Your available projects</h2>
      <div className="tabula-data">
          {projects.length &&
            projects.map((project) => (
              <TableData
                key={project._id}
                editPath={`/projects/${project._id}`}
                image={project.image}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                siteLink={project.siteLink}
              />
            ))}
      </div>
    </div>
  );
};

export default ProjectsLayout;
