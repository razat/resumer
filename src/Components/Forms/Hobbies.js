import React, { Component } from 'react';

class Hobbies extends Component {
  render() {
    return (
      <div className="box tile is-child">
      	<h2 className="form-title">Hobbies</h2>
        <div className="box-form">
          <input type="text" className="inline-input lg-inline-input"  name="hobby" placeholder="Hobby"/>
          <button className="button is-link is-small">Add</button>
        </div>
        <div className="tags">
        <span className="tag">Reading
            <button className="delete is-small"></button>
        </span>
        <span className="tag">Swimming
            <button className="delete is-small"></button>
        </span>
        <span className="tag">Trekking
            <button className="delete is-small"></button>
        </span>
      </div>
      </div>
    );
  }
}

export default Hobbies;