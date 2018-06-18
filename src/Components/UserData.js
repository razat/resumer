import React, { Component } from 'react';
import BasicInfo  from './Forms/BasicInfo';
import Summary from './Forms/Summary';
import PersonalInfo from './Forms/PersonalInfo';
import WorkEx from './Forms/WorkEx';
import Reference from './Forms/Reference';
import Skills from './Forms/Skills';
import Education from './Forms/Education';
import Hobbies from './Forms/Hobbies';
import Langugae from './Forms/Language';
import '../Styles/Form.css';


class UserData extends Component {
  render() {
    return (
    <div className="container profile-section">

        <div className="tile is-ancestor">
	  			<div className="tile is-vertical is-parent is-4">
	  				<PersonalInfo />
		    		<Reference />
		      		<Skills />
		      	</div>
	    		<div className="tile is-vertical is-parent">
	    			<BasicInfo />
		      	    <Summary />
		    		<WorkEx />
		    		<div className="tile is-">
		    			<div className="tile is-parent"><Langugae /></div>
		    			<div className="tile is-parent"><Hobbies /></div>
		    		</div>
		    	</div>
  		</div>
  		<div className="tile">
	    		<Education />
	    	</div>
	</div>
    );
  }
}


export default UserData;


{/*        <div className="tile is-ancestor">
  			<div className="tile is-vertical">
    			<div className="tile">
	      			<div className="tile is-parent is-vertical is-4">
	      				<PersonalInfo />

	      			</div>
	      			<div className="tile is-parent is-vertical">
	      				<BasicInfo />
	      				<Summary />
	      			</div>
    			</div>
    		<div className="tile">
	    			<div className="tile is-vertical is-parent is-4">
	    				<Reference />
	      				<Skills />
	    			</div>
	    			<div className="tile is-parent  is-vertical">
	    				<WorkEx />
	    				<div className="tile">
	    					<div className="tile is-6 is-child">
	    						<Langugae /></div>
	    						<div className="tile is-6 is-child"><Hobbies /></div>
	    				</div>
	    			</div>
	    			</div>
	    			<div className="tile is-parent">
	    				<Education />
	    			</div>

	    		</div>
  			</div>
		</div>*/}