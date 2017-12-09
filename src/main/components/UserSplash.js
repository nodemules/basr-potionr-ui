import React, {Component} from 'react';
import './UserSplash.css';
import {Button} from "reactstrap";
import {logout} from "../services/Auth";

class UserSplash extends Component {

  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    logout();
    this.props.history.push('/')
  }

  render() {
    return (
        <div>
          <div className="UserSplash-intro">
            <p>You are now ready to start getting <code>basrd</code>!</p>
            <p>Click the button below to begin.</p>
          </div>
          <div>
            <Button>Start basrn'!</Button>
          </div>
          <Button onClick={this.signOut}>Logout</Button>
        </div>
    );
  }
}

export default UserSplash;
