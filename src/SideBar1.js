import React, { Component } from 'react';
import mainLogo from'./facebook-logo.png';
import linkedIn from'./linkedIn.png';
import gitHub from'./gitHub.png';
class SideBar1 extends Component {
  render() {
    return (
      <div className="SideBar1">
        <img style={{
          height:'20px',
          width:'20px'
        }} src={mainLogo}/>

        <img style={{
          paddingTop:'20px',
          height:'20px',
          width:'20px'
        }} src={linkedIn}/>

<img style={{
          paddingTop:'20px',
          height:'20px',
          width:'20px'
        }} src={gitHub}/>




      </div>
    );
  }
}

export default SideBar1;