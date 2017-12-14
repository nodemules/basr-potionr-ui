import React, {Component} from 'react';
import "./layout/LoginOrRegisterLayout.css";
import {Button, ButtonGroup} from "reactstrap";
import {withRouter} from "react-router-dom";

class LoginOrRegisterToggle extends Component {
  constructor(props) {
    super(props);

    this.go = this.go.bind(this);
  }

  go(path) {
    this.props.history.push(path);
  }

  render() {
    const LOGIN = "/login";
    const REGISTER = "/register";
    let path = this.props.location.pathname;
    return (
        <div className="LoginOrRegister-toggle">
          <ButtonGroup>
            <Button outline
                    onClick={() => this.go(LOGIN)}
                    active={path === LOGIN}>Login</Button>
            <Button outline
                    onClick={() => this.go(REGISTER)}
                    active={path === REGISTER}>Register</Button>
          </ButtonGroup>
        </div>
    )
  }
}

export default withRouter(LoginOrRegisterToggle);