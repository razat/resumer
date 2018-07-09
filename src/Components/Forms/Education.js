import React, { Component } from 'react';
import { withFormik, Field } from 'formik';
import { connect } from 'react-redux'
import {setProfileData, deleteProfileData} from '../../actions/profileAction';


const Form = ({handleSubmit, isSubmitting}) => (
  <form className="box-form">
    <p> 
      I have completed my 
      <Field type="text" className="inline-input lg-inline-input"  name="degree" placeholder="Degree"/> in  
      <Field type="text" className="inline-input lg-inline-input" name="subject" placeholder="Subject"/> from
      <Field type="text" className="inline-input lg-inline-input" name="school" placeholder="School name"/> located in 
      <Field type="text" className="inline-input mid-inline-input" name="location" placeholder="Location"/> in year
      <Field type="number" className="inline-input mid-inline-input" name="year" placeholder="2016"/>
      <button className="button is-link is-small" onClick={handleSubmit}  disabled={isSubmitting}>Add</button>

    </p>
</form>
)

const EducationList = ({items, onRemove}) => (
  <ul>
    {items.map((item, id) => (
        <li key={item.degree + id} className="box">
          <a className="delete is-right-aligned" onClick={() => onRemove(id)}></a>
          <h3>I did {item.degree} in {item.subject} in year {item.year} from {item.school} at {item.location}</h3>
        </li>
    ))}
  </ul>
)

class Education extends Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }
  onRemove(id) {
    this.props.dispatch(deleteProfileData('education', id));
  }
  render() {
    return (
      <div className="box tile is-child">
      	<h2 className="form-title">Education</h2>
        <EducationForm dispatch={this.props.dispatch}/>
        <EducationList items={this.props.education} onRemove={this.onRemove} />
      </div>
    );
  }
}

const EducationForm = withFormik({
  mapPropsToValues: props => ({
     degree: '',
     subject: '',
     school: '',
     location: '',
     year: ''
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm}) => {
    setSubmitting(true);
    props.dispatch(setProfileData('education', values));
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
    education:  profile.education || []
  };
}

export default connect(mapStateProps)(Education);