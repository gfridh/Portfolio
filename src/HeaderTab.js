import React, { Component } from 'react';

class HeaderTab extends Component {
  render() {
    let imageClass


      imageClass = "aboutMeImage"

    return (
      <div className={"HeaderTab " + this.props.className}  style={{cursor: "pointer"}} onClick = {this.props.onClick}>
        <div className = {imageClass}></div>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default HeaderTab;