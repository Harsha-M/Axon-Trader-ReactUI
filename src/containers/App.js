import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerMiddleware, } from "react-router-redux";
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Login from '../components/login/login';
import Home from '../components/Home/Home';
import Dashboard from '../components/dashboard/dashboard';
import Portfolio from '../components/portfolio/portfolios/portfolios';
import PortfolioDetail from '../components/portfolio/portfolio-detail/portfolio_detail';
import Companies from '../containers/CompanyListContainer';
import PrivateRoute from '../containers/PrivateRoute';
import Data from '../components/data/data';
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
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route exact path='/companies' component={Companies} />
              <Route exact path='/companies/:id' component={CompanyContainer} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/Portfolio_Detail/:id' component={PortfolioDetail} />
            </Switch>
          </div>
        </ConnectedRouter >
      </Provider>
    );
  }
}
