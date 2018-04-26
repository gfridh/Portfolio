import React, { Component } from 'react';

class HeaderTab extends Component {
  render() {
    return (
      <div className="HeaderTab">
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default HeaderTab;