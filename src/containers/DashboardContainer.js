import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard';
import * as dashboardActionCreators from '../actions/dashboard'

class DashboardContainer extends Component {

  componentDidMount() {
    this.props.dashboardActions.getPortfolioByUserId(this.props.user.userId);
  }

  render() {
    const { dashboard } = this.props;
    return (
      <div className="container">
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
    dashboard: state.dashboard,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
