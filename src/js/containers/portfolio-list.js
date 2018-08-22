
import React, { Component } from 'react';
import { connect, } from 'react-redux';
import { Table } from 'react-bootstrap';
import { selectPortfolio } from '../actions/action_select_portfolio';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getPortfolios } from '../actions/action_get_portfolios';

class PortfoliosList extends Component {

    componentDidMount() {
        this.props.getPortfolios();
    }

    renderList() {
        if(this.props.portfolios.items) {
            return this.props.portfolios.items.map((portfolio, i) => {
                return (
                    <tr key={portfolio.id}>
                        <td>{portfolio.portfolioName}</td>
                        <td>{portfolio.moneyAvailable}</td>
                        <td>{formatItemsAvailable(portfolio.itemsAvailable)}</td>
                        <td>
                            <Link to={`/Portfolio_Detail/${portfolio.id}`}>details</Link>
                        </td>
                    </tr>
                )
            });
        }
    }

    render() {

        if (this.props.portfolios.isFetching) {
            return <h1> Loading </h1>
        }

        return (
            <Table striped condensed hover>
                <thead>
                    <tr>
                        <th onClick={ this.sortTable } >Name</th>
                        <th onClick={ this.sortTable }>Money available</th>
                        <th onClick={ this.sortTable }>Items available</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderList()}
                </tbody>
            </Table>
        )
    }
}

function sortTable() {
    if (order === 'desc') {
      this.refs.table.handleSort('asc', 'name');
      order = 'asc';
    } else {
      this.refs.table.handleSort('desc', 'name');
      order = 'desc';
    }
  }

function mapStateToProps(state) {
    return {
        portfolios: state.portfolios.portfolios
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getPortfolios: getPortfolios}, dispatch);
}

function formatItemsAvailable(cell) {
    var allData = ' ';
    for (var i = 0; i < cell.length; i++) {
        var data = cell[i];
        if (i == 0) allData += data.name;
        else allData += ", " + data.name;
    };
    return allData;
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfoliosList);