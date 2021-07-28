import React from "react";
import {Button} from './Button'

const TableData = ({ image, title, description, githubLink, siteLink, editHandler, deleteHandler}) => {
  return (
    <tbody>
      <tr>
        <td>{image}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{githubLink}</td>
        <td>{siteLink}</td>
        <td><Button onClick={editHandler}>Edit</Button></td>
        <td><Button onClick={deleteHandler}>Delete</Button></td>
      </tr>
    </tbody>
  );
};

export default TableData;
