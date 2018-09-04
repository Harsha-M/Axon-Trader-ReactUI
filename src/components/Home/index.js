import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeImg from './img/home.png';
import CredentialsTable from './CredentialsTable';
import credentials from './credentials';
import './styles.css';

class Home extends Component {

  render() {
    return (
      <div className="jumbotron jumbotron-axon">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={homeImg} className="img-fluid" alt="homepage graphic" />
            </div>
            <div className="col-md-6 text-right">
              <h1 className="jumbotron-heading">The Trader</h1>
              <p className="lead text-muted">
                Welcome to the proof of concept of Axon Trader. This sample is
                created to showcase axon capabilities. Next to
                that we wanted to create a cool app with a nice front-end that we
                can really use as a showcase.
              </p>
              <p className="lead text-info">
                If you are logged in, you can go to your dashboard.
              </p>
              <Link className="btn btn-primary" to={'/dashboard'}>Dashboard</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h1 className="jumbotron-heading">Welcome</h1>
              <p className="lead text-info">
                Have fun playing with the trader
              </p>
              <p className="lead text-muted">
                There are a few things implemented.
                You can choose the company to trade stock items for.
                Before you can use them you need to login.
              </p>
              <h4>Available Credentials</h4>
              <CredentialsTable credentials={credentials} />
            </div>
            <div className="col-md-6 text-right">
              <h2>Check the stocks</h2>
              <p>If you have logged in, you can go to the companies</p>
              <Link className="btn btn-link" to={'/companies'}>To the items ></Link>
              <hr />
              <h2>Executed trades</h2>
              <p>Trace all executed trades using the sockjs connection</p>
              <button type="button" disabled className="btn btn-link">Executed trades ></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;