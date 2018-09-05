import React from 'react';

const TradeItemsTable = ({ items, tableName }) => {
  return (
    <div>
      <h4 className="mt-5 text-white">{tableName}</h4>
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(item => {
              return (
                <tr key={item.name}>
                  <td> {item.name}</td>
                  <td> {item.amount}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default TradeItemsTable;
