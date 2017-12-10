import React, {Component} from 'react';
import './Login.css';
import {Alert, Button, FormGroup, Input, Label} from "reactstrap";
import {login} from "../services/Auth";
import { withRouter } from 'react-router';

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
    let user = {
      username: this.state.username
    };
    if (login(user)) {
      console.log('User is logged in, proceeding to authenticated state');
      this.props.history.push("/");
    }
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
          <Button disabled={!this.validate()} onClick={this.submit}>Submit</Button>
        </div>
    );
  }
}

export default withRouter(Login);
