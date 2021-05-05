import React from "react";
import {Button} from './Button'

const TableData = ({ image, title, description, githubLink, siteLink }) => {
  return (
    <tbody>
      <tr>
        <td>{image}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{githubLink}</td>
        <td>{siteLink}</td>
        <td><Button>Edit</Button></td>
        <td><Button>Delete</Button></td>
      </tr>
    </tbody>
  );
};

export default TableData;
