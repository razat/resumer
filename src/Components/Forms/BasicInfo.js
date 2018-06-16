import React, { Component } from 'react';

class BasicInfo extends Component {
  render() {
    return (
      <div className="box tile is-child">
      	<h2 className="form-title">Basic Info</h2>
      	<div className="box-form">
 				<p>	
 					I am <input type="text" className="inline-input lg-inline-input" placeholder="Full Name"/> currently living in
 					<input type="text" className="inline-input mid-inline-input" placeholder="Banglore"/> . I have total work experience of 
 					<input type="number" className="inline-input sm-inline-input" placeholder="3.5"/> Years with current CTC of 
 					<input type="number" className="inline-input sm-inline-input" placeholder="25"/> LPA and my notice period is <input type="number" className="inline-input xsm-inline-input" placeholder="2"/> months.
 				</p>
 		</div>
      </div>
    );
  }
}

export default BasicInfo;