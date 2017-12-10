import React, {Component} from 'react';
import "./LoginOrRegister.css";
import {Button, ButtonGroup} from "reactstrap";
import {withRouter} from "react-router-dom";

class LoginOrRegisterToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: this.props.history.location.pathname
    };

    this.go = this.go.bind(this);
  }

  go(path) {
    this.props.history.push(path);
    this.setState({path});
  }

  render() {
    const LOGIN = "/login";
    const REGISTER = "/register";
    return (
        <div className="LoginOrRegister-toggle">
          <ButtonGroup>
            <Button outline
                onClick={() => this.go(LOGIN)} active={this.state.path === LOGIN}>Login</Button>
            <Button outline
                onClick={() => this.go(REGISTER)} active={this.state.path === REGISTER}>Register</Button>
          </ButtonGroup>
        </div>
    )
  }
}

export default withRouter(LoginOrRegisterToggle);