
import React, { Component } from 'react';
import PortfolioList from '../../containers/portfolio-list';
import store, { Provider } from 'react-redux';
class Portfolio extends Component {

    render() {
        return (
            <div className="portfolio-container">
                <h1>All portfolios</h1>
                <span>Choose the portfolio to watch the details for</span>
                {/* <Provider store={store}> */}
                    <PortfolioList/>
                {/* </Provider> */}
            </div>
        )
    }
}

export default Portfolio;