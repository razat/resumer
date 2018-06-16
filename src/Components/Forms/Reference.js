import React, { Component } from 'react';

class Reference extends Component {
  render() {
    return (
      <div className="box tile is-child">
      	<h2 className="form-title">Reference</h2>
        <div className="box-form">
          <textarea className="inline-textarea" placeholder="Your Reference"></textarea>
      </div>
      </div>
    );
  }
}

export default Reference;