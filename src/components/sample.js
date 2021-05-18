import React, { useState, useEffect } from "react";
import Projects from "./Projects";
import TableData from "./generics/TableData";
import "../css/forms.css";
import "../css/table.css";

const current_projects = [
  {
    image: "nn.png",
    title: "title1",
    description: "description 1",
    githubLink: "link1",
    siteLink: "link22"
  },
  {
    image: "njj.png",
    title: "title2",
    description: "description 2",
    githubLink: "link2",
    siteLink: "link33"
  },

];


const BlogLayout = () => {
  const [projects, setProjects] = useState(current_projects);

  const getUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    const data = await response.json();
    setProjects(data);
  
  }

  useEffect(() => {
    getUsers();
  }, [])

  const handleProjectSave = (enteredProjectData) => {
    setProjects((prevProjects) => {
      return [enteredProjectData, ...prevProjects];
    });
  };

  return (
    <div>
      <Projects onProjectSave={handleProjectSave} />
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
                image={project.name}
                title={project.username}
                description={project.email}
                githubLink={project.githubLink}
                siteLink={project.siteLink}
              />
            ))}
        </table>
      </div>
    </div>
  );
};

export default BlogLayout;
