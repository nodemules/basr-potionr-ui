import React, {Component} from 'react';
import './Register.css';
import {Alert, Button, FormGroup, Input, Label} from "reactstrap";
import {register} from "./AuthService";
import {withRouter} from "react-router-dom";

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        username: '',
        password: '',
      },
      confirmPassword: '',
      serviceAgreement: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit() {
    let user = this.state.user;
    register(user).then(() => {
      this.props.history.push("/");
    }).catch((err) => {
      console.error("There was an error", err);
    });
  }

  validate() {
    let valid = true;
    if (!this.state.serviceAgreement) {
      return false;
    }
    if (this.state.user.password !== this.state.confirmPassword) {
      return false;
    }
    Object.entries(this.state.user).forEach(([key, value]) => {
      if (key && value.length === 0) {
        valid = false;
        return false;
      }
    });
    return valid;
  };

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // TODO - figure out the best way to "recursively" set nested state properties
    let split = name.split(".");
    if (split.length > 1) {
      let first = split[0];
      let second = split[1];
      let nested = Object.assign({}, this.state[first]);
      nested[second] = value;
      this.setState({
        [first]: nested
      });
      return;
    }

    this.setState({
      [name]: value
    });
  }

  render() {
    let formValid = this.validate();
    return (
        <div className="Register">
          <Alert>
            Sign up for free today!
          </Alert>
          <form onSubmit={this.submit}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                  id="username"
                  name="user.username"
                  value={this.state.user.username}
                  onChange={this.handleChange}
                  placeholder="Enter a username"
              />
            </FormGroup>
            <FormGroup>
              <Label>E-mail Address</Label>
              <Input
                  id="email"
                  type="email"
                  name="user.email"
                  value={this.state.user.email}
                  onChange={this.handleChange}
                  placeholder="Enter your e-mail address"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                  id="password"
                  name="user.password"
                  type="password"
                  value={this.state.user.password}
                  onChange={this.handleChange}
                  placeholder="Enter your password"
              />
            </FormGroup>
            <FormGroup>
              <Label>Confirm Password</Label>
              <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
              />
            </FormGroup>
            <Label>
              <Input type="checkbox"
                     name="serviceAgreement"
                     value={this.state.serviceAgreement}
                     onChange={this.handleChange}
              />
              I agree to the terms of service.
            </Label>
          </form>
          <Button disabled={!formValid}
                  onClick={() => this.submit(this.state.user)}
          >
            Submit
          </Button>
        </div>
    );
  }
}

export default withRouter(Register);
