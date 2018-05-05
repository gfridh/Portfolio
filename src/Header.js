import React, { Component } from 'react';
import HeaderTab from './HeaderTab';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      buttons: [
        {
          title:"about_me.css"
        },
        {
          title:"portfolio.js"
        },
        {
          title:"contact.html"
        }
      ]
      ,
      activeIndex: 0
    };
    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler(index) {
    this.props.handleHeaderTab(index)
    this.setState({
      activeIndex : index
    })
  }

  render() {

    return (
      <div className="Header">
        {
          
          this.state.buttons.map((button, index) => {
            const className = this.state.activeIndex === index ? 'active' : 'unactive';
            return(

            <HeaderTab key = {index} title = {button.title} onClick = {this.eventHandler.bind(this, index)} className = {className}/>

            )
            
          }

        )


        }
      </div>
    );
  }
}

export default Header;