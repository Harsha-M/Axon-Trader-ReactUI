
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PortfoliosList extends Component {

    renderList() {
        return this.props.portfolios.map((portfolio) => {
            return (
                <div key={portfolio.id} className="portfolio-container">
                    <li className="list-group-item">{portfolio.portfolioName}</li>
                </div>
            )
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-6">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        portfolios: state.portfolios
    };
}


export default connect(mapStateToProps)(PortfoliosList);