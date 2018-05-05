import React, { Component } from 'react';
//import AboutMe from './AboutMe.js'
import Portfolio from './Portfolio.js';

class SideBar4 extends Component {
  render() {
    let style = {fontSize:'2px' ,margin:"0px", padding:"0px"}
    let currentTextEditor

    return (
      <div className="SideBar4">
        <div style={style}>
          {this.props.code}
        </div>

      </div>
    );
  }
}

export default SideBar4;