import React from 'react';
import { withFormik, Field } from 'formik';
import debounce from '../../Utility/debounce';
import { connect } from 'react-redux'
import {setProfileData} from '../../actions/profileAction';

const Form = ({values}) => (

	<div className="box tile is-child">
	  	<h2 className="form-title">Work Summary</h2>
	  	<div className="box-form">
	  		<Field component="textarea" className="inline-textarea" name="workSummary" placeholder="Summary about your profession" />
			</div>
	</div>
);

const submitChanges = debounce((props, dispatch) => { 
	dispatch(setProfileData('summary',props)); 
}, 2050);

const Summary = withFormik({
  mapPropsToValues: props => ({
  	workSummary: props.workSummary || ''
  }),
   enableReinitialize: true,
  validate: (values, {dispatch}) => {
 	submitChanges(values, dispatch);
  },
})(Form);


function mapStateProps({profile}) {
	return {
		workSummary: profile.summary && profile.summary.workSummary || ''
	}
}

export default connect(mapStateProps)(Summary);