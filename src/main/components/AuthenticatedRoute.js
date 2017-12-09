import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

class AuthenticatedRoute extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    authenticated: PropTypes.func,
    component: PropTypes.func,
    path: PropTypes.string,
    name: PropTypes.string,
    exact: PropTypes.bool,
    strict: PropTypes.bool
  };

  render() {
    let {authenticated, component, path, name, exact, strict} = this.props;
    let routeProps = {
      path,
      component,
      name,
      exact,
      strict
    };
    if (authenticated()) {
      return <Route {...routeProps} />;
    }
    return <Redirect to="/" />;
  }
}

export default AuthenticatedRoute;