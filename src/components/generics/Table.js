import React from "react";

const Table = ({ blogs }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog, index) => (
          <tr key={index}>
            <td>{blog.title}</td>
            <td>{blog.paragraph}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
