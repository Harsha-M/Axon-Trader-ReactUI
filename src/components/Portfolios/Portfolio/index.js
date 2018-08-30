
import React, { Component } from 'react';
import styles from './portfolio_detail.scss';
import { connect } from 'react-redux';
import { addMoney, getPortfolioById, addMoreItemsToCurrentProfile } from '../../../actions/portfolio';
import { bindActionCreators } from 'redux';

class Prtfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            itemsCount: 0,
            selectedItem: 'select',
        }

        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getPortfolioById(id);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { amount, itemsCount, selectedItem } = this.state;


        if (this.props.portfolio.isFetching) {
            return <h1>Loading...</h1>;
        }

        if (!this.props.portfolio.data) {
            return null;
        }

        return (
            <div className="container">
                <h3 className="mt-5">
                    Profile detail : {this.props.portfolio.data.portfolioName}
                </h3>
                <div>Here you can add money and items to the portfolio.</div>
                <div className="col-sm-6">
                    <div className={styles.content}>
                        <h3>Money</h3>
                        <div>
                            <div className="pull-left">Available</div>
                            <div className={styles.amount}>{this.props.portfolio.data.moneyAvailable}</div>
                        </div><br />
                        <div>
                            <div className="pull-left">Reserved</div>
                            <div className={styles.amount}>{this.props.portfolio.data.reserved}</div>
                        </div><br />
                        <h3>Items In possession</h3>
                        <div>{itemsInPossession(this.props.portfolio.data.itemsAvailable)}</div>
                        <h3>Reserved</h3>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className={styles.content}>
                        <input name="amount" value={amount} onChange={this.handleChange} />
                        <button className="btn" onClick={() => this.props.addMoney(amount)}>Add Money</button>
                    </div>
                    <div className={styles.content}>
                        <select name="selectedItem" onChange={this.handleChange} value={selectedItem}>
                        <option value="select">Select</option>
                        {
                            this.props.portfolio.data.itemsAvailable.map(item => <option value={item.name} key={item.name}> {item.name} </option>)
                        }
                        </select>
                        <input name="itemsCount"  value={itemsCount} onChange={this.handleChange} placeholder="0" />
                        <button className="btn" disabled={selectedItem === 'select'} onClick={() => this.props.addMoreItemsToCurrentProfile(selectedItem, itemsCount, this.props.portfolio.data.itemsAvailable)}>Add Items</button>
                    </div>
                </div>
            </div>
        )
    }
}

function itemsInPossession(items) {
    return items.map((item, i) => {
        return (
            <div key={i}>
                <span>{item.name}</span>:
                <span> {item.count}</span>
            </div>
        )
    });
}

function mapStateToProps(state) {
    return {
        portfolio: state.portfolios.activePortfolio
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addMoney: addMoney, getPortfolioById: getPortfolioById, addMoreItemsToCurrentProfile: addMoreItemsToCurrentProfile }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Prtfolio);
