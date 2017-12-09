import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import Logo from "./components/Logo";
import LoginOrRegister from "./components/LoginOrRegister";
import UserSplash from "./components/UserSplash";
import {isLoggedIn} from "./services/Auth";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

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
                  <AuthenticatedRoute path="/authenticated" authenticated={isLoggedIn}
                         component={UserSplash}/>
                  <Route exact path="/" component={LoginOrRegister}/>
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
