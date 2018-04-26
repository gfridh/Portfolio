import React, { Component } from 'react';
import Header from './Header';
import TextEditor from './TextEditor';

class SideBar3 extends Component {
  render() {
    return (
      <div className="SideBar3">
        <Header/>
        <TextEditor/>
      </div>
    );
  }
}

export default SideBar3;