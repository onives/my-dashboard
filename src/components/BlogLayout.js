import React, { useState, useContext, useEffect } from "react";
import Blogs from "./Blogs";
import TableData from "./generics/TableData";
import DashboardNav from './DashboardNav'
import Card from './generics/Card'
import "../css/forms.css";
import "../css/table.css";
import axios from 'axios';
import AuthContext from './auth/auth-context';
import env from 'react-dotenv';


const BlogLayout = () => {
  const [blogs, setBlogs] = useState([]);
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  const handleBlogSave = ({image, title, description, link}) => {

    axios.post(`${env.remoteApi}blogs`, {image, title, description,link}, {headers: { 'Authorization': `Bearer ${token}`}})
    .then(res=>{
    })
    .catch(error=>{
      console.log(error)
    })
   
  };

  useEffect(()=>{
    axios.get(`${env.remoteApi}blogs`, {headers: { 'Authorization': `Bearer ${token}`}})
    .then(res=>{
      setBlogs(res.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }, [token]);

  return (
    <div>
      <DashboardNav />
      <Card className='insideForm'>
        <Blogs onBlogSave={handleBlogSave} />
      </Card>
      <h2>Your available blogs</h2>
      <div className="tabula-data">
          {blogs.length &&
            blogs.map((blog) => (
              <TableData
                key={blog._id}
                editPath={`/blogs/${blog._id}`}
                image={blog.image}
                title={blog.title}
                description={blog.description}
                siteLink={blog.link}
              />
            ))}
      </div>
    </div>
  );
};

export default BlogLayout;
