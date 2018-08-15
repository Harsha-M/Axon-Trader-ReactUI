import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import Header from './components/header/header';
import Login from './components/login/login';
import Landing from './components/landing/landing';
import Dashboard from './components/dashboard/dashboard';
import Portfolio from './components/portfolio/portfolios/portfolios';
import PortfolioDetail from './components/portfolio/portfolio-detail/portfolio_detail';
import Companies from './components/companies/companies';
import Data from './components/data/data';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import createHistory from "history/createBrowserHistory";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";

import '../css/style.scss';

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
      <ConnectedRouter history={history}>
    {/* <Provider store={store}> */}
      <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Landing} /> 
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Landing' component={Landing} />
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route exact path='/Companies' component={Companies} />
            <Route exact path='/Data' component={Data} />
            <Route exact path='/Portfolio' component={Portfolio} />
            <Route exact path='/Portfolio_Detail' component={PortfolioDetail} />
          </Switch>
          </div>
          {/* </Provider> */}
      </ConnectedRouter >
    );
  }
}
render(<Provider store={store}><App /></Provider>, document.getElementById('app'));