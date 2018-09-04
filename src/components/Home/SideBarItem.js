import React from 'react';
import { Link } from 'react-router-dom';

const SideBarItem = (props) => {

  return (
    <div>
      <h4>{props.header}</h4>
      <p>{props.description}</p>
      <Link className="btn btn-link" to={props.linkTo}>{props.linkName} ></Link>
    </div>
  );
}

export default SideBarItem;
