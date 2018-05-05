import React, { Component } from 'react';
import mainLogo from'./facebook-logo.png';
import linkedIn from'./linkedIn.png';
import gitHub from'./gitHub.png';
class SideBar1 extends Component {
  render() {
    return (


      <div className="SideBar1">

            <a href="https://www.facebook.com/gustav.fridh.9">
                <img alt="" style={{
          height:'20px',
          width:'20px'
        }} src={mainLogo}/>
      </a>

        <a href="https://www.linkedin.com/in/gustav-fridh-909a1b11b/">
          <img alt="" style={{
            paddingTop:'20px',
            height:'20px',
            width:'20px'
          }} src={linkedIn}/>
        </a>


        <a href="https://github.com/gfridh">
          <img alt="" style={{
                    paddingTop:'20px',
                    height:'20px',
                    width:'20px'
                  }} src={gitHub}/>
        </a>





      </div>
    );
  }
}

export default SideBar1;