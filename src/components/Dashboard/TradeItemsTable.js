import React from 'react';

const TradeItemsTable = ({ items, tableName }) => {
  return (
    <div className="text-dashboard">
      <h4 className="dashboard-title mt-5 mb-3 text-white">{tableName}</h4>
      <table className="table table-trade-items">
        <thead>
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
