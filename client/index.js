import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import store from './store';
import './socket';
import './sass/index.scss';

import { SiteHeader, CreateClassroom, ClassroomView } from './components';
import Routes from './routes';

const RouteToLayout = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

const MainLayout = () => (
  <Fragment>
    <SiteHeader bgColor="transparent" />
    <div className="section">
      <div className="container">
        <Routes />
      </div>
    </div>
  </Fragment>
);

const AltLayout = () => (
  <Fragment>
    <SiteHeader />
    <Routes />
  </Fragment>
);

const ClassroomLayout = () => (
  <Fragment>
    <Switch>
      <Route exact path="/classroom" component={CreateClassroom} />
      <Route path="/classroom/r/:room" component={ClassroomView} />
    </Switch>
  </Fragment>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <RouteToLayout path="/classroom" component={ClassroomLayout} />
        <RouteToLayout exact path="/messages" component={AltLayout} />
        <RouteToLayout component={MainLayout} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
);
