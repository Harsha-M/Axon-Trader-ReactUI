
import React, { Component } from 'react';
import PortfolioList from '../../../containers/portfolio-list';

class Portfolios extends Component {
    render() {
        return (
            <div className="container">
                <h1>All portfolios</h1>
                <span>Choose the portfolio to watch the details for</span>
                <PortfolioList />
            </div>
        )
    }
}

export default Portfolios;
