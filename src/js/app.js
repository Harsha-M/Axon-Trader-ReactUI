import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import Header from './components/header/header';
import Login from './components/login/login';
import Landing from './components/landing/landing';
import Dashboard from './components/dashboard/dashboard';
import Portfolio from './components/portfolio/portfolio';
import Companies from './components/companies/companies';
import Data from './components/data/data';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import rootReducer from './reducers/index';
import '../css/style.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
          </Switch>
          </div>
          {/* </Provider> */}
      </BrowserRouter >
    );
  }
}
render(<Provider store={createStoreWithMiddleware(rootReducer)}><App /></Provider>, document.getElementById('app'));

