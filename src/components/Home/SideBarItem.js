import React from 'react';
import { Link } from 'react-router-dom';

const SideBarItem = (props) => {
  return (
    <div>
      <h4 className="homepage-title">{props.header}</h4>
      <p className="text-homepage">{props.description}</p>
      <Link className="btn btn-link text-homepage" to={props.linkTo}>{props.linkName} ></Link>
    </div>
  );
}

export default SideBarItem;
