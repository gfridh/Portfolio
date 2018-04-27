import React, { Component } from 'react';
import AboutMe from './AboutMe.js'

class TextEditor extends Component {
  render() {
    return (
      <div className="TextEditor">
        <AboutMe/>
      </div>
    );
  }
}

export default TextEditor;