import React from 'react';
import { Link } from 'react-router-dom';

const SideBarItem = (props) => {
  return (
    <div>
      <h4 className="text-white">{props.header}</h4>
      <p className="font-weight-light text-white">{props.description}</p>
      <Link className="btn btn-link text-info" to={props.linkTo}>{props.linkName} ></Link>
    </div>
  );
}

export default SideBarItem;
