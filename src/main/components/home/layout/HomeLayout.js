import React, {Component} from 'react';
import './HomeLayout.css';
import AuthenticatedItem from "../../auth/AuthenticatedItem";
import UserSplash from "../UserSplash";

class HomeLayout extends Component {
  render() {
    return (
        <div className="Home">
          <AuthenticatedItem>
            <UserSplash />
          </AuthenticatedItem>
        </div>
    );
  }
}

export default HomeLayout;
