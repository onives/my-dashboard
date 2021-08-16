import React from "react";
import { Link } from 'react-router-dom';
import Card from "./Card";

const TableData = ({ image, title, description, githubLink, siteLink, editPath}) => {
  return (
    <Card className="listings">
      <ul className="un-ordered-list">
        <li><span className="list-title">Image: </span> {image}</li>
        <li><span className="list-title">Title: </span>{title}</li>
        <li><span className="list-title">Description: </span>{description}</li>
        <li><span className="list-title">GithubLink: </span>{githubLink}</li>
        <li><span className="list-title">SiteLink: </span>{siteLink}</li>
        <li><Link to={editPath} className="btn btn--solid btn--medium">View</Link></li>
      </ul>
      </Card>

  );
};

export default TableData;
