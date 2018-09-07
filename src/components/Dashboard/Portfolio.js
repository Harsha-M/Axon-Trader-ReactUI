import React from 'react';

const Portfolio = (props) => {
  return (
    <div>
      <h3 className="dashboard-title mt-5">{props.title}</h3>
      <p className="text-dashboard">{props.description}</p>
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>Money</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Available</td>
            <td>{props.moneyAvailable}</td>
          </tr>
          <tr>
            <td>Reserved</td>
            <td>{props.reserved}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Portfolio;
