import React, { Component } from 'react';


class Contact extends Component {
  render() {

    let rows = []
    if(this.props.main === "true"){
      for(let i = 1 ; i <= 0; i++){
       rows.push(i)
       rows.push(<br/>)
      }
    }
    return (
      <div className="Contact Text">
        {rows}
      </div>
    );
  }
}



export default Contact;