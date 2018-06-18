import React, { Component } from 'react';

class Reference extends Component {
  render() {
    return (
      <div className="box tile is-child">
      	<h2 className="form-title">References</h2>
        <div className="box-form">
          <input type="email" className="inline-input lg-inline-input" name="name" placeholder="Full name"/>
          <input type="email" className="inline-input lg-inline-input" name="relation" placeholder="Relationspqhip"/>
          <input type="email" className="inline-input lg-inline-input" name="company" placeholder="Company"/>
          <input type="email" className="inline-input lg-inline-input" name="mobile" placeholder="Mobile number"/>
          <input type="email" className="inline-input lg-inline-input" name="email" placeholder="Email id"/>
           <button className="button is-link is-small">Add</button>
        </div>
      </div>
    );
  }
}

export default Reference;