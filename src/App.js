import React, { Component } from 'react';
import './App.css';
import Bar1 from './Bar1';
import SideBar1 from './SideBar1';
import SideBar2 from './SideBar2';
import SideBar3 from './SideBar3';

var divStyle = {
  backgroundColor:'red',
};

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Bar1/>
        <div className="notBar1Container">
          <SideBar1/>
          <SideBar2/>
          <SideBar3/>
        </div>
      </div>
    );
  }
}

export default App;
