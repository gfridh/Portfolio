import React, { Component } from 'react';




class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
          <AboutMeBlock title="Name" attributes={["firstName", "middleName", "lastName"]} answers={["Gustav","Hans","Fridh"]}/>
          <AboutMeBlock title="Age" attributes={["years", "months", "days"]} answers={getAge("09/25/1993")}/>
      </div>
    );
  }
}

class AboutMeBlock extends Component {
  
  render() {
    return (
      <div className="AboutMeBlock" style={{color:"white", marginBottom:"20px"}}>
        <div style={{float:"left"}}>.</div>
        <div style={{color:"#D18E32",float:"left"}}>
          {this.props.title}
        </div>
        <div style={{}}>{"{"}</div>
    {this.props.attributes.map((attribute, idx)=>{return [<div style={{color:"#4DB8FE",marginLeft:"20px",float:"left"}}>{attribute}</div>,
    <div style={{float:"left", marginRight:"5px"}}>:</div>,
    <div style={{color:"#CE8248", float:"left"}}>{this.props.answers[idx]}</div>,
    <div>;</div>,

  ];
    
        
          })}
    <div>}</div>
      </div>
    );
  }
}

function getAge(dateString) {
  var now = new Date();
  var today = new Date(now.getYear(),now.getMonth(),now.getDate());

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
  var age = {};
  var ageString = "";
  var yearString = "";
  var monthString = "";
  var dayString = "";


  var yearAge = yearNow - yearDob;

  if (monthNow >= monthDob)
    var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    var monthAge = 12 + monthNow -monthDob;
  }

  if (dateNow >= dateDob)
    var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
      };

  if ( age.years > 1 ) yearString = " years";
  else yearString = " year";
  if ( age.months> 1 ) monthString = " months";
  else monthString = " month";
  if ( age.days > 1 ) dayString = " days";
  else dayString = " day";

  return [yearAge, monthAge, dateAge];
}

export default AboutMe;