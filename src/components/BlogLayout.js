import React, { useState, useContext, useEffect } from "react";
import Blogs from "./Blogs";
import TableData from "./generics/TableData";
import DashboardNav from './DashboardNav'
import Card from './generics/Card'
import "../css/forms.css";
import "../css/table.css";
import axios from 'axios';
import AuthContext from './auth/auth-context';


const BlogLayout = () => {
  const [blogs, setBlogs] = useState([]);
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  const handleBlogSave = ({image, title, description, link}) => {

    axios.post("http://localhost:4000/blogs", {image, title, description,link}, {headers: { 'Authorization': `Bearer ${token}`}})
    .then(res=>{
      console.log(res)
    })
    .catch(error=>{
      console.log(error)
    })
   
  };

  useEffect(()=>{
    axios.get("http://localhost:4000/blogs", {headers: { 'Authorization': `Bearer ${token}`}})
    .then(res=>{
      console.log(res)
      setBlogs(res.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }, [token]);

  const handleBlogEdit =()=>{

  }

  const handleBlogDelete =()=>{

  }

  return (
    <div>
      <DashboardNav />
      <Card className='insideForm'>
        <Blogs onBlogSave={handleBlogSave} />
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

          {blogs.length &&
            blogs.map((blog) => (
              <TableData
                key={blog._id}
                editHandler={handleBlogEdit}
                deleteHandler={handleBlogDelete}
                image={blog.image}
                title={blog.title}
                description={blog.description}
                siteLink={blog.link}
              />
            ))}
        </table>
      </div>
    </div>
  );
};

export default BlogLayout;
