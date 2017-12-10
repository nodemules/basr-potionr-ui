import React, {Component} from 'react';
import './UserSplash.css';
import {Button} from "reactstrap";
import {logout} from "../services/Auth";

class UserSplash extends Component {

  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
    this.toBasrBegin = this.toBasrBegin.bind(this);

  }

  signOut() {
    logout();
    this.props.history.push('/')
  }

  toBasrBegin() {
    this.props.history.push('/begin')
  }

  render() {
    return (
        <div>
          <div className="UserSplash-intro">
            <p>You are now ready to start getting <code>basrd</code>!</p>
            <p>Click the button below to begin.</p>
          </div>
          <div>
            <Button onClick={this.toBasrBegin}>Start basrn'!</Button>
          </div>
          <div>
            <Button onClick={this.signOut}>Logout</Button>
          </div>
        </div>
    );
  }
}

export default UserSplash;
