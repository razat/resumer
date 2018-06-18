import React, { Component } from 'react';

class WorkEx extends Component {
  render() {
    return (
      <div className="box tile is-child">
      	<h2 className="form-title">Work Experience</h2>
        <div className="add-icon"><i className="fas fa-plus-circle"></i></div>
        <div className="box-form">
            <p> 
              I <span style={{"textDecoration": "line-through"}}>am working</span> <strong>/</strong> <span>have worked</span> as a
              <input type="text" className="inline-input lg-inline-input"  name="title" placeholder="Job title"/> in  
              <input type="text" className="inline-input lg-inline-input" name="company" placeholder="Company name"/> located in
              <input type="text" className="inline-input mid-inline-input" name="location" placeholder="Location"/>  from
              <input type="date" className="inline-input midlg-inline-input" name="start" /> to
              <input type="date" className="inline-input midlg-inline-input" name="end" /> .
              <br /> 
              Following is a brief description of my work experience, accomplishment and skills i learned there.
              <textarea className="inline-textarea" name="description" placeholder="Description"></textarea>

            </p>
        </div>
      </div>
    );
  }
}

export default WorkEx;