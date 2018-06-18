import React, { Component } from 'react';
import Rating from 'react-rating';

class Language extends Component {
  render() {
    return (
      <div className="box tile is-child">
      	<h2 className="form-title">Language</h2>
      	<div className="box-form">
      		<input type="text" className="inline-input lg-inline-input"  name="lang" placeholder="Language"/>
          <button className="button is-link is-small">Add</button>
    	</div>
      <div className="tags">
        <span className="tag">English
            <button className="delete is-small"></button>
        </span>
        <span className="tag">German
            <button className="delete is-small"></button>
        </span>
        <span className="tag">French
            <button className="delete is-small"></button>
        </span>
      </div>
      </div>
    );
  }
}

export default Language;