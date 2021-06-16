import React, { useState } from "react";
import Blogs from "./Blogs";
import TableData from "./generics/TableData";
import DashboardNav from './DashboardNav'
import Card from './generics/Card'
import "../css/forms.css";
import "../css/table.css";

const current_blogs = [
  {
    image: "nn.png",
    title: "title1",
    description: "description 1",
    link: "link1",
  },
  {
    image: "njj.png",
    title: "title2",
    description: "description 2",
    link: "link2",
  },
];
const BlogLayout = () => {
  const [blogs, setBlogs] = useState(current_blogs);

  const handleBlogSave = (enteredBlogData) => {
    //   setBlogs([enteredBlogData, ...blogs])
    setBlogs((prevBlogs) => {
      return [enteredBlogData, ...prevBlogs];
    });
  };

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
