import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerMiddleware, } from "react-router-redux";
import { Route, Switch } from 'react-router-dom';
import NavbarContainer from '../containers/NavbarContainer';
import Login from '../components/Login/Login';
import Home from '../components/Home/Home';
import DashboardContainer from '../containers/DashboardContainer';
import Portfolio from '../components/Portfolios/Portfolio';
import Portfolios from '../components/Portfolios/Portfolios';
import Companies from '../containers/CompanyListContainer';
import PrivateRoute from '../containers/PrivateRoute';
import CompanyContainer from '../containers/CompanyContainer';
import rootReducer from '../reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, middleware)
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <NavbarContainer />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path="/dashboard" component={DashboardContainer} />
              <Route exact path='/companies' component={Companies} />
              <Route exact path='/companies/:id' component={CompanyContainer} />
              <Route exact path='/portfolios' component={Portfolios} />
              <Route exact path='/portfolios/:id' component={Portfolio} />
            </Switch>
          </div>
        </ConnectedRouter >
      </Provider>
    );
  }
}
