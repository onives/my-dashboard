import React from "react";
import {Button} from './Button'
import { Link } from 'react-router-dom';

const TableData = ({ image, title, description, githubLink, siteLink, deleteHandler, editPath}) => {
  return (
    <tbody>
      <tr>
        <td>{image}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{githubLink}</td>
        <td>{siteLink}</td>
        <td><Button><Link to={editPath} >Edit</Link></Button></td>
        <td><Button onClick={deleteHandler}>Delete</Button></td>
      </tr>
    </tbody>
  );
};

export default TableData;
