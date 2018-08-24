import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './landing.scss';

class Home extends Component {

    render() {
        return (
            <div className="container">
                <h1>The trader</h1>
                <p>Welcome to the proof of concept of Axon Trader. This sample is created to showcase axon capabilities. Next to
                    that we wanted to create a cool app with a nice front-end that we can really use as a showcase.</p>
                <p>If you are logged in, you can go to your dashboard.</p>
                <Link to={'/dashboard'}>dashboard</Link><br/>
                <Link to={'/login'}>Login</Link>
            </div>
        )
    }
}

export default Home;