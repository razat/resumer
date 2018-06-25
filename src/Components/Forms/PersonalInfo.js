import React from 'react';
import { withFormik, Field } from 'formik';
import debounce from '../../Utility/debounce';
import { connect } from 'react-redux'
import {setProfileData} from '../../actions/profileAction';

const Form = ({values}) => (
      <div className="box tile is-child peach-tile">
      	<h2 className="form-title">Personal Details</h2>
      	<div className="box-form">
      		<ul className="input-list">
      			<li>
	      			<label><i className="fas fa-at"></i></label>
	      			<Field type="email" className="inline-input xlg-inline-input" placeholder="loremIpsum@gmail.com" name="email"/>
      			</li>
      			<li>
	      			<label><i className="fas fa-mobile-alt"></i></label>
	      			<Field type="text" className="inline-input xlg-inline-input" placeholder="+919999999999" name="mobile"/>
      			</li>
      			<li>
	      			<label><i className="fab fa-github"></i></label>
	      			<Field type="text" className="inline-input xlg-inline-input" placeholder="@githubUsername" name="githubUsername"/>
      			</li>
      		    <li>
	      			<label><i className="fab fa-twitter"></i></label>
	      			<Field type="text" className="inline-input xlg-inline-input" placeholder="@twitterUsername" name="twitterUsername"/>
      			</li>
            <li>
              <label><i className="fas fa-desktop"></i></label>
              <Field type="url" className="inline-input xlg-inline-input" placeholder="Any website" name="myWebsite"/>
            </li>   
      		  <li>
	      			<label><i className="fab fa-blogger-b"></i></label>
	      			<Field type="url" className="inline-input xlg-inline-input" placeholder="myblog.com" name="myBlog"/>
      			</li>
            <li>
              <label><i className="fab fa-linkedin-in"></i></label>
              <Field type="url" className="inline-input xlg-inline-input" placeholder="Linkedin Username" name="linkedinUsername"/>
            </li>      		
          </ul> 
 		   </div>
      </div>
);

const submitChanges = debounce((props, dispatch) => {   
  dispatch(setProfileData('personalInfo',props)); 
}, 2050);

const PersonalInfo = withFormik({
  mapPropsToValues: props => ({
     email: props.email || '',
     linkedinUsername: props.linkedinUsername  || '',
     myBlog: props.myBlog || '',
     myWebsite: props.myWebsite  || '',
     twitterUsername: props.twitterUsername || '',
     githubUsername: props.githubUsername || '',
     mobile: props.mobile || ''
 }),
 enableReinitialize: true,
    validate: (values, {dispatch}) => {
      submitChanges(values, dispatch);
    },
})(Form);


function mapStateToProps({profile}) {
  return {
    ...profile.personalInfo
  }
}

export default connect(mapStateToProps)(PersonalInfo);