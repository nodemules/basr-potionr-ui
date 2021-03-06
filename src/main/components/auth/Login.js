import React, {Component} from 'react';
import './Login.css';
import {Alert, Button, FormGroup, Input, Label} from "reactstrap";
import {login} from "./AuthService";
import {withRouter} from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.submit = this.submit.bind(this);
  }

  validate = () => {
    return this.state.username.length > 0 && this.state.password.length > 0;
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  submit() {
    let {username, password} = this.state;
    this.setState({
      loggingIn: true
    });
    login({username, password}).then(() => {
      this.props.history.push("/");
    }).catch(() => {
      this.setState({
        loggingIn: false
      });
    });
  };

  render() {
    return (
        <div className="Login">
          <form>
            <Alert>
              Enter your username or e-mail and password to get started.
            </Alert>
            <FormGroup>
              <Label>Username / E-mail Address</Label>
              <Input
                  id="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="Enter a username or e-mail address"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                  id="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="Enter your password"
              />
            </FormGroup>
          </form>
          <Button disabled={!this.validate()}
                  onClick={this.submit}>Submit</Button>
        </div>
    );
  }
}

export default withRouter(Login);
