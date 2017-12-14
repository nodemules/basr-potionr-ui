import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import './App.css';
import Logo from "./components/Logo";
import LoginOrRegister from "./components/auth/layout/LoginOrRegisterLayout";
import TopNav from "./components/nav/TopNav";
import About from "./components/About";
import Potion from "./components/potion/layout/PotionLayout";
import Home from "./components/home/layout/HomeLayout";

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
                <Route exact path="/" component={Home}/>
                <Route path="/potion" component={Potion}/>
                <Route exact path="/about" component={About}/>
                <LoginOrRegister/>
              </div>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
