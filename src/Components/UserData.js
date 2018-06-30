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
import Certification from './Forms/Certification';
import '../Styles/Form.css';
import { connect } from 'react-redux'
import {getProfileData} from '../actions/profileAction';



class UserData extends Component {
	componentDidMount() {
		this.props.fetchProfile();
	}
  render() {
    return (
    <div className="container profile-section">

        <div className="tile is-ancestor">
	  			<div className="tile is-vertical is-parent is-4">
	  				<PersonalInfo />
		      		<Skills />
		      		<Reference />

		      	</div>
	    		<div className="tile is-vertical is-parent">
	    			<BasicInfo />
		      	    <Summary />
		    		<WorkEx />
		    		<div className="tile is-ancestor">
		    			<div className="tile is-parent"><Langugae /></div>
		    			<div className="tile is-parent"><Hobbies /></div>
		    		</div>
		    	</div>
  		</div>
  		<div className="tile is-ancestor">
	        <div className="tile is-parent"> <Education /> </div>
	        <div className="tile is-parent"> <Certification /> </div>
	    </div>
	</div>
    );
  }
}


function mapStateProps(state) {
	return state
}
function mapDispatchToProps(dispatch) {
	return {
		fetchProfile: () => dispatch(getProfileData())
	}
}
export default connect(mapStateProps, mapDispatchToProps)(UserData);