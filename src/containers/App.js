import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerMiddleware, } from "react-router-redux";
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header/header';
import Login from '../components/login/login';
import Landing from '../components/landing/landing';
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
          <div className="container-fluid">
            <Header />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/Login' component={Login} />
              <Route exact path='/Landing' component={Landing} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route exact path='/companies' component={Companies} />
              <Route exact path='/companies/:id' component={CompanyContainer} />
              <Route exact path='/Data' component={Data} />
              <Route exact path='/Portfolio' component={Portfolio} />
              <Route exact path='/Portfolio_Detail/:id' component={PortfolioDetail} />
            </Switch>
          </div>
        </ConnectedRouter >
      </Provider>
    );
  }
}
