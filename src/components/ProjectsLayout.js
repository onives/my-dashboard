import React, { useState, useContext, useEffect} from "react";
import Projects from "./Projects";
import TableData from "./generics/TableData";
import DashboardNav from './DashboardNav';
import Card from './generics/Card';
import "../css/forms.css";
import "../css/table.css";
import axios from 'axios';
import AuthContext from './auth/auth-context';


const ProjectsLayout = () => {
  const [projects, setProjects] = useState([]);
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  const handleProjectSave = ({image, title, description, githubLink, siteLink}) => {

    axios.post("http://localhost:4000/projects", {image, title, description, githubLink, siteLink}, {headers: { 'Authorization': `Bearer ${token}`}})
    .then(res=>{
      console.log(res)
      
    })
    .catch(error=>{
      console.log(error)
    })
  };

  useEffect(()=>{

    axios.get("http://localhost:4000/projects", {headers: { 'Authorization': `Bearer ${token}`}})
    .then(res=>{
      console.log(res)
      setProjects(res.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }, [token]);
  
  const handleProjectEdit = ()=>{

  }

  const handleProjectDelete = ()=>{

  }

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
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Github Link</th>
              <th>Site Link</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          {projects.length &&
            projects.map((project) => (
              <TableData
                key={project._id}
                editHandler={handleProjectEdit}
                deleteHandler={handleProjectDelete}
                image={project.image}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                siteLink={project.siteLink}
              />
            ))}
        </table>
      </div>
    </div>
  );
};

export default ProjectsLayout;
