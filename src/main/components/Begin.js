import React, {Component} from 'react';
import shaun_sutter from '../../img/shaun.jpg';
import {Button} from "reactstrap";
import './Begin.css';

class Begin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      view: "BEGIN"
    }

    this.toFishies = this.toFishies.bind(this);

  }

  toFishies() {
    this.props.history.push('/fishies')
  }

  render() {
    return (
      <div className="Begin">
        <p>
          First Shaun will ask you a few questions.
        </p>
        <p>
          <Button onClick={this.toFishies}>I'm somewhat alright with that.</Button>
        </p>
        <img src={shaun_sutter} className="Shaun" alt="Shaun"/>




      </div>

    );
  }
}

export default Begin;