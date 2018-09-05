import React from 'react';

const CredentialsTable = ({ credentials }) =>
  <table className="table table-striped table-credentials">
  <thead>
    <tr>
      <th>User</th>
      <th>Password</th>
    </tr>
  </thead>
    <tbody>
        {
          credentials.map(user => {
            return (
              <tr key={user.userName}>
                <td className="text-info">{user.userName}</td>
                <td>{user.password}</td>
              </tr>
            )
          })
        }
    </tbody>
  </table>;

export default CredentialsTable;
