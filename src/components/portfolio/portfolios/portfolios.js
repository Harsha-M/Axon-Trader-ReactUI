
import React, { Component } from 'react';
import PortfolioList from '../../../containers/portfolio-list';
import styles from './portfolios.scss';
class Portfolio extends Component {

    render() {
        return (
            <div className={styles.portfolioContainer}>
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