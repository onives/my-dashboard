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
    
      <div className="tabula-data">
        <table>
          <thead>
            <tr>
              <th><span>Image</span></th>
              <th><span>Title</span></th>
              <th><span>Description</span></th>
              <th><span>Github Link</span></th>
              <th><span>Site Link</span></th>
              <th><span>View</span></th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsLayout;
