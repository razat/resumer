import React, { Component } from 'react';
import Rating from 'react-rating';

class Skills extends Component {
  render() {
    return (
      <div className="box tile is-child">
      	<h2 className="form-title">Skills</h2>
      	<div className="box-form">
      		<input type="text" className="inline-input lg-inline-input"  name="skill" placeholder="Name of skill"/>
          <Rating
  emptySymbol="far fa-star"
  fullSymbol="fas fa-star"
/> <button className="button is-link is-small">Add</button>
    	</div>
      <div className="tags">
        <span className="tag">Javascript
            <button className="delete is-small"></button>
        </span>
        <span className="tag">HTML5
            <button className="delete is-small"></button>
        </span>
        <span className="tag">CSS3
            <button className="delete is-small"></button>
        </span>
      </div>
      </div>
    );
  }
}

export default Skills;