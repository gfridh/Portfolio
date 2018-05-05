import React, { Component } from 'react';





class AboutMe extends Component {
  render() {
    let mainClassName
    let rows = []
    if(this.props.main === "true"){
      mainClassName = "AboutMe Text"

      for(let i = 1 ; i <= 21; i++){
       rows.push(i)
       rows.push(<br/>)
      }
    }
    else{
      mainClassName = "AboutMe TextWithNoSide"
    }

    return (
      <div className={mainClassName}>
      {rows}
        <div className="AboutMeText" >
            <AboutMeBlock title="name" attributes={["firstName", "middleName", "lastName"]} units={["", "", ""]} answers={["Gustav","Hans","Fridh"]}/>
            <AboutMeBlock title="age" attributes={["years", "months", "days"]} units={["", "", ""]} answers={getAge("09/25/1993")}/>
            <AboutMeBlock title="education" attributes={["highSchool", "university"]} units={["", "", ""]} answers={["Sjödalsgymnasiet","KTH"]}/>
            <AboutMeBlock title="body" attributes={["height", "weight"]} units={["cm", "kg"]} answers={["184","90"]} />
        </div>
      </div>
    );
  }
}

class AboutMeBlock extends Component {
  
  render() {
    let coefficient
    let cursor

    if(this.props.title !== "body"){
      coefficient = ".";
      cursor = "";

    }

    else{
      coefficient = ""
      cursor = "|";
    }
    

    return (
      <div className="AboutMeBlock" style={{color:"white"}}>

    <div style={{float:"left"}}>{coefficient}</div>
        <div style={{color:"#D18E32",float:"left"}}>
          {this.props.title}
        </div>
        <div style={{}}>{"{"}</div>
    {this.props.attributes.map((attribute, idx)=>{return [<div style={{color:"#4DB8FE",float:"left"}}>&nbsp;&nbsp;&nbsp;&nbsp;{attribute}</div>,
    <div style={{float:"left"}}>:&nbsp;</div>,
    <div style={{color:"#CE8248", float:"left"}}>{this.props.answers[idx] }</div>,
    <div style={{color:"rgba(142, 200, 168, 1.0)", float:"left"}}>{this.props.units[idx]}</div>,
    <div>;</div>,
    

  ];
    
        
          })}
    <div style={{float:"left"}}>}</div>
    <span class="blinking-cursor" style={{float:"left"}}>{cursor}</span>
    <br/>
    <br/>
    </div>
      
    );
  }
}

function getAge(dateString) {
  var now = new Date();

  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();

  var dob = new Date(dateString.substring(6,10),
                     dateString.substring(0,2)-1,                   
                     dateString.substring(3,5)                  
                     );

  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();

  var yearAge = yearNow - yearDob;

  if (monthNow >= monthDob)
    var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    monthAge = 12 + monthNow -monthDob;
  }

  if (dateNow >= dateDob)
    var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }



  return [yearAge, monthAge, dateAge];
}

export default AboutMe;