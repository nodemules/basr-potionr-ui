import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import './App.css';
import Logo from "./components/Logo";
import LoginOrRegister from "./components/LoginOrRegister";
import UserSplash from "./components/UserSplash";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import TopNav from "./components/TopNav";
import About from "./components/About";
import Potion from "./components/potion/PotionBrewing";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <Logo/>
              <h1 className="App-title">Welcome to Basr Potionr</h1>
            </header>
            <TopNav/>
            <div>
              <div className="App-body">
                <AuthenticatedRoute path="/" component={UserSplash}/>
                <Route exact path="/about" component={About}/>
                <Route path="/potion" component={Potion}/>
                <LoginOrRegister/>
              </div>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
