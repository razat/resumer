import React, { Component } from 'react';
import { withFormik, Field } from 'formik';
import { connect } from 'react-redux'
import {setProfileData} from '../../actions/profileAction';

const Form  = ({handleSubmit, isSubmitting}) => (
    <form className="box-form">
      <Field type="text" className="inline-input lg-inline-input" name="name" placeholder="Full name"/>
      <Field type="text" className="inline-input lg-inline-input" name="relation" placeholder="Relation"/>
      <Field type="text" className="inline-input lg-inline-input" name="company" placeholder="Company"/>
      <Field type="text" className="inline-input lg-inline-input" name="designation" placeholder="Designation"/>
      <Field type="tel" className="inline-input lg-inline-input" name="mobile" placeholder="Mobile number"/>
      <Field type="email" className="inline-input lg-inline-input" name="email" placeholder="Email id"/>
      <button className="button is-link is-small" onClick={handleSubmit}  disabled={isSubmitting}>Add</button>
    </form>
)

const ReferenceList = ({items, onRemove}) => (
  <ul>
    {items.map((item, id) => (
        <li key={item.name + id} className="box">
          <h3>{item.name},</h3>
          <h4>{item.designation} works at {item.company}</h4>
          <p>Mob no: {item.mobile}</p>
          <p>Email : {item.email}</p>
          <p>My relation with Reference: {item.relation} </p>
        </li>
    ))}
  </ul>
)

class Reference extends Component {
  render() {
    return (
      <div className="box tile is-child">
      	<h2 className="form-title">References</h2>
        <ReferenceForm dispatch={this.props.dispatch} />
        <ReferenceList items={this.props.reference} onRemove={this.onRemove} />
      </div>
    );
  }
}
 
const ReferenceForm = withFormik({
  mapPropsToValues: props => ({
     name: '',
     relation: '',
     company: '',
     mobile: '',
     email: '',
     designation: ''
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm}) => {
    setSubmitting(true);
    console.log(values);
    props.dispatch(setProfileData('reference', values));
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
    reference:  profile.reference || []
  };
}

export default connect(mapStateProps)(Reference);