
import React, { Component } from 'react';
import styles from './portfolio_detail.scss';
import { connect } from 'react-redux';

class PortfolioDetail extends Component {

    render() {
        console.log('props', this.props);
        return (
            <div className={styles.portfolioDetailContainer}>
                {this.props.portfolio.portfolioName}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        portfolio: state.portfolios.items[state.portfolios.activePortfolio]
    };
}

export default connect(mapStateToProps)(PortfolioDetail);