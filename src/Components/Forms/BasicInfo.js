import React from 'react';
import { withFormik, Field,  } from 'formik';
import debounce from '../../Utility/debounce';
import { connect } from 'react-redux'
import {setProfileData} from '../../actions/profileAction';


const Form = ({values}) => (
      <div className="box tile is-child">
      	<h2 className="form-title">Basic Info</h2>
      	<div className="box-form">
 				<p>	
 					I am <Field type="text" className="inline-input lg-inline-input" name="fullname" placeholder="Full Name"/> currently living in
 					<Field type="text" className="inline-input mid-inline-input" name="location" placeholder="Banglore"/>.<br/>
           By profession i am <Field type="text" className="inline-input midlg-inline-input" name="profession" placeholder="Full stack developer"/>.
           I have total work experience of 
 					<Field type="number" className="inline-input sm-inline-input" name="experience" placeholder="3.5"/> Years with current CTC of 
 					<Field type="number" className="inline-input sm-inline-input" name="package" placeholder="25"/> LPA and my notice period is <Field type="number" className="inline-input xsm-inline-input" name="notice" placeholder="2"/> months.
 				</p>
 		</div>
      </div>
);


const submitChanges = debounce((props, dispatch) => {  	
	dispatch(setProfileData('basicInfo',props)); 
}, 2050);

const BasicInfo = withFormik({
  mapPropsToValues: props => ({
     fullname: props.fullname || '',
     location: props.location  || '',
     experience: props.experience || '',
     package: props.package || '',
     notice: props.notice  || '',
     profession: props.profession || ''
  }),
  enableReinitialize: true,
  validate: (values, {dispatch}) => {
    submitChanges(values, dispatch);
  },
})(Form);


function mapStateProps({profile}) {
	return {
    ...profile.basicInfo
  }
}

export default connect(mapStateProps)(BasicInfo);