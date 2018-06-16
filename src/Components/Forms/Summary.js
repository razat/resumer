import React, { Component } from 'react';

class Summary extends Component {
  render() {
    return (
      <div className="box tile is-child">
      	<h2 className="form-title">Summary</h2>
      	<div className="box-form">
      		<textarea className="inline-textarea" placeholder="Summary about your profession"></textarea>
 		</div>
      </div>
    );
  }
}

export default Summary;