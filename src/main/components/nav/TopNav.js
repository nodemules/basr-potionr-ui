import React, {Component} from 'react';
import './TopNav.css';
import {
  Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar,
  NavbarBrand, NavbarToggler,
  NavItem, NavLink, UncontrolledDropdown
} from "reactstrap";
import {isLoggedIn, logout} from "../auth/AuthService";
import {withRouter} from "react-router-dom";
import AuthenticatedItem from "../auth/AuthenticatedItem";

class TopNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
        <div className="TopNav">
          <Navbar className="TopNav-navbar" color="dark" dark expand="md">
            <NavbarBrand href="/">basr potionr</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <AuthenticatedItem>
                  <NavItem>
                    <NavLink href="/potion">Potions</NavLink>
                  </NavItem>
                </AuthenticatedItem>
                <NavItem>
                  <NavLink
                      href="https://github.com/nodemules/basr-potionr-ui">Github</NavLink>
                </NavItem>
                <UncontrolledDropdown className="TopNav-buttons" nav>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu>
                    {
                      !isLoggedIn() ? //
                          <div>
                            <DropdownItem
                                onClick={() => this.props.history.push(
                                    "/login")}>
                              Login
                            </DropdownItem>
                            <DropdownItem
                                onClick={() => this.props.history.push(
                                    "/register")}>
                              Register
                            </DropdownItem>
                            <DropdownItem divider/>
                          </div>
                          : null
                    }
                    <DropdownItem
                        onClick={() => this.props.history.push("/about")}>
                      About
                    </DropdownItem>
                    {
                      isLoggedIn() ? //
                          <DropdownItem onClick={() => {
                            logout();
                            this.props.history.push("/");
                          }
                          }>
                            Logout
                          </DropdownItem>
                          : null
                    }

                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
            <NavbarToggler onClick={this.toggle}/>
          </Navbar>
        </div>
    );
  }
}

export default withRouter(TopNav);
