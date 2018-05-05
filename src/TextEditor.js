import React, { Component } from 'react';
import AboutMe from './AboutMe.js'
import Portfolio from './Portfolio.js'
import Contact from './Contact.js'
import SideBar4 from './SideBar4.js'

class TextEditor extends Component {

  render() {
  
   let code
   let code2
   if(this.props.codeText === "aboutMe"){
     code = <AboutMe main="true"/>
     code2 = <AboutMe main="false"/>
   }

   else if(this.props.codeText === "portfolio"){
    code = <Portfolio main="true"/>;
    code2 = <Portfolio main="false"/>;
   }

   else if(this.props.codeText === "contact"){
    code = <Contact main="true"/>;
    code2 = <Contact main="false"/>;
   }

   console.log(code)

    return (
      <div className="TextEditor">
        {code}
        <SideBar4 code = {code2}/>
      </div>
    );
  }
}

export default TextEditor;