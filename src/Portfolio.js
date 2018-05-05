import React, { Component } from 'react';

let colors = {
  darkBlue: "rgba(81, 156, 214, 1.0)",
  lightBlue: "rgba(156, 220, 247, 1.0)",
  orange: "rgba(200, 112, 59, 1.0)",
  green: "rgba(55, 196, 176, 1.0)"
}

class Portfolio extends Component {
  
  render() {
    let rows = []
    if(this.props.main === "true"){
        for(let i = 1 ; i <= 11; i++){
        rows.push(i)
        rows.push(<br/>)
        }
    }
    return (
      <div className="Portfolio Text">
        {rows}
        <PortfolioBlock/>
      </div>
    );
  }
}

class PortfolioBlock extends Component {
  render() {

    return (
      <div className="PortfolioBlock" style={{color:"white"}}>
        <DarkBlueText text="let &nbsp;"/>
        <Variable variable="me"/>
        <Equals/>
        <String content="show you my portfolio"/>
        <br/>

        <DarkBlueText text="this"/>
        <div style={{display:"inline-block"}}>.</div>
        <Variable variable="is"/>
        <Equals/>
        <String content="some off my work"/>

        <ProjectBlock projectName = "KälkNisse"/>

        <ProjectBlock projectName = "Hueniverse"/>

        <ProjectBlock projectName = "Haptetris"/>
      </div>
    );
  }
}

class DarkBlueText extends Component {
  render() {
    return (
      <div className="DarkBlueText" style={{display:"inline-block"}}>
        <div style={{color:colors.darkBlue}}>{this.props.text} </div>
      </div>
    );
  }
}

class String extends Component {
  render() {
    return (
      <div className="String" style={{display:"inline-block"}}>
        <div style={{color:colors.orange}}>
          "{this.props.content}"
        </div>
      </div>
    );
  }
}

class Equals extends Component {
  render() {
    return (
      <div className="Equals" style={{display:"inline-block"}}>
        = &nbsp;
      </div>
    );
  }
}

class GreenText extends Component{
  render(){
    return(
      <div className="GreenText" style={{display:"inline-block"}}>
          <div style={{color:colors.green}}>{this.props.text} </div>
      </div>
    )
  }
}

class Variable extends Component {
  render() {
    return (
      <div className="Variable" style={{display:"inline-block" , color:"rgba(156, 220, 254, 1.0)"}}>
        {this.props.variable} &nbsp;
      </div>
    );
  }
}

class ProjectBlock extends Component{
  render(){
    return(
      <div className = "ProjectBlock">
        <br/>
        <br/>
        <DarkBlueText text="project &nbsp;"/>
        <GreenText text={this.props.projectName}/>
        <div style={{display:"inline-block"}}>{"{}"}</div>
      </div>
    )
  }
}



export default Portfolio;