
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect, } from 'react-redux';
import { Table } from 'react-bootstrap';
import { selectPortfolio } from '../actions/action_select_portfolio';
import { bindActionCreators } from 'redux';

class PortfoliosList extends Component {
    renderList() {
        if(this.props.portfolios) {
            return this.props.portfolios.map((portfolio, i) => {
                return (
                    <tr key={portfolio.id}>
                        <td>{portfolio.portfolioName}</td>
                        <td>{portfolio.moneyAvailable}</td>
                        <td>{formatItemsAvailable(portfolio.itemsAvailable)}</td>
                        <td onClick={() => this.props.selectPortfolio(i)}>details</td>
                    </tr>
                )
            });
        }
    }

    render() {
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
        portfolios: state.portfolios.items
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectPortfolio: selectPortfolio}, dispatch);
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