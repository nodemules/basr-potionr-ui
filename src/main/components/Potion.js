import React, {Component} from "react";
import "./Potion.css";
import {Button, Jumbotron} from "reactstrap";

class Potion extends Component {
  render() {
    return(
        <div className="Potion">
          <Jumbotron className="Potion-tron">
            <p>Get started <code>basr</code> 'ing your finest potions!</p>
            <div className="Potion-tron-buttons">
              <Button color="primary">Buy</Button>
              <Button color="success">Sell</Button>
              <Button color="warning">Brew</Button>
            </div>
          </Jumbotron>
        </div>
    )
  }
}

export default Potion;