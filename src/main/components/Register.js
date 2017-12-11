import React, {Component} from 'react';
import './Register.css';
import {Alert, Button, FormGroup, Input, Label} from "reactstrap";

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
    }

  }

  validate = () => {
    let valid = true;
    if (!this.state.serviceAgreement) {
      return false;
    }
    this.state.user.map(function (value, key) {
      if (key && value.length === 0) {
        valid = false;
        return false;
      }
      return true;
    });
    return valid;
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
        <div className="Register">
          <Alert>
            Sign up for free today!
          </Alert>
          <form>
            <FormGroup>
              <Label>Username</Label>
              <Input
                  id="username"
                  model="user.username"
                  value={this.state.user.username}
                  onChange={this.handleChange}
                  placeholder="Enter a username"
              />
            </FormGroup>
            <FormGroup>
              <Label>E-mail Address</Label>
              <Input
                  id="email"
                  model="user.email"
                  value={this.state.user.email}
                  onChange={this.handleChange}
                  placeholder="Enter your e-mail address"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                  id="password"
                  model="user.password"
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
                  model="confirmPassword"
                  type="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                  placeholder="Enter your confirmPassword"
              />
            </FormGroup>
            <Label>
            <Input type="checkbox" value={this.state.serviceAgreement}/>
              I agree to the terms of service.
            </Label>
          </form>
          <Button disabled={!this.validate()}>Submit</Button>
        </div>
    );
  }
}

export default Register;
