import React, {Component} from 'react';
import "./LoginOrRegister.css";
import LoginForm from "./Login";
import RegisterForm from "./Register";
import {Button, ButtonGroup} from "reactstrap";

class LoginOrRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "LOGIN"
    }

    this.showRegister = this.showRegister.bind(this);
    this.showLogin = this.showLogin.bind(this);

  }

  showRegister() {
    this.setState({
      view: "REGISTER"
    });
  }

  showLogin() {
    this.setState({
      view: "LOGIN"
    });
  }

  isShow(name) {
    return name === this.state.view;
  }

  render() {
    return (
        <div className="LoginOrRegister">
          <div className="LoginOrRegister-toggle">
            <ButtonGroup>
              <Button onClick={this.showLogin}>Login</Button>
              <Button onClick={this.showRegister}>Register</Button>
            </ButtonGroup>
          </div>
          {this.isShow("LOGIN") &&
          <div>
            <p>To get <code>basrd</code>, login and collect potions now!</p>
            <LoginForm/>
          </div>
          }
          {this.isShow("REGISTER") &&
          <div>
            <p>
              Do you have what it takes to get <code>basrd</code>?
              <br/>
              Sign up now and find out!
            </p>
            <RegisterForm/>
          </div>
          }
        </div>
    );
  }
}

export default LoginOrRegister;
