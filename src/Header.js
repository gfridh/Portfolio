import React, { Component } from 'react';
import HeaderTab from './HeaderTab';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <HeaderTab title="about_me.css"/>
        <HeaderTab title="portfolio.js"/>
        <HeaderTab title="contact.html"/>
      </div>
    );
  }
}

export default Header;