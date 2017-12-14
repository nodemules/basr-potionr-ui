import React, {Component} from 'react';
import "./LoginOrRegisterLayout.css";
import LoginForm from "../Login";
import RegisterForm from "../Register";
import {Link, Route, Switch} from "react-router-dom";
import LoginOrRegisterToggle from "../LoginOrRegisterToggle";
import {isLoggedIn} from "../AuthService";

class LoginOrRegisterLayout extends Component {
  render() {
    if (isLoggedIn()) {
      return null;
    }
    return (
        <div className="LoginOrRegister">
          <Switch>
            <Route exact path="/">
              <div>
                <p>Existing users can <Link to="/login">sign in here</Link>.
                </p>
                <p>New users can <Link to="/register">sign up for free</Link>!
                </p>
              </div>
            </Route>
            <Route exact path="/login">
              <div>
                <LoginOrRegisterToggle/>
                <p>To get <code>basrd</code>, login and collect potions
                  now!
                </p>
                <LoginForm/>
              </div>
            </Route>
            <Route exact path="/register">
              <div>
                <LoginOrRegisterToggle/>
                <p>
                  Do you have what it takes to get <code>basrd</code>?
                  <br/>
                  Sign up now and find out!
                </p>
                <RegisterForm/>
              </div>
            </Route>
          </Switch>
        </div>
    );
  }
}

export default LoginOrRegisterLayout;
