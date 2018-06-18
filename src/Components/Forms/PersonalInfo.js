import React, { Component } from 'react';

class PersonalInfo extends Component {
  render() {
    return (
      <div className="box tile is-child peach-tile">
      	<h2 className="form-title">Personal Details</h2>
      	      <div className="box-form">

      		<ul className="input-list">
      			<li>
	      			<label><i className="fas fa-at"></i></label>
	      			<input type="email" className="inline-input xlg-inline-input" placeholder="loremIpsum@gmail.com"/>
      			</li>
      			<li>
	      			<label><i className="fas fa-mobile-alt"></i></label>
	      			<input type="text" className="inline-input xlg-inline-input" placeholder="+919999999999"/>
      			</li>
      			<li>
	      			<label><i className="fab fa-github"></i></label>
	      			<input type="text" className="inline-input xlg-inline-input" placeholder="@githubUsername"/>
      			</li>
      		    <li>
	      			<label><i className="fab fa-twitter"></i></label>
	      			<input type="text" className="inline-input xlg-inline-input" placeholder="@twitterUsername"/>
      			</li>
            <li>
              <label><i className="fas fa-desktop"></i></label>
              <input type="url" className="inline-input xlg-inline-input" placeholder="Any website"/>
            </li>   
      		  <li>
	      			<label><i className="fab fa-blogger-b"></i></label>
	      			<input type="url" className="inline-input xlg-inline-input" placeholder="myblog.com"/>
      			</li>
            <li>
              <label><i className="fab fa-linkedin-in"></i></label>
              <input type="url" className="inline-input xlg-inline-input" placeholder="Linkedin Username"/>
            </li>      		
          </ul> 
 		</div>
      </div>
    );
  }
}
export default PersonalInfo;