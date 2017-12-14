import React, {Component} from 'react';
import './UserSplash.css';
import {Button, Jumbotron} from "reactstrap";
import {isLoggedIn, logout} from "../auth/AuthService";
import {Redirect, withRouter} from "react-router-dom";

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
          {
            !isLoggedIn() ? <Redirect to="/login"/> : //
                <Jumbotron className="UserSplash">
                  <div className="UserSplash-intro">
                    <p>You are now ready to start getting <code>basrd</code>!
                    </p>
                    <p>Click the button below to begin.</p>
                  </div>
                  <div className="UserSplash-body">
                    <Button color="primary"
                            onClick={() => {
                              this.props.history.push("/potion")
                            }}
                    >
                      Start basrn'!
                    </Button>
                  </div>
                </Jumbotron>
          }
        </div>
    );
  }
}

export default withRouter(UserSplash);
