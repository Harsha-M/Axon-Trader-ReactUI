import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">The trader</h1>
          <p className="lead text-muted">
            Welcome to the proof of concept of Axon Trader. This sample is
            created to showcase axon capabilities. Next to
            that we wanted to create a cool app with a nice front-end that we
            can really use as a showcase.
          </p>
          <p className="lead text-muted">
            If you are logged in, you can go to your dashboard.
          </p>
          <Link className="btn btn-primary" to={'/dashboard'}>Dashboard</Link><br />
          <Link className="btn btn-default" to={'/login'}>Login</Link>
        </div>
      </div>
    )
  }
}

export default Home;