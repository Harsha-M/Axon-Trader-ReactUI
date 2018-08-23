
import React, { Component } from 'react';
import { connect, } from 'react-redux';
import { Table } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getPortfolios } from '../actions/action_get_portfolios';

class PortfoliosList extends Component {

  constructor(props) {
    super(props);
    this.sortClickHandler = this.sortClickHandler.bind(this);
    this.sortItems = this.sortItems.bind(this);
    this.formatItemsAvailable = this.formatItemsAvailable.bind(this);
    this.state = {
      sortedBy: '',
      sortOrderAsc: false
    }
  }

  sortItems(items, column, asc){
    if(column === 'name') {

      if(asc) {
        return items.sort((a, b) => {
          var nameA = a.portfolioName.toUpperCase();
          var nameB = b.portfolioName.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      } else {
        return items.sort((a, b) => {
          var nameA = a.portfolioName.toUpperCase();
          var nameB = b.portfolioName.toUpperCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
      }
    }

  if(column === 'money') {
    if(asc) {
      return items.sort(function (a, b) {
        return a.moneyAvailable - b.moneyAvailable;
      });
    } else {
      return items.sort(function (a, b) {
        return b.moneyAvailable - a.moneyAvailable;
      });
    }
  }
  else if(column === 'items') {

    if(asc) {
      // here only checking the name in the first index
      // because formatItemsAvailable function always returns
      // first index at the begining og the string when displaying
      return items.sort((a, b) => {
        var nameA = a.itemsAvailable[0].name.toUpperCase();
        var nameB = b.itemsAvailable[0].name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else {
      return items.sort((a, b) => {
        var nameA = a.itemsAvailable[0].name.toUpperCase();
        var nameB = b.itemsAvailable[0].name.toUpperCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
    }

  }

}

  sortClickHandler(sortColumn) {
    const { sortedBy } = this.state;

    this.setState((prevState) => {
      const asc = sortedBy === sortColumn ? !prevState.sortOrderAsc : true
      return {
        sortedBy: sortColumn,
        sortOrderAsc: asc,
        items: this.sortItems(prevState.items, sortColumn, asc)
      }
    });
  }

  formatItemsAvailable(cell) {
    var allData = ' ';
    for (var i = 0; i < cell.length; i++) {
      var data = cell[i];
      if (i == 0) allData += data.name;
      else allData += ", " + data.name;
    };
    return allData;
  }

  componentDidMount() {
    this.props.getPortfolios();
  }

  static getDerivedStateFromProps(props) {
    return {
      items: props.portfolios.items
    }
  }

  renderList() {
    const { items } = this.state;
    return items && items.map((portfolio, i) => {
      return (
        <tr key={portfolio.id}>
          <td>{portfolio.portfolioName}</td>
          <td>{portfolio.moneyAvailable}</td>
          <td>{this.formatItemsAvailable(portfolio.itemsAvailable)}</td>
          <td>
            <Link to={`/Portfolio_Detail/${portfolio.id}`}>details</Link>
          </td>
        </tr>
      )
    });
  }

  render() {

    if (this.props.portfolios.isFetching) {
      return <h1> Loading </h1>
    }

    return (
      <Table striped condensed hover>
        <thead>
          <tr>
            <th>
              Name
              <button className="btn btn-default" onClick={() => this.sortClickHandler('name')} >
                Sort
              </button>
            </th>
            <th>
              Money available
              <button className="btn btn-default" onClick={() => this.sortClickHandler('money')} >
                Sort
              </button>  
            </th>
            <th>
              Items available
              <button className="btn btn-default" onClick={() => this.sortClickHandler('items')} >
                Sort
              </button>
            </th>
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

function mapStateToProps(state) {
  return {
    portfolios: state.portfolios.portfolios
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPortfolios: getPortfolios }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfoliosList);