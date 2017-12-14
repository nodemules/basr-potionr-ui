import React, {Component} from "react";
import {isLoggedIn} from "./AuthService";

class AuthenticatedItem extends Component {
  render() {
    if (isLoggedIn()) {
      return this.props.children;
    }
    return null;
  }
}

export default AuthenticatedItem;
