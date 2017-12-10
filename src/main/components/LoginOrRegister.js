import React, {Component} from 'react';
import "./LoginOrRegister.css";
import LoginForm from "./Login";
import RegisterForm from "./Register";
import {Link, Route, Switch} from "react-router-dom";
import LoginOrRegisterToggle from "./LoginOrRegisterToggle";

class LoginOrRegister extends Component {
  render() {
    return (
        <div className="LoginOrRegister">
          <Switch>
            <Route exact path="/" render={() => (
              <div>
                <p>Existing users can <Link to="/login">sign in here</Link>.</p>
                <p>New users can <Link to="/register">sign up for free</Link>!</p>
              </div>
            )} />
            <Route path="/login" render={() => (
                <div>
                  <LoginOrRegisterToggle/>
                  <p>To get <code>basrd</code>, login and collect potions now!
                  </p>
                  <LoginForm/>
                </div>
            )} />
            <Route exact path="/register" render={() => (
                <div>
                  <LoginOrRegisterToggle/>
                  <p>
                    Do you have what it takes to get <code>basrd</code>?
                    <br/>
                    Sign up now and find out!
                  </p>
                  <RegisterForm/>
                </div>
            )}/>
          </Switch>
        </div>
    );
  }
}

export default LoginOrRegister;
