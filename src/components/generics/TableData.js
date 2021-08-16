import React from "react";
import { Link } from 'react-router-dom';

const TableData = ({ image, title, description, githubLink, siteLink, editPath}) => {
  return (
      <tr>
        <td>{image}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{githubLink}</td>
        <td>{siteLink}</td>
        <td><span><Link to={editPath} className="btn btn--solid btn--medium">View</Link></span></td>
      </tr>

  );
};

export default TableData;
