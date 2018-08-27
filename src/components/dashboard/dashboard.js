import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './dashboard.scss';
import { Table } from 'react-bootstrap';
import * as AppConstants from '../../constants';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="container">
                <div><h1>Dashboard</h1>
                    <div>Your overview of everything you have and want to know</div>
                </div>
                <div>
                    <div className={styles.dashboardDetails}>
                        <div className="col-sm-6">
                            <h3>Portfolio</h3>
                            <div>
                                Here you see what you have and what is reserved.
                    </div><br />
                            <div className={styles.tableTile}>Money</div>
                            <Table striped condensed hover>
                                <tbody>
                                    <tr key='1'>
                                        <td>Available</td>
                                        <td>{this.props.user.moneyAvailable}</td>
                                    </tr>
                                    <tr key='2'>
                                        <td>Reserved</td>
                                        <td>{this.props.user.reserved}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className={styles.tableTile}>Trade items</div>
                            <Table striped condensed hover>
                                <thead>
                                    <tr>
                                        <th onClick={this.sortTable} >Name</th>
                                        <th onClick={this.sortTable}>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderItemsOfType(this.props.user.itemsAvailable)}
                                </tbody>
                            </Table>
                            <div className={styles.tableTile}>Trade items reserved</div>
                            <Table striped condensed hover>
                                <thead>
                                    <tr>
                                        <th onClick={this.sortTable} >Name</th>
                                        <th onClick={this.sortTable}>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderItemsOfType(this.props.user.reservedItems)}
                                </tbody>
                            </Table>
                        </div>
                        <div className="col-sm-6">
                            <h3 className={styles.tableTile}>Transactions</h3>
                            <div>
                                Here you see what you have and what is reserved.
                            </div>
                            <Table striped condensed hover>
                                <thead>
                                    <tr>
                                        <th onClick={this.sortTable} >Name</th>
                                        <th onClick={this.sortTable}>Type</th>
                                        <th onClick={this.sortTable} ># Items</th>
                                        <th onClick={this.sortTable}>Price</th>
                                        <th onClick={this.sortTable} >Executed</th>
                                        <th onClick={this.sortTable}>State</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderTransactions(this.props.user.transactions)}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function renderItemsOfType(items) {
        return items.map((item, i) => {
            return (
                <tr key={i}>
                    <td> {item.name}</td>
                    <td> {item.count}</td>
                </tr>
            )
        });
}

function renderTransactions(transactions) {
    return transactions.map((transaction, i) => {
        return (
            <tr key={i}>
            <td>{transaction.company}</td>
            <td>{transaction.type}</td>
            <td>{transaction.itemsCount}</td>
            <td>{transaction.price}</td>
            <td>{transaction.executedCount}</td>
            <td>{transaction.state}</td>
        </tr>
        )
    });
}

function matchStateToProps(state) {
    return {
        user: state.profile.user
    };
}

export default connect(matchStateToProps)(Dashboard);