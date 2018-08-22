import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataTable from './DataTable';

class Company extends Component {

  render() {

    const { isFetching, error, data } = this.props.company;

    if (error) {
      return (
        <div className="page-header">
          <h1>Error loading page! {error.message}</h1>
        </div>
      );
    }

    if (isFetching) {
      return (
        <div className="page-header">
          <h1>Loading...</h1>
        </div>
      );
    }

    if (!this.props.company) {
      return null;
    }

    return (
      <div>
        <div className="page-header">
          <h1>{data.name} <small>Value: {data.value} # Shares: {data.shares}</small></h1>
        </div>
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/companies">Companies</Link></li>
          <li className="active">{data.name}</li>
        </ol>
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-primary btn-block" type="submit">Buy</button>
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary btn-block" type="submit">Sell</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h2>Sell Orders</h2>
            <DataTable data={data.sellOrders} />
          </div>
          <div className="col-md-4">
            <h2>Buy Orders</h2>
            <DataTable data={data.buyOrders} />
          </div>
          <div className="col-md-4">
            <h2>Executed Trades</h2>
            <DataTable data={data.executedTrades} />
          </div>
        </div>

      </div>
    );
  }
}

export default Company;