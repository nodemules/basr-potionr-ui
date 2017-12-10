import React, {Component} from 'react';
import {BrowserRouter, Switch} from "react-router-dom"
import './App.css';
import Logo from "./components/Logo";
import LoginOrRegister from "./components/LoginOrRegister";
import UserSplash from "./components/UserSplash";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import {isLoggedIn} from "./services/Auth";

function LoginOrRegisterTemplate() {
  if (isLoggedIn()) {
    return null;
  }
  return (
      <LoginOrRegister/>
  );
}

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <Logo/>
              <h1 className="App-title">Welcome to Basr Potionr</h1>
            </header>
            <div>
              <div className="App-body">
                <Switch>
                  <AuthenticatedRoute path="/" component={UserSplash}/>
                </Switch>
                {/*<UnauthenticatedRoute path="/" component={LoginOrRegister}/>*/}
                <LoginOrRegisterTemplate />
              </div>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
