import React, { Component } from 'react';
import { withFormik, Field } from 'formik';
import { connect } from 'react-redux'
import {setProfileData} from '../../actions/profileAction';


class ToggleWorking extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {field} = this.props;
    return(
      <span>
       <span className={field.value == true ? null : 'text-strike'}
            onClick={() => { this.props.onChange(field.name,false); }}>
          am working
          </span> <strong>/</strong> 
         <span  className={field.value == true ? 'text-strike' : null}
                onClick={() => { this.props.onChange(field.name,true);}}>
         have Worked 
         </span>
      </span>
    );
  }
}


const WorkList = ({items, onRemove}) => (
  <ul>
    { items.map((item, id) => (
        <li key={item.company + id} className="box">
          <h3>{item.startDate} - {item.isPresent ? 'Current' : item.endDate } :   {item.company},  {item.location} as {item.designation} </h3>
        </li>
    ))}
  </ul>
)

const Form = ({values, handleSubmit, isSubmitting, setFieldValue}) => (
  <form className="box-form">
      <p> 
        I <Field component={ToggleWorking} name="isPresent" onChange={setFieldValue}/> as a
        <Field type="text" className="inline-input lg-inline-input"  name="designation" placeholder="Job title"/> in
        <Field type="text" className="inline-input lg-inline-input" name="company" placeholder="Company name"/> located in
        <Field type="text" className="inline-input mid-inline-input" name="location" placeholder="Location"/>  from
        <Field type="date" className="inline-input midlg-inline-input" name="startDate" /> to
        <Field type="date" className="inline-input midlg-inline-input" name="endDate" disabled={values.isPresent}/> .
        <br /> 
        Following is a brief description of my work experience, accomplishment and skills i learned there.
        <Field component="textarea" className="inline-textarea" name="description" placeholder="Description" />
        <button className="button is-link is-small" onClick={handleSubmit}  disabled={isSubmitting}>Add</button>
      </p>
  </form>
);


class WorkEx extends Component {
  render() {
    console.log(this.props.workEx);
    return (
      <div className="box tile is-child">
      	<h2 className="form-title">Work Experience</h2>
        <WorkExForm dispatch={this.props.dispatch} />
        <WorkList items={this.props.workEx} onRemove={this.onRemove} />
      </div>
    );
  }
}

const WorkExForm = withFormik({
  mapPropsToValues: props => ({
     designation: '',
     company: '',
     location: '',
     startDate: '',
     endDate: '',
     description: '',
     isPresent: true,
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm}) => {
    setSubmitting(true);
    props.dispatch(setProfileData('workEx', values));
    resetForm()
    setSubmitting(false);
  },
  validate: (values) => {
    let errors = {};
    // if(!values.hobby) {
    //   errors.hobby = 'required';
    // }
    // if(values.hobby && values.hobby.length < 3){
    //   errors.hobby = 'Fill in valid hobby';
    // }
    return errors;
  }
})(Form);


function mapStateProps({profile}) {
  return {
    workEx:  profile.workEx || []
  };
}

export default connect(mapStateProps)(WorkEx);