import React, { Component } from "react";
import {Route} from "react-router-dom";
import {Alert} from "reactstrap";

class BrewedPotion extends Component {
  render() {
    return(
        <div>
          <Route path="/potion/fizz" render={() => (
              <div>
                <Alert color="warning">Made a fizzy potion!</Alert>
              </div>
          )}/>
          <Route path="/potion/pop" render={() => (
              <div>
                <Alert color="success">Made a poppy potion!</Alert>
              </div>
          )}/>
          <Route path="/potion/tonic" render={() => (
              <div>
                <Alert color="info">Made a tonic potion!</Alert>
              </div>
          )}/>
        </div>
    );
  }
}

export default BrewedPotion;