import React, { Component } from 'react';
import { withFormik, Field } from 'formik';
import { connect } from 'react-redux'
import {setProfileData, deleteProfileData} from '../../actions/profileAction';
import Tags from '../Common/Tags';


const Form = ({handleSubmit, isSubmitting}) => (
        <form className="box-form" onSubmit={handleSubmit}>
          <Field type="text" className="inline-input lg-inline-input"  name="hobby" placeholder="Hobby"/>
          <button className="button is-link is-small" onClick={handleSubmit}  disabled={isSubmitting}>Add</button>
        </form>
);



class Hobbies extends Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }
  onRemove(id) {
    this.props.dispatch(deleteProfileData('hobbies', id));
  }
  render() {
    return (
      <div className="box tile is-child">
        <h2 className="form-title">Hobbies</h2>
        <HobbyForm  dispatch={this.props.dispatch}/>
        <Tags items={this.props.hobbies} onRemove={this.onRemove} />
      </div>
    );
  }
}


const HobbyForm = withFormik({
  mapPropsToValues: props => ({
     hobby: ''
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm}) => {
    setSubmitting(true);
    props.dispatch(setProfileData('hobbies', values.hobby));
    resetForm()
    setSubmitting(false);
  },
  validate: (values) => {
    let errors = {};
    if(!values.hobby) {
      errors.hobby = 'required';
    }
    if(values.hobby && values.hobby.length < 3){
      errors.hobby = 'Fill in valid hobby';
    }
    return errors;
  }
})(Form);


function mapStateProps({profile}) {
  return {
    hobbies:  profile.hobbies || []
  };
}

export default connect(mapStateProps)(Hobbies);