import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: ComposedComponent, ...rest}) => {

  class Authentication extends Component {

    // redirect if not authenticated; otherwise, return the component imputted into <PrivateRoute />
    handleRender(props) {
      console.log("redirect")
      if (!this.props.authenticated) {
        return <Redirect to="/login"/>
      } else {
        return <ComposedComponent {...props}/>
      }
    }

    render() {
      return (
        <Route {...rest} render={this.handleRender.bind(this)}/>
      )
    }
  }

  function mapStateToProps(state) {
    return {authenticated: state.profile.successfullLogin};
  }

  const AuthenticationContainer = connect(mapStateToProps)(Authentication)
  return <AuthenticationContainer/>
}

export default PrivateRoute;
