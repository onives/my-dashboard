import React from "react";
import {Button} from './Button'
import { Link } from 'react-router-dom';

const TableData = ({ image, title, description, githubLink, siteLink, editPath}) => {
  return (
    <tbody>
      <tr>
        <td>{image}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{githubLink}</td>
        <td>{siteLink}</td>
        <td><Button><Link to={editPath}>View</Link></Button></td>
      </tr>
    </tbody>
  );
};

export default TableData;
