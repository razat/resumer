import React, { Component } from 'react';
import { withFormik, Field } from 'formik';
import { connect } from 'react-redux'
import {setProfileData, deleteProfileData} from '../../actions/profileAction';


const CertificationList = ({items, onRemove}) => (
  <ul>
    { items.map((item, id) => (
        <li key={item.name + id} className="box">
          <a className="delete is-right-aligned" onClick={() => onRemove(id)}></a>
          <h3>I am Certified in {item.name} from {item.authority }</h3>
          <br/>
          <p> Certification number:   {item.certiNumber}</p>
          <p> Certification Url:  {item.certiUrl} </p>
        </li>
    ))}
  </ul>
)

const Form = ({values, handleSubmit, isSubmitting, setFieldValue}) => (
  <form className="box-form">
      <p> 
        I  have Certification in 
        <Field type="text" className="inline-input midlg-inline-input"  name="name" placeholder="Certification Name"/> from
        <Field type="text" className="inline-input midlg-inline-input" name="authority" placeholder="Certification Authority"/>.
        Dated :   <Field type="date" className="inline-input midlg-inline-input" name="dated"/> 

        </p>
        <br/>
        <label>Certification number: </label>
        <Field type="text" className="inline-input midlg-inline-input" name="certiNumber" placeholder="Certification number"/> 
        <br/>
        <label>Certification Url: </label>
        <Field type="url" className="inline-input midlg-inline-input" name="certiUrl" placeholder="Certification Url" /> 
        <br/>
        <button className="button is-link is-small" onClick={handleSubmit}  disabled={isSubmitting}>Add</button>
  </form>
);


class Certification extends Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }
  onRemove(id) {
    this.props.dispatch(deleteProfileData('certifications', id));
  }
  render() {
    return (
      <div className="box tile is-child">
      	<h2 className="form-title">My Certifications</h2>
        <CertiForm dispatch={this.props.dispatch} />
        <CertificationList items={this.props.certifications} onRemove={this.onRemove} />
      </div>
    );
  }
}

const CertiForm = withFormik({
  mapPropsToValues: props => ({
     name: '',
     authority: '',
     certiNumber: '',
     certiUrl: '',
     dated: '',
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm}) => {
    setSubmitting(true);
    props.dispatch(setProfileData('certifications', values));
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
    certifications:  profile.certifications || []
  };
}

export default connect(mapStateProps)(Certification);