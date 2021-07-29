import React from "react";
import { Link } from 'react-router-dom';

const TableData = ({ image, title, description, githubLink, siteLink, editPath}) => {
  return (
      <tr>
        <td><span>{image}</span></td>
        <td><span>{title}</span></td>
        <td><span>{description}</span></td>
        <td><span>{githubLink}</span></td>
        <td><span>{siteLink}</span></td>
        <td><span><Link to={editPath} className="btn btn--solid btn--medium">View</Link></span></td>
      </tr>

  );
};

export default TableData;
