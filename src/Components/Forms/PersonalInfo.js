import React, { Component } from 'react';

class PersonalInfo extends Component {
  render() {
    return (
      <div className="box tile is-child peach-tile">
      	<h2 className="form-title">Personal Details</h2>
      	      <div className="box-form">

      		<ul className="input-list">
      			<li>
	      			<label><i className="fas fa-envelope-square"></i></label>
	      			<input type="email" className="inline-input midlg-inline-input" placeholder="loremIpsum@gmail.com"/>
      			</li>
      			<li>
	      			<label><i className="fas fa-mobile-alt"></i></label>
	      			<input type="text" className="inline-input midlg-inline-input" placeholder="+919999999999"/>
      			</li>
      			<li>
	      			<label><i className="fab fa-github-square"></i></label>
	      			<input type="text" className="inline-input midlg-inline-input" placeholder="@githubUsername"/>
      			</li>
      		    <li>
	      			<label><i className="fab fa-twitter-square"></i></label>
	      			<input type="text" className="inline-input midlg-inline-input" placeholder="@twitterUsername"/>
      			</li>
      		    <li>
	      			<label><i className="fab fa-blogger"></i></label>
	      			<input type="url" className="inline-input midlg-inline-input" placeholder="myblog.com"/>
      			</li>
      		</ul> 
 		</div>
      </div>
    );
  }
}
export default PersonalInfo;