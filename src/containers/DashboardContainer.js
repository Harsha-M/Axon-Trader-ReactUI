import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard/Dashboard';
import * as dashboardActionCreators from '../actions/dashboard'

class DashboardContainer extends Component {

  componentDidMount() {
    this.props.dashboardActions.fetchDashboard();
  }

  render() {
    const { dashboard } = this.props;
    return (
      <div className="container">
        <h1 className="mt-5">
          Dashboard
          <small>Your overview of everything you have and want to know</small>
        </h1>
        <Dashboard dashboard={dashboard} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dashboardActions: bindActionCreators(dashboardActionCreators, dispatch)
  }
}

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
