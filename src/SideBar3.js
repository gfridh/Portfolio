import React, { Component } from 'react';
import Header from './Header';
import TextEditor from './TextEditor';



class SideBar3 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      codeText: "aboutMe",
      headerButtons:[
        "about_me.css",
        "portfolio.js",
        "contact.html"
      ]
    };
  }

  render() {

    let handleHeaderTab = (index) => {
      if(index === 0){
        this.setState({codeText:"aboutMe"});
      }
      else if (index === 1){
        this.setState({codeText:"portfolio"});
      }
      else if (index === 2){
        this.setState({codeText:"contact"});
      }
    }


    return (
      <div className="SideBar3">
        <Header handleHeaderTab = {handleHeaderTab}/>
        <TextEditor headerButtons = {this.state.headerButtons} codeText = {this.state.codeText}/>
      </div>
    );
  }
}

export default SideBar3;