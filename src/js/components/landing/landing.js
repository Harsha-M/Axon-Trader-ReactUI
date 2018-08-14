import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PortfolioList from '../../containers/portfolio-list';

class Landing extends Component {

    render() {
        return <div>
            <div className="title-container">
                <h1>The trader</h1>
                <p>Welcome to the proof of concept of Axon Trader. This sample is created to showcase axon capabilities. Next to
                    that we wanted to create a cool app with a nice front-end that we can really use as a showcase.</p>
                <p>If you are logged in, you can go to your dashboard.</p>

                <Link to={'/Dashboard'}>dashboard</Link>
                <ul><li><Link to={'/Login'}>Login</Link></li></ul>
                <PortfolioList/>
            </div>
        </div>
    }
}

export default Landing;