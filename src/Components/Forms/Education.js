import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div className="box tile is-child">
      	<h2 className="form-title">Education</h2>
        <div className="add-icon"><i className="fas fa-plus-circle"></i></div>
        <div className="box-form">
            <p> 
              I have completed my 
              <input type="text" className="inline-input lg-inline-input"  name="degree" placeholder="Degree"/> in  
              <input type="text" className="inline-input lg-inline-input" name="subject" placeholder="Subject"/> from
              <input type="text" className="inline-input lg-inline-input" name="school" placeholder="School name"/> located in 
              <input type="text" className="inline-input mid-inline-input" name="location" placeholder="Location"/> in year
              <input type="number" className="inline-input mid-inline-input" name="year" placeholder="2016"/>.
            </p>
        </div>
      </div>
    );
  }
}

export default Education;