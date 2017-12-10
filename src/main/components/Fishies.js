import React, {Component} from 'react';
import {Button} from "reactstrap";
import no_fishies from '../../img/zerofish.jpg';
import one_fishy from '../../img/singlefishied.png'
import two_fishies from '../../img/twofishies.jpg'
import './Fishies.css';
import {logout} from "../services/Auth";

class Fishies extends Component {

  constructor(props) {
    super(props);

    this.state = {
      view: "FISHIES"
    }
    this.signOut = this.signOut.bind(this);
  }

signOut() {
  logout();
  this.props.history.push('/')
}

  render() {
    return (
      <div className="Fishies">
        <p>
          What Best describes your situation right now?
        </p>
        <p>
          <Button onClick={this.signOut}>
            <img src={no_fishies} className="NoFishies" alt="NoFishes"/>
          </Button>
        </p>
        <p>
          <Button>
            <img src={one_fishy} className="OneFishy" alt="OneFishy"/>
          </Button>
        </p>
        <p>
          <Button>
            <img src={two_fishies} className="two_fishies" alt="TwoFishies"/>
          </Button>
        </p>
      </div>

    );
  }
}

export default Fishies;