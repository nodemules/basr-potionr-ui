import React, {Component} from 'react';
import logo_icon from '../../logo_icon_64.png';
import logo_name_dark from '../../logo_name_dark_64.png';
import './Logo.css';

class Logo extends Component {
  render() {
    return (
        <div className="Logo">
          <img src={logo_icon} className="Logo-icon" alt="logo"/>
          <img src={logo_name_dark} alt="logo_name"/>
        </div>
    );
  }
}

export default Logo;
