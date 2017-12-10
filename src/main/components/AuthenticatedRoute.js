import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import {isLoggedIn} from "../services/Auth";

class AuthenticatedRoute extends Component {
  static propTypes = {
    component: PropTypes.func,
    path: PropTypes.string,
    name: PropTypes.string,
    exact: PropTypes.bool,
    strict: PropTypes.bool
  };

  render() {
    let {component, path, name, exact, strict} = this.props;
    let routeProps = {
      path,
      component,
      name,
      exact,
      strict
    };
    if (isLoggedIn()) {
      return <Route {...routeProps} />;
    }
    return null;
  }
}

export default AuthenticatedRoute;