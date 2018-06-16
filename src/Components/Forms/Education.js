import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div className="box tile is-child">
      	<h2 className="form-title">Education</h2>
      	<div className="box-form">
      		<textarea className="inline-textarea" placeholder="Educational background"></textarea>
    	</div>
      </div>
    );
  }
}

export default Education;